// Generated from .\src\parser\SoqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ThisPrimaryContext } from "./SoqlParser";
import { SuperPrimaryContext } from "./SoqlParser";
import { LiteralPrimaryContext } from "./SoqlParser";
import { TypeRefPrimaryContext } from "./SoqlParser";
import { VoidPrimaryContext } from "./SoqlParser";
import { IdPrimaryContext } from "./SoqlParser";
import { SoqlPrimaryContext } from "./SoqlParser";
import { SoslPrimaryContext } from "./SoqlParser";
import { PrimaryExpressionContext } from "./SoqlParser";
import { DotExpressionContext } from "./SoqlParser";
import { ArrayExpressionContext } from "./SoqlParser";
import { MethodCallExpressionContext } from "./SoqlParser";
import { NewExpressionContext } from "./SoqlParser";
import { CastExpressionContext } from "./SoqlParser";
import { SubExpressionContext } from "./SoqlParser";
import { PostOpExpressionContext } from "./SoqlParser";
import { PreOpExpressionContext } from "./SoqlParser";
import { NegExpressionContext } from "./SoqlParser";
import { Arth1ExpressionContext } from "./SoqlParser";
import { Arth2ExpressionContext } from "./SoqlParser";
import { BitExpressionContext } from "./SoqlParser";
import { CmpExpressionContext } from "./SoqlParser";
import { InstanceOfExpressionContext } from "./SoqlParser";
import { EqualityExpressionContext } from "./SoqlParser";
import { BitAndExpressionContext } from "./SoqlParser";
import { BitNotExpressionContext } from "./SoqlParser";
import { BitOrExpressionContext } from "./SoqlParser";
import { LogAndExpressionContext } from "./SoqlParser";
import { LogOrExpressionContext } from "./SoqlParser";
import { CondExpressionContext } from "./SoqlParser";
import { AssignExpressionContext } from "./SoqlParser";
import { TriggerUnitContext } from "./SoqlParser";
import { TriggerUnit2Context } from "./SoqlParser";
import { TriggerCaseContext } from "./SoqlParser";
import { TriggerBlockContext } from "./SoqlParser";
import { TriggerBlockMemberContext } from "./SoqlParser";
import { CompilationUnitContext } from "./SoqlParser";
import { TypeDeclarationContext } from "./SoqlParser";
import { ClassDeclarationContext } from "./SoqlParser";
import { EnumDeclarationContext } from "./SoqlParser";
import { EnumConstantsContext } from "./SoqlParser";
import { InterfaceDeclarationContext } from "./SoqlParser";
import { TypeListContext } from "./SoqlParser";
import { ClassBodyContext } from "./SoqlParser";
import { InterfaceBodyContext } from "./SoqlParser";
import { ClassBodyDeclarationContext } from "./SoqlParser";
import { ModifierContext } from "./SoqlParser";
import { MemberDeclarationContext } from "./SoqlParser";
import { TriggerMemberDeclarationContext } from "./SoqlParser";
import { MethodDeclarationContext } from "./SoqlParser";
import { ConstructorDeclarationContext } from "./SoqlParser";
import { FieldDeclarationContext } from "./SoqlParser";
import { PropertyDeclarationContext } from "./SoqlParser";
import { InterfaceMethodDeclarationContext } from "./SoqlParser";
import { VariableDeclaratorsContext } from "./SoqlParser";
import { VariableDeclaratorContext } from "./SoqlParser";
import { ArrayInitializerContext } from "./SoqlParser";
import { TypeRefContext } from "./SoqlParser";
import { ArraySubscriptsContext } from "./SoqlParser";
import { TypeNameContext } from "./SoqlParser";
import { TypeArgumentsContext } from "./SoqlParser";
import { FormalParametersContext } from "./SoqlParser";
import { FormalParameterListContext } from "./SoqlParser";
import { FormalParameterContext } from "./SoqlParser";
import { QualifiedNameContext } from "./SoqlParser";
import { LiteralContext } from "./SoqlParser";
import { AnnotationContext } from "./SoqlParser";
import { ElementValuePairsContext } from "./SoqlParser";
import { ElementValuePairContext } from "./SoqlParser";
import { ElementValueContext } from "./SoqlParser";
import { ElementValueArrayInitializerContext } from "./SoqlParser";
import { BlockContext } from "./SoqlParser";
import { LocalVariableDeclarationStatementContext } from "./SoqlParser";
import { LocalVariableDeclarationContext } from "./SoqlParser";
import { StatementContext } from "./SoqlParser";
import { IfStatementContext } from "./SoqlParser";
import { SwitchStatementContext } from "./SoqlParser";
import { WhenControlContext } from "./SoqlParser";
import { WhenValueContext } from "./SoqlParser";
import { WhenLiteralContext } from "./SoqlParser";
import { ForStatementContext } from "./SoqlParser";
import { WhileStatementContext } from "./SoqlParser";
import { DoWhileStatementContext } from "./SoqlParser";
import { TryStatementContext } from "./SoqlParser";
import { ReturnStatementContext } from "./SoqlParser";
import { ThrowStatementContext } from "./SoqlParser";
import { BreakStatementContext } from "./SoqlParser";
import { ContinueStatementContext } from "./SoqlParser";
import { AccessLevelContext } from "./SoqlParser";
import { InsertStatementContext } from "./SoqlParser";
import { UpdateStatementContext } from "./SoqlParser";
import { DeleteStatementContext } from "./SoqlParser";
import { UndeleteStatementContext } from "./SoqlParser";
import { UpsertStatementContext } from "./SoqlParser";
import { MergeStatementContext } from "./SoqlParser";
import { RunAsStatementContext } from "./SoqlParser";
import { ExpressionStatementContext } from "./SoqlParser";
import { PropertyBlockContext } from "./SoqlParser";
import { GetterContext } from "./SoqlParser";
import { SetterContext } from "./SoqlParser";
import { CatchClauseContext } from "./SoqlParser";
import { FinallyBlockContext } from "./SoqlParser";
import { ForControlContext } from "./SoqlParser";
import { ForInitContext } from "./SoqlParser";
import { EnhancedForControlContext } from "./SoqlParser";
import { ForUpdateContext } from "./SoqlParser";
import { ParExpressionContext } from "./SoqlParser";
import { ExpressionListContext } from "./SoqlParser";
import { ExpressionContext } from "./SoqlParser";
import { PrimaryContext } from "./SoqlParser";
import { MethodCallContext } from "./SoqlParser";
import { DotMethodCallContext } from "./SoqlParser";
import { CreatorContext } from "./SoqlParser";
import { CreatedNameContext } from "./SoqlParser";
import { IdCreatedNamePairContext } from "./SoqlParser";
import { NoRestContext } from "./SoqlParser";
import { ClassCreatorRestContext } from "./SoqlParser";
import { ArrayCreatorRestContext } from "./SoqlParser";
import { MapCreatorRestContext } from "./SoqlParser";
import { MapCreatorRestPairContext } from "./SoqlParser";
import { SetCreatorRestContext } from "./SoqlParser";
import { ArgumentsContext } from "./SoqlParser";
import { SoqlLiteralContext } from "./SoqlParser";
import { QueryContext } from "./SoqlParser";
import { EndOfQueryContext } from "./SoqlParser";
import { SelectOrSoqlIdContext } from "./SoqlParser";
import { FromOrSoqlIdContext } from "./SoqlParser";
import { SubQueryContext } from "./SoqlParser";
import { SubQueryFromNameListContext } from "./SoqlParser";
import { SubQueryFromNameFieldNameContext } from "./SoqlParser";
import { SubQueryFromNameSoqlIdContext } from "./SoqlParser";
import { SelectListContext } from "./SoqlParser";
import { SelectEntryContext } from "./SoqlParser";
import { FieldNameContext } from "./SoqlParser";
import { FromNameListContext } from "./SoqlParser";
import { FromNameFieldNameContext } from "./SoqlParser";
import { FromNameSoqlIdContext } from "./SoqlParser";
import { FromSoqlIdContext } from "./SoqlParser";
import { SubFieldListContext } from "./SoqlParser";
import { SubFieldEntryContext } from "./SoqlParser";
import { SubFieldEntryFieldNameContext } from "./SoqlParser";
import { SubFieldEntrySoqlIdContext } from "./SoqlParser";
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
	 * Enter a parse tree produced by the `thisPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterThisPrimary?: (ctx: ThisPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `thisPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitThisPrimary?: (ctx: ThisPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `superPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSuperPrimary?: (ctx: SuperPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `superPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSuperPrimary?: (ctx: SuperPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `literalPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterLiteralPrimary?: (ctx: LiteralPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `literalPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitLiteralPrimary?: (ctx: LiteralPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `typeRefPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterTypeRefPrimary?: (ctx: TypeRefPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `typeRefPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitTypeRefPrimary?: (ctx: TypeRefPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `voidPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterVoidPrimary?: (ctx: VoidPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `voidPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitVoidPrimary?: (ctx: VoidPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `idPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterIdPrimary?: (ctx: IdPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `idPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitIdPrimary?: (ctx: IdPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `soqlPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSoqlPrimary?: (ctx: SoqlPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `soqlPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSoqlPrimary?: (ctx: SoqlPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `soslPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSoslPrimary?: (ctx: SoslPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `soslPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSoslPrimary?: (ctx: SoslPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `primaryExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `dotExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDotExpression?: (ctx: DotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `dotExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDotExpression?: (ctx: DotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArrayExpression?: (ctx: ArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `methodCallExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMethodCallExpression?: (ctx: MethodCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `methodCallExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMethodCallExpression?: (ctx: MethodCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `newExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `newExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `castExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `castExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `subExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSubExpression?: (ctx: SubExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSubExpression?: (ctx: SubExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `postOpExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPostOpExpression?: (ctx: PostOpExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `postOpExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPostOpExpression?: (ctx: PostOpExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `preOpExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPreOpExpression?: (ctx: PreOpExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `preOpExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPreOpExpression?: (ctx: PreOpExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `negExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNegExpression?: (ctx: NegExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `negExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNegExpression?: (ctx: NegExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `arth1Expression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArth1Expression?: (ctx: Arth1ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `arth1Expression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArth1Expression?: (ctx: Arth1ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `arth2Expression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArth2Expression?: (ctx: Arth2ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `arth2Expression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArth2Expression?: (ctx: Arth2ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitExpression?: (ctx: BitExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitExpression?: (ctx: BitExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `cmpExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCmpExpression?: (ctx: CmpExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `cmpExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCmpExpression?: (ctx: CmpExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `instanceOfExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `instanceOfExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `equalityExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitAndExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitAndExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitNotExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitNotExpression?: (ctx: BitNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitNotExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitNotExpression?: (ctx: BitNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitOrExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitOrExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `logAndExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogAndExpression?: (ctx: LogAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logAndExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogAndExpression?: (ctx: LogAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `logOrExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogOrExpression?: (ctx: LogOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logOrExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogOrExpression?: (ctx: LogOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `condExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCondExpression?: (ctx: CondExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `condExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCondExpression?: (ctx: CondExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `assignExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAssignExpression?: (ctx: AssignExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `assignExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAssignExpression?: (ctx: AssignExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.triggerUnit`.
	 * @param ctx the parse tree
	 */
	enterTriggerUnit?: (ctx: TriggerUnitContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.triggerUnit`.
	 * @param ctx the parse tree
	 */
	exitTriggerUnit?: (ctx: TriggerUnitContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.triggerUnit2`.
	 * @param ctx the parse tree
	 */
	enterTriggerUnit2?: (ctx: TriggerUnit2Context) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.triggerUnit2`.
	 * @param ctx the parse tree
	 */
	exitTriggerUnit2?: (ctx: TriggerUnit2Context) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.triggerCase`.
	 * @param ctx the parse tree
	 */
	enterTriggerCase?: (ctx: TriggerCaseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.triggerCase`.
	 * @param ctx the parse tree
	 */
	exitTriggerCase?: (ctx: TriggerCaseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.triggerBlock`.
	 * @param ctx the parse tree
	 */
	enterTriggerBlock?: (ctx: TriggerBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.triggerBlock`.
	 * @param ctx the parse tree
	 */
	exitTriggerBlock?: (ctx: TriggerBlockContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.triggerBlockMember`.
	 * @param ctx the parse tree
	 */
	enterTriggerBlockMember?: (ctx: TriggerBlockMemberContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.triggerBlockMember`.
	 * @param ctx the parse tree
	 */
	exitTriggerBlockMember?: (ctx: TriggerBlockMemberContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	enterEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	exitEnumConstants?: (ctx: EnumConstantsContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.triggerMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTriggerMemberDeclaration?: (ctx: TriggerMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.triggerMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTriggerMemberDeclaration?: (ctx: TriggerMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.typeRef`.
	 * @param ctx the parse tree
	 */
	enterTypeRef?: (ctx: TypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.typeRef`.
	 * @param ctx the parse tree
	 */
	exitTypeRef?: (ctx: TypeRefContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.arraySubscripts`.
	 * @param ctx the parse tree
	 */
	enterArraySubscripts?: (ctx: ArraySubscriptsContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.arraySubscripts`.
	 * @param ctx the parse tree
	 */
	exitArraySubscripts?: (ctx: ArraySubscriptsContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.whenControl`.
	 * @param ctx the parse tree
	 */
	enterWhenControl?: (ctx: WhenControlContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.whenControl`.
	 * @param ctx the parse tree
	 */
	exitWhenControl?: (ctx: WhenControlContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.whenValue`.
	 * @param ctx the parse tree
	 */
	enterWhenValue?: (ctx: WhenValueContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.whenValue`.
	 * @param ctx the parse tree
	 */
	exitWhenValue?: (ctx: WhenValueContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.whenLiteral`.
	 * @param ctx the parse tree
	 */
	enterWhenLiteral?: (ctx: WhenLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.whenLiteral`.
	 * @param ctx the parse tree
	 */
	exitWhenLiteral?: (ctx: WhenLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.doWhileStatement`.
	 * @param ctx the parse tree
	 */
	enterDoWhileStatement?: (ctx: DoWhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.doWhileStatement`.
	 * @param ctx the parse tree
	 */
	exitDoWhileStatement?: (ctx: DoWhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.accessLevel`.
	 * @param ctx the parse tree
	 */
	enterAccessLevel?: (ctx: AccessLevelContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.accessLevel`.
	 * @param ctx the parse tree
	 */
	exitAccessLevel?: (ctx: AccessLevelContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	enterInsertStatement?: (ctx: InsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	exitInsertStatement?: (ctx: InsertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	exitUpdateStatement?: (ctx: UpdateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	exitDeleteStatement?: (ctx: DeleteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.undeleteStatement`.
	 * @param ctx the parse tree
	 */
	enterUndeleteStatement?: (ctx: UndeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.undeleteStatement`.
	 * @param ctx the parse tree
	 */
	exitUndeleteStatement?: (ctx: UndeleteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.upsertStatement`.
	 * @param ctx the parse tree
	 */
	enterUpsertStatement?: (ctx: UpsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.upsertStatement`.
	 * @param ctx the parse tree
	 */
	exitUpsertStatement?: (ctx: UpsertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.mergeStatement`.
	 * @param ctx the parse tree
	 */
	enterMergeStatement?: (ctx: MergeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.mergeStatement`.
	 * @param ctx the parse tree
	 */
	exitMergeStatement?: (ctx: MergeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.runAsStatement`.
	 * @param ctx the parse tree
	 */
	enterRunAsStatement?: (ctx: RunAsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.runAsStatement`.
	 * @param ctx the parse tree
	 */
	exitRunAsStatement?: (ctx: RunAsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.propertyBlock`.
	 * @param ctx the parse tree
	 */
	enterPropertyBlock?: (ctx: PropertyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.propertyBlock`.
	 * @param ctx the parse tree
	 */
	exitPropertyBlock?: (ctx: PropertyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.getter`.
	 * @param ctx the parse tree
	 */
	enterGetter?: (ctx: GetterContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.getter`.
	 * @param ctx the parse tree
	 */
	exitGetter?: (ctx: GetterContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.setter`.
	 * @param ctx the parse tree
	 */
	enterSetter?: (ctx: SetterContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.setter`.
	 * @param ctx the parse tree
	 */
	exitSetter?: (ctx: SetterContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	exitFinallyBlock?: (ctx: FinallyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.forControl`.
	 * @param ctx the parse tree
	 */
	enterForControl?: (ctx: ForControlContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.forControl`.
	 * @param ctx the parse tree
	 */
	exitForControl?: (ctx: ForControlContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.methodCall`.
	 * @param ctx the parse tree
	 */
	enterMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.methodCall`.
	 * @param ctx the parse tree
	 */
	exitMethodCall?: (ctx: MethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.dotMethodCall`.
	 * @param ctx the parse tree
	 */
	enterDotMethodCall?: (ctx: DotMethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.dotMethodCall`.
	 * @param ctx the parse tree
	 */
	exitDotMethodCall?: (ctx: DotMethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.creator`.
	 * @param ctx the parse tree
	 */
	enterCreator?: (ctx: CreatorContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.creator`.
	 * @param ctx the parse tree
	 */
	exitCreator?: (ctx: CreatorContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.createdName`.
	 * @param ctx the parse tree
	 */
	enterCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.createdName`.
	 * @param ctx the parse tree
	 */
	exitCreatedName?: (ctx: CreatedNameContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.idCreatedNamePair`.
	 * @param ctx the parse tree
	 */
	enterIdCreatedNamePair?: (ctx: IdCreatedNamePairContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.idCreatedNamePair`.
	 * @param ctx the parse tree
	 */
	exitIdCreatedNamePair?: (ctx: IdCreatedNamePairContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.noRest`.
	 * @param ctx the parse tree
	 */
	enterNoRest?: (ctx: NoRestContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.noRest`.
	 * @param ctx the parse tree
	 */
	exitNoRest?: (ctx: NoRestContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterMapCreatorRest?: (ctx: MapCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitMapCreatorRest?: (ctx: MapCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.mapCreatorRestPair`.
	 * @param ctx the parse tree
	 */
	enterMapCreatorRestPair?: (ctx: MapCreatorRestPairContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.mapCreatorRestPair`.
	 * @param ctx the parse tree
	 */
	exitMapCreatorRestPair?: (ctx: MapCreatorRestPairContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.setCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterSetCreatorRest?: (ctx: SetCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.setCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitSetCreatorRest?: (ctx: SetCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.soqlLiteral`.
	 * @param ctx the parse tree
	 */
	enterSoqlLiteral?: (ctx: SoqlLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.soqlLiteral`.
	 * @param ctx the parse tree
	 */
	exitSoqlLiteral?: (ctx: SoqlLiteralContext) => void;

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
	 * Enter a parse tree produced by `SoqlParser.subQueryFromNameList`.
	 * @param ctx the parse tree
	 */
	enterSubQueryFromNameList?: (ctx: SubQueryFromNameListContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.subQueryFromNameList`.
	 * @param ctx the parse tree
	 */
	exitSubQueryFromNameList?: (ctx: SubQueryFromNameListContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.subQueryFromNameFieldName`.
	 * @param ctx the parse tree
	 */
	enterSubQueryFromNameFieldName?: (ctx: SubQueryFromNameFieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.subQueryFromNameFieldName`.
	 * @param ctx the parse tree
	 */
	exitSubQueryFromNameFieldName?: (ctx: SubQueryFromNameFieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.subQueryFromNameSoqlId`.
	 * @param ctx the parse tree
	 */
	enterSubQueryFromNameSoqlId?: (ctx: SubQueryFromNameSoqlIdContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.subQueryFromNameSoqlId`.
	 * @param ctx the parse tree
	 */
	exitSubQueryFromNameSoqlId?: (ctx: SubQueryFromNameSoqlIdContext) => void;

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
	 * Enter a parse tree produced by `SoqlParser.fromNameFieldName`.
	 * @param ctx the parse tree
	 */
	enterFromNameFieldName?: (ctx: FromNameFieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fromNameFieldName`.
	 * @param ctx the parse tree
	 */
	exitFromNameFieldName?: (ctx: FromNameFieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.fromNameSoqlId`.
	 * @param ctx the parse tree
	 */
	enterFromNameSoqlId?: (ctx: FromNameSoqlIdContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.fromNameSoqlId`.
	 * @param ctx the parse tree
	 */
	exitFromNameSoqlId?: (ctx: FromNameSoqlIdContext) => void;

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
	 * Enter a parse tree produced by `SoqlParser.subFieldEntryFieldName`.
	 * @param ctx the parse tree
	 */
	enterSubFieldEntryFieldName?: (ctx: SubFieldEntryFieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.subFieldEntryFieldName`.
	 * @param ctx the parse tree
	 */
	exitSubFieldEntryFieldName?: (ctx: SubFieldEntryFieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `SoqlParser.subFieldEntrySoqlId`.
	 * @param ctx the parse tree
	 */
	enterSubFieldEntrySoqlId?: (ctx: SubFieldEntrySoqlIdContext) => void;
	/**
	 * Exit a parse tree produced by `SoqlParser.subFieldEntrySoqlId`.
	 * @param ctx the parse tree
	 */
	exitSubFieldEntrySoqlId?: (ctx: SubFieldEntrySoqlIdContext) => void;

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

