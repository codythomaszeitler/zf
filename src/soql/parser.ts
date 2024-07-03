import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import * as _ApexParser from 'apex-parser';

export class SoqlParser {
	public parse(input: string) {
		let lexer = new _ApexParser.ApexLexer(new _ApexParser.CaseInsensitiveInputStream({}, input));
		let tokens = new _ApexParser.CommonTokenStream(lexer);

		let parser = new _ApexParser.ApexParser(tokens);
		let context = parser.query();

		const visitor = new ZfSoqlParserVisitor();
		visitor.visit(context);

		return {
			sObjectName: visitor.sObjectName,
			fields : visitor.fields
		} as SoqlQuery;
	}
}

type SoqlQuery = {
	sObjectName: string;
	fields : string[];
};

class ZfSoqlParserVisitor extends AbstractParseTreeVisitor<void> implements _ApexParser.ApexParserVisitor<void> {

	sObjectName: string;
	fields : string[];

	visitQuery(ctx: _ApexParser.QueryContext) {
		this.sObjectName = ctx.fromNameList().text;
		this.fields = ctx.selectList().selectEntry().map(entry => entry.text);
	};

	protected defaultResult(): void {
		return undefined;
	}
}