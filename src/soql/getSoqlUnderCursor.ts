import { Command } from "../command";
import { Position } from "../position";
import { Range } from "../range";
import { inlineSfZsiString, sfZsiString, substring } from "./intellisenseUtils";
import { SoqlLexer } from '../parser/SoqlLexer';
import { CommonTokenStream } from 'antlr4ts';
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { CaseInsensitiveInputStream } from "apex-parser";
import { SoqlParser } from "../parser/SoqlParser";
import { SoqlParserVisitor } from "../parser/SoqlParserVisitor";
import { QueryContext } from "../parser/SoqlParser";
import { getRangeOf } from "../apexParser";

export class GetSoqlUnderCursorCommand extends Command {
    async execute({ apexClass, position }: { apexClass: string, position: Position }): Promise<GetSoqlUnderCursorResult> {
        const that = this;
        const visitor: SoqlParserVisitor<VisitorResult> = {
            visitSoqlLiteral(ctx) {
                const result = visitor.visitChildren(ctx);
                const terminalNode = that.getZfIntellisense(ctx.query());
                if (terminalNode) {
                    const withIntellisenseString = getRangeOf(ctx);
                    const start = withIntellisenseString.getStart();
                    const end = withIntellisenseString.getEnd();

                    const newStart = start;
                    let newEnd = end;
                    if (terminalNode.symbol.line - 1 === end.getLineNumber()) {
                        newEnd = new Position(newEnd.getLineNumber(), newEnd.getColumnNumber() - sfZsiString.length);
                    }
                    return {
                        range: new Range(newStart, new Position(newEnd.getLineNumber(), newEnd.getColumnNumber())),
                        isWithinSoql: true
                    };
                }
                return result;
            },
            visit: function (tree: ParseTree) {
                return tree.accept(this);
            },
            visitChildren: function (node: RuleNode): VisitorResult {
                for (let i = 0; i < node.childCount; i++) {
                    const child = node.getChild(i);

                    const result = child.accept(this) as VisitorResult;
                    if (result.isWithinSoql) {
                        return result;
                    }
                }
                return {
                    isWithinSoql: false
                };
            },
            visitTerminal: function (node: TerminalNode) {
                return { isWithinSoql: false };
            },
            visitErrorNode: function (node: ErrorNode) {
                return { isWithinSoql: false };
            }
        };

        const result = visitor.visit(this.parseApex(apexClass, position));
        if (!result.isWithinSoql) {
            return { isWithinSoql: false };
        };

        const { range } = result;

        const start = range.getStart();
        const embeddedCursorPosition = new Position(position.getLineNumber() - start.getLineNumber(), position.getColumnNumber() - start.getColumnNumber() - 1);

        const soql = substring(apexClass, getRangeWithoutBrackets(range));
        return {
            isWithinSoql: true,
            soql,
            embeddedCursorPosition
        };
    }

    private getZfIntellisense(query: QueryContext) {
        const visitor: SoqlParserVisitor<TerminalNode | undefined> = {
            visit: function (tree: ParseTree): TerminalNode | undefined {
                return tree.accept(this);
            },
            visitChildren: function (node: RuleNode): TerminalNode | undefined {
                let zfIntellisense: TerminalNode | undefined = undefined;
                for (let i = 0; i < node.childCount; i++) {
                    const child = node.getChild(i);

                    const result = child.accept(this) as TerminalNode;
                    if (result) {
                        zfIntellisense = result;
                    }
                }
                return zfIntellisense;
            },
            visitTerminal: function (node: TerminalNode): TerminalNode | undefined {
                if (node.text === sfZsiString) {
                    return node;
                } else {
                    return undefined;
                }
            },
            visitErrorNode: function (node: ErrorNode): TerminalNode | undefined {
                return undefined;
            }
        };
        return visitor.visit(query);
    }

    private parseApex(apexClass: string, position: Position) {
        const inlined = inlineSfZsiString(apexClass, position);
        const lexer = new SoqlLexer(new CaseInsensitiveInputStream({}, inlined));
        const tokens = new CommonTokenStream(lexer);
        const apexParser = new SoqlParser(tokens);
        return apexParser.compilationUnit();
    }
}

function getRangeWithoutBrackets(range: Range) {
    const start = range.getStart();
    const end = range.getEnd();

    const withoutBracketsStart = new Position(start.getLineNumber(), start.getColumnNumber() + 1);
    const withoutBracketsEnd = new Position(end.getLineNumber(), end.getColumnNumber() - 1);

    const withoutBrackets = new Range(withoutBracketsStart, withoutBracketsEnd);
    return withoutBrackets;
}


type GetSoqlUnderCursorResult = { isWithinSoql: false } | { isWithinSoql: true, soql: string, embeddedCursorPosition: Position };

type VisitorResult = TrueVisitorResult | { isWithinSoql: false };

type TrueVisitorResult = {
    isWithinSoql: true,
    range: Range;
};