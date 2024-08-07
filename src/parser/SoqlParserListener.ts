// Generated from .\src\parser\SoqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { QueryContext } from "./SoqlParser";
import { EndOfQueryContext } from "./SoqlParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `SoqlParser`.
 */
export interface SoqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SoqlParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.endOfQuery`.
	 * @param ctx the parse tree
	 */
	enterEndOfQuery?: (ctx: EndOfQueryContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.endOfQuery`.
	 * @param ctx the parse tree
	 */
	exitEndOfQuery?: (ctx: EndOfQueryContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.selectOrSoqlId`.
	 * @param ctx the parse tree
	 */
	enterSelectOrSoqlId?: (ctx: SelectOrSoqlIdContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.selectOrSoqlId`.
	 * @param ctx the parse tree
	 */
	exitSelectOrSoqlId?: (ctx: SelectOrSoqlIdContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fromOrSoqlId`.
	 * @param ctx the parse tree
	 */
	enterFromOrSoqlId?: (ctx: FromOrSoqlIdContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fromOrSoqlId`.
	 * @param ctx the parse tree
	 */
	exitFromOrSoqlId?: (ctx: FromOrSoqlIdContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.subQuery`.
	 * @param ctx the parse tree
	 */
	enterSubQuery?: (ctx: SubQueryContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.subQuery`.
	 * @param ctx the parse tree
	 */
	exitSubQuery?: (ctx: SubQueryContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.selectList`.
	 * @param ctx the parse tree
	 */
	enterSelectList?: (ctx: SelectListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.selectList`.
	 * @param ctx the parse tree
	 */
	exitSelectList?: (ctx: SelectListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.selectEntry`.
	 * @param ctx the parse tree
	 */
	enterSelectEntry?: (ctx: SelectEntryContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.selectEntry`.
	 * @param ctx the parse tree
	 */
	exitSelectEntry?: (ctx: SelectEntryContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fromNameList`.
	 * @param ctx the parse tree
	 */
	enterFromNameList?: (ctx: FromNameListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fromNameList`.
	 * @param ctx the parse tree
	 */
	exitFromNameList?: (ctx: FromNameListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fromSoqlId`.
	 * @param ctx the parse tree
	 */
	enterFromSoqlId?: (ctx: FromSoqlIdContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fromSoqlId`.
	 * @param ctx the parse tree
	 */
	exitFromSoqlId?: (ctx: FromSoqlIdContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.subFieldList`.
	 * @param ctx the parse tree
	 */
	enterSubFieldList?: (ctx: SubFieldListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.subFieldList`.
	 * @param ctx the parse tree
	 */
	exitSubFieldList?: (ctx: SubFieldListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.subFieldEntry`.
	 * @param ctx the parse tree
	 */
	enterSubFieldEntry?: (ctx: SubFieldEntryContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.subFieldEntry`.
	 * @param ctx the parse tree
	 */
	exitSubFieldEntry?: (ctx: SubFieldEntryContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.soqlFieldsParameter`.
	 * @param ctx the parse tree
	 */
	enterSoqlFieldsParameter?: (ctx: SoqlFieldsParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.soqlFieldsParameter`.
	 * @param ctx the parse tree
	 */
	exitSoqlFieldsParameter?: (ctx: SoqlFieldsParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.soqlFunction`.
	 * @param ctx the parse tree
	 */
	enterSoqlFunction?: (ctx: SoqlFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.soqlFunction`.
	 * @param ctx the parse tree
	 */
	exitSoqlFunction?: (ctx: SoqlFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.dateFieldName`.
	 * @param ctx the parse tree
	 */
	enterDateFieldName?: (ctx: DateFieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.dateFieldName`.
	 * @param ctx the parse tree
	 */
	exitDateFieldName?: (ctx: DateFieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.locationValue`.
	 * @param ctx the parse tree
	 */
	enterLocationValue?: (ctx: LocationValueContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.locationValue`.
	 * @param ctx the parse tree
	 */
	exitLocationValue?: (ctx: LocationValueContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.coordinateValue`.
	 * @param ctx the parse tree
	 */
	enterCoordinateValue?: (ctx: CoordinateValueContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.coordinateValue`.
	 * @param ctx the parse tree
	 */
	exitCoordinateValue?: (ctx: CoordinateValueContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.typeOf`.
	 * @param ctx the parse tree
	 */
	enterTypeOf?: (ctx: TypeOfContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.typeOf`.
	 * @param ctx the parse tree
	 */
	exitTypeOf?: (ctx: TypeOfContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.elseClause`.
	 * @param ctx the parse tree
	 */
	enterElseClause?: (ctx: ElseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.elseClause`.
	 * @param ctx the parse tree
	 */
	exitElseClause?: (ctx: ElseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fieldNameList`.
	 * @param ctx the parse tree
	 */
	enterFieldNameList?: (ctx: FieldNameListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fieldNameList`.
	 * @param ctx the parse tree
	 */
	exitFieldNameList?: (ctx: FieldNameListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.usingScope`.
	 * @param ctx the parse tree
	 */
	enterUsingScope?: (ctx: UsingScopeContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.usingScope`.
	 * @param ctx the parse tree
	 */
	exitUsingScope?: (ctx: UsingScopeContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.logicalExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.logicalExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.andOrSoql`.
	 * @param ctx the parse tree
	 */
	enterAndOrSoql?: (ctx: AndOrSoqlContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.andOrSoql`.
	 * @param ctx the parse tree
	 */
	exitAndOrSoql?: (ctx: AndOrSoqlContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fieldExpression`.
	 * @param ctx the parse tree
	 */
	enterFieldExpression?: (ctx: FieldExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fieldExpression`.
	 * @param ctx the parse tree
	 */
	exitFieldExpression?: (ctx: FieldExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.valueList`.
	 * @param ctx the parse tree
	 */
	enterValueList?: (ctx: ValueListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.valueList`.
	 * @param ctx the parse tree
	 */
	exitValueList?: (ctx: ValueListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.signedNumber`.
	 * @param ctx the parse tree
	 */
	enterSignedNumber?: (ctx: SignedNumberContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.signedNumber`.
	 * @param ctx the parse tree
	 */
	exitSignedNumber?: (ctx: SignedNumberContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.withClause`.
	 * @param ctx the parse tree
	 */
	enterWithClause?: (ctx: WithClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.withClause`.
	 * @param ctx the parse tree
	 */
	exitWithClause?: (ctx: WithClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.filteringExpression`.
	 * @param ctx the parse tree
	 */
	enterFilteringExpression?: (ctx: FilteringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.filteringExpression`.
	 * @param ctx the parse tree
	 */
	exitFilteringExpression?: (ctx: FilteringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.dataCategorySelection`.
	 * @param ctx the parse tree
	 */
	enterDataCategorySelection?: (ctx: DataCategorySelectionContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.dataCategorySelection`.
	 * @param ctx the parse tree
	 */
	exitDataCategorySelection?: (ctx: DataCategorySelectionContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.dataCategoryName`.
	 * @param ctx the parse tree
	 */
	enterDataCategoryName?: (ctx: DataCategoryNameContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.dataCategoryName`.
	 * @param ctx the parse tree
	 */
	exitDataCategoryName?: (ctx: DataCategoryNameContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.filteringSelector`.
	 * @param ctx the parse tree
	 */
	enterFilteringSelector?: (ctx: FilteringSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.filteringSelector`.
	 * @param ctx the parse tree
	 */
	exitFilteringSelector?: (ctx: FilteringSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	enterGroupByClause?: (ctx: GroupByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	exitGroupByClause?: (ctx: GroupByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	enterOrderByClause?: (ctx: OrderByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	exitOrderByClause?: (ctx: OrderByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fieldOrderList`.
	 * @param ctx the parse tree
	 */
	enterFieldOrderList?: (ctx: FieldOrderListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fieldOrderList`.
	 * @param ctx the parse tree
	 */
	exitFieldOrderList?: (ctx: FieldOrderListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fieldOrder`.
	 * @param ctx the parse tree
	 */
	enterFieldOrder?: (ctx: FieldOrderContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fieldOrder`.
	 * @param ctx the parse tree
	 */
	exitFieldOrder?: (ctx: FieldOrderContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.limitClause`.
	 * @param ctx the parse tree
	 */
	enterLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.limitClause`.
	 * @param ctx the parse tree
	 */
	exitLimitClause?: (ctx: LimitClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.offsetClause`.
	 * @param ctx the parse tree
	 */
	enterOffsetClause?: (ctx: OffsetClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.offsetClause`.
	 * @param ctx the parse tree
	 */
	exitOffsetClause?: (ctx: OffsetClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.allRowsClause`.
	 * @param ctx the parse tree
	 */
	enterAllRowsClause?: (ctx: AllRowsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.allRowsClause`.
	 * @param ctx the parse tree
	 */
	exitAllRowsClause?: (ctx: AllRowsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.forClauses`.
	 * @param ctx the parse tree
	 */
	enterForClauses?: (ctx: ForClausesContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.forClauses`.
	 * @param ctx the parse tree
	 */
	exitForClauses?: (ctx: ForClausesContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.dateFormula`.
	 * @param ctx the parse tree
	 */
	enterDateFormula?: (ctx: DateFormulaContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.dateFormula`.
	 * @param ctx the parse tree
	 */
	exitDateFormula?: (ctx: DateFormulaContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.signedInteger`.
	 * @param ctx the parse tree
	 */
	enterSignedInteger?: (ctx: SignedIntegerContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.signedInteger`.
	 * @param ctx the parse tree
	 */
	exitSignedInteger?: (ctx: SignedIntegerContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.soqlId`.
	 * @param ctx the parse tree
	 */
	enterSoqlId?: (ctx: SoqlIdContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.soqlId`.
	 * @param ctx the parse tree
	 */
	exitSoqlId?: (ctx: SoqlIdContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.soslLiteral`.
	 * @param ctx the parse tree
	 */
	enterSoslLiteral?: (ctx: SoslLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.soslLiteral`.
	 * @param ctx the parse tree
	 */
	exitSoslLiteral?: (ctx: SoslLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.soslLiteralAlt`.
	 * @param ctx the parse tree
	 */
	enterSoslLiteralAlt?: (ctx: SoslLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.soslLiteralAlt`.
	 * @param ctx the parse tree
	 */
	exitSoslLiteralAlt?: (ctx: SoslLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.soslClauses`.
	 * @param ctx the parse tree
	 */
	enterSoslClauses?: (ctx: SoslClausesContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.soslClauses`.
	 * @param ctx the parse tree
	 */
	exitSoslClauses?: (ctx: SoslClausesContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.searchGroup`.
	 * @param ctx the parse tree
	 */
	enterSearchGroup?: (ctx: SearchGroupContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.searchGroup`.
	 * @param ctx the parse tree
	 */
	exitSearchGroup?: (ctx: SearchGroupContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fieldSpecList`.
	 * @param ctx the parse tree
	 */
	enterFieldSpecList?: (ctx: FieldSpecListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fieldSpecList`.
	 * @param ctx the parse tree
	 */
	exitFieldSpecList?: (ctx: FieldSpecListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fieldSpec`.
	 * @param ctx the parse tree
	 */
	enterFieldSpec?: (ctx: FieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fieldSpec`.
	 * @param ctx the parse tree
	 */
	exitFieldSpec?: (ctx: FieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fieldList`.
	 * @param ctx the parse tree
	 */
	enterFieldList?: (ctx: FieldListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fieldList`.
	 * @param ctx the parse tree
	 */
	exitFieldList?: (ctx: FieldListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.updateList`.
	 * @param ctx the parse tree
	 */
	enterUpdateList?: (ctx: UpdateListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.updateList`.
	 * @param ctx the parse tree
	 */
	exitUpdateList?: (ctx: UpdateListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.updateType`.
	 * @param ctx the parse tree
	 */
	enterUpdateType?: (ctx: UpdateTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.updateType`.
	 * @param ctx the parse tree
	 */
	exitUpdateType?: (ctx: UpdateTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.networkList`.
	 * @param ctx the parse tree
	 */
	enterNetworkList?: (ctx: NetworkListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.networkList`.
	 * @param ctx the parse tree
	 */
	exitNetworkList?: (ctx: NetworkListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.soslId`.
	 * @param ctx the parse tree
	 */
	enterSoslId?: (ctx: SoslIdContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.soslId`.
	 * @param ctx the parse tree
	 */
	exitSoslId?: (ctx: SoslIdContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.anyId`.
	 * @param ctx the parse tree
	 */
	enterAnyId?: (ctx: AnyIdContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.anyId`.
	 * @param ctx the parse tree
	 */
	exitAnyId?: (ctx: AnyIdContext) => void;
}

