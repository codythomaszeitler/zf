import { IntegratedDevelopmentEnvironment, Uri } from "../integratedDevelopmentEnvironment";
import { Position } from "../position";
import { QueryContext, SoqlParser } from '../parser/SoqlParser';
import { SoqlLexer } from '../parser/SoqlLexer';
import { CommonTokenStream } from 'antlr4ts';
import { Command } from "../command";
import { FauxSObjectApexClass, FauxSObjectField } from "../genFauxSObjects";
import { ApexParser } from "../apexParser";
import { SalesforceCli } from "../salesforceCli";
import { CaseInsensitiveInputStream } from "apex-parser";

export const CUSTOM_SOBJECTS_SUBDIR = 'customObjects';
export const STANDARD_SOBJECTS_SUBDIR = 'standardObjects';
const sfZsiString = '__zf#szi#location__';

const sortByName = (items: { item: string }[]) => {
	return items.sort((a, b) => {
		return a.item.localeCompare(b.item);
	});
};

export class SoqlIntellisense {

	private readonly ide: IntegratedDevelopmentEnvironment;
	private readonly cli: SalesforceCli;
	private readonly sObjectsDir: Uri;

	constructor ({
		ide, cli, sObjectsDir
	}: { ide: IntegratedDevelopmentEnvironment; cli: SalesforceCli, sObjectsDir: Uri }) {
		this.ide = ide;
		this.cli = cli;
		this.sObjectsDir = sObjectsDir;
	}

	async autocompleteSuggestionsAt(contents: string, position: Position) {
		const soql = this.parseInjectedSoqlString(contents, position);
		if (!soql) {
			return [];
		}

		const findMatching = (element: any) => {
			if (element.text === sfZsiString) {
				return element;
			}

			if (!element.children) {
				return undefined;
			}

			for (let child of element.children) {
				const attempted = findMatching(child);

				if (attempted) {
					return attempted;
				}
			}
			return undefined;
		};

		const match = findMatching(soql);
		const containsRule = (rule: number) => {
			return this.getDescendantsOf(soql).some(element => element.ruleIndex === rule);
		};

		if (match.ruleIndex === SoqlParser.RULE_fromSoqlId) {
			const items = [];
			if (!containsRule(SoqlParser.RULE_whereClause)) {
				items.push({
					item: 'WHERE'
				});
			}

			if (!containsRule(SoqlParser.RULE_orderByClause)) {
				items.push({
					item: 'ORDER BY'
				});
			}

			return sortByName(items);
		}

		if (match.ruleIndex === SoqlParser.RULE_selectOrSoqlId) {
			return [{
				item: 'SELECT'
			}];
		}

		if (match.ruleIndex === SoqlParser.RULE_fromOrSoqlId) {
			return [{
				item: 'FROM'
			}];
		}

		if (match.ruleIndex === SoqlParser.RULE_fromNameList) {
			return await this.getSortedSObjectNames();
		}

		const fromName = this.getCurrentFromName(soql);
		const fauxSObjectClass = await this.readFauxSObject(fromName);


		if (match.ruleIndex === SoqlParser.RULE_selectEntry
			|| match.ruleIndex === SoqlParser.RULE_selectList) {
			const alreadySelectedNames = this.getCurrentSelectListFieldNames(soql);
			return fauxSObjectClass.getSortedNonCollectionFields().filter(field => !alreadySelectedNames.includes(field.item));
		}

		if (match.ruleIndex === SoqlParser.RULE_logicalExpression ||
			match.ruleIndex === SoqlParser.RULE_conditionalExpression ||
			match.ruleIndex === SoqlParser.RULE_fieldOrderList) {
			return fauxSObjectClass.getSortedNonCollectionFields();
		}

		if (match.ruleIndex === SoqlParser.RULE_fieldOrder) {
			const alreadyOrderByNames = this.getCurrentOrderByFieldNames(soql);
			return fauxSObjectClass.getSortedNonCollectionFields().filter(item => {
				return !alreadyOrderByNames.includes(item.item);
			});
		}

		if (match.ruleIndex === SoqlParser.RULE_comparisonOperator) {
			const items = [{
				item: '!='
			}, {
				item: '<>'
			}, {
				item: '='
			}];
			return sortByName(items);
		}

		return [];
	}

	private parseInjectedSoqlString(contents: string, position: Position) {
		const inlineSfZsiString = () => {
			return contents.slice(0, position.getColumnNumber()) + sfZsiString + contents.slice(position.getColumnNumber());
		};
		const soql = this.parseSoql(inlineSfZsiString());

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

	private async getSortedSObjectNames() {
		const customSObjectFiles = await this.ide.findFiles(`${CUSTOM_SOBJECTS_SUBDIR}/*.cls`, this.sObjectsDir);
		const standardSObjectFiles = await this.ide.findFiles(`${STANDARD_SOBJECTS_SUBDIR}/*.cls`, this.sObjectsDir);

		const files = [...customSObjectFiles, ...standardSObjectFiles];
		return sortByName(files.map(file => {
			return {
				item: file.getBaseNameWithoutExtension()
			};
		}));
	}

	private getCurrentFromName(soql: QueryContext) {
		const fromNameList = soql.fromNameList();
		const fields = fromNameList.fieldName();

		if (fields.length > 1) {
			throw new Error('This never should have happened.');
		}
		return fields[0].text;
	}

	public getCurrentSelectListFieldNames(soql: QueryContext) {
		const entries = soql.selectList().selectEntry();
		return entries.map(entry => entry.fieldName().text).filter(fieldName => fieldName !== sfZsiString);
	}

	private getCurrentOrderByFieldNames(soql: QueryContext) {
		const orderByClause = soql.orderByClause();

		if (!orderByClause) {
			return [];
		}

		const fieldOrders = orderByClause.fieldOrderList().fieldOrder();
		return fieldOrders.map(fieldOrder => fieldOrder.fieldName()).
			filter(fieldName => fieldName).
			map(fieldName => fieldName.text);
	}

	private getDescendantsOf(element: any) {
		const descendants = [];
		const recursion = (element: any) => {
			if (!element.children) {
				return;
			}

			descendants.push(...element.children);
			for (let child of element.children) {
				recursion(child);
			}
		};

		recursion(element);
		return descendants;
	};

	private async readFauxSObject(sObjectName: string): Promise<SoqlParserFauxSObjectApexClass> {
		const getFauxSObjectUri = async () => {
			const dir = sObjectName.includes('__c') ? CUSTOM_SOBJECTS_SUBDIR : STANDARD_SOBJECTS_SUBDIR;
			const fauxSObjectUri = await this.ide.findFile(`${dir}/${sObjectName}.cls`, this.sObjectsDir);
			if (!fauxSObjectUri) {
				return undefined;
			}
			return fauxSObjectUri;
		};

		const fauxSObjectUri = await getFauxSObjectUri();

		const readFauxSObjectCommand = new ReadFauxSObjectCommand({
			cli: this.cli,
			ide: this.ide
		});

		const fauxSObjectApexClass = await readFauxSObjectCommand.execute({
			fauxSObjectUri
		});

		const result: SoqlParserFauxSObjectApexClass = {
			...fauxSObjectApexClass,
			getSortedNonCollectionFields() {
				const listRegex = /List<.*>/;
				const fields = this.fields.filter(field => !listRegex.test(field.type)).map(field => ({
					item: field.name
				}));
				return sortByName(fields);
			}
		};

		return result;
	}
}

export interface SoqlIndex {
	getFieldsFor(sObjectName: string, partial?: string): string[];
	getSObjectNames(partial?: string): string[];
}

class ReadFauxSObjectCommand extends Command {

	public async execute({ fauxSObjectUri }: { fauxSObjectUri: Uri }): Promise<FauxSObjectApexClass> {
		const contents = await this.getIde().readFile({
			uri: fauxSObjectUri
		});

		const apexParser = new ApexParser();
		const apexClassSymbolTable = apexParser.parse(contents);

		return {
			name: apexClassSymbolTable.getClassName(),
			fields: apexClassSymbolTable.getFields().map(field => {
				return {
					name: field.name,
					modifier: 'public',
					type: field.type
				} as FauxSObjectField;
			})
		};
	}
}

type SoqlParserFauxSObjectApexClass = FauxSObjectApexClass & {
	getSortedNonCollectionFields: () => { item: string }[]
};
