import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import * as _ApexParser from 'apex-parser';

export class ApexParser {
	public parse(input: string): ApexClassSymbolTable {
		let lexer = new _ApexParser.ApexLexer(new _ApexParser.CaseInsensitiveInputStream({}, input));
		let tokens = new _ApexParser.CommonTokenStream(lexer);

		let parser = new _ApexParser.ApexParser(tokens);
		let context = parser.compilationUnit();

		const visitor = new ZfApexParserVisitor();
		visitor.visit(context);

		return new ApexClassSymbolTable({
			methods: visitor.members.filter(member => member.apexMemberType === 'method').map(member => {
				const apexMethod: ApexMethod = {
					isPublic: member.isPublic,
					name: member.methodName,
					returnType: member.returnType
				};
				return apexMethod;
			}),
			properties: visitor.members.filter(member => member.apexMemberType === 'field').map(member => {
				const apexProperty: ApexProperty = {
					isPublic: member.isPublic,
					name: member.methodName,
					type: member.returnType
				};
				return apexProperty;
			}),
			className: visitor.className
		});
	}
}

export type ApexMethod = {
	returnType: string;
	name: string;
	isPublic: boolean;
};

export type ApexProperty = {
	type: string;
	name: string;
	isPublic: boolean;
};

export class ApexClassSymbolTable {

	private readonly methods: ApexMethod[];
	private readonly properties: ApexProperty[];
	private readonly className: string;

	public constructor({
		className,
		methods,
		properties
	}: {
		methods: ApexMethod[],
		properties: ApexProperty[],
		className: string
	}) {
		this.methods = methods;
		this.properties = properties;
		this.className = className;
	}

	public getPublicMethods() {
		return this.methods.filter(method => method.isPublic);
	}

	public getPublicFields() {
		return this.properties.filter(property => property.isPublic);
	}

	public getClassName() {
		return this.className;
	}
}

type ApexMemberType = 'method' | 'field';

type VisitorResult = {
	isPublic: boolean,
	returnType: string,
	methodName: string
	apexMemberType: ApexMemberType;
};

class ZfApexParserVisitor extends AbstractParseTreeVisitor<void> implements _ApexParser.ApexParserVisitor<void> {

	members: VisitorResult[] = [];
	className: string = "";

	visitClassDeclaration(ctx: _ApexParser.ClassDeclarationContext): void {
		this.className = ctx.id().text;
		super.visitChildren(ctx);
	}

	visitClassBodyDeclaration(ctx: _ApexParser.ClassBodyDeclarationContext): void {
		const isPublicMember = () => {
			return ctx.modifier().some(value => {
				const tokens = value.getTokens(_ApexParser.ApexLexer.PUBLIC);
				return !!tokens.length;
			});
		};

		const getVisitorResults = () => {
			const memberDecl = ctx.memberDeclaration();
			if (ctx.modifier() && memberDecl) {
				const methodDecl = memberDecl.methodDeclaration();
				if (methodDecl) {
					const result: VisitorResult = {
						isPublic: isPublicMember(),
						returnType: methodDecl.typeRef()?.text ?? "",
						methodName: methodDecl.id().text ?? "",
						apexMemberType: 'method'
					};
					return [result];
				}

				const fieldDecl = memberDecl.fieldDeclaration();
				if (fieldDecl) {
					const isPublicField = (fieldDecl: _ApexParser.VariableDeclaratorContext) => {
						return !!fieldDecl.getTokens(_ApexParser.ApexLexer.PUBLIC);
					};

					const varDecls = fieldDecl.variableDeclarators().variableDeclarator();
					return varDecls.map(varDecl => {
						const result: VisitorResult = {
							isPublic: isPublicField(varDecl),
							returnType: fieldDecl.typeRef().text,
							apexMemberType: "field",
							methodName: varDecl.id().text
						};
						return result;
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