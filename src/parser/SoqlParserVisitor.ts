// Generated from .\src\parser\SoqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SoqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SoqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `thisPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisPrimary?: (ctx: ThisPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `superPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperPrimary?: (ctx: SuperPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralPrimary?: (ctx: LiteralPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeRefPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRefPrimary?: (ctx: TypeRefPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `voidPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoidPrimary?: (ctx: VoidPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `idPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdPrimary?: (ctx: IdPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `soqlPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoqlPrimary?: (ctx: SoqlPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `soslPrimary`
	 * labeled alternative in `SoqlParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoslPrimary?: (ctx: SoslPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `primaryExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `dotExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotExpression?: (ctx: DotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `methodCallExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCallExpression?: (ctx: MethodCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `newExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpression?: (ctx: NewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `castExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `subExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubExpression?: (ctx: SubExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `postOpExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostOpExpression?: (ctx: PostOpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `preOpExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreOpExpression?: (ctx: PreOpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `negExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegExpression?: (ctx: NegExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arth1Expression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArth1Expression?: (ctx: Arth1ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arth2Expression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArth2Expression?: (ctx: Arth2ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitExpression?: (ctx: BitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `cmpExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmpExpression?: (ctx: CmpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `instanceOfExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitAndExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitNotExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitNotExpression?: (ctx: BitNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitOrExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logAndExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogAndExpression?: (ctx: LogAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logOrExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogOrExpression?: (ctx: LogOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `condExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondExpression?: (ctx: CondExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignExpression`
	 * labeled alternative in `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignExpression?: (ctx: AssignExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.triggerUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerUnit?: (ctx: TriggerUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.triggerUnit2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerUnit2?: (ctx: TriggerUnit2Context) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.triggerCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerCase?: (ctx: TriggerCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.triggerBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerBlock?: (ctx: TriggerBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.triggerBlockMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerBlockMember?: (ctx: TriggerBlockMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.triggerMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerMemberDeclaration?: (ctx: TriggerMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.typeRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRef?: (ctx: TypeRefContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.arraySubscripts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArraySubscripts?: (ctx: ArraySubscriptsContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.whenControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenControl?: (ctx: WhenControlContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.whenValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenValue?: (ctx: WhenValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.whenLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenLiteral?: (ctx: WhenLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.doWhileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.accessLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessLevel?: (ctx: AccessLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.insertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStatement?: (ctx: InsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.updateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.deleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.undeleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUndeleteStatement?: (ctx: UndeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.upsertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpsertStatement?: (ctx: UpsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.mergeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeStatement?: (ctx: MergeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.runAsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRunAsStatement?: (ctx: RunAsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.propertyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyBlock?: (ctx: PropertyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.getter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter?: (ctx: GetterContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.setter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter?: (ctx: SetterContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.dotMethodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotMethodCall?: (ctx: DotMethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.idCreatedNamePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdCreatedNamePair?: (ctx: IdCreatedNamePairContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.noRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoRest?: (ctx: NoRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.classCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapCreatorRest?: (ctx: MapCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.mapCreatorRestPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapCreatorRestPair?: (ctx: MapCreatorRestPairContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.setCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCreatorRest?: (ctx: SetCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.soqlLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoqlLiteral?: (ctx: SoqlLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.endOfQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndOfQuery?: (ctx: EndOfQueryContext) => Result;

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
	 * Visit a parse tree produced by `SoqlParser.subQueryFromNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQueryFromNameList?: (ctx: SubQueryFromNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.subQueryFromNameFieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQueryFromNameFieldName?: (ctx: SubQueryFromNameFieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.subQueryFromNameSoqlId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQueryFromNameSoqlId?: (ctx: SubQueryFromNameSoqlIdContext) => Result;

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
	 * Visit a parse tree produced by `SoqlParser.fromNameFieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromNameFieldName?: (ctx: FromNameFieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.fromNameSoqlId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromNameSoqlId?: (ctx: FromNameSoqlIdContext) => Result;

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
	 * Visit a parse tree produced by `SoqlParser.subFieldEntryFieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubFieldEntryFieldName?: (ctx: SubFieldEntryFieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SoqlParser.subFieldEntrySoqlId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubFieldEntrySoqlId?: (ctx: SubFieldEntrySoqlIdContext) => Result;

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

