import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import * as _ApexParser from 'apex-parser';
import { Position } from "../position";

export class SoqlParser {
	public parse(input: string) {
		let lexer = new _ApexParser.ApexLexer(new _ApexParser.CaseInsensitiveInputStream({}, input));
		let tokens = new _ApexParser.CommonTokenStream(lexer);

		let parser = new _ApexParser.ApexParser(tokens);
		let context = parser.query();

		const visitor = new ZfSoqlParserVisitor();
		visitor.visit(context);

		return {
			sObjectName: visitor.sObjectName
		} as SoqlQuery;
	}
}

type SoqlQuery = {
	sObjectName: {
		text : string,
		start : Position;
		end : Position;
	};
};

class ZfSoqlParserVisitor extends AbstractParseTreeVisitor<void> implements _ApexParser.ApexParserVisitor<void> {

	sObjectName: string;
	visitQuery(ctx: _ApexParser.QueryContext) {
		this.sObjectName = ctx.fromNameList().text;

	};

	protected defaultResult(): void {
		return undefined;
	}
}