import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import * as _ApexParser from "apex-parser";

export class ApexParser {
	public parse(input: string): ApexClassSymbolTable {
		let lexer = new _ApexParser.ApexLexer(new _ApexParser.CaseInsensitiveInputStream({}, input));
		let tokens = new _ApexParser.CommonTokenStream(lexer);

		let parser = new _ApexParser.ApexParser(tokens);
		let context = parser.compilationUnit();

		const visitor = new ZfApexParserVisitor();
		visitor.visit(context);

		return new ApexClassSymbolTable();
	}
}

export class ApexClassSymbolTable {
	public getPublicMethods() {

	}
}

class ZfApexParserVisitor extends AbstractParseTreeVisitor<number> implements _ApexParser.ApexParserVisitor<number> {
	public methodCounter: number = 0;

	visitTypeRef(ctx: _ApexParser.TypeRefContext): number {
		console.log(ctx);
		return 0;
	}

	visitTypeDeclaration(ctx: _ApexParser.TypeDeclarationContext): number {
		console.log(ctx);
		return 0;
	}

	visitTypeRefPrimary(ctx: _ApexParser.TypeRefPrimaryContext) : number {
		console.log(ctx);
		return 0;
	}

	visitMethodDeclaration(ctx: _ApexParser.MethodDeclarationContext): number {
		console.log(ctx);
		this.methodCounter += 1;
		return 1 + super.visitChildren(ctx);
	}

	protected defaultResult(): number {
		return 0;
	}
}