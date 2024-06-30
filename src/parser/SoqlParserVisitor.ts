// Generated from .\src\parser\SoqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { QueryContext } from "./SoqlParser";
import { SelectOrSoqlIdContext } from "./SoqlParser";
import { FromOrSoqlIdContext } from "./SoqlParser";
import { SubQueryContext } from "./SoqlParser";
import { SelectListContext } from "./SoqlParser";
import { SelectEntryContext } from "./SoqlParser";
import { FieldNameContext } from "./SoqlParser";
import { FromNameListContext } from "./SoqlParser";
import { FromSoqlIdContext } from "./SoqlParser";
import { SubFieldListContext } from "./SoqlParser";
import { SubFieldEntryContext } from "./SoqlParser";
import { SoqlFieldsParameterContext } from "./SoqlParser";
import { SoqlFunctionContext } from "./SoqlParser";
import { DateFieldNameContext } from "./SoqlParser";
import { LocationValueContext } from "./SoqlParser";
import { CoordinateValueContext } from "./SoqlParser";
import { TypeOfContext } from "./SoqlParser";
import { WhenClauseContext } from "./SoqlParser";
import { ElseClauseContext } from "./SoqlParser";
import { FieldNameListContext } from "./SoqlParser";
import { UsingScopeContext } from "./SoqlParser";
import { WhereClauseContext } from "./SoqlParser";
import { LogicalExpressionContext } from "./SoqlParser";
import { AndOrSoqlContext } from "./SoqlParser";
import { ConditionalExpressionContext } from "./SoqlParser";
import { FieldExpressionContext } from "./SoqlParser";
import { ComparisonOperatorContext } from "./SoqlParser";
import { ValueContext } from "./SoqlParser";
import { ValueListContext } from "./SoqlParser";
import { SignedNumberContext } from "./SoqlParser";
import { WithClauseContext } from "./SoqlParser";
import { FilteringExpressionContext } from "./SoqlParser";
import { DataCategorySelectionContext } from "./SoqlParser";
import { DataCategoryNameContext } from "./SoqlParser";
import { FilteringSelectorContext } from "./SoqlParser";
import { GroupByClauseContext } from "./SoqlParser";
import { OrderByClauseContext } from "./SoqlParser";
import { FieldOrderListContext } from "./SoqlParser";
import { FieldOrderContext } from "./SoqlParser";
import { LimitClauseContext } from "./SoqlParser";
import { OffsetClauseContext } from "./SoqlParser";
import { AllRowsClauseContext } from "./SoqlParser";
import { ForClausesContext } from "./SoqlParser";
import { DateFormulaContext } from "./SoqlParser";
import { SignedIntegerContext } from "./SoqlParser";
import { SoqlIdContext } from "./SoqlParser";
import { SoslLiteralContext } from "./SoqlParser";
import { SoslLiteralAltContext } from "./SoqlParser";
import { SoslClausesContext } from "./SoqlParser";
import { SearchGroupContext } from "./SoqlParser";
import { FieldSpecListContext } from "./SoqlParser";
import { FieldSpecContext } from "./SoqlParser";
import { FieldListContext } from "./SoqlParser";
import { UpdateListContext } from "./SoqlParser";
import { UpdateTypeContext } from "./SoqlParser";
import { NetworkListContext } from "./SoqlParser";
import { SoslIdContext } from "./SoqlParser";
import { IdContext } from "./SoqlParser";
import { AnyIdContext } from "./SoqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SoqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SoqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SoqlParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.selectOrSoqlId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectOrSoqlId?: (ctx: SelectOrSoqlIdContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fromOrSoqlId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromOrSoqlId?: (ctx: FromOrSoqlIdContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.subQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQuery?: (ctx: SubQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.selectList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectList?: (ctx: SelectListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.selectEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectEntry?: (ctx: SelectEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldName?: (ctx: FieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fromNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromNameList?: (ctx: FromNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fromSoqlId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromSoqlId?: (ctx: FromSoqlIdContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.subFieldList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubFieldList?: (ctx: SubFieldListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.subFieldEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubFieldEntry?: (ctx: SubFieldEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.soqlFieldsParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoqlFieldsParameter?: (ctx: SoqlFieldsParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.soqlFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoqlFunction?: (ctx: SoqlFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.dateFieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateFieldName?: (ctx: DateFieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.locationValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocationValue?: (ctx: LocationValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.coordinateValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoordinateValue?: (ctx: CoordinateValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.typeOf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeOf?: (ctx: TypeOfContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.elseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseClause?: (ctx: ElseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fieldNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldNameList?: (ctx: FieldNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.usingScope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingScope?: (ctx: UsingScopeContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.logicalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.andOrSoql`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndOrSoql?: (ctx: AndOrSoqlContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fieldExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldExpression?: (ctx: FieldExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.valueList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueList?: (ctx: ValueListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.signedNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedNumber?: (ctx: SignedNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.withClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithClause?: (ctx: WithClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.filteringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilteringExpression?: (ctx: FilteringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.dataCategorySelection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataCategorySelection?: (ctx: DataCategorySelectionContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.dataCategoryName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataCategoryName?: (ctx: DataCategoryNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.filteringSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilteringSelector?: (ctx: FilteringSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.groupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByClause?: (ctx: GroupByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.orderByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByClause?: (ctx: OrderByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fieldOrderList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldOrderList?: (ctx: FieldOrderListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fieldOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldOrder?: (ctx: FieldOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.offsetClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffsetClause?: (ctx: OffsetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.allRowsClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAllRowsClause?: (ctx: AllRowsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.forClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForClauses?: (ctx: ForClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.dateFormula`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateFormula?: (ctx: DateFormulaContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.signedInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedInteger?: (ctx: SignedIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.soqlId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoqlId?: (ctx: SoqlIdContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.soslLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoslLiteral?: (ctx: SoslLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.soslLiteralAlt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoslLiteralAlt?: (ctx: SoslLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.soslClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoslClauses?: (ctx: SoslClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.searchGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchGroup?: (ctx: SearchGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fieldSpecList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldSpecList?: (ctx: FieldSpecListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldSpec?: (ctx: FieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fieldList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldList?: (ctx: FieldListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.updateList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateList?: (ctx: UpdateListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.updateType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateType?: (ctx: UpdateTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.networkList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNetworkList?: (ctx: NetworkListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.soslId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoslId?: (ctx: SoslIdContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.anyId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnyId?: (ctx: AnyIdContext) => Result;
}

