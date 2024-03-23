import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import * as _ApexParser from 'apex-parser';
import { Position } from "./position";
import { Range } from "./range";

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
			isTestClass: visitor.isTestClass
		});
	}
}

type ApexMethod = {
	name: string;
	isTestMethod: boolean;
	range: Range;
};

class ApexClassSymbolTable {

	private readonly methods: ApexMethod[];
	private readonly className: string;
	private readonly isTestClass: boolean;

	public constructor ({
		className,
		methods,
		isTestClass
	}: {
		methods: ApexMethod[],
		className: string,
		isTestClass: boolean
	}) {
		this.methods = methods;
		this.className = className;
		this.isTestClass = isTestClass;
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
}

type VisitorResult = {
	isTestMethod: boolean,
	methodName: string,
	range: Range;
};

class ZfApexParserVisitor extends AbstractParseTreeVisitor<void> implements _ApexParser.ApexParserVisitor<void> {

	members: VisitorResult[] = [];
	className: string = "";

	get isTestClass() {
		return this.members.some(member => member.isTestMethod);
	}

	visitClassDeclaration(ctx: _ApexParser.ClassDeclarationContext): void {
		this.className = ctx.id().text;
		super.visitChildren(ctx);
	}

	visitClassBodyDeclaration(ctx: _ApexParser.ClassBodyDeclarationContext): void {
		const isTestMethod = () => {
			const modifiers = ctx.modifier();
			return modifiers.some(modifier => {
				return modifier.annotation()?.qualifiedName().text === 'IsTest';
			});
		};

		const getRangeFor = (methodDecl: _ApexParser.MethodDeclarationContext) => {

		}

		const getVisitorResults = () => {
			const memberDecl = ctx.memberDeclaration();
			if (ctx.modifier() && memberDecl) {
				const methodDecl = memberDecl.methodDeclaration();
				if (methodDecl) {
					let range = undefined;
					const start = new Position(methodDecl.start.line - 1, methodDecl.start.startIndex);
					if (methodDecl.stop) {
						const end = new Position(methodDecl.stop.line - 1, methodDecl.stop.stopIndex);
						range = new Range(start, end);
					} else {
						range = new Range(start);
					}

					const result: VisitorResult = {
						isTestMethod: isTestMethod(),
						methodName: methodDecl.id().text ?? "",
						range
					};
					return [result];
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