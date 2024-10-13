import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import * as _ApexParser from 'apex-parser';
import { Position } from "./position";
import { Range } from "./range";
import { ParserRuleContext } from "antlr4ts";

export function getRangeOf(parseRuleContext: ParserRuleContext) : Range {
	let range = undefined;
	const start = new Position(parseRuleContext.start.line - 1, parseRuleContext.start.charPositionInLine);
	if (parseRuleContext.stop) {
		const end = new Position(parseRuleContext.stop.line - 1, parseRuleContext.stop.charPositionInLine);
		range = new Range(start, end);
	} else {
		range = new Range(start);
	}
	return range;
}


export class ApexParser {
	public parse(input: string): ApexClassSymbolTable {
		let lexer = new _ApexParser.ApexLexer(new _ApexParser.CaseInsensitiveInputStream({}, input));
		let tokens = new _ApexParser.CommonTokenStream(lexer);

		let parser = new _ApexParser.ApexParser(tokens);
		let context = parser.compilationUnit();

		const visitor = new ZfApexParserVisitor();
		visitor.visit(context);

		return new ApexClassSymbolTable({
			methods: visitor.members.map(member => {
				const apexMethod: ApexMethod = {
					name: member.methodName,
					isTestMethod: member.isTestMethod,
					range: member.range
				};
				return apexMethod;
			}),
			className: visitor.className,
			isTestClass: visitor.isTestClass,
			fields: [...visitor.fields]
		});
	}
}

type ApexMethod = {
	name: string;
	isTestMethod: boolean;
	range: Range;
};

type ApexField = {
	name: string;
	type: string;
	range: Range;
};

class ApexClassSymbolTable {

	private readonly methods: ApexMethod[];
	private readonly className: string;
	private readonly isTestClass: boolean;
	private readonly fields: ApexField[];

	public constructor ({
		className,
		methods,
		isTestClass,
		fields
	}: {
		methods: ApexMethod[],
		className: string,
		isTestClass: boolean,
		fields: ApexField[]
	}) {
		this.methods = methods;
		this.className = className;
		this.isTestClass = isTestClass;
		this.fields = fields;
	}

	public getTestMethods(): ApexMethod[] {
		return this.methods.filter(method => method.isTestMethod);
	}

	public getClassName() {
		return this.className;
	}

	public getIsTestClass() {
		return this.isTestClass;
	}

	public getFields() {
		return this.fields;
	}
}

type VisitorResult = {
	isTestMethod: boolean,
	methodName: string,
	range: Range;
};

class ZfApexParserVisitor extends AbstractParseTreeVisitor<void> implements _ApexParser.ApexParserVisitor<void> {

	members: VisitorResult[] = [];
	className: string = "";
	fields: ApexField[];

	constructor () {
		super();
		this.fields = [];
	}

	get isTestClass() {
		return this.members.some(member => member.isTestMethod);
	}

	visitClassDeclaration(ctx: _ApexParser.ClassDeclarationContext): void {
		this.className = ctx.id().text;
		super.visitChildren(ctx);
	}

	visitClassBodyDeclaration(ctx: _ApexParser.ClassBodyDeclarationContext): void {
		const isTestMethod = () => {
			function compareIgnoreCase(a: string, b: string) {
				return a?.toLowerCase() === b?.toLowerCase();
			}

			const modifiers = ctx.modifier();
			return modifiers.some(modifier => {
				return compareIgnoreCase(modifier.annotation()?.qualifiedName().text, 'IsTest');
			});
		};

		const getVisitorResults = () => {
			const memberDecl = ctx.memberDeclaration();
			if (ctx.modifier() && memberDecl) {
				const methodDecl = memberDecl.methodDeclaration();
				const fieldDecl = memberDecl.fieldDeclaration();
				if (methodDecl) {
					let range = getRangeOf(methodDecl);

					const result: VisitorResult = {
						isTestMethod: isTestMethod(),
						methodName: methodDecl.id().text ?? "",
						range
					};
					return [result];
				} else if (fieldDecl) {
					const range = getRangeOf(fieldDecl);
					const typeRef = fieldDecl.typeRef();
					const varDecls = fieldDecl.variableDeclarators().variableDeclarator();

					varDecls.forEach(varDecl => {
						const id = varDecl.id();
						this.fields.push({
							range,
							type: typeRef.text,
							name: id.text
						});
					});
				}
			}
			return [];
		};

		const visitorResults = getVisitorResults();
		this.members.push(...visitorResults);
	}

	protected defaultResult(): void {
		return undefined;
	}
}