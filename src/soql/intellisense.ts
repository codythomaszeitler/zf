import { Position } from "../position";
import { ComparisonOperatorContext, EndOfQueryContext, FieldExpressionContext, FieldNameContext, FromNameListContext, FromNameSoqlIdContext, FromOrSoqlIdContext, FromSoqlIdContext, OrderByClauseContext, QueryContext, SelectEntryContext, SelectListContext, SelectOrSoqlIdContext, SoqlIdContext, SoqlParser, SubFieldEntryContext, SubFieldEntryFieldNameContext, SubFieldEntrySoqlIdContext, SubFieldListContext, SubQueryContext, SubQueryFromNameFieldNameContext, SubQueryFromNameSoqlIdContext, ValueContext, WhereClauseContext } from '../parser/SoqlParser';
import { SoqlLexer } from '../parser/SoqlLexer';
import { CommonTokenStream } from 'antlr4ts';
import { FauxSObjectApexClass, FauxSObjectField } from "../genFauxSObjects";
import { CaseInsensitiveInputStream } from "apex-parser";
import { SoqlParserVisitor } from "../parser/SoqlParserVisitor";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { SalesforceOrg } from "../salesforceOrg";
import { SObjectDescribeResult } from "../sObjectDescribeResult";
import { SObjectListResult } from "../sObjectListResult";
import { inlineSfZsiString, sfZsiString } from "./intellisenseUtils";
import { dateTimeLiterals } from "./dateTime";

export const CUSTOM_SOBJECTS_SUBDIR = 'customObjects';
export const STANDARD_SOBJECTS_SUBDIR = 'standardObjects';

const sortByName = (items: { item: string }[]) => {
	return items.sort((a, b) => {
		return a.item.localeCompare(b.item);
	});
};

export class SoqlIntellisense {

	private readonly describeSObject?: DescribeSObject;
	private readonly listSObjects?: ListSObjects;

	constructor ({
		describeSObject, listSObjects
	}: { describeSObject?: DescribeSObject, listSObjects?: ListSObjects; }) {
		if (listSObjects) {
			this.listSObjects = listSObjects;
		}
		if (describeSObject) {
			this.describeSObject = describeSObject;
		}
	}

	async autocompleteSuggestionsAt(contents: string, position: Position): Promise<{ item: string }[]> {
		const soql = this.parseInjectedSoqlString(contents, position);
		if (!soql) {
			return [];
		}

		const visitor = genGetInitialMatchVisitor();
		visitor.visit(soql);

		const stamp = visitor.stamp;

		if (stamp.intellisenseType === 'SelectOrSoqlId') {
			return [{
				item: 'SELECT'
			}];
		}

		if (stamp.intellisenseType === 'FromOrSoqlId') {
			return [{
				item: 'FROM'
			}];
		}

		if (stamp.intellisenseType === 'FromSoqlId') {
			return this.runFromSoqlIdAutocompletion({
				soql, stamp
			});
		}

		if (stamp.intellisenseType === 'FromNameSoqlId') {
			return this.runFromNameSoqlIdAutocompletion({
				soql, stamp
			});
		}

		if (stamp.intellisenseType === 'SoqlId') {
			return this.runSoqlIdAutocompletion({
				stamp, soql
			});
		}

		if (stamp.intellisenseType === 'SelectEntry') {
			return this.runSelectEntryAutocompletion({
				stamp, soql
			});
		}

		if (stamp.intellisenseType === 'SubFieldEntry') {
			return this.runSubSelectEntryAutocompletion({
				soql, stamp
			});
		}

		if (stamp.intellisenseType === 'SubFieldEntrySoqlId') {
			return this.runSubSelectFieldAutocompletion({
				stamp, soql
			});
		}

		if (stamp.intellisenseType === 'ComparisonOperator') {
			return this.runComparisonOperatorAutocompletion();
		}

		if (stamp.intellisenseType === 'EndOfQuery') {
			return this.runEndOfQueryAutocomplete({ stamp, soql });
		}

		if (stamp.intellisenseType === 'Value') {
			return this.runValueAutocomplete({ stamp, soql });
		}

		return [];
	}

	private async runValueAutocomplete({ stamp, soql }: { stamp: ValueMatchedRule; soql: QueryContext }) {
		const { valueContext: value } = stamp;

		const visitor: SoqlParserVisitor<ValueAutocompleteVisitorResult | undefined> = {
			visit: function (tree: ParseTree): ValueAutocompleteVisitorResult {
				return tree.accept(this);
			},
			visitChildren: function (node: RuleNode): ValueAutocompleteVisitorResult | undefined {
				for (let i = 0; i < node.childCount; i++) {
					const child = node.getChild(i);
					const result = child.accept(this);
					if (result) {
						return result;
					}
				}
				return undefined;
			},
			visitTerminal: function (node: TerminalNode): ValueAutocompleteVisitorResult | undefined {
				return undefined;
			},
			visitErrorNode: function (node: ErrorNode): ValueAutocompleteVisitorResult | undefined {
				return undefined;
			},
			visitFieldExpression(ctx) {
				if (isChildOf(value, ctx)) {
					return {
						fieldNameContext: ctx.fieldName()
					};
				}
				return visitor.visitChildren(ctx);
			}
		};

		const getEndOfPathSoqlId = (fieldNameContext: FieldNameContext) => {
			const soqlIds = fieldNameContext.soqlId();
			if (soqlIds.length === 0) {
				return undefined;
			}
			return soqlIds[soqlIds.length - 1];
		};

		const { fieldNameContext } = visitor.visit(soql);

		const fromName = this.getCurrentFromName(soql);
		const sObjectDescribeResult = await this.getSObjectDescribeFor(fromName);
		const endOfPathSoqlId = getEndOfPathSoqlId(fieldNameContext);

		const result = sObjectDescribeResult.result.fields.find(field => field.name === endOfPathSoqlId.text);
		if (result.type === 'datetime') {
			return sortByName(this.asItems(...dateTimeLiterals));
		}
		return [];
	}

	private asItems(...strings: string[]): { item: string }[] {
		return strings.map(string => ({ item: string }));
	}

	private async runComparisonOperatorAutocompletion() {
		const items = [{
			item: '!='
		}, {
			item: '<>'
		}, {
			item: '='
		}];
		return sortByName(items);
	}

	private async runEndOfQueryAutocomplete({ stamp, soql }: { stamp: EndOfQueryMatchedRule; soql: QueryContext }) {
		const visitor: SoqlParserVisitor<void> & { whereClauseContext?: WhereClauseContext } = { ...getBaseSoqlParserVisitor() };
		visitor.visitWhereClause = function (ctx) {
			visitor.whereClauseContext = ctx;
		};
		visitor.visit(soql);

		if (visitor.whereClauseContext) {
			const items = [];
			items.push({
				item: 'AND'
			}, {
				item: 'OR'
			}, {
				item: 'ORDER BY'
			});
			return sortByName(items);
		}
		else {
			return [];
		}
	}

	private async runSelectEntryAutocompletion({ stamp, soql }: { stamp: SelectEntryMatchedRule; soql: QueryContext }) {
		const visitor: SoqlParserVisitor<void> & { fromOrSoqlIdContext?: FromOrSoqlIdContext; selectListContext?: SelectListContext } = { ...getBaseSoqlParserVisitor() };

		visitor.visitFromOrSoqlId = function (ctx) {
			if (ctx.parent === soql) {
				visitor.fromOrSoqlIdContext = ctx;
			}
			visitor.visitChildren(ctx);
		};

		visitor.visitSelectList = function (ctx) {
			if (isChildOf(stamp.selectEntryContext, ctx)) {
				visitor.selectListContext = ctx;
			}
			visitor.visitChildren(ctx);
		};

		visitor.visit(soql);

		if (!visitor.fromOrSoqlIdContext) {
			const selectEntries = visitor.selectListContext.selectEntry();
			const isLastSelectEntry = selectEntries[selectEntries.length - 1] === stamp.selectEntryContext;
			if (isLastSelectEntry) {
				return [{
					item: 'FROM'
				}];
			} else {
				return [];
			}
		} else {
			return [];
		}
	}

	private async runSubSelectEntryAutocompletion({ stamp, soql }: { stamp: SubFieldEntryMatchedRule; soql: QueryContext }) {
		const visitor: SoqlParserVisitor<void> & { fromOrSoqlIdContext?: FromOrSoqlIdContext; subFieldListContext?: SubFieldListContext; subQueryContext?: SubQueryContext } = { ...getBaseSoqlParserVisitor() };

		visitor.visitSubQuery = function (ctx) {
			if (isChildOf(stamp.subFieldEntryContext, ctx)) {
				visitor.subQueryContext = ctx;
			}
			visitor.visitChildren(ctx);
		};

		visitor.visitFromOrSoqlId = function (ctx) {
			if (isChildOf(ctx, visitor.subQueryContext)) {
				visitor.fromOrSoqlIdContext = ctx;
			}
			visitor.visitChildren(ctx);
		};

		visitor.visitSubFieldList = function (ctx) {
			if (isChildOf(stamp.subFieldEntryContext, ctx)) {
				visitor.subFieldListContext = ctx;
			}
			visitor.visitChildren(ctx);
		};

		visitor.visit(soql);

		if (!visitor.fromOrSoqlIdContext) {
			const selectEntries = visitor.subFieldListContext.subFieldEntry();
			const isLastSelectEntry = selectEntries[selectEntries.length - 1] === stamp.subFieldEntryContext;
			if (isLastSelectEntry) {
				return [{
					item: 'FROM'
				}];
			} else {
				return [];
			}
		} else {
			return [];
		}
	}

	private parseInjectedSoqlString(contents: string, position: Position) {
		const inlined = inlineSfZsiString(contents, position);
		const soql = this.parseSoql(inlined);

		if (soql.exception) {
			return undefined;
		}
		return soql;
	}

	private parseSoql(contents: string) {
		const lexer = new SoqlLexer(new CaseInsensitiveInputStream({}, contents));
		const stream = new CommonTokenStream(lexer);
		const parser = new SoqlParser(stream);
		const soql = parser.query();
		return soql;
	}

	private async runFromSoqlIdAutocompletion({ soql, stamp }: { soql: QueryContext; stamp: FromSoqlIdMatchedRule }) {
		const visitor: SoqlParserVisitor<void> & { whereClauseContext?: WhereClauseContext; orderByClauseContext?: OrderByClauseContext } = {
			...getBaseSoqlParserVisitor()
		};
		visitor.visit(soql);

		visitor.visitWhereClause = function (ctx) {
			if (ctx.parent === soql) {
				visitor.whereClauseContext = ctx;
			}
			visitor.visit(ctx);
		};
		visitor.visitOrderByClause = function (ctx) {
			if (ctx.parent === soql) {
				visitor.orderByClauseContext = ctx;
			}
			visitor.visit(ctx);
		};

		const items = [];
		if (!visitor.whereClauseContext) {
			items.push({
				item: 'WHERE'
			});
		}

		if (!visitor.orderByClauseContext) {
			items.push({
				item: 'ORDER BY'
			});
		}
		return sortByName(items);
	}

	private async runFromNameSoqlIdAutocompletion({ stamp, soql }: { stamp: FromNameSoqlIdMatchedRule; soql: QueryContext }) {
		const visitor: SoqlParserVisitor<void> & { subQueryContext?: SubQueryContext; whereClauseContext?: WhereClauseContext } = { ...getBaseSoqlParserVisitor() };

		visitor.visitSubQuery = function (ctx) {
			// What question are we about right now?
			if (isChildOf(stamp.fromNameSoqlIdContext, ctx)) {
				visitor.subQueryContext = ctx;
			}
			visitor.visitChildren(ctx);
		};
		visitor.visitWhereClause = function (ctx) {
			if (isChildOf(stamp.fromNameSoqlIdContext, ctx)) {
				visitor.whereClauseContext = ctx;
			}
			visitor.visitChildren(ctx);
		};
		visitor.visit(soql);

		// This means that we are in a subQueryContext and we are also within a whereClauseContext.
		if (visitor.subQueryContext && visitor.whereClauseContext) {
			const fromName = this.getCurrentFromName(soql);
			const sObjectDescribeResult = await this.getSObjectDescribeFor(fromName);
			return getSortedCollectionTypes(sObjectDescribeResult);
		} else if (visitor.subQueryContext) {
			const fromName = this.getCurrentFromName(soql);
			const sObjectDescribeResult = await this.getSObjectDescribeFor(fromName);
			return getSortedCollectionFields(sObjectDescribeResult);
		} else {
			const withoutZfString = stamp.fromNameSoqlIdContext.text.replace(sfZsiString, '');
			const sObjectNames = await this.getSortedSObjectNames();
			return sObjectNames.filter(item => item.item.startsWith(withoutZfString));
		}
	}

	private async runSoqlIdAutocompletion({
		stamp,
		soql
	}: { stamp: SoqlIdMatchedRule; soql: QueryContext; }) {
		const soqlIdVisitor = genGetSoqlIdContextVisitor({
			stamp
		});
		const isOnlyIntellisenseInSelectList = () => {
			const selectList = soqlIdVisitor.parentSelectListContext;
			const selectEntries = selectList.selectEntry();
			return selectEntries.length === 1;
		};

		soqlIdVisitor.visit(soql);
		if (!soqlIdVisitor.fromOrSoqlIdContext && isOnlyIntellisenseInSelectList()) {
			return [{
				item: 'Id'
			}];
		}

		if (!soqlIdVisitor.fromOrSoqlIdContext) {
			return [];
		}

		if (soqlIdVisitor.parentFromNameListContext) {
			const withoutZfString = stamp.soqlIdContext.text.replace(sfZsiString, '');
			const sObjectNames = await this.getSortedSObjectNames();
			return sObjectNames.filter(item => item.item.startsWith(withoutZfString));
		}

		const fromName = this.getCurrentFromName(soql);
		const sObjectDescribeResult = await this.getSObjectDescribeFor(fromName);

		const withoutZfString = stamp.soqlIdContext.text.replace(sfZsiString, '');
		if (soqlIdVisitor.parentFieldNameContext) {
			return runSelectFieldAutocompletion.call(this);
		} else {
			return [];
		}

		async function runSelectFieldAutocompletion(this: SoqlIntellisense) {
			const fieldName = soqlIdVisitor.parentFieldNameContext;
			if (!fieldName) {
				return [];
			}

			const endOfPathLookupSObjectDescribeResult = await this.getDirectParentSObjectClass({
				fieldName,
				sObjectDescribeResult
			});
			const items = getSortedNonCollectionFields(endOfPathLookupSObjectDescribeResult);

			if (soqlIdVisitor.parentSelectListContext) {
				if (fieldName.soqlId().length > 1) {
					return items;
				} else {
					const alreadySelectedNames = this.getCurrentSelectListFieldNames(soql);
					return items.filter(field => field.item.startsWith(withoutZfString)).filter(item => !alreadySelectedNames.includes(item.item));
				}
			}

			if (soqlIdVisitor.parentWhereClauseContext) {
				return items.filter(field => field.item.startsWith(withoutZfString));
			}

			if (soqlIdVisitor.parentOrderByClauseContext) {
				const alreadyOrderedByNames = this.getCurrentOrderByFieldNames(soql);
				return items.filter(item => item.item.startsWith(withoutZfString)).filter(item => !alreadyOrderedByNames.includes(item.item));
			}

			return items.filter(field => field.item.startsWith(withoutZfString));
		}
	}

	private async runSubSelectFieldAutocompletion({ stamp, soql }: { stamp: SubFieldEntrySoqlIdMatchedRule; soql: QueryContext }) {
		const fromName = this.getCurrentFromName(soql);
		const fauxSObjectClass = await this.getSObjectDescribeFor(fromName);

		const visitor: SoqlParserVisitor<void> &
		{ subQueryContext?: SubQueryContext; subFieldEntryFieldNameContext?: SubFieldEntryFieldNameContext; lastSoqlId?: SubFieldEntrySoqlIdContext; fromNameListContext?: FromNameListContext; fromOrSoqlIdContext?: FromOrSoqlIdContext; whereClauseContext?: WhereClauseContext } = { ...getBaseSoqlParserVisitor() };

		visitor.visitSubQuery = function (ctx) {
			if (isChildOf(stamp.subFieldEntrySoqlIdContext, ctx)) {
				visitor.subQueryContext = ctx;
			}
			this.visitChildren(ctx);
		};

		visitor.visitSubFieldEntryFieldName = function (ctx) {
			if (isChildOf(stamp.subFieldEntrySoqlIdContext, ctx)) {
				visitor.subFieldEntryFieldNameContext = ctx;

				const subFieldEntryIds = ctx.subFieldEntrySoqlId();
				if (subFieldEntryIds.length > 0) {
					visitor.lastSoqlId = subFieldEntryIds[subFieldEntryIds.length - 1];
				}
			}
			this.visitChildren(ctx);
		};

		visitor.visitFromNameList = function (ctx) {
			if (ctx.parent === visitor.subQueryContext) {
				visitor.fromNameListContext = ctx;
			}
			visitor.visitChildren(ctx);
		};

		visitor.visitFromOrSoqlId = function (ctx) {
			if (ctx.parent === visitor.subQueryContext) {
				visitor.fromOrSoqlIdContext = ctx;
			}
			visitor.visitChildren(ctx);
		};

		visitor.visitWhereClause = function (ctx) {
			if (isChildOf(stamp.subFieldEntrySoqlIdContext, ctx)) {
				visitor.whereClauseContext = ctx;
			}
			visitor.visitChildren(ctx);
		};

		visitor.visit(soql);

		const subQuery = visitor.subQueryContext;
		if (!subQuery) {
			return [];
		}

		if (!visitor.fromOrSoqlIdContext) {
			return [{
				item: 'Id'
			}];
		}


		const subQueryFromName = this.getSubQueryFromName(subQuery);
		if (visitor.whereClauseContext) {
			const fromName = this.getCurrentFromName(soql);
			const sObjectDescribeResult = await this.getSObjectDescribeFor(fromName);

			return sObjectDescribeResult.result.childRelationships.filter(childRelationship => childRelationship.childSObject === subQueryFromName).map(childRelationship => ({ item: childRelationship.field }));
		}

		const field = getFieldMatchingName(fauxSObjectClass, subQueryFromName);
		if (field.relationshipName) {
			const subQueryFauxSObjectClass = await this.getSObjectDescribeFor(field.childSObject);

			const fieldName = visitor.subFieldEntryFieldNameContext;
			if (!fieldName) {
				throw new Error(`Could not find a generic parameter field name.`);
			}
			const lastSoqlId = visitor.lastSoqlId;
			const withoutZfString = lastSoqlId.text.replace(sfZsiString, '');

			const lookupSObjectResult = await this.getDirectParentSObjectClass({ fieldName, sObjectDescribeResult: subQueryFauxSObjectClass });
			const items = getSortedNonCollectionFields(lookupSObjectResult);
			return items.filter(item => item.item.startsWith(withoutZfString));
		} else {
			return [];
		}
	}

	private getCurrentFromName(soql: QueryContext) {
		const fromNameList = soql.fromNameList();
		if (!fromNameList) {
			return '';
		}

		const fields = fromNameList.fromNameFieldName();
		return fields[0].text;
	}

	private getSubQueryFromName(subQuery: SubQueryContext) {
		const fromNameList = subQuery.fromNameList();
		const fieldNames = fromNameList.fromNameFieldName();
		const fieldName = fieldNames[0];
		return fieldName.text;
	}

	public getCurrentSelectListFieldNames(soql: QueryContext) {
		const soqlEntries = soql.selectList();
		if (!soqlEntries) {
			return [];
		}
		const entries = soqlEntries.selectEntry();

		const fieldNames = entries.map(entry => entry.fieldName());
		return fieldNames.map(fieldName => fieldName?.text ?? "").filter(fieldName => fieldName !== sfZsiString);
	}

	private getCurrentOrderByFieldNames(soql: QueryContext) {
		const orderByClause = soql.orderByClause();

		if (!orderByClause) {
			return [];
		}

		const fieldOrders = orderByClause.fieldOrderList().fieldOrder();
		return fieldOrders.map(fieldOrder => fieldOrder.fieldName()).
			filter(fieldName => fieldName).
			map(fieldName => fieldName?.text ?? "");
	}

	private async getDirectParentSObjectClass({ fieldName, sObjectDescribeResult }: { fieldName: FieldNameContext | SubFieldEntryFieldNameContext; sObjectDescribeResult: SObjectDescribeResult }) {
		const getSoqlIds = () => {
			if (fieldName instanceof FieldNameContext) {
				return fieldName.soqlId().map(soqlId => ({ text: soqlId.text }));
			} else if (fieldName instanceof SubFieldEntryFieldNameContext) {
				return fieldName.subFieldEntrySoqlId().map(soqlId => ({ text: soqlId.text }));
			} else {
				return [];
			}
		};
		const soqlIds = getSoqlIds();
		if (soqlIds.length > 1) {
			let leftFauxSObjectClass = sObjectDescribeResult;
			for (let i = 0; i < soqlIds.length - 1; i++) {
				const leftSoqlId = soqlIds[i];
				const lookupType = leftFauxSObjectClass.result.fields.find(field => field.relationshipName === leftSoqlId.text);
				if (!lookupType) {
					throw new Error(`Could not match [${leftSoqlId.text}] to a field on [${leftFauxSObjectClass.result.name}].`);
				}

				const lookupFauxSObjectClass = await this.getSObjectDescribeFor(lookupType.referenceTo[0]);
				leftFauxSObjectClass = lookupFauxSObjectClass;
			}
			return leftFauxSObjectClass;
		} else {
			return sObjectDescribeResult;
		}
	}

	private async getSortedSObjectNames() {
		if (this.listSObjects) {
			const sObjects = await this.listSObjects({});
			return sortByName(sObjects.result.map(sObject => ({ item: sObject })));
		} else {
			return [];
		}
	}

	private async getSObjectDescribeFor(sObjectName: string): Promise<SObjectDescribeResult> {
		if (!this.describeSObject) {
			throw new Error('Cannot read faux sobject without a describe sobject function');
		}

		return this.describeSObject({ sObjectName });
	}
}

export interface SoqlIndex {
	getFieldsFor(sObjectName: string, partial?: string): string[];
	getSObjectNames(partial?: string): string[];
}

export type DescribeSObject = ({ sObjectName, targetOrg }: { sObjectName: string; targetOrg?: SalesforceOrg }) => Promise<SObjectDescribeResult>;
export type ListSObjects = ({ targetOrg }: { targetOrg?: SalesforceOrg }) => Promise<SObjectListResult>;

function getSortedNonCollectionFields(sObjectDescribeResult: SObjectDescribeResult) {
	if (!sObjectDescribeResult.result) {
		return [];
	}
	const items = sObjectDescribeResult.result.fields.map(field => ({ item: field.name }));
	const lookups = sObjectDescribeResult.result.fields.filter(field => field.relationshipName).map(field => ({ item: field.relationshipName }));
	items.push(...lookups);
	return sortByName(items);
}

function getSortedCollectionFields(sObjectDescribeResult: SObjectDescribeResult) {
	if (!sObjectDescribeResult.result) {
		return [];
	}

	const items = sObjectDescribeResult.result.childRelationships.
		filter(childRelationship => childRelationship.relationshipName).
		map(childRelationship => ({ item: childRelationship.relationshipName }));
	return sortByName(items);
}

function getFieldMatchingName(sObjectDescribeResult: SObjectDescribeResult, name: string) {
	if (!sObjectDescribeResult.result) {
		return undefined;
	}

	const field = sObjectDescribeResult.result.childRelationships.find(childRelationship => childRelationship.relationshipName === name);
	return field;
}

function getSortedCollectionTypes(sObjectDescribeResult: SObjectDescribeResult) {
	const getUniqueChildSObjectNames = () => {
		if (!sObjectDescribeResult.result) {
			return [];
		}
		const childSObjectTypes = new Set<string>();
		sObjectDescribeResult.result.childRelationships.forEach(childRelationship => {
			childSObjectTypes.add(childRelationship.childSObject);
		});
		return [...childSObjectTypes];
	};

	return getUniqueChildSObjectNames().map(childSObjectName => ({ item: childSObjectName }));
}

type SoqlParserFauxSObjectApexClass = FauxSObjectApexClass & {
	getSortedNonCollectionFields: () => { item: string }[]
	getSortedCollectionFields: () => { item: string }[]
	getFieldMatchingName: (name: string) => SoqlFauxSObjectField | undefined;
	getSortedCollectionTypes: () => { item: string }[]
};

type SoqlListFauxSObjectField = FauxSObjectField & {
	isCollection: true;
	genericParameter: string;
};

type SoqlNonListFauxSObjectField = FauxSObjectField & {
	isCollection: false;
};

type SoqlFauxSObjectField = SoqlListFauxSObjectField | SoqlNonListFauxSObjectField;

function genGetInitialMatchVisitor() {
	let match: ZfIntellisenseMatchedRule = { intellisenseType: 'NoMatchFound' };

	const soqlParserVisitor: SoqlParserVisitor<void> & { stamp: ZfIntellisenseMatchedRule } = {
		visit: function (tree: ParseTree): void {
			tree.accept(this);
		},
		visitChildren: function (node: RuleNode): void {
			for (let i = 0; i < node.childCount; i++) {
				const child = node.getChild(i);
				child.accept(this);
			}
		},
		visitTerminal: function (node: TerminalNode): void {
			if (node.text.includes(sfZsiString)) {
				const parent = node.parent;
				if (!parent) {
					return;
				}

				if (parent.ruleContext.ruleIndex === SoqlParser.RULE_soqlId) {
					const soqlIdContext = parent.ruleContext as SoqlIdContext;
					match = {
						intellisenseType: 'SoqlId',
						soqlIdContext
					};
				} else if (parent.ruleContext.ruleIndex === SoqlParser.RULE_comparisonOperator) {
					const comparisonOperatorContext = parent.ruleContext as ComparisonOperatorContext;
					match = {
						intellisenseType: 'ComparisonOperator',
						comparisonOperatorContext
					};
				} else if (parent.ruleContext.ruleIndex === SoqlParser.RULE_subFieldEntry) {
					const subFieldEntryContext = parent.ruleContext as SubFieldEntryContext;
					match = {
						intellisenseType: 'SubFieldEntry',
						subFieldEntryContext
					};
				} else if (parent.ruleContext.ruleIndex === SoqlParser.RULE_fromSoqlId) {
					const fromSoqlIdContext = parent.ruleContext as FromSoqlIdContext;
					match = {
						intellisenseType: 'FromSoqlId',
						fromSoqlIdContext
					};
				} else if (parent.ruleContext.ruleIndex === SoqlParser.RULE_selectEntry) {
					const selectEntryContext = parent.ruleContext as SelectEntryContext;
					match = {
						intellisenseType: 'SelectEntry',
						selectEntryContext
					};
				} else if (parent.ruleContext.ruleIndex === SoqlParser.RULE_fromOrSoqlId) {
					const fromOrSoqlIdContext = parent.ruleContext as FromOrSoqlIdContext;
					match = {
						intellisenseType: 'FromOrSoqlId',
						fromOrSoqlIdContext
					};
				} else if (parent.ruleContext.ruleIndex === SoqlParser.RULE_selectOrSoqlId) {
					const selectOrSoqlIdContext = parent.ruleContext as SelectOrSoqlIdContext;
					match = {
						intellisenseType: 'SelectOrSoqlId',
						selectOrSoqlIdContext
					};
				} else if (parent.ruleContext.ruleIndex === SoqlParser.RULE_endOfQuery) {
					const endOfQueryContext = parent.ruleContext as EndOfQueryContext;
					match = {
						intellisenseType: 'EndOfQuery',
						endOfQueryContext
					};
				} else if (parent.ruleContext.ruleIndex === SoqlParser.RULE_fromNameSoqlId) {
					const fromNameSoqlIdContext = parent.ruleContext as FromNameSoqlIdContext;
					match = {
						intellisenseType: 'FromNameSoqlId',
						fromNameSoqlIdContext
					};
				} else if (parent.ruleContext.ruleIndex === SoqlParser.RULE_subFieldEntrySoqlId) {
					const subFieldEntrySoqlIdContext = parent.ruleContext as SubFieldEntrySoqlIdContext;
					match = {
						intellisenseType: 'SubFieldEntrySoqlId',
						subFieldEntrySoqlIdContext
					};
				} else if (parent.ruleContext.ruleIndex === SoqlParser.RULE_value) {
					const valueContext = parent.ruleContext as ValueContext;
					match = {
						intellisenseType: 'Value',
						valueContext
					};
				}
			}
		},
		visitErrorNode: function (node: ErrorNode): void {
			console.log('There was an error node!');
		},
		get stamp() {
			return match;
		}
	};
	return soqlParserVisitor;
}

type ZfIntellisenseMatchedRule = NoMatchFound | SoqlIdMatchedRule | EndOfQueryMatchedRule | ComparisonOperatorMatchedRule | SubFieldEntryMatchedRule
	| FromOrSoqlIdMatchedRule | FromSoqlIdMatchedRule | SelectOrSoqlIdMatchedRule | SelectEntryMatchedRule | FromNameSoqlIdMatchedRule | SubQueryFromNameSoqlIdMatchedRule | SubFieldEntrySoqlIdMatchedRule | ValueMatchedRule;

interface NoMatchFound { intellisenseType: "NoMatchFound" }
interface SoqlIdMatchedRule { intellisenseType: "SoqlId", soqlIdContext: SoqlIdContext }
interface SubFieldEntrySoqlIdMatchedRule { intellisenseType: "SubFieldEntrySoqlId", subFieldEntrySoqlIdContext: SubFieldEntrySoqlIdContext }
interface FromNameSoqlIdMatchedRule { intellisenseType: "FromNameSoqlId", fromNameSoqlIdContext: FromNameSoqlIdContext }
interface SubQueryFromNameSoqlIdMatchedRule { intellisenseType: "SubQueryFromNameSoqlId", subQueryFromNameSoqlIdContext: SubQueryFromNameSoqlIdContext }

interface ComparisonOperatorMatchedRule { intellisenseType: 'ComparisonOperator', comparisonOperatorContext: ComparisonOperatorContext }
interface SelectEntryMatchedRule { intellisenseType: 'SelectEntry', selectEntryContext: SelectEntryContext }
interface SubFieldEntryMatchedRule { intellisenseType: 'SubFieldEntry', subFieldEntryContext: SubFieldEntryContext }

interface EndOfQueryMatchedRule { intellisenseType: "EndOfQuery", endOfQueryContext: EndOfQueryContext }
interface FromOrSoqlIdMatchedRule { intellisenseType: 'FromOrSoqlId', fromOrSoqlIdContext: FromOrSoqlIdContext }
interface FromSoqlIdMatchedRule { intellisenseType: 'FromSoqlId', fromSoqlIdContext: FromSoqlIdContext }
interface SelectOrSoqlIdMatchedRule { intellisenseType: 'SelectOrSoqlId', selectOrSoqlIdContext: SelectOrSoqlIdContext }
interface ValueMatchedRule { intellisenseType: 'Value', valueContext: ValueContext }

function isChildOf(child: ParseTree, parent: ParseTree) {
	let iterator: ParseTree | undefined = child;
	while (iterator) {
		if (iterator === parent) {
			return true;
		}
		iterator = iterator.parent;
	}
	return false;
}

function genGetSoqlIdContextVisitor({
	stamp
}: { stamp: SoqlIdMatchedRule }) {
	function isChildOf(ctx: ParseTree) {
		let iterator: ParseTree | undefined = stamp.soqlIdContext;
		while (iterator) {
			if (iterator === ctx) {
				return true;
			}
			iterator = iterator.parent;
		}
		return false;
	}

	const { soqlIdContext } = stamp;
	const soqlParserVisitor: SoqlParserVisitor<void> & { parentFieldNameContext?: FieldNameContext; parentSubFieldEntryContext?: SubFieldEntryContext; subQueryContext?: SubQueryContext; parentWhereClauseContext?: WhereClauseContext; parentSelectListContext?: SelectListContext; parentOrderByClauseContext?: OrderByClauseContext; parentFromNameListContext?: FromNameListContext; parentFromOrSoqlIdContext?: FromOrSoqlIdContext; fromOrSoqlIdContext?: FromOrSoqlIdContext } = { ...getBaseSoqlParserVisitor() };

	let queryContext: QueryContext | undefined = undefined;

	soqlParserVisitor.visitQuery = function (ctx) {
		queryContext = ctx;
		soqlParserVisitor.visitChildren(ctx);
	};

	soqlParserVisitor.visitFieldName = function (ctx) {
		if (soqlIdContext.parent === ctx) {
			soqlParserVisitor.parentFieldNameContext = ctx;
		}
		this.visitChildren(ctx);
	};

	soqlParserVisitor.visitSubFieldEntry = function (ctx) {
		if (isChildOf(ctx)) {
			soqlParserVisitor.parentSubFieldEntryContext = ctx;
		}
		this.visitChildren(ctx);
	};

	soqlParserVisitor.visitSubQuery = function (ctx) {
		if (isChildOf(ctx)) {
			soqlParserVisitor.subQueryContext = ctx;
		}
		this.visitChildren(ctx);
	};

	soqlParserVisitor.visitWhereClause = function (ctx) {
		if (isChildOf(ctx)) {
			soqlParserVisitor.parentWhereClauseContext = ctx;
		}
		this.visitChildren(ctx);
	};

	soqlParserVisitor.visitSelectList = function (ctx) {
		if (isChildOf(ctx)) {
			soqlParserVisitor.parentSelectListContext = ctx;
		}

		this.visitChildren(ctx);
	};

	soqlParserVisitor.visitOrderByClause = function (ctx) {
		if (isChildOf(ctx)) {
			soqlParserVisitor.parentOrderByClauseContext = ctx;
		}
		this.visitChildren(ctx);
	};

	soqlParserVisitor.visitFromNameList = function (ctx) {
		if (isChildOf(ctx)) {
			soqlParserVisitor.parentFromNameListContext = ctx;
		}
		this.visitChildren(ctx);
	};

	soqlParserVisitor.visitFromOrSoqlId = function (ctx) {
		if (isChildOf(ctx)) {
			soqlParserVisitor.parentFromOrSoqlIdContext = ctx;
		}

		if (queryContext) {
			if (ctx.parent === queryContext) {
				soqlParserVisitor.fromOrSoqlIdContext = ctx;
			}
		}

		soqlParserVisitor.visitChildren(ctx);
	};

	return soqlParserVisitor;
}

function getBaseSoqlParserVisitor() {
	const soqlParserVisitor: SoqlParserVisitor<void> = {
		visit: function (tree: ParseTree): void {
			tree.accept(this);
		},
		visitChildren: function (node: RuleNode): void {
			for (let i = 0; i < node.childCount; i++) {
				const child = node.getChild(i);
				child.accept(this);
			}
		},
		visitTerminal: function (node: TerminalNode): void {
		},
		visitErrorNode: function (node: ErrorNode): void {
		},
	};
	return soqlParserVisitor;
}

interface ValueAutocompleteVisitorResult {
	fieldNameContext?: FieldNameContext;
}