// Generated from .\src\parser\SoqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SoqlParserListener } from "./SoqlParserListener";
import { SoqlParserVisitor } from "./SoqlParserVisitor";


export class SoqlParser extends Parser {
	public static readonly ABSTRACT = 1;
	public static readonly AFTER = 2;
	public static readonly BEFORE = 3;
	public static readonly BREAK = 4;
	public static readonly CATCH = 5;
	public static readonly CLASS = 6;
	public static readonly CONTINUE = 7;
	public static readonly DELETE = 8;
	public static readonly DO = 9;
	public static readonly ELSE = 10;
	public static readonly ENUM = 11;
	public static readonly EXTENDS = 12;
	public static readonly FINAL = 13;
	public static readonly FINALLY = 14;
	public static readonly FOR = 15;
	public static readonly GET = 16;
	public static readonly GLOBAL = 17;
	public static readonly IF = 18;
	public static readonly IMPLEMENTS = 19;
	public static readonly INHERITED = 20;
	public static readonly INSERT = 21;
	public static readonly INSTANCEOF = 22;
	public static readonly INTERFACE = 23;
	public static readonly MERGE = 24;
	public static readonly NEW = 25;
	public static readonly NULL = 26;
	public static readonly ON = 27;
	public static readonly OVERRIDE = 28;
	public static readonly PRIVATE = 29;
	public static readonly PROTECTED = 30;
	public static readonly PUBLIC = 31;
	public static readonly RETURN = 32;
	public static readonly SYSTEMRUNAS = 33;
	public static readonly SET = 34;
	public static readonly SHARING = 35;
	public static readonly STATIC = 36;
	public static readonly SUPER = 37;
	public static readonly SWITCH = 38;
	public static readonly TESTMETHOD = 39;
	public static readonly THIS = 40;
	public static readonly THROW = 41;
	public static readonly TRANSIENT = 42;
	public static readonly TRIGGER = 43;
	public static readonly TRY = 44;
	public static readonly UNDELETE = 45;
	public static readonly UPDATE = 46;
	public static readonly UPSERT = 47;
	public static readonly VIRTUAL = 48;
	public static readonly VOID = 49;
	public static readonly WEBSERVICE = 50;
	public static readonly WHEN = 51;
	public static readonly WHILE = 52;
	public static readonly WITH = 53;
	public static readonly WITHOUT = 54;
	public static readonly LIST = 55;
	public static readonly MAP = 56;
	public static readonly SYSTEM = 57;
	public static readonly USER = 58;
	public static readonly ZF_INTELLISENSE = 59;
	public static readonly SZF_INTELLISENSE = 60;
	public static readonly SEZF_INTELLISENSE = 61;
	public static readonly SELZF_INTELLISENSE = 62;
	public static readonly SELEZF_INTELLISENSE = 63;
	public static readonly SELECZF_INTELLISENSE = 64;
	public static readonly FZF_INTELLISENSE = 65;
	public static readonly FRZF_INTELLISENSE = 66;
	public static readonly FROZF_INTELLISENSE = 67;
	public static readonly SELECT = 68;
	public static readonly COUNT = 69;
	public static readonly FROM = 70;
	public static readonly AS = 71;
	public static readonly USING = 72;
	public static readonly SCOPE = 73;
	public static readonly WHERE = 74;
	public static readonly ORDER = 75;
	public static readonly BY = 76;
	public static readonly LIMIT = 77;
	public static readonly SOQLAND = 78;
	public static readonly SOQLOR = 79;
	public static readonly NOT = 80;
	public static readonly AVG = 81;
	public static readonly COUNT_DISTINCT = 82;
	public static readonly MIN = 83;
	public static readonly MAX = 84;
	public static readonly SUM = 85;
	public static readonly TYPEOF = 86;
	public static readonly END = 87;
	public static readonly THEN = 88;
	public static readonly LIKE = 89;
	public static readonly IN = 90;
	public static readonly INCLUDES = 91;
	public static readonly EXCLUDES = 92;
	public static readonly ASC = 93;
	public static readonly DESC = 94;
	public static readonly NULLS = 95;
	public static readonly FIRST = 96;
	public static readonly LAST = 97;
	public static readonly GROUP = 98;
	public static readonly ALL = 99;
	public static readonly ROWS = 100;
	public static readonly VIEW = 101;
	public static readonly HAVING = 102;
	public static readonly ROLLUP = 103;
	public static readonly TOLABEL = 104;
	public static readonly OFFSET = 105;
	public static readonly DATA = 106;
	public static readonly CATEGORY = 107;
	public static readonly AT = 108;
	public static readonly ABOVE = 109;
	public static readonly BELOW = 110;
	public static readonly ABOVE_OR_BELOW = 111;
	public static readonly SECURITY_ENFORCED = 112;
	public static readonly SYSTEM_MODE = 113;
	public static readonly USER_MODE = 114;
	public static readonly REFERENCE = 115;
	public static readonly CUBE = 116;
	public static readonly FORMAT = 117;
	public static readonly TRACKING = 118;
	public static readonly VIEWSTAT = 119;
	public static readonly CUSTOM = 120;
	public static readonly STANDARD = 121;
	public static readonly DISTANCE = 122;
	public static readonly GEOLOCATION = 123;
	public static readonly CALENDAR_MONTH = 124;
	public static readonly CALENDAR_QUARTER = 125;
	public static readonly CALENDAR_YEAR = 126;
	public static readonly DAY_IN_MONTH = 127;
	public static readonly DAY_IN_WEEK = 128;
	public static readonly DAY_IN_YEAR = 129;
	public static readonly DAY_ONLY = 130;
	public static readonly FISCAL_MONTH = 131;
	public static readonly FISCAL_QUARTER = 132;
	public static readonly FISCAL_YEAR = 133;
	public static readonly HOUR_IN_DAY = 134;
	public static readonly WEEK_IN_MONTH = 135;
	public static readonly WEEK_IN_YEAR = 136;
	public static readonly CONVERT_TIMEZONE = 137;
	public static readonly YESTERDAY = 138;
	public static readonly TODAY = 139;
	public static readonly TOMORROW = 140;
	public static readonly LAST_WEEK = 141;
	public static readonly THIS_WEEK = 142;
	public static readonly NEXT_WEEK = 143;
	public static readonly LAST_MONTH = 144;
	public static readonly THIS_MONTH = 145;
	public static readonly NEXT_MONTH = 146;
	public static readonly LAST_90_DAYS = 147;
	public static readonly NEXT_90_DAYS = 148;
	public static readonly LAST_N_DAYS_N = 149;
	public static readonly NEXT_N_DAYS_N = 150;
	public static readonly N_DAYS_AGO_N = 151;
	public static readonly NEXT_N_WEEKS_N = 152;
	public static readonly LAST_N_WEEKS_N = 153;
	public static readonly N_WEEKS_AGO_N = 154;
	public static readonly NEXT_N_MONTHS_N = 155;
	public static readonly LAST_N_MONTHS_N = 156;
	public static readonly N_MONTHS_AGO_N = 157;
	public static readonly THIS_QUARTER = 158;
	public static readonly LAST_QUARTER = 159;
	public static readonly NEXT_QUARTER = 160;
	public static readonly NEXT_N_QUARTERS_N = 161;
	public static readonly LAST_N_QUARTERS_N = 162;
	public static readonly N_QUARTERS_AGO_N = 163;
	public static readonly THIS_YEAR = 164;
	public static readonly LAST_YEAR = 165;
	public static readonly NEXT_YEAR = 166;
	public static readonly NEXT_N_YEARS_N = 167;
	public static readonly LAST_N_YEARS_N = 168;
	public static readonly N_YEARS_AGO_N = 169;
	public static readonly THIS_FISCAL_QUARTER = 170;
	public static readonly LAST_FISCAL_QUARTER = 171;
	public static readonly NEXT_FISCAL_QUARTER = 172;
	public static readonly NEXT_N_FISCAL_QUARTERS_N = 173;
	public static readonly LAST_N_FISCAL_QUARTERS_N = 174;
	public static readonly N_FISCAL_QUARTERS_AGO_N = 175;
	public static readonly THIS_FISCAL_YEAR = 176;
	public static readonly LAST_FISCAL_YEAR = 177;
	public static readonly NEXT_FISCAL_YEAR = 178;
	public static readonly NEXT_N_FISCAL_YEARS_N = 179;
	public static readonly LAST_N_FISCAL_YEARS_N = 180;
	public static readonly N_FISCAL_YEARS_AGO_N = 181;
	public static readonly DateLiteral = 182;
	public static readonly DateTimeLiteral = 183;
	public static readonly IntegralCurrencyLiteral = 184;
	public static readonly FIND = 185;
	public static readonly EMAIL = 186;
	public static readonly NAME = 187;
	public static readonly PHONE = 188;
	public static readonly SIDEBAR = 189;
	public static readonly FIELDS = 190;
	public static readonly METADATA = 191;
	public static readonly PRICEBOOKID = 192;
	public static readonly NETWORK = 193;
	public static readonly SNIPPET = 194;
	public static readonly TARGET_LENGTH = 195;
	public static readonly DIVISION = 196;
	public static readonly RETURNING = 197;
	public static readonly LISTVIEW = 198;
	public static readonly FindLiteral = 199;
	public static readonly FindLiteralAlt = 200;
	public static readonly IntegerLiteral = 201;
	public static readonly LongLiteral = 202;
	public static readonly NumberLiteral = 203;
	public static readonly BooleanLiteral = 204;
	public static readonly StringLiteral = 205;
	public static readonly NullLiteral = 206;
	public static readonly LPAREN = 207;
	public static readonly RPAREN = 208;
	public static readonly LBRACE = 209;
	public static readonly RBRACE = 210;
	public static readonly LBRACK = 211;
	public static readonly RBRACK = 212;
	public static readonly SEMI = 213;
	public static readonly COMMA = 214;
	public static readonly DOT = 215;
	public static readonly ASSIGN = 216;
	public static readonly GT = 217;
	public static readonly LT = 218;
	public static readonly BANG = 219;
	public static readonly TILDE = 220;
	public static readonly QUESTIONDOT = 221;
	public static readonly QUESTION = 222;
	public static readonly COLON = 223;
	public static readonly EQUAL = 224;
	public static readonly TRIPLEEQUAL = 225;
	public static readonly NOTEQUAL = 226;
	public static readonly LESSANDGREATER = 227;
	public static readonly TRIPLENOTEQUAL = 228;
	public static readonly AND = 229;
	public static readonly OR = 230;
	public static readonly INC = 231;
	public static readonly DEC = 232;
	public static readonly ADD = 233;
	public static readonly SUB = 234;
	public static readonly MUL = 235;
	public static readonly DIV = 236;
	public static readonly BITAND = 237;
	public static readonly BITOR = 238;
	public static readonly CARET = 239;
	public static readonly MAPTO = 240;
	public static readonly ADD_ASSIGN = 241;
	public static readonly SUB_ASSIGN = 242;
	public static readonly MUL_ASSIGN = 243;
	public static readonly DIV_ASSIGN = 244;
	public static readonly AND_ASSIGN = 245;
	public static readonly OR_ASSIGN = 246;
	public static readonly XOR_ASSIGN = 247;
	public static readonly LSHIFT_ASSIGN = 248;
	public static readonly RSHIFT_ASSIGN = 249;
	public static readonly URSHIFT_ASSIGN = 250;
	public static readonly ATSIGN = 251;
	public static readonly Identifier = 252;
	public static readonly WS = 253;
	public static readonly DOC_COMMENT = 254;
	public static readonly COMMENT = 255;
	public static readonly LINE_COMMENT = 256;
	public static readonly RULE_triggerUnit = 0;
	public static readonly RULE_triggerUnit2 = 1;
	public static readonly RULE_triggerCase = 2;
	public static readonly RULE_triggerBlock = 3;
	public static readonly RULE_triggerBlockMember = 4;
	public static readonly RULE_compilationUnit = 5;
	public static readonly RULE_typeDeclaration = 6;
	public static readonly RULE_classDeclaration = 7;
	public static readonly RULE_enumDeclaration = 8;
	public static readonly RULE_enumConstants = 9;
	public static readonly RULE_interfaceDeclaration = 10;
	public static readonly RULE_typeList = 11;
	public static readonly RULE_classBody = 12;
	public static readonly RULE_interfaceBody = 13;
	public static readonly RULE_classBodyDeclaration = 14;
	public static readonly RULE_modifier = 15;
	public static readonly RULE_memberDeclaration = 16;
	public static readonly RULE_triggerMemberDeclaration = 17;
	public static readonly RULE_methodDeclaration = 18;
	public static readonly RULE_constructorDeclaration = 19;
	public static readonly RULE_fieldDeclaration = 20;
	public static readonly RULE_propertyDeclaration = 21;
	public static readonly RULE_interfaceMethodDeclaration = 22;
	public static readonly RULE_variableDeclarators = 23;
	public static readonly RULE_variableDeclarator = 24;
	public static readonly RULE_arrayInitializer = 25;
	public static readonly RULE_typeRef = 26;
	public static readonly RULE_arraySubscripts = 27;
	public static readonly RULE_typeName = 28;
	public static readonly RULE_typeArguments = 29;
	public static readonly RULE_formalParameters = 30;
	public static readonly RULE_formalParameterList = 31;
	public static readonly RULE_formalParameter = 32;
	public static readonly RULE_qualifiedName = 33;
	public static readonly RULE_literal = 34;
	public static readonly RULE_annotation = 35;
	public static readonly RULE_elementValuePairs = 36;
	public static readonly RULE_elementValuePair = 37;
	public static readonly RULE_elementValue = 38;
	public static readonly RULE_elementValueArrayInitializer = 39;
	public static readonly RULE_block = 40;
	public static readonly RULE_localVariableDeclarationStatement = 41;
	public static readonly RULE_localVariableDeclaration = 42;
	public static readonly RULE_statement = 43;
	public static readonly RULE_ifStatement = 44;
	public static readonly RULE_switchStatement = 45;
	public static readonly RULE_whenControl = 46;
	public static readonly RULE_whenValue = 47;
	public static readonly RULE_whenLiteral = 48;
	public static readonly RULE_forStatement = 49;
	public static readonly RULE_whileStatement = 50;
	public static readonly RULE_doWhileStatement = 51;
	public static readonly RULE_tryStatement = 52;
	public static readonly RULE_returnStatement = 53;
	public static readonly RULE_throwStatement = 54;
	public static readonly RULE_breakStatement = 55;
	public static readonly RULE_continueStatement = 56;
	public static readonly RULE_accessLevel = 57;
	public static readonly RULE_insertStatement = 58;
	public static readonly RULE_updateStatement = 59;
	public static readonly RULE_deleteStatement = 60;
	public static readonly RULE_undeleteStatement = 61;
	public static readonly RULE_upsertStatement = 62;
	public static readonly RULE_mergeStatement = 63;
	public static readonly RULE_runAsStatement = 64;
	public static readonly RULE_expressionStatement = 65;
	public static readonly RULE_propertyBlock = 66;
	public static readonly RULE_getter = 67;
	public static readonly RULE_setter = 68;
	public static readonly RULE_catchClause = 69;
	public static readonly RULE_finallyBlock = 70;
	public static readonly RULE_forControl = 71;
	public static readonly RULE_forInit = 72;
	public static readonly RULE_enhancedForControl = 73;
	public static readonly RULE_forUpdate = 74;
	public static readonly RULE_parExpression = 75;
	public static readonly RULE_expressionList = 76;
	public static readonly RULE_expression = 77;
	public static readonly RULE_primary = 78;
	public static readonly RULE_methodCall = 79;
	public static readonly RULE_dotMethodCall = 80;
	public static readonly RULE_creator = 81;
	public static readonly RULE_createdName = 82;
	public static readonly RULE_idCreatedNamePair = 83;
	public static readonly RULE_noRest = 84;
	public static readonly RULE_classCreatorRest = 85;
	public static readonly RULE_arrayCreatorRest = 86;
	public static readonly RULE_mapCreatorRest = 87;
	public static readonly RULE_mapCreatorRestPair = 88;
	public static readonly RULE_setCreatorRest = 89;
	public static readonly RULE_arguments = 90;
	public static readonly RULE_soqlLiteral = 91;
	public static readonly RULE_query = 92;
	public static readonly RULE_endOfQuery = 93;
	public static readonly RULE_selectOrSoqlId = 94;
	public static readonly RULE_fromOrSoqlId = 95;
	public static readonly RULE_subQuery = 96;
	public static readonly RULE_subQueryFromNameList = 97;
	public static readonly RULE_subQueryFromNameFieldName = 98;
	public static readonly RULE_subQueryFromNameSoqlId = 99;
	public static readonly RULE_selectList = 100;
	public static readonly RULE_selectEntry = 101;
	public static readonly RULE_fieldName = 102;
	public static readonly RULE_fromNameList = 103;
	public static readonly RULE_fromNameFieldName = 104;
	public static readonly RULE_fromNameSoqlId = 105;
	public static readonly RULE_fromSoqlId = 106;
	public static readonly RULE_subFieldList = 107;
	public static readonly RULE_subFieldEntry = 108;
	public static readonly RULE_subFieldEntryFieldName = 109;
	public static readonly RULE_subFieldEntrySoqlId = 110;
	public static readonly RULE_soqlFieldsParameter = 111;
	public static readonly RULE_soqlFunction = 112;
	public static readonly RULE_dateFieldName = 113;
	public static readonly RULE_locationValue = 114;
	public static readonly RULE_coordinateValue = 115;
	public static readonly RULE_typeOf = 116;
	public static readonly RULE_whenClause = 117;
	public static readonly RULE_elseClause = 118;
	public static readonly RULE_fieldNameList = 119;
	public static readonly RULE_usingScope = 120;
	public static readonly RULE_whereClause = 121;
	public static readonly RULE_logicalExpression = 122;
	public static readonly RULE_andOrSoql = 123;
	public static readonly RULE_conditionalExpression = 124;
	public static readonly RULE_fieldExpression = 125;
	public static readonly RULE_comparisonOperator = 126;
	public static readonly RULE_value = 127;
	public static readonly RULE_valueList = 128;
	public static readonly RULE_signedNumber = 129;
	public static readonly RULE_withClause = 130;
	public static readonly RULE_filteringExpression = 131;
	public static readonly RULE_dataCategorySelection = 132;
	public static readonly RULE_dataCategoryName = 133;
	public static readonly RULE_filteringSelector = 134;
	public static readonly RULE_groupByClause = 135;
	public static readonly RULE_orderByClause = 136;
	public static readonly RULE_fieldOrderList = 137;
	public static readonly RULE_fieldOrder = 138;
	public static readonly RULE_limitClause = 139;
	public static readonly RULE_offsetClause = 140;
	public static readonly RULE_allRowsClause = 141;
	public static readonly RULE_forClauses = 142;
	public static readonly RULE_dateFormula = 143;
	public static readonly RULE_signedInteger = 144;
	public static readonly RULE_soqlId = 145;
	public static readonly RULE_soslLiteral = 146;
	public static readonly RULE_soslLiteralAlt = 147;
	public static readonly RULE_soslClauses = 148;
	public static readonly RULE_searchGroup = 149;
	public static readonly RULE_fieldSpecList = 150;
	public static readonly RULE_fieldSpec = 151;
	public static readonly RULE_fieldList = 152;
	public static readonly RULE_updateList = 153;
	public static readonly RULE_updateType = 154;
	public static readonly RULE_networkList = 155;
	public static readonly RULE_soslId = 156;
	public static readonly RULE_id = 157;
	public static readonly RULE_anyId = 158;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"triggerUnit", "triggerUnit2", "triggerCase", "triggerBlock", "triggerBlockMember", 
		"compilationUnit", "typeDeclaration", "classDeclaration", "enumDeclaration", 
		"enumConstants", "interfaceDeclaration", "typeList", "classBody", "interfaceBody", 
		"classBodyDeclaration", "modifier", "memberDeclaration", "triggerMemberDeclaration", 
		"methodDeclaration", "constructorDeclaration", "fieldDeclaration", "propertyDeclaration", 
		"interfaceMethodDeclaration", "variableDeclarators", "variableDeclarator", 
		"arrayInitializer", "typeRef", "arraySubscripts", "typeName", "typeArguments", 
		"formalParameters", "formalParameterList", "formalParameter", "qualifiedName", 
		"literal", "annotation", "elementValuePairs", "elementValuePair", "elementValue", 
		"elementValueArrayInitializer", "block", "localVariableDeclarationStatement", 
		"localVariableDeclaration", "statement", "ifStatement", "switchStatement", 
		"whenControl", "whenValue", "whenLiteral", "forStatement", "whileStatement", 
		"doWhileStatement", "tryStatement", "returnStatement", "throwStatement", 
		"breakStatement", "continueStatement", "accessLevel", "insertStatement", 
		"updateStatement", "deleteStatement", "undeleteStatement", "upsertStatement", 
		"mergeStatement", "runAsStatement", "expressionStatement", "propertyBlock", 
		"getter", "setter", "catchClause", "finallyBlock", "forControl", "forInit", 
		"enhancedForControl", "forUpdate", "parExpression", "expressionList", 
		"expression", "primary", "methodCall", "dotMethodCall", "creator", "createdName", 
		"idCreatedNamePair", "noRest", "classCreatorRest", "arrayCreatorRest", 
		"mapCreatorRest", "mapCreatorRestPair", "setCreatorRest", "arguments", 
		"soqlLiteral", "query", "endOfQuery", "selectOrSoqlId", "fromOrSoqlId", 
		"subQuery", "subQueryFromNameList", "subQueryFromNameFieldName", "subQueryFromNameSoqlId", 
		"selectList", "selectEntry", "fieldName", "fromNameList", "fromNameFieldName", 
		"fromNameSoqlId", "fromSoqlId", "subFieldList", "subFieldEntry", "subFieldEntryFieldName", 
		"subFieldEntrySoqlId", "soqlFieldsParameter", "soqlFunction", "dateFieldName", 
		"locationValue", "coordinateValue", "typeOf", "whenClause", "elseClause", 
		"fieldNameList", "usingScope", "whereClause", "logicalExpression", "andOrSoql", 
		"conditionalExpression", "fieldExpression", "comparisonOperator", "value", 
		"valueList", "signedNumber", "withClause", "filteringExpression", "dataCategorySelection", 
		"dataCategoryName", "filteringSelector", "groupByClause", "orderByClause", 
		"fieldOrderList", "fieldOrder", "limitClause", "offsetClause", "allRowsClause", 
		"forClauses", "dateFormula", "signedInteger", "soqlId", "soslLiteral", 
		"soslLiteralAlt", "soslClauses", "searchGroup", "fieldSpecList", "fieldSpec", 
		"fieldList", "updateList", "updateType", "networkList", "soslId", "id", 
		"anyId",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'abstract'", "'after'", "'before'", "'break'", "'catch'", 
		"'class'", "'continue'", "'delete'", "'do'", "'else'", "'enum'", "'extends'", 
		"'final'", "'finally'", "'for'", "'get'", "'global'", "'if'", "'implements'", 
		"'inherited'", "'insert'", "'instanceof'", "'interface'", "'merge'", "'new'", 
		"'null'", "'on'", "'override'", "'private'", "'protected'", "'public'", 
		"'return'", "'system.runas'", "'set'", "'sharing'", "'static'", "'super'", 
		"'switch'", "'testmethod'", "'this'", "'throw'", "'transient'", "'trigger'", 
		"'try'", "'undelete'", "'update'", "'upsert'", "'virtual'", "'void'", 
		"'webservice'", "'when'", "'while'", "'with'", "'without'", "'list'", 
		"'map'", "'system'", "'user'", "'__zf_szi_location__'", "'s__zf_szi_location__'", 
		"'se__zf_szi_location__'", "'sel__zf_szi_location__'", "'sele__zf_szi_location__'", 
		"'selec__zf_szi_location__'", "'f__zf_szi_location__'", "'fr__zf_szi_location__'", 
		"'fro__zf_szi_location__'", "'select'", "'count'", "'from'", "'as'", "'using'", 
		"'scope'", "'where'", "'order'", "'by'", "'limit'", "'and'", "'or'", "'not'", 
		"'avg'", "'count_distinct'", "'min'", "'max'", "'sum'", "'typeof'", "'end'", 
		"'then'", "'like'", "'in'", "'includes'", "'excludes'", "'asc'", "'desc'", 
		"'nulls'", "'first'", "'last'", "'group'", "'all'", "'rows'", "'view'", 
		"'having'", "'rollup'", "'tolabel'", "'offset'", "'data'", "'category'", 
		"'at'", "'above'", "'below'", "'above_or_below'", "'security_enforced'", 
		"'system_mode'", "'user_mode'", "'reference'", "'cube'", "'format'", "'tracking'", 
		"'viewstat'", "'custom'", "'standard'", "'distance'", "'geolocation'", 
		"'calendar_month'", "'calendar_quarter'", "'calendar_year'", "'day_in_month'", 
		"'day_in_week'", "'day_in_year'", "'day_only'", "'fiscal_month'", "'fiscal_quarter'", 
		"'fiscal_year'", "'hour_in_day'", "'week_in_month'", "'week_in_year'", 
		"'converttimezone'", "'yesterday'", "'today'", "'tomorrow'", "'last_week'", 
		"'this_week'", "'next_week'", "'last_month'", "'this_month'", "'next_month'", 
		"'last_90_days'", "'next_90_days'", "'last_n_days'", "'next_n_days'", 
		"'n_days_ago'", "'next_n_weeks'", "'last_n_weeks'", "'n_weeks_ago'", "'next_n_months'", 
		"'last_n_months'", "'n_months_ago'", "'this_quarter'", "'last_quarter'", 
		"'next_quarter'", "'next_n_quarters'", "'last_n_quarters'", "'n_quarters_ago'", 
		"'this_year'", "'last_year'", "'next_year'", "'next_n_years'", "'last_n_years'", 
		"'n_years_ago'", "'this_fiscal_quarter'", "'last_fiscal_quarter'", "'next_fiscal_quarter'", 
		"'next_n_fiscal_quarters'", "'last_n_fiscal_quarters'", "'n_fiscal_quarters_ago'", 
		"'this_fiscal_year'", "'last_fiscal_year'", "'next_fiscal_year'", "'next_n_fiscal_years'", 
		"'last_n_fiscal_years'", "'n_fiscal_years_ago'", undefined, undefined, 
		undefined, "'find'", "'email'", "'name'", "'phone'", "'sidebar'", "'fields'", 
		"'metadata'", "'pricebookid'", "'network'", "'snippet'", "'target_length'", 
		"'division'", "'returning'", "'listview'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'{'", 
		"'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'", 
		"'~'", "'?.'", "'?'", "':'", "'=='", "'==='", "'!='", "'<>'", "'!=='", 
		"'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", 
		"'^'", "'=>'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", 
		"'<<='", "'>>='", "'>>>='", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSTRACT", "AFTER", "BEFORE", "BREAK", "CATCH", "CLASS", "CONTINUE", 
		"DELETE", "DO", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FOR", 
		"GET", "GLOBAL", "IF", "IMPLEMENTS", "INHERITED", "INSERT", "INSTANCEOF", 
		"INTERFACE", "MERGE", "NEW", "NULL", "ON", "OVERRIDE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "RETURN", "SYSTEMRUNAS", "SET", "SHARING", "STATIC", "SUPER", 
		"SWITCH", "TESTMETHOD", "THIS", "THROW", "TRANSIENT", "TRIGGER", "TRY", 
		"UNDELETE", "UPDATE", "UPSERT", "VIRTUAL", "VOID", "WEBSERVICE", "WHEN", 
		"WHILE", "WITH", "WITHOUT", "LIST", "MAP", "SYSTEM", "USER", "ZF_INTELLISENSE", 
		"SZF_INTELLISENSE", "SEZF_INTELLISENSE", "SELZF_INTELLISENSE", "SELEZF_INTELLISENSE", 
		"SELECZF_INTELLISENSE", "FZF_INTELLISENSE", "FRZF_INTELLISENSE", "FROZF_INTELLISENSE", 
		"SELECT", "COUNT", "FROM", "AS", "USING", "SCOPE", "WHERE", "ORDER", "BY", 
		"LIMIT", "SOQLAND", "SOQLOR", "NOT", "AVG", "COUNT_DISTINCT", "MIN", "MAX", 
		"SUM", "TYPEOF", "END", "THEN", "LIKE", "IN", "INCLUDES", "EXCLUDES", 
		"ASC", "DESC", "NULLS", "FIRST", "LAST", "GROUP", "ALL", "ROWS", "VIEW", 
		"HAVING", "ROLLUP", "TOLABEL", "OFFSET", "DATA", "CATEGORY", "AT", "ABOVE", 
		"BELOW", "ABOVE_OR_BELOW", "SECURITY_ENFORCED", "SYSTEM_MODE", "USER_MODE", 
		"REFERENCE", "CUBE", "FORMAT", "TRACKING", "VIEWSTAT", "CUSTOM", "STANDARD", 
		"DISTANCE", "GEOLOCATION", "CALENDAR_MONTH", "CALENDAR_QUARTER", "CALENDAR_YEAR", 
		"DAY_IN_MONTH", "DAY_IN_WEEK", "DAY_IN_YEAR", "DAY_ONLY", "FISCAL_MONTH", 
		"FISCAL_QUARTER", "FISCAL_YEAR", "HOUR_IN_DAY", "WEEK_IN_MONTH", "WEEK_IN_YEAR", 
		"CONVERT_TIMEZONE", "YESTERDAY", "TODAY", "TOMORROW", "LAST_WEEK", "THIS_WEEK", 
		"NEXT_WEEK", "LAST_MONTH", "THIS_MONTH", "NEXT_MONTH", "LAST_90_DAYS", 
		"NEXT_90_DAYS", "LAST_N_DAYS_N", "NEXT_N_DAYS_N", "N_DAYS_AGO_N", "NEXT_N_WEEKS_N", 
		"LAST_N_WEEKS_N", "N_WEEKS_AGO_N", "NEXT_N_MONTHS_N", "LAST_N_MONTHS_N", 
		"N_MONTHS_AGO_N", "THIS_QUARTER", "LAST_QUARTER", "NEXT_QUARTER", "NEXT_N_QUARTERS_N", 
		"LAST_N_QUARTERS_N", "N_QUARTERS_AGO_N", "THIS_YEAR", "LAST_YEAR", "NEXT_YEAR", 
		"NEXT_N_YEARS_N", "LAST_N_YEARS_N", "N_YEARS_AGO_N", "THIS_FISCAL_QUARTER", 
		"LAST_FISCAL_QUARTER", "NEXT_FISCAL_QUARTER", "NEXT_N_FISCAL_QUARTERS_N", 
		"LAST_N_FISCAL_QUARTERS_N", "N_FISCAL_QUARTERS_AGO_N", "THIS_FISCAL_YEAR", 
		"LAST_FISCAL_YEAR", "NEXT_FISCAL_YEAR", "NEXT_N_FISCAL_YEARS_N", "LAST_N_FISCAL_YEARS_N", 
		"N_FISCAL_YEARS_AGO_N", "DateLiteral", "DateTimeLiteral", "IntegralCurrencyLiteral", 
		"FIND", "EMAIL", "NAME", "PHONE", "SIDEBAR", "FIELDS", "METADATA", "PRICEBOOKID", 
		"NETWORK", "SNIPPET", "TARGET_LENGTH", "DIVISION", "RETURNING", "LISTVIEW", 
		"FindLiteral", "FindLiteralAlt", "IntegerLiteral", "LongLiteral", "NumberLiteral", 
		"BooleanLiteral", "StringLiteral", "NullLiteral", "LPAREN", "RPAREN", 
		"LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "ASSIGN", 
		"GT", "LT", "BANG", "TILDE", "QUESTIONDOT", "QUESTION", "COLON", "EQUAL", 
		"TRIPLEEQUAL", "NOTEQUAL", "LESSANDGREATER", "TRIPLENOTEQUAL", "AND", 
		"OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", 
		"MAPTO", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", 
		"OR_ASSIGN", "XOR_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", 
		"ATSIGN", "Identifier", "WS", "DOC_COMMENT", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SoqlParser._LITERAL_NAMES, SoqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SoqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SoqlParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SoqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SoqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SoqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public triggerUnit(): TriggerUnitContext {
		let _localctx: TriggerUnitContext = new TriggerUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SoqlParser.RULE_triggerUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(SoqlParser.TRIGGER);
			this.state = 319;
			this.id();
			this.state = 320;
			this.match(SoqlParser.ON);
			this.state = 321;
			this.id();
			this.state = 322;
			this.match(SoqlParser.LPAREN);
			this.state = 323;
			this.triggerCase();
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 324;
				this.match(SoqlParser.COMMA);
				this.state = 325;
				this.triggerCase();
				}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 331;
			this.match(SoqlParser.RPAREN);
			this.state = 332;
			this.block();
			this.state = 333;
			this.match(SoqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triggerUnit2(): TriggerUnit2Context {
		let _localctx: TriggerUnit2Context = new TriggerUnit2Context(this._ctx, this.state);
		this.enterRule(_localctx, 2, SoqlParser.RULE_triggerUnit2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(SoqlParser.TRIGGER);
			this.state = 336;
			this.id();
			this.state = 337;
			this.match(SoqlParser.ON);
			this.state = 338;
			this.id();
			this.state = 339;
			this.match(SoqlParser.LPAREN);
			this.state = 340;
			this.triggerCase();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 341;
				this.match(SoqlParser.COMMA);
				this.state = 342;
				this.triggerCase();
				}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 348;
			this.match(SoqlParser.RPAREN);
			this.state = 349;
			this.triggerBlock();
			this.state = 350;
			this.match(SoqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triggerCase(): TriggerCaseContext {
		let _localctx: TriggerCaseContext = new TriggerCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SoqlParser.RULE_triggerCase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.AFTER || _la === SoqlParser.BEFORE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 353;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.DELETE || _la === SoqlParser.INSERT || _la === SoqlParser.UNDELETE || _la === SoqlParser.UPDATE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triggerBlock(): TriggerBlockContext {
		let _localctx: TriggerBlockContext = new TriggerBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SoqlParser.RULE_triggerBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(SoqlParser.LBRACE);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.BREAK) | (1 << SoqlParser.CLASS) | (1 << SoqlParser.CONTINUE) | (1 << SoqlParser.DELETE) | (1 << SoqlParser.DO) | (1 << SoqlParser.ENUM) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.FOR) | (1 << SoqlParser.GET) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.IF) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSERT) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.INTERFACE) | (1 << SoqlParser.MERGE) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SoqlParser.RETURN - 32)) | (1 << (SoqlParser.SYSTEMRUNAS - 32)) | (1 << (SoqlParser.SET - 32)) | (1 << (SoqlParser.SHARING - 32)) | (1 << (SoqlParser.STATIC - 32)) | (1 << (SoqlParser.SUPER - 32)) | (1 << (SoqlParser.SWITCH - 32)) | (1 << (SoqlParser.TESTMETHOD - 32)) | (1 << (SoqlParser.THIS - 32)) | (1 << (SoqlParser.THROW - 32)) | (1 << (SoqlParser.TRANSIENT - 32)) | (1 << (SoqlParser.TRIGGER - 32)) | (1 << (SoqlParser.TRY - 32)) | (1 << (SoqlParser.UNDELETE - 32)) | (1 << (SoqlParser.UPDATE - 32)) | (1 << (SoqlParser.UPSERT - 32)) | (1 << (SoqlParser.VIRTUAL - 32)) | (1 << (SoqlParser.VOID - 32)) | (1 << (SoqlParser.WEBSERVICE - 32)) | (1 << (SoqlParser.WHEN - 32)) | (1 << (SoqlParser.WHILE - 32)) | (1 << (SoqlParser.WITH - 32)) | (1 << (SoqlParser.WITHOUT - 32)) | (1 << (SoqlParser.LIST - 32)) | (1 << (SoqlParser.MAP - 32)) | (1 << (SoqlParser.SYSTEM - 32)) | (1 << (SoqlParser.USER - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACE - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.ATSIGN - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
				{
				{
				this.state = 356;
				this.triggerBlockMember();
				}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 362;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triggerBlockMember(): TriggerBlockMemberContext {
		let _localctx: TriggerBlockMemberContext = new TriggerBlockMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SoqlParser.RULE_triggerBlockMember);
		try {
			let _alt: number;
			this.state = 372;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 367;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 364;
						this.modifier();
						}
						}
					}
					this.state = 369;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				this.state = 370;
				this.triggerMemberDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 371;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SoqlParser.RULE_compilationUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.typeDeclaration();
			this.state = 375;
			this.match(SoqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SoqlParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.state = 398;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SoqlParser.STATIC - 36)) | (1 << (SoqlParser.TESTMETHOD - 36)) | (1 << (SoqlParser.TRANSIENT - 36)) | (1 << (SoqlParser.VIRTUAL - 36)) | (1 << (SoqlParser.WEBSERVICE - 36)) | (1 << (SoqlParser.WITH - 36)) | (1 << (SoqlParser.WITHOUT - 36)))) !== 0) || _la === SoqlParser.ATSIGN) {
					{
					{
					this.state = 377;
					this.modifier();
					}
					}
					this.state = 382;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 383;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SoqlParser.STATIC - 36)) | (1 << (SoqlParser.TESTMETHOD - 36)) | (1 << (SoqlParser.TRANSIENT - 36)) | (1 << (SoqlParser.VIRTUAL - 36)) | (1 << (SoqlParser.WEBSERVICE - 36)) | (1 << (SoqlParser.WITH - 36)) | (1 << (SoqlParser.WITHOUT - 36)))) !== 0) || _la === SoqlParser.ATSIGN) {
					{
					{
					this.state = 384;
					this.modifier();
					}
					}
					this.state = 389;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 390;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SoqlParser.STATIC - 36)) | (1 << (SoqlParser.TESTMETHOD - 36)) | (1 << (SoqlParser.TRANSIENT - 36)) | (1 << (SoqlParser.VIRTUAL - 36)) | (1 << (SoqlParser.WEBSERVICE - 36)) | (1 << (SoqlParser.WITH - 36)) | (1 << (SoqlParser.WITHOUT - 36)))) !== 0) || _la === SoqlParser.ATSIGN) {
					{
					{
					this.state = 391;
					this.modifier();
					}
					}
					this.state = 396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 397;
				this.interfaceDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SoqlParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this.match(SoqlParser.CLASS);
			this.state = 401;
			this.id();
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.EXTENDS) {
				{
				this.state = 402;
				this.match(SoqlParser.EXTENDS);
				this.state = 403;
				this.typeRef();
				}
			}

			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.IMPLEMENTS) {
				{
				this.state = 406;
				this.match(SoqlParser.IMPLEMENTS);
				this.state = 407;
				this.typeList();
				}
			}

			this.state = 410;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SoqlParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.match(SoqlParser.ENUM);
			this.state = 413;
			this.id();
			this.state = 414;
			this.match(SoqlParser.LBRACE);
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)))) !== 0) || _la === SoqlParser.Identifier) {
				{
				this.state = 415;
				this.enumConstants();
				}
			}

			this.state = 418;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SoqlParser.RULE_enumConstants);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.id();
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 421;
				this.match(SoqlParser.COMMA);
				this.state = 422;
				this.id();
				}
				}
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SoqlParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(SoqlParser.INTERFACE);
			this.state = 429;
			this.id();
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.EXTENDS) {
				{
				this.state = 430;
				this.match(SoqlParser.EXTENDS);
				this.state = 431;
				this.typeList();
				}
			}

			this.state = 434;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SoqlParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.typeRef();
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 437;
				this.match(SoqlParser.COMMA);
				this.state = 438;
				this.typeRef();
				}
				}
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SoqlParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.match(SoqlParser.LBRACE);
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.CLASS) | (1 << SoqlParser.ENUM) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.GET) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.INTERFACE) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.STATIC - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.TESTMETHOD - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VIRTUAL - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WEBSERVICE - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.LBRACE - 196)) | (1 << (SoqlParser.SEMI - 196)))) !== 0) || _la === SoqlParser.ATSIGN || _la === SoqlParser.Identifier) {
				{
				{
				this.state = 445;
				this.classBodyDeclaration();
				}
				}
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 451;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SoqlParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(SoqlParser.LBRACE);
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.GET) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.STATIC - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.TESTMETHOD - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VIRTUAL - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WEBSERVICE - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)))) !== 0) || _la === SoqlParser.ATSIGN || _la === SoqlParser.Identifier) {
				{
				{
				this.state = 454;
				this.interfaceMethodDeclaration();
				}
				}
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 460;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SoqlParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 462;
				this.match(SoqlParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.STATIC) {
					{
					this.state = 463;
					this.match(SoqlParser.STATIC);
					}
				}

				this.state = 466;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 470;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 467;
						this.modifier();
						}
						}
					}
					this.state = 472;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				this.state = 473;
				this.memberDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SoqlParser.RULE_modifier);
		try {
			this.state = 495;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ATSIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 476;
				this.annotation();
				}
				break;
			case SoqlParser.GLOBAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 477;
				this.match(SoqlParser.GLOBAL);
				}
				break;
			case SoqlParser.PUBLIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 478;
				this.match(SoqlParser.PUBLIC);
				}
				break;
			case SoqlParser.PROTECTED:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 479;
				this.match(SoqlParser.PROTECTED);
				}
				break;
			case SoqlParser.PRIVATE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 480;
				this.match(SoqlParser.PRIVATE);
				}
				break;
			case SoqlParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 481;
				this.match(SoqlParser.TRANSIENT);
				}
				break;
			case SoqlParser.STATIC:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 482;
				this.match(SoqlParser.STATIC);
				}
				break;
			case SoqlParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 483;
				this.match(SoqlParser.ABSTRACT);
				}
				break;
			case SoqlParser.FINAL:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 484;
				this.match(SoqlParser.FINAL);
				}
				break;
			case SoqlParser.WEBSERVICE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 485;
				this.match(SoqlParser.WEBSERVICE);
				}
				break;
			case SoqlParser.OVERRIDE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 486;
				this.match(SoqlParser.OVERRIDE);
				}
				break;
			case SoqlParser.VIRTUAL:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 487;
				this.match(SoqlParser.VIRTUAL);
				}
				break;
			case SoqlParser.TESTMETHOD:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 488;
				this.match(SoqlParser.TESTMETHOD);
				}
				break;
			case SoqlParser.WITH:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 489;
				this.match(SoqlParser.WITH);
				this.state = 490;
				this.match(SoqlParser.SHARING);
				}
				break;
			case SoqlParser.WITHOUT:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 491;
				this.match(SoqlParser.WITHOUT);
				this.state = 492;
				this.match(SoqlParser.SHARING);
				}
				break;
			case SoqlParser.INHERITED:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 493;
				this.match(SoqlParser.INHERITED);
				this.state = 494;
				this.match(SoqlParser.SHARING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SoqlParser.RULE_memberDeclaration);
		try {
			this.state = 504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 497;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.fieldDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 499;
				this.constructorDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 500;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 501;
				this.classDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 502;
				this.enumDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 503;
				this.propertyDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triggerMemberDeclaration(): TriggerMemberDeclarationContext {
		let _localctx: TriggerMemberDeclarationContext = new TriggerMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SoqlParser.RULE_triggerMemberDeclaration);
		try {
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 506;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 507;
				this.fieldDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 508;
				this.interfaceDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 509;
				this.classDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 510;
				this.enumDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 511;
				this.propertyDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SoqlParser.RULE_methodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.AFTER:
			case SoqlParser.BEFORE:
			case SoqlParser.GET:
			case SoqlParser.INHERITED:
			case SoqlParser.INSTANCEOF:
			case SoqlParser.SET:
			case SoqlParser.SHARING:
			case SoqlParser.SWITCH:
			case SoqlParser.TRANSIENT:
			case SoqlParser.TRIGGER:
			case SoqlParser.WHEN:
			case SoqlParser.WITH:
			case SoqlParser.WITHOUT:
			case SoqlParser.LIST:
			case SoqlParser.MAP:
			case SoqlParser.SYSTEM:
			case SoqlParser.USER:
			case SoqlParser.SELECT:
			case SoqlParser.COUNT:
			case SoqlParser.FROM:
			case SoqlParser.AS:
			case SoqlParser.USING:
			case SoqlParser.SCOPE:
			case SoqlParser.WHERE:
			case SoqlParser.ORDER:
			case SoqlParser.BY:
			case SoqlParser.LIMIT:
			case SoqlParser.SOQLAND:
			case SoqlParser.SOQLOR:
			case SoqlParser.NOT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TYPEOF:
			case SoqlParser.END:
			case SoqlParser.THEN:
			case SoqlParser.LIKE:
			case SoqlParser.IN:
			case SoqlParser.INCLUDES:
			case SoqlParser.EXCLUDES:
			case SoqlParser.ASC:
			case SoqlParser.DESC:
			case SoqlParser.NULLS:
			case SoqlParser.FIRST:
			case SoqlParser.LAST:
			case SoqlParser.GROUP:
			case SoqlParser.ALL:
			case SoqlParser.ROWS:
			case SoqlParser.VIEW:
			case SoqlParser.HAVING:
			case SoqlParser.ROLLUP:
			case SoqlParser.TOLABEL:
			case SoqlParser.OFFSET:
			case SoqlParser.DATA:
			case SoqlParser.CATEGORY:
			case SoqlParser.AT:
			case SoqlParser.ABOVE:
			case SoqlParser.BELOW:
			case SoqlParser.ABOVE_OR_BELOW:
			case SoqlParser.SECURITY_ENFORCED:
			case SoqlParser.SYSTEM_MODE:
			case SoqlParser.USER_MODE:
			case SoqlParser.REFERENCE:
			case SoqlParser.CUBE:
			case SoqlParser.FORMAT:
			case SoqlParser.TRACKING:
			case SoqlParser.VIEWSTAT:
			case SoqlParser.CUSTOM:
			case SoqlParser.STANDARD:
			case SoqlParser.DISTANCE:
			case SoqlParser.GEOLOCATION:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.CONVERT_TIMEZONE:
			case SoqlParser.YESTERDAY:
			case SoqlParser.TODAY:
			case SoqlParser.TOMORROW:
			case SoqlParser.LAST_WEEK:
			case SoqlParser.THIS_WEEK:
			case SoqlParser.NEXT_WEEK:
			case SoqlParser.LAST_MONTH:
			case SoqlParser.THIS_MONTH:
			case SoqlParser.NEXT_MONTH:
			case SoqlParser.LAST_90_DAYS:
			case SoqlParser.NEXT_90_DAYS:
			case SoqlParser.LAST_N_DAYS_N:
			case SoqlParser.NEXT_N_DAYS_N:
			case SoqlParser.N_DAYS_AGO_N:
			case SoqlParser.NEXT_N_WEEKS_N:
			case SoqlParser.LAST_N_WEEKS_N:
			case SoqlParser.N_WEEKS_AGO_N:
			case SoqlParser.NEXT_N_MONTHS_N:
			case SoqlParser.LAST_N_MONTHS_N:
			case SoqlParser.N_MONTHS_AGO_N:
			case SoqlParser.THIS_QUARTER:
			case SoqlParser.LAST_QUARTER:
			case SoqlParser.NEXT_QUARTER:
			case SoqlParser.NEXT_N_QUARTERS_N:
			case SoqlParser.LAST_N_QUARTERS_N:
			case SoqlParser.N_QUARTERS_AGO_N:
			case SoqlParser.THIS_YEAR:
			case SoqlParser.LAST_YEAR:
			case SoqlParser.NEXT_YEAR:
			case SoqlParser.NEXT_N_YEARS_N:
			case SoqlParser.LAST_N_YEARS_N:
			case SoqlParser.N_YEARS_AGO_N:
			case SoqlParser.THIS_FISCAL_QUARTER:
			case SoqlParser.LAST_FISCAL_QUARTER:
			case SoqlParser.NEXT_FISCAL_QUARTER:
			case SoqlParser.NEXT_N_FISCAL_QUARTERS_N:
			case SoqlParser.LAST_N_FISCAL_QUARTERS_N:
			case SoqlParser.N_FISCAL_QUARTERS_AGO_N:
			case SoqlParser.THIS_FISCAL_YEAR:
			case SoqlParser.LAST_FISCAL_YEAR:
			case SoqlParser.NEXT_FISCAL_YEAR:
			case SoqlParser.NEXT_N_FISCAL_YEARS_N:
			case SoqlParser.LAST_N_FISCAL_YEARS_N:
			case SoqlParser.N_FISCAL_YEARS_AGO_N:
			case SoqlParser.IntegralCurrencyLiteral:
			case SoqlParser.FIND:
			case SoqlParser.EMAIL:
			case SoqlParser.NAME:
			case SoqlParser.PHONE:
			case SoqlParser.SIDEBAR:
			case SoqlParser.FIELDS:
			case SoqlParser.METADATA:
			case SoqlParser.PRICEBOOKID:
			case SoqlParser.NETWORK:
			case SoqlParser.SNIPPET:
			case SoqlParser.TARGET_LENGTH:
			case SoqlParser.DIVISION:
			case SoqlParser.RETURNING:
			case SoqlParser.LISTVIEW:
			case SoqlParser.Identifier:
				{
				this.state = 514;
				this.typeRef();
				}
				break;
			case SoqlParser.VOID:
				{
				this.state = 515;
				this.match(SoqlParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 518;
			this.id();
			this.state = 519;
			this.formalParameters();
			this.state = 522;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.LBRACE:
				{
				this.state = 520;
				this.block();
				}
				break;
			case SoqlParser.SEMI:
				{
				this.state = 521;
				this.match(SoqlParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SoqlParser.RULE_constructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.qualifiedName();
			this.state = 525;
			this.formalParameters();
			this.state = 526;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SoqlParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this.typeRef();
			this.state = 529;
			this.variableDeclarators();
			this.state = 530;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyDeclaration(): PropertyDeclarationContext {
		let _localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SoqlParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.typeRef();
			this.state = 533;
			this.id();
			this.state = 534;
			this.match(SoqlParser.LBRACE);
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.GET) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.STATIC - 34)) | (1 << (SoqlParser.TESTMETHOD - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.VIRTUAL - 34)) | (1 << (SoqlParser.WEBSERVICE - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)))) !== 0) || _la === SoqlParser.ATSIGN) {
				{
				{
				this.state = 535;
				this.propertyBlock();
				}
				}
				this.state = 540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 541;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SoqlParser.RULE_interfaceMethodDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 543;
					this.modifier();
					}
					}
				}
				this.state = 548;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 551;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.AFTER:
			case SoqlParser.BEFORE:
			case SoqlParser.GET:
			case SoqlParser.INHERITED:
			case SoqlParser.INSTANCEOF:
			case SoqlParser.SET:
			case SoqlParser.SHARING:
			case SoqlParser.SWITCH:
			case SoqlParser.TRANSIENT:
			case SoqlParser.TRIGGER:
			case SoqlParser.WHEN:
			case SoqlParser.WITH:
			case SoqlParser.WITHOUT:
			case SoqlParser.LIST:
			case SoqlParser.MAP:
			case SoqlParser.SYSTEM:
			case SoqlParser.USER:
			case SoqlParser.SELECT:
			case SoqlParser.COUNT:
			case SoqlParser.FROM:
			case SoqlParser.AS:
			case SoqlParser.USING:
			case SoqlParser.SCOPE:
			case SoqlParser.WHERE:
			case SoqlParser.ORDER:
			case SoqlParser.BY:
			case SoqlParser.LIMIT:
			case SoqlParser.SOQLAND:
			case SoqlParser.SOQLOR:
			case SoqlParser.NOT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TYPEOF:
			case SoqlParser.END:
			case SoqlParser.THEN:
			case SoqlParser.LIKE:
			case SoqlParser.IN:
			case SoqlParser.INCLUDES:
			case SoqlParser.EXCLUDES:
			case SoqlParser.ASC:
			case SoqlParser.DESC:
			case SoqlParser.NULLS:
			case SoqlParser.FIRST:
			case SoqlParser.LAST:
			case SoqlParser.GROUP:
			case SoqlParser.ALL:
			case SoqlParser.ROWS:
			case SoqlParser.VIEW:
			case SoqlParser.HAVING:
			case SoqlParser.ROLLUP:
			case SoqlParser.TOLABEL:
			case SoqlParser.OFFSET:
			case SoqlParser.DATA:
			case SoqlParser.CATEGORY:
			case SoqlParser.AT:
			case SoqlParser.ABOVE:
			case SoqlParser.BELOW:
			case SoqlParser.ABOVE_OR_BELOW:
			case SoqlParser.SECURITY_ENFORCED:
			case SoqlParser.SYSTEM_MODE:
			case SoqlParser.USER_MODE:
			case SoqlParser.REFERENCE:
			case SoqlParser.CUBE:
			case SoqlParser.FORMAT:
			case SoqlParser.TRACKING:
			case SoqlParser.VIEWSTAT:
			case SoqlParser.CUSTOM:
			case SoqlParser.STANDARD:
			case SoqlParser.DISTANCE:
			case SoqlParser.GEOLOCATION:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.CONVERT_TIMEZONE:
			case SoqlParser.YESTERDAY:
			case SoqlParser.TODAY:
			case SoqlParser.TOMORROW:
			case SoqlParser.LAST_WEEK:
			case SoqlParser.THIS_WEEK:
			case SoqlParser.NEXT_WEEK:
			case SoqlParser.LAST_MONTH:
			case SoqlParser.THIS_MONTH:
			case SoqlParser.NEXT_MONTH:
			case SoqlParser.LAST_90_DAYS:
			case SoqlParser.NEXT_90_DAYS:
			case SoqlParser.LAST_N_DAYS_N:
			case SoqlParser.NEXT_N_DAYS_N:
			case SoqlParser.N_DAYS_AGO_N:
			case SoqlParser.NEXT_N_WEEKS_N:
			case SoqlParser.LAST_N_WEEKS_N:
			case SoqlParser.N_WEEKS_AGO_N:
			case SoqlParser.NEXT_N_MONTHS_N:
			case SoqlParser.LAST_N_MONTHS_N:
			case SoqlParser.N_MONTHS_AGO_N:
			case SoqlParser.THIS_QUARTER:
			case SoqlParser.LAST_QUARTER:
			case SoqlParser.NEXT_QUARTER:
			case SoqlParser.NEXT_N_QUARTERS_N:
			case SoqlParser.LAST_N_QUARTERS_N:
			case SoqlParser.N_QUARTERS_AGO_N:
			case SoqlParser.THIS_YEAR:
			case SoqlParser.LAST_YEAR:
			case SoqlParser.NEXT_YEAR:
			case SoqlParser.NEXT_N_YEARS_N:
			case SoqlParser.LAST_N_YEARS_N:
			case SoqlParser.N_YEARS_AGO_N:
			case SoqlParser.THIS_FISCAL_QUARTER:
			case SoqlParser.LAST_FISCAL_QUARTER:
			case SoqlParser.NEXT_FISCAL_QUARTER:
			case SoqlParser.NEXT_N_FISCAL_QUARTERS_N:
			case SoqlParser.LAST_N_FISCAL_QUARTERS_N:
			case SoqlParser.N_FISCAL_QUARTERS_AGO_N:
			case SoqlParser.THIS_FISCAL_YEAR:
			case SoqlParser.LAST_FISCAL_YEAR:
			case SoqlParser.NEXT_FISCAL_YEAR:
			case SoqlParser.NEXT_N_FISCAL_YEARS_N:
			case SoqlParser.LAST_N_FISCAL_YEARS_N:
			case SoqlParser.N_FISCAL_YEARS_AGO_N:
			case SoqlParser.IntegralCurrencyLiteral:
			case SoqlParser.FIND:
			case SoqlParser.EMAIL:
			case SoqlParser.NAME:
			case SoqlParser.PHONE:
			case SoqlParser.SIDEBAR:
			case SoqlParser.FIELDS:
			case SoqlParser.METADATA:
			case SoqlParser.PRICEBOOKID:
			case SoqlParser.NETWORK:
			case SoqlParser.SNIPPET:
			case SoqlParser.TARGET_LENGTH:
			case SoqlParser.DIVISION:
			case SoqlParser.RETURNING:
			case SoqlParser.LISTVIEW:
			case SoqlParser.Identifier:
				{
				this.state = 549;
				this.typeRef();
				}
				break;
			case SoqlParser.VOID:
				{
				this.state = 550;
				this.match(SoqlParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 553;
			this.id();
			this.state = 554;
			this.formalParameters();
			this.state = 555;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SoqlParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this.variableDeclarator();
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 558;
				this.match(SoqlParser.COMMA);
				this.state = 559;
				this.variableDeclarator();
				}
				}
				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SoqlParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.id();
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ASSIGN) {
				{
				this.state = 566;
				this.match(SoqlParser.ASSIGN);
				this.state = 567;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SoqlParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.match(SoqlParser.LBRACE);
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
				{
				this.state = 571;
				this.expression(0);
				this.state = 576;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 572;
						this.match(SoqlParser.COMMA);
						this.state = 573;
						this.expression(0);
						}
						}
					}
					this.state = 578;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.COMMA) {
					{
					this.state = 579;
					this.match(SoqlParser.COMMA);
					}
				}

				}
			}

			this.state = 584;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeRef(): TypeRefContext {
		let _localctx: TypeRefContext = new TypeRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SoqlParser.RULE_typeRef);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this.typeName();
			this.state = 591;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 587;
					this.match(SoqlParser.DOT);
					this.state = 588;
					this.typeName();
					}
					}
				}
				this.state = 593;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 594;
			this.arraySubscripts();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arraySubscripts(): ArraySubscriptsContext {
		let _localctx: ArraySubscriptsContext = new ArraySubscriptsContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SoqlParser.RULE_arraySubscripts);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 596;
					this.match(SoqlParser.LBRACK);
					this.state = 597;
					this.match(SoqlParser.RBRACK);
					}
					}
				}
				this.state = 602;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SoqlParser.RULE_typeName);
		try {
			this.state = 619;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 603;
				this.match(SoqlParser.LIST);
				this.state = 605;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 604;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 607;
				this.match(SoqlParser.SET);
				this.state = 609;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 608;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 611;
				this.match(SoqlParser.MAP);
				this.state = 613;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 612;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 615;
				this.id();
				this.state = 617;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 616;
					this.typeArguments();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SoqlParser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.match(SoqlParser.LT);
			this.state = 622;
			this.typeList();
			this.state = 623;
			this.match(SoqlParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SoqlParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			this.match(SoqlParser.LPAREN);
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.GET) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.STATIC - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.TESTMETHOD - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VIRTUAL - 34)) | (1 << (SoqlParser.WEBSERVICE - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)))) !== 0) || _la === SoqlParser.ATSIGN || _la === SoqlParser.Identifier) {
				{
				this.state = 626;
				this.formalParameterList();
				}
			}

			this.state = 629;
			this.match(SoqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SoqlParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.formalParameter();
			this.state = 636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 632;
				this.match(SoqlParser.COMMA);
				this.state = 633;
				this.formalParameter();
				}
				}
				this.state = 638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SoqlParser.RULE_formalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 639;
					this.modifier();
					}
					}
				}
				this.state = 644;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 645;
			this.typeRef();
			this.state = 646;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SoqlParser.RULE_qualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this.id();
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.DOT) {
				{
				{
				this.state = 649;
				this.match(SoqlParser.DOT);
				this.state = 650;
				this.id();
				}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SoqlParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.NULL || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & ((1 << (SoqlParser.IntegerLiteral - 201)) | (1 << (SoqlParser.LongLiteral - 201)) | (1 << (SoqlParser.NumberLiteral - 201)) | (1 << (SoqlParser.BooleanLiteral - 201)) | (1 << (SoqlParser.StringLiteral - 201)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SoqlParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this.match(SoqlParser.ATSIGN);
			this.state = 659;
			this.qualifiedName();
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LPAREN) {
				{
				this.state = 660;
				this.match(SoqlParser.LPAREN);
				this.state = 663;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 661;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 662;
					this.elementValue();
					}
					break;
				}
				this.state = 665;
				this.match(SoqlParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SoqlParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.elementValuePair();
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.COMMA - 196)))) !== 0) || _la === SoqlParser.Identifier) {
				{
				{
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.COMMA) {
					{
					this.state = 669;
					this.match(SoqlParser.COMMA);
					}
				}

				this.state = 672;
				this.elementValuePair();
				}
				}
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SoqlParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this.id();
			this.state = 679;
			this.match(SoqlParser.ASSIGN);
			this.state = 680;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SoqlParser.RULE_elementValue);
		try {
			this.state = 685;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.AFTER:
			case SoqlParser.BEFORE:
			case SoqlParser.GET:
			case SoqlParser.INHERITED:
			case SoqlParser.INSTANCEOF:
			case SoqlParser.NEW:
			case SoqlParser.NULL:
			case SoqlParser.SET:
			case SoqlParser.SHARING:
			case SoqlParser.SUPER:
			case SoqlParser.SWITCH:
			case SoqlParser.THIS:
			case SoqlParser.TRANSIENT:
			case SoqlParser.TRIGGER:
			case SoqlParser.VOID:
			case SoqlParser.WHEN:
			case SoqlParser.WITH:
			case SoqlParser.WITHOUT:
			case SoqlParser.LIST:
			case SoqlParser.MAP:
			case SoqlParser.SYSTEM:
			case SoqlParser.USER:
			case SoqlParser.SELECT:
			case SoqlParser.COUNT:
			case SoqlParser.FROM:
			case SoqlParser.AS:
			case SoqlParser.USING:
			case SoqlParser.SCOPE:
			case SoqlParser.WHERE:
			case SoqlParser.ORDER:
			case SoqlParser.BY:
			case SoqlParser.LIMIT:
			case SoqlParser.SOQLAND:
			case SoqlParser.SOQLOR:
			case SoqlParser.NOT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TYPEOF:
			case SoqlParser.END:
			case SoqlParser.THEN:
			case SoqlParser.LIKE:
			case SoqlParser.IN:
			case SoqlParser.INCLUDES:
			case SoqlParser.EXCLUDES:
			case SoqlParser.ASC:
			case SoqlParser.DESC:
			case SoqlParser.NULLS:
			case SoqlParser.FIRST:
			case SoqlParser.LAST:
			case SoqlParser.GROUP:
			case SoqlParser.ALL:
			case SoqlParser.ROWS:
			case SoqlParser.VIEW:
			case SoqlParser.HAVING:
			case SoqlParser.ROLLUP:
			case SoqlParser.TOLABEL:
			case SoqlParser.OFFSET:
			case SoqlParser.DATA:
			case SoqlParser.CATEGORY:
			case SoqlParser.AT:
			case SoqlParser.ABOVE:
			case SoqlParser.BELOW:
			case SoqlParser.ABOVE_OR_BELOW:
			case SoqlParser.SECURITY_ENFORCED:
			case SoqlParser.SYSTEM_MODE:
			case SoqlParser.USER_MODE:
			case SoqlParser.REFERENCE:
			case SoqlParser.CUBE:
			case SoqlParser.FORMAT:
			case SoqlParser.TRACKING:
			case SoqlParser.VIEWSTAT:
			case SoqlParser.CUSTOM:
			case SoqlParser.STANDARD:
			case SoqlParser.DISTANCE:
			case SoqlParser.GEOLOCATION:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.CONVERT_TIMEZONE:
			case SoqlParser.YESTERDAY:
			case SoqlParser.TODAY:
			case SoqlParser.TOMORROW:
			case SoqlParser.LAST_WEEK:
			case SoqlParser.THIS_WEEK:
			case SoqlParser.NEXT_WEEK:
			case SoqlParser.LAST_MONTH:
			case SoqlParser.THIS_MONTH:
			case SoqlParser.NEXT_MONTH:
			case SoqlParser.LAST_90_DAYS:
			case SoqlParser.NEXT_90_DAYS:
			case SoqlParser.LAST_N_DAYS_N:
			case SoqlParser.NEXT_N_DAYS_N:
			case SoqlParser.N_DAYS_AGO_N:
			case SoqlParser.NEXT_N_WEEKS_N:
			case SoqlParser.LAST_N_WEEKS_N:
			case SoqlParser.N_WEEKS_AGO_N:
			case SoqlParser.NEXT_N_MONTHS_N:
			case SoqlParser.LAST_N_MONTHS_N:
			case SoqlParser.N_MONTHS_AGO_N:
			case SoqlParser.THIS_QUARTER:
			case SoqlParser.LAST_QUARTER:
			case SoqlParser.NEXT_QUARTER:
			case SoqlParser.NEXT_N_QUARTERS_N:
			case SoqlParser.LAST_N_QUARTERS_N:
			case SoqlParser.N_QUARTERS_AGO_N:
			case SoqlParser.THIS_YEAR:
			case SoqlParser.LAST_YEAR:
			case SoqlParser.NEXT_YEAR:
			case SoqlParser.NEXT_N_YEARS_N:
			case SoqlParser.LAST_N_YEARS_N:
			case SoqlParser.N_YEARS_AGO_N:
			case SoqlParser.THIS_FISCAL_QUARTER:
			case SoqlParser.LAST_FISCAL_QUARTER:
			case SoqlParser.NEXT_FISCAL_QUARTER:
			case SoqlParser.NEXT_N_FISCAL_QUARTERS_N:
			case SoqlParser.LAST_N_FISCAL_QUARTERS_N:
			case SoqlParser.N_FISCAL_QUARTERS_AGO_N:
			case SoqlParser.THIS_FISCAL_YEAR:
			case SoqlParser.LAST_FISCAL_YEAR:
			case SoqlParser.NEXT_FISCAL_YEAR:
			case SoqlParser.NEXT_N_FISCAL_YEARS_N:
			case SoqlParser.LAST_N_FISCAL_YEARS_N:
			case SoqlParser.N_FISCAL_YEARS_AGO_N:
			case SoqlParser.IntegralCurrencyLiteral:
			case SoqlParser.FIND:
			case SoqlParser.EMAIL:
			case SoqlParser.NAME:
			case SoqlParser.PHONE:
			case SoqlParser.SIDEBAR:
			case SoqlParser.FIELDS:
			case SoqlParser.METADATA:
			case SoqlParser.PRICEBOOKID:
			case SoqlParser.NETWORK:
			case SoqlParser.SNIPPET:
			case SoqlParser.TARGET_LENGTH:
			case SoqlParser.DIVISION:
			case SoqlParser.RETURNING:
			case SoqlParser.LISTVIEW:
			case SoqlParser.FindLiteral:
			case SoqlParser.IntegerLiteral:
			case SoqlParser.LongLiteral:
			case SoqlParser.NumberLiteral:
			case SoqlParser.BooleanLiteral:
			case SoqlParser.StringLiteral:
			case SoqlParser.LPAREN:
			case SoqlParser.LBRACK:
			case SoqlParser.BANG:
			case SoqlParser.TILDE:
			case SoqlParser.INC:
			case SoqlParser.DEC:
			case SoqlParser.ADD:
			case SoqlParser.SUB:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 682;
				this.expression(0);
				}
				break;
			case SoqlParser.ATSIGN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 683;
				this.annotation();
				}
				break;
			case SoqlParser.LBRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 684;
				this.elementValueArrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SoqlParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.match(SoqlParser.LBRACE);
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACE - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.ATSIGN - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
				{
				this.state = 688;
				this.elementValue();
				this.state = 693;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 689;
						this.match(SoqlParser.COMMA);
						this.state = 690;
						this.elementValue();
						}
						}
					}
					this.state = 695;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				}
				}
			}

			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.COMMA) {
				{
				this.state = 698;
				this.match(SoqlParser.COMMA);
				}
			}

			this.state = 701;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SoqlParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this.match(SoqlParser.LBRACE);
			this.state = 707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.BREAK) | (1 << SoqlParser.CONTINUE) | (1 << SoqlParser.DELETE) | (1 << SoqlParser.DO) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.FOR) | (1 << SoqlParser.GET) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.IF) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSERT) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.MERGE) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SoqlParser.RETURN - 32)) | (1 << (SoqlParser.SYSTEMRUNAS - 32)) | (1 << (SoqlParser.SET - 32)) | (1 << (SoqlParser.SHARING - 32)) | (1 << (SoqlParser.STATIC - 32)) | (1 << (SoqlParser.SUPER - 32)) | (1 << (SoqlParser.SWITCH - 32)) | (1 << (SoqlParser.TESTMETHOD - 32)) | (1 << (SoqlParser.THIS - 32)) | (1 << (SoqlParser.THROW - 32)) | (1 << (SoqlParser.TRANSIENT - 32)) | (1 << (SoqlParser.TRIGGER - 32)) | (1 << (SoqlParser.TRY - 32)) | (1 << (SoqlParser.UNDELETE - 32)) | (1 << (SoqlParser.UPDATE - 32)) | (1 << (SoqlParser.UPSERT - 32)) | (1 << (SoqlParser.VIRTUAL - 32)) | (1 << (SoqlParser.VOID - 32)) | (1 << (SoqlParser.WEBSERVICE - 32)) | (1 << (SoqlParser.WHEN - 32)) | (1 << (SoqlParser.WHILE - 32)) | (1 << (SoqlParser.WITH - 32)) | (1 << (SoqlParser.WITHOUT - 32)) | (1 << (SoqlParser.LIST - 32)) | (1 << (SoqlParser.MAP - 32)) | (1 << (SoqlParser.SYSTEM - 32)) | (1 << (SoqlParser.USER - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACE - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.ATSIGN - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
				{
				{
				this.state = 704;
				this.statement();
				}
				}
				this.state = 709;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 710;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SoqlParser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.localVariableDeclaration();
			this.state = 713;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SoqlParser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 715;
					this.modifier();
					}
					}
				}
				this.state = 720;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 721;
			this.typeRef();
			this.state = 722;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SoqlParser.RULE_statement);
		try {
			this.state = 744;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 724;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 725;
				this.ifStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 726;
				this.switchStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 727;
				this.forStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 728;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 729;
				this.doWhileStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 730;
				this.tryStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 731;
				this.returnStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 732;
				this.throwStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 733;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 734;
				this.continueStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 735;
				this.insertStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 736;
				this.updateStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 737;
				this.deleteStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 738;
				this.undeleteStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 739;
				this.upsertStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 740;
				this.mergeStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 741;
				this.runAsStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 742;
				this.localVariableDeclarationStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 743;
				this.expressionStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SoqlParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			this.match(SoqlParser.IF);
			this.state = 747;
			this.parExpression();
			this.state = 748;
			this.statement();
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 749;
				this.match(SoqlParser.ELSE);
				this.state = 750;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SoqlParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this.match(SoqlParser.SWITCH);
			this.state = 754;
			this.match(SoqlParser.ON);
			this.state = 755;
			this.expression(0);
			this.state = 756;
			this.match(SoqlParser.LBRACE);
			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 757;
				this.whenControl();
				}
				}
				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SoqlParser.WHEN);
			this.state = 762;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenControl(): WhenControlContext {
		let _localctx: WhenControlContext = new WhenControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SoqlParser.RULE_whenControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.match(SoqlParser.WHEN);
			this.state = 765;
			this.whenValue();
			this.state = 766;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenValue(): WhenValueContext {
		let _localctx: WhenValueContext = new WhenValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SoqlParser.RULE_whenValue);
		let _la: number;
		try {
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 768;
				this.match(SoqlParser.ELSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 769;
				this.whenLiteral();
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.COMMA) {
					{
					{
					this.state = 770;
					this.match(SoqlParser.COMMA);
					this.state = 771;
					this.whenLiteral();
					}
					}
					this.state = 776;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 777;
				this.id();
				this.state = 778;
				this.id();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenLiteral(): WhenLiteralContext {
		let _localctx: WhenLiteralContext = new WhenLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SoqlParser.RULE_whenLiteral);
		let _la: number;
		try {
			this.state = 794;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.IntegerLiteral:
			case SoqlParser.SUB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 783;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.SUB) {
					{
					this.state = 782;
					this.match(SoqlParser.SUB);
					}
				}

				this.state = 785;
				this.match(SoqlParser.IntegerLiteral);
				}
				break;
			case SoqlParser.LongLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 786;
				this.match(SoqlParser.LongLiteral);
				}
				break;
			case SoqlParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 787;
				this.match(SoqlParser.StringLiteral);
				}
				break;
			case SoqlParser.NULL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 788;
				this.match(SoqlParser.NULL);
				}
				break;
			case SoqlParser.AFTER:
			case SoqlParser.BEFORE:
			case SoqlParser.GET:
			case SoqlParser.INHERITED:
			case SoqlParser.INSTANCEOF:
			case SoqlParser.SET:
			case SoqlParser.SHARING:
			case SoqlParser.SWITCH:
			case SoqlParser.TRANSIENT:
			case SoqlParser.TRIGGER:
			case SoqlParser.WHEN:
			case SoqlParser.WITH:
			case SoqlParser.WITHOUT:
			case SoqlParser.SYSTEM:
			case SoqlParser.USER:
			case SoqlParser.SELECT:
			case SoqlParser.COUNT:
			case SoqlParser.FROM:
			case SoqlParser.AS:
			case SoqlParser.USING:
			case SoqlParser.SCOPE:
			case SoqlParser.WHERE:
			case SoqlParser.ORDER:
			case SoqlParser.BY:
			case SoqlParser.LIMIT:
			case SoqlParser.SOQLAND:
			case SoqlParser.SOQLOR:
			case SoqlParser.NOT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TYPEOF:
			case SoqlParser.END:
			case SoqlParser.THEN:
			case SoqlParser.LIKE:
			case SoqlParser.IN:
			case SoqlParser.INCLUDES:
			case SoqlParser.EXCLUDES:
			case SoqlParser.ASC:
			case SoqlParser.DESC:
			case SoqlParser.NULLS:
			case SoqlParser.FIRST:
			case SoqlParser.LAST:
			case SoqlParser.GROUP:
			case SoqlParser.ALL:
			case SoqlParser.ROWS:
			case SoqlParser.VIEW:
			case SoqlParser.HAVING:
			case SoqlParser.ROLLUP:
			case SoqlParser.TOLABEL:
			case SoqlParser.OFFSET:
			case SoqlParser.DATA:
			case SoqlParser.CATEGORY:
			case SoqlParser.AT:
			case SoqlParser.ABOVE:
			case SoqlParser.BELOW:
			case SoqlParser.ABOVE_OR_BELOW:
			case SoqlParser.SECURITY_ENFORCED:
			case SoqlParser.SYSTEM_MODE:
			case SoqlParser.USER_MODE:
			case SoqlParser.REFERENCE:
			case SoqlParser.CUBE:
			case SoqlParser.FORMAT:
			case SoqlParser.TRACKING:
			case SoqlParser.VIEWSTAT:
			case SoqlParser.CUSTOM:
			case SoqlParser.STANDARD:
			case SoqlParser.DISTANCE:
			case SoqlParser.GEOLOCATION:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.CONVERT_TIMEZONE:
			case SoqlParser.YESTERDAY:
			case SoqlParser.TODAY:
			case SoqlParser.TOMORROW:
			case SoqlParser.LAST_WEEK:
			case SoqlParser.THIS_WEEK:
			case SoqlParser.NEXT_WEEK:
			case SoqlParser.LAST_MONTH:
			case SoqlParser.THIS_MONTH:
			case SoqlParser.NEXT_MONTH:
			case SoqlParser.LAST_90_DAYS:
			case SoqlParser.NEXT_90_DAYS:
			case SoqlParser.LAST_N_DAYS_N:
			case SoqlParser.NEXT_N_DAYS_N:
			case SoqlParser.N_DAYS_AGO_N:
			case SoqlParser.NEXT_N_WEEKS_N:
			case SoqlParser.LAST_N_WEEKS_N:
			case SoqlParser.N_WEEKS_AGO_N:
			case SoqlParser.NEXT_N_MONTHS_N:
			case SoqlParser.LAST_N_MONTHS_N:
			case SoqlParser.N_MONTHS_AGO_N:
			case SoqlParser.THIS_QUARTER:
			case SoqlParser.LAST_QUARTER:
			case SoqlParser.NEXT_QUARTER:
			case SoqlParser.NEXT_N_QUARTERS_N:
			case SoqlParser.LAST_N_QUARTERS_N:
			case SoqlParser.N_QUARTERS_AGO_N:
			case SoqlParser.THIS_YEAR:
			case SoqlParser.LAST_YEAR:
			case SoqlParser.NEXT_YEAR:
			case SoqlParser.NEXT_N_YEARS_N:
			case SoqlParser.LAST_N_YEARS_N:
			case SoqlParser.N_YEARS_AGO_N:
			case SoqlParser.THIS_FISCAL_QUARTER:
			case SoqlParser.LAST_FISCAL_QUARTER:
			case SoqlParser.NEXT_FISCAL_QUARTER:
			case SoqlParser.NEXT_N_FISCAL_QUARTERS_N:
			case SoqlParser.LAST_N_FISCAL_QUARTERS_N:
			case SoqlParser.N_FISCAL_QUARTERS_AGO_N:
			case SoqlParser.THIS_FISCAL_YEAR:
			case SoqlParser.LAST_FISCAL_YEAR:
			case SoqlParser.NEXT_FISCAL_YEAR:
			case SoqlParser.NEXT_N_FISCAL_YEARS_N:
			case SoqlParser.LAST_N_FISCAL_YEARS_N:
			case SoqlParser.N_FISCAL_YEARS_AGO_N:
			case SoqlParser.IntegralCurrencyLiteral:
			case SoqlParser.FIND:
			case SoqlParser.EMAIL:
			case SoqlParser.NAME:
			case SoqlParser.PHONE:
			case SoqlParser.SIDEBAR:
			case SoqlParser.FIELDS:
			case SoqlParser.METADATA:
			case SoqlParser.PRICEBOOKID:
			case SoqlParser.NETWORK:
			case SoqlParser.SNIPPET:
			case SoqlParser.TARGET_LENGTH:
			case SoqlParser.DIVISION:
			case SoqlParser.RETURNING:
			case SoqlParser.LISTVIEW:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 789;
				this.id();
				}
				break;
			case SoqlParser.LPAREN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 790;
				this.match(SoqlParser.LPAREN);
				this.state = 791;
				this.whenLiteral();
				this.state = 792;
				this.match(SoqlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SoqlParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.match(SoqlParser.FOR);
			this.state = 797;
			this.match(SoqlParser.LPAREN);
			this.state = 798;
			this.forControl();
			this.state = 799;
			this.match(SoqlParser.RPAREN);
			this.state = 802;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ABSTRACT:
			case SoqlParser.AFTER:
			case SoqlParser.BEFORE:
			case SoqlParser.BREAK:
			case SoqlParser.CONTINUE:
			case SoqlParser.DELETE:
			case SoqlParser.DO:
			case SoqlParser.FINAL:
			case SoqlParser.FOR:
			case SoqlParser.GET:
			case SoqlParser.GLOBAL:
			case SoqlParser.IF:
			case SoqlParser.INHERITED:
			case SoqlParser.INSERT:
			case SoqlParser.INSTANCEOF:
			case SoqlParser.MERGE:
			case SoqlParser.NEW:
			case SoqlParser.NULL:
			case SoqlParser.OVERRIDE:
			case SoqlParser.PRIVATE:
			case SoqlParser.PROTECTED:
			case SoqlParser.PUBLIC:
			case SoqlParser.RETURN:
			case SoqlParser.SYSTEMRUNAS:
			case SoqlParser.SET:
			case SoqlParser.SHARING:
			case SoqlParser.STATIC:
			case SoqlParser.SUPER:
			case SoqlParser.SWITCH:
			case SoqlParser.TESTMETHOD:
			case SoqlParser.THIS:
			case SoqlParser.THROW:
			case SoqlParser.TRANSIENT:
			case SoqlParser.TRIGGER:
			case SoqlParser.TRY:
			case SoqlParser.UNDELETE:
			case SoqlParser.UPDATE:
			case SoqlParser.UPSERT:
			case SoqlParser.VIRTUAL:
			case SoqlParser.VOID:
			case SoqlParser.WEBSERVICE:
			case SoqlParser.WHEN:
			case SoqlParser.WHILE:
			case SoqlParser.WITH:
			case SoqlParser.WITHOUT:
			case SoqlParser.LIST:
			case SoqlParser.MAP:
			case SoqlParser.SYSTEM:
			case SoqlParser.USER:
			case SoqlParser.SELECT:
			case SoqlParser.COUNT:
			case SoqlParser.FROM:
			case SoqlParser.AS:
			case SoqlParser.USING:
			case SoqlParser.SCOPE:
			case SoqlParser.WHERE:
			case SoqlParser.ORDER:
			case SoqlParser.BY:
			case SoqlParser.LIMIT:
			case SoqlParser.SOQLAND:
			case SoqlParser.SOQLOR:
			case SoqlParser.NOT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TYPEOF:
			case SoqlParser.END:
			case SoqlParser.THEN:
			case SoqlParser.LIKE:
			case SoqlParser.IN:
			case SoqlParser.INCLUDES:
			case SoqlParser.EXCLUDES:
			case SoqlParser.ASC:
			case SoqlParser.DESC:
			case SoqlParser.NULLS:
			case SoqlParser.FIRST:
			case SoqlParser.LAST:
			case SoqlParser.GROUP:
			case SoqlParser.ALL:
			case SoqlParser.ROWS:
			case SoqlParser.VIEW:
			case SoqlParser.HAVING:
			case SoqlParser.ROLLUP:
			case SoqlParser.TOLABEL:
			case SoqlParser.OFFSET:
			case SoqlParser.DATA:
			case SoqlParser.CATEGORY:
			case SoqlParser.AT:
			case SoqlParser.ABOVE:
			case SoqlParser.BELOW:
			case SoqlParser.ABOVE_OR_BELOW:
			case SoqlParser.SECURITY_ENFORCED:
			case SoqlParser.SYSTEM_MODE:
			case SoqlParser.USER_MODE:
			case SoqlParser.REFERENCE:
			case SoqlParser.CUBE:
			case SoqlParser.FORMAT:
			case SoqlParser.TRACKING:
			case SoqlParser.VIEWSTAT:
			case SoqlParser.CUSTOM:
			case SoqlParser.STANDARD:
			case SoqlParser.DISTANCE:
			case SoqlParser.GEOLOCATION:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.CONVERT_TIMEZONE:
			case SoqlParser.YESTERDAY:
			case SoqlParser.TODAY:
			case SoqlParser.TOMORROW:
			case SoqlParser.LAST_WEEK:
			case SoqlParser.THIS_WEEK:
			case SoqlParser.NEXT_WEEK:
			case SoqlParser.LAST_MONTH:
			case SoqlParser.THIS_MONTH:
			case SoqlParser.NEXT_MONTH:
			case SoqlParser.LAST_90_DAYS:
			case SoqlParser.NEXT_90_DAYS:
			case SoqlParser.LAST_N_DAYS_N:
			case SoqlParser.NEXT_N_DAYS_N:
			case SoqlParser.N_DAYS_AGO_N:
			case SoqlParser.NEXT_N_WEEKS_N:
			case SoqlParser.LAST_N_WEEKS_N:
			case SoqlParser.N_WEEKS_AGO_N:
			case SoqlParser.NEXT_N_MONTHS_N:
			case SoqlParser.LAST_N_MONTHS_N:
			case SoqlParser.N_MONTHS_AGO_N:
			case SoqlParser.THIS_QUARTER:
			case SoqlParser.LAST_QUARTER:
			case SoqlParser.NEXT_QUARTER:
			case SoqlParser.NEXT_N_QUARTERS_N:
			case SoqlParser.LAST_N_QUARTERS_N:
			case SoqlParser.N_QUARTERS_AGO_N:
			case SoqlParser.THIS_YEAR:
			case SoqlParser.LAST_YEAR:
			case SoqlParser.NEXT_YEAR:
			case SoqlParser.NEXT_N_YEARS_N:
			case SoqlParser.LAST_N_YEARS_N:
			case SoqlParser.N_YEARS_AGO_N:
			case SoqlParser.THIS_FISCAL_QUARTER:
			case SoqlParser.LAST_FISCAL_QUARTER:
			case SoqlParser.NEXT_FISCAL_QUARTER:
			case SoqlParser.NEXT_N_FISCAL_QUARTERS_N:
			case SoqlParser.LAST_N_FISCAL_QUARTERS_N:
			case SoqlParser.N_FISCAL_QUARTERS_AGO_N:
			case SoqlParser.THIS_FISCAL_YEAR:
			case SoqlParser.LAST_FISCAL_YEAR:
			case SoqlParser.NEXT_FISCAL_YEAR:
			case SoqlParser.NEXT_N_FISCAL_YEARS_N:
			case SoqlParser.LAST_N_FISCAL_YEARS_N:
			case SoqlParser.N_FISCAL_YEARS_AGO_N:
			case SoqlParser.IntegralCurrencyLiteral:
			case SoqlParser.FIND:
			case SoqlParser.EMAIL:
			case SoqlParser.NAME:
			case SoqlParser.PHONE:
			case SoqlParser.SIDEBAR:
			case SoqlParser.FIELDS:
			case SoqlParser.METADATA:
			case SoqlParser.PRICEBOOKID:
			case SoqlParser.NETWORK:
			case SoqlParser.SNIPPET:
			case SoqlParser.TARGET_LENGTH:
			case SoqlParser.DIVISION:
			case SoqlParser.RETURNING:
			case SoqlParser.LISTVIEW:
			case SoqlParser.FindLiteral:
			case SoqlParser.IntegerLiteral:
			case SoqlParser.LongLiteral:
			case SoqlParser.NumberLiteral:
			case SoqlParser.BooleanLiteral:
			case SoqlParser.StringLiteral:
			case SoqlParser.LPAREN:
			case SoqlParser.LBRACE:
			case SoqlParser.LBRACK:
			case SoqlParser.BANG:
			case SoqlParser.TILDE:
			case SoqlParser.INC:
			case SoqlParser.DEC:
			case SoqlParser.ADD:
			case SoqlParser.SUB:
			case SoqlParser.ATSIGN:
			case SoqlParser.Identifier:
				{
				this.state = 800;
				this.statement();
				}
				break;
			case SoqlParser.SEMI:
				{
				this.state = 801;
				this.match(SoqlParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SoqlParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
			this.match(SoqlParser.WHILE);
			this.state = 805;
			this.parExpression();
			this.state = 808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ABSTRACT:
			case SoqlParser.AFTER:
			case SoqlParser.BEFORE:
			case SoqlParser.BREAK:
			case SoqlParser.CONTINUE:
			case SoqlParser.DELETE:
			case SoqlParser.DO:
			case SoqlParser.FINAL:
			case SoqlParser.FOR:
			case SoqlParser.GET:
			case SoqlParser.GLOBAL:
			case SoqlParser.IF:
			case SoqlParser.INHERITED:
			case SoqlParser.INSERT:
			case SoqlParser.INSTANCEOF:
			case SoqlParser.MERGE:
			case SoqlParser.NEW:
			case SoqlParser.NULL:
			case SoqlParser.OVERRIDE:
			case SoqlParser.PRIVATE:
			case SoqlParser.PROTECTED:
			case SoqlParser.PUBLIC:
			case SoqlParser.RETURN:
			case SoqlParser.SYSTEMRUNAS:
			case SoqlParser.SET:
			case SoqlParser.SHARING:
			case SoqlParser.STATIC:
			case SoqlParser.SUPER:
			case SoqlParser.SWITCH:
			case SoqlParser.TESTMETHOD:
			case SoqlParser.THIS:
			case SoqlParser.THROW:
			case SoqlParser.TRANSIENT:
			case SoqlParser.TRIGGER:
			case SoqlParser.TRY:
			case SoqlParser.UNDELETE:
			case SoqlParser.UPDATE:
			case SoqlParser.UPSERT:
			case SoqlParser.VIRTUAL:
			case SoqlParser.VOID:
			case SoqlParser.WEBSERVICE:
			case SoqlParser.WHEN:
			case SoqlParser.WHILE:
			case SoqlParser.WITH:
			case SoqlParser.WITHOUT:
			case SoqlParser.LIST:
			case SoqlParser.MAP:
			case SoqlParser.SYSTEM:
			case SoqlParser.USER:
			case SoqlParser.SELECT:
			case SoqlParser.COUNT:
			case SoqlParser.FROM:
			case SoqlParser.AS:
			case SoqlParser.USING:
			case SoqlParser.SCOPE:
			case SoqlParser.WHERE:
			case SoqlParser.ORDER:
			case SoqlParser.BY:
			case SoqlParser.LIMIT:
			case SoqlParser.SOQLAND:
			case SoqlParser.SOQLOR:
			case SoqlParser.NOT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TYPEOF:
			case SoqlParser.END:
			case SoqlParser.THEN:
			case SoqlParser.LIKE:
			case SoqlParser.IN:
			case SoqlParser.INCLUDES:
			case SoqlParser.EXCLUDES:
			case SoqlParser.ASC:
			case SoqlParser.DESC:
			case SoqlParser.NULLS:
			case SoqlParser.FIRST:
			case SoqlParser.LAST:
			case SoqlParser.GROUP:
			case SoqlParser.ALL:
			case SoqlParser.ROWS:
			case SoqlParser.VIEW:
			case SoqlParser.HAVING:
			case SoqlParser.ROLLUP:
			case SoqlParser.TOLABEL:
			case SoqlParser.OFFSET:
			case SoqlParser.DATA:
			case SoqlParser.CATEGORY:
			case SoqlParser.AT:
			case SoqlParser.ABOVE:
			case SoqlParser.BELOW:
			case SoqlParser.ABOVE_OR_BELOW:
			case SoqlParser.SECURITY_ENFORCED:
			case SoqlParser.SYSTEM_MODE:
			case SoqlParser.USER_MODE:
			case SoqlParser.REFERENCE:
			case SoqlParser.CUBE:
			case SoqlParser.FORMAT:
			case SoqlParser.TRACKING:
			case SoqlParser.VIEWSTAT:
			case SoqlParser.CUSTOM:
			case SoqlParser.STANDARD:
			case SoqlParser.DISTANCE:
			case SoqlParser.GEOLOCATION:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.CONVERT_TIMEZONE:
			case SoqlParser.YESTERDAY:
			case SoqlParser.TODAY:
			case SoqlParser.TOMORROW:
			case SoqlParser.LAST_WEEK:
			case SoqlParser.THIS_WEEK:
			case SoqlParser.NEXT_WEEK:
			case SoqlParser.LAST_MONTH:
			case SoqlParser.THIS_MONTH:
			case SoqlParser.NEXT_MONTH:
			case SoqlParser.LAST_90_DAYS:
			case SoqlParser.NEXT_90_DAYS:
			case SoqlParser.LAST_N_DAYS_N:
			case SoqlParser.NEXT_N_DAYS_N:
			case SoqlParser.N_DAYS_AGO_N:
			case SoqlParser.NEXT_N_WEEKS_N:
			case SoqlParser.LAST_N_WEEKS_N:
			case SoqlParser.N_WEEKS_AGO_N:
			case SoqlParser.NEXT_N_MONTHS_N:
			case SoqlParser.LAST_N_MONTHS_N:
			case SoqlParser.N_MONTHS_AGO_N:
			case SoqlParser.THIS_QUARTER:
			case SoqlParser.LAST_QUARTER:
			case SoqlParser.NEXT_QUARTER:
			case SoqlParser.NEXT_N_QUARTERS_N:
			case SoqlParser.LAST_N_QUARTERS_N:
			case SoqlParser.N_QUARTERS_AGO_N:
			case SoqlParser.THIS_YEAR:
			case SoqlParser.LAST_YEAR:
			case SoqlParser.NEXT_YEAR:
			case SoqlParser.NEXT_N_YEARS_N:
			case SoqlParser.LAST_N_YEARS_N:
			case SoqlParser.N_YEARS_AGO_N:
			case SoqlParser.THIS_FISCAL_QUARTER:
			case SoqlParser.LAST_FISCAL_QUARTER:
			case SoqlParser.NEXT_FISCAL_QUARTER:
			case SoqlParser.NEXT_N_FISCAL_QUARTERS_N:
			case SoqlParser.LAST_N_FISCAL_QUARTERS_N:
			case SoqlParser.N_FISCAL_QUARTERS_AGO_N:
			case SoqlParser.THIS_FISCAL_YEAR:
			case SoqlParser.LAST_FISCAL_YEAR:
			case SoqlParser.NEXT_FISCAL_YEAR:
			case SoqlParser.NEXT_N_FISCAL_YEARS_N:
			case SoqlParser.LAST_N_FISCAL_YEARS_N:
			case SoqlParser.N_FISCAL_YEARS_AGO_N:
			case SoqlParser.IntegralCurrencyLiteral:
			case SoqlParser.FIND:
			case SoqlParser.EMAIL:
			case SoqlParser.NAME:
			case SoqlParser.PHONE:
			case SoqlParser.SIDEBAR:
			case SoqlParser.FIELDS:
			case SoqlParser.METADATA:
			case SoqlParser.PRICEBOOKID:
			case SoqlParser.NETWORK:
			case SoqlParser.SNIPPET:
			case SoqlParser.TARGET_LENGTH:
			case SoqlParser.DIVISION:
			case SoqlParser.RETURNING:
			case SoqlParser.LISTVIEW:
			case SoqlParser.FindLiteral:
			case SoqlParser.IntegerLiteral:
			case SoqlParser.LongLiteral:
			case SoqlParser.NumberLiteral:
			case SoqlParser.BooleanLiteral:
			case SoqlParser.StringLiteral:
			case SoqlParser.LPAREN:
			case SoqlParser.LBRACE:
			case SoqlParser.LBRACK:
			case SoqlParser.BANG:
			case SoqlParser.TILDE:
			case SoqlParser.INC:
			case SoqlParser.DEC:
			case SoqlParser.ADD:
			case SoqlParser.SUB:
			case SoqlParser.ATSIGN:
			case SoqlParser.Identifier:
				{
				this.state = 806;
				this.statement();
				}
				break;
			case SoqlParser.SEMI:
				{
				this.state = 807;
				this.match(SoqlParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SoqlParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.match(SoqlParser.DO);
			this.state = 811;
			this.statement();
			this.state = 812;
			this.match(SoqlParser.WHILE);
			this.state = 813;
			this.parExpression();
			this.state = 814;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SoqlParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.match(SoqlParser.TRY);
			this.state = 817;
			this.block();
			this.state = 827;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.CATCH:
				{
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 818;
					this.catchClause();
					}
					}
					this.state = 821;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SoqlParser.CATCH);
				this.state = 824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.FINALLY) {
					{
					this.state = 823;
					this.finallyBlock();
					}
				}

				}
				break;
			case SoqlParser.FINALLY:
				{
				this.state = 826;
				this.finallyBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SoqlParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(SoqlParser.RETURN);
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
				{
				this.state = 830;
				this.expression(0);
				}
			}

			this.state = 833;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SoqlParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			this.match(SoqlParser.THROW);
			this.state = 836;
			this.expression(0);
			this.state = 837;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SoqlParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 839;
			this.match(SoqlParser.BREAK);
			this.state = 840;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SoqlParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this.match(SoqlParser.CONTINUE);
			this.state = 843;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public accessLevel(): AccessLevelContext {
		let _localctx: AccessLevelContext = new AccessLevelContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SoqlParser.RULE_accessLevel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.match(SoqlParser.AS);
			this.state = 846;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.SYSTEM || _la === SoqlParser.USER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertStatement(): InsertStatementContext {
		let _localctx: InsertStatementContext = new InsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SoqlParser.RULE_insertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 848;
			this.match(SoqlParser.INSERT);
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 849;
				this.accessLevel();
				}
				break;
			}
			this.state = 852;
			this.expression(0);
			this.state = 853;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateStatement(): UpdateStatementContext {
		let _localctx: UpdateStatementContext = new UpdateStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SoqlParser.RULE_updateStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.match(SoqlParser.UPDATE);
			this.state = 857;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 856;
				this.accessLevel();
				}
				break;
			}
			this.state = 859;
			this.expression(0);
			this.state = 860;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deleteStatement(): DeleteStatementContext {
		let _localctx: DeleteStatementContext = new DeleteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SoqlParser.RULE_deleteStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 862;
			this.match(SoqlParser.DELETE);
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 863;
				this.accessLevel();
				}
				break;
			}
			this.state = 866;
			this.expression(0);
			this.state = 867;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public undeleteStatement(): UndeleteStatementContext {
		let _localctx: UndeleteStatementContext = new UndeleteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SoqlParser.RULE_undeleteStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.match(SoqlParser.UNDELETE);
			this.state = 871;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 870;
				this.accessLevel();
				}
				break;
			}
			this.state = 873;
			this.expression(0);
			this.state = 874;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upsertStatement(): UpsertStatementContext {
		let _localctx: UpsertStatementContext = new UpsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SoqlParser.RULE_upsertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 876;
			this.match(SoqlParser.UPSERT);
			this.state = 878;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 877;
				this.accessLevel();
				}
				break;
			}
			this.state = 880;
			this.expression(0);
			this.state = 882;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)))) !== 0) || _la === SoqlParser.Identifier) {
				{
				this.state = 881;
				this.qualifiedName();
				}
			}

			this.state = 884;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mergeStatement(): MergeStatementContext {
		let _localctx: MergeStatementContext = new MergeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SoqlParser.RULE_mergeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 886;
			this.match(SoqlParser.MERGE);
			this.state = 888;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 887;
				this.accessLevel();
				}
				break;
			}
			this.state = 890;
			this.expression(0);
			this.state = 891;
			this.expression(0);
			this.state = 892;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public runAsStatement(): RunAsStatementContext {
		let _localctx: RunAsStatementContext = new RunAsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SoqlParser.RULE_runAsStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this.match(SoqlParser.SYSTEMRUNAS);
			this.state = 895;
			this.match(SoqlParser.LPAREN);
			this.state = 897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
				{
				this.state = 896;
				this.expressionList();
				}
			}

			this.state = 899;
			this.match(SoqlParser.RPAREN);
			this.state = 900;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SoqlParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 902;
			this.expression(0);
			this.state = 903;
			this.match(SoqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyBlock(): PropertyBlockContext {
		let _localctx: PropertyBlockContext = new PropertyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SoqlParser.RULE_propertyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SoqlParser.STATIC - 36)) | (1 << (SoqlParser.TESTMETHOD - 36)) | (1 << (SoqlParser.TRANSIENT - 36)) | (1 << (SoqlParser.VIRTUAL - 36)) | (1 << (SoqlParser.WEBSERVICE - 36)) | (1 << (SoqlParser.WITH - 36)) | (1 << (SoqlParser.WITHOUT - 36)))) !== 0) || _la === SoqlParser.ATSIGN) {
				{
				{
				this.state = 905;
				this.modifier();
				}
				}
				this.state = 910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 913;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.GET:
				{
				this.state = 911;
				this.getter();
				}
				break;
			case SoqlParser.SET:
				{
				this.state = 912;
				this.setter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SoqlParser.RULE_getter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 915;
			this.match(SoqlParser.GET);
			this.state = 918;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.SEMI:
				{
				this.state = 916;
				this.match(SoqlParser.SEMI);
				}
				break;
			case SoqlParser.LBRACE:
				{
				this.state = 917;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SoqlParser.RULE_setter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			this.match(SoqlParser.SET);
			this.state = 923;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.SEMI:
				{
				this.state = 921;
				this.match(SoqlParser.SEMI);
				}
				break;
			case SoqlParser.LBRACE:
				{
				this.state = 922;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SoqlParser.RULE_catchClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 925;
			this.match(SoqlParser.CATCH);
			this.state = 926;
			this.match(SoqlParser.LPAREN);
			this.state = 930;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 927;
					this.modifier();
					}
					}
				}
				this.state = 932;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			}
			this.state = 933;
			this.qualifiedName();
			this.state = 934;
			this.id();
			this.state = 935;
			this.match(SoqlParser.RPAREN);
			this.state = 936;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SoqlParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 938;
			this.match(SoqlParser.FINALLY);
			this.state = 939;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SoqlParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 953;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 941;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.GET) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.STATIC - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.TESTMETHOD - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VIRTUAL - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WEBSERVICE - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.ATSIGN - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
					{
					this.state = 942;
					this.forInit();
					}
				}

				this.state = 945;
				this.match(SoqlParser.SEMI);
				this.state = 947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
					{
					this.state = 946;
					this.expression(0);
					}
				}

				this.state = 949;
				this.match(SoqlParser.SEMI);
				this.state = 951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
					{
					this.state = 950;
					this.forUpdate();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SoqlParser.RULE_forInit);
		try {
			this.state = 957;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 955;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 956;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SoqlParser.RULE_enhancedForControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 959;
			this.typeRef();
			this.state = 960;
			this.id();
			this.state = 961;
			this.match(SoqlParser.COLON);
			this.state = 962;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SoqlParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SoqlParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 966;
			this.match(SoqlParser.LPAREN);
			this.state = 967;
			this.expression(0);
			this.state = 968;
			this.match(SoqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SoqlParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.expression(0);
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 971;
				this.match(SoqlParser.COMMA);
				this.state = 972;
				this.expression(0);
				}
				}
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 154;
		this.enterRecursionRule(_localctx, 154, SoqlParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 996;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				_localctx = new PrimaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 979;
				this.primary();
				}
				break;

			case 2:
				{
				_localctx = new MethodCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 980;
				this.methodCall();
				}
				break;

			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 981;
				this.match(SoqlParser.NEW);
				this.state = 982;
				this.creator();
				}
				break;

			case 4:
				{
				_localctx = new CastExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 983;
				this.match(SoqlParser.LPAREN);
				this.state = 984;
				this.typeRef();
				this.state = 985;
				this.match(SoqlParser.RPAREN);
				this.state = 986;
				this.expression(18);
				}
				break;

			case 5:
				{
				_localctx = new SubExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 988;
				this.match(SoqlParser.LPAREN);
				this.state = 989;
				this.expression(0);
				this.state = 990;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 6:
				{
				_localctx = new PreOpExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 992;
				_la = this._input.LA(1);
				if (!(((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 993;
				this.expression(15);
				}
				break;

			case 7:
				{
				_localctx = new NegExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 994;
				_la = this._input.LA(1);
				if (!(_la === SoqlParser.BANG || _la === SoqlParser.TILDE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 995;
				this.expression(14);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1066;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1064;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
					case 1:
						{
						_localctx = new Arth1ExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 998;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 999;
						_la = this._input.LA(1);
						if (!(_la === SoqlParser.MUL || _la === SoqlParser.DIV)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1000;
						this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new Arth2ExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1001;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1002;
						_la = this._input.LA(1);
						if (!(_la === SoqlParser.ADD || _la === SoqlParser.SUB)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1003;
						this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new BitExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1004;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1012;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
						case 1:
							{
							this.state = 1005;
							this.match(SoqlParser.LT);
							this.state = 1006;
							this.match(SoqlParser.LT);
							}
							break;

						case 2:
							{
							this.state = 1007;
							this.match(SoqlParser.GT);
							this.state = 1008;
							this.match(SoqlParser.GT);
							this.state = 1009;
							this.match(SoqlParser.GT);
							}
							break;

						case 3:
							{
							this.state = 1010;
							this.match(SoqlParser.GT);
							this.state = 1011;
							this.match(SoqlParser.GT);
							}
							break;
						}
						this.state = 1014;
						this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new CmpExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1015;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1016;
						_la = this._input.LA(1);
						if (!(_la === SoqlParser.GT || _la === SoqlParser.LT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1018;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === SoqlParser.ASSIGN) {
							{
							this.state = 1017;
							this.match(SoqlParser.ASSIGN);
							}
						}

						this.state = 1020;
						this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1021;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1022;
						_la = this._input.LA(1);
						if (!(((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (SoqlParser.EQUAL - 224)) | (1 << (SoqlParser.TRIPLEEQUAL - 224)) | (1 << (SoqlParser.NOTEQUAL - 224)) | (1 << (SoqlParser.LESSANDGREATER - 224)) | (1 << (SoqlParser.TRIPLENOTEQUAL - 224)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1023;
						this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1024;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1025;
						this.match(SoqlParser.BITAND);
						this.state = 1026;
						this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new BitNotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1027;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1028;
						this.match(SoqlParser.CARET);
						this.state = 1029;
						this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1030;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1031;
						this.match(SoqlParser.BITOR);
						this.state = 1032;
						this.expression(6);
						}
						break;

					case 9:
						{
						_localctx = new LogAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1033;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1034;
						this.match(SoqlParser.AND);
						this.state = 1035;
						this.expression(5);
						}
						break;

					case 10:
						{
						_localctx = new LogOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1036;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1037;
						this.match(SoqlParser.OR);
						this.state = 1038;
						this.expression(4);
						}
						break;

					case 11:
						{
						_localctx = new CondExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1039;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1040;
						this.match(SoqlParser.QUESTION);
						this.state = 1041;
						this.expression(0);
						this.state = 1042;
						this.match(SoqlParser.COLON);
						this.state = 1043;
						this.expression(2);
						}
						break;

					case 12:
						{
						_localctx = new AssignExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1045;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1046;
						_la = this._input.LA(1);
						if (!(((((_la - 216)) & ~0x1F) === 0 && ((1 << (_la - 216)) & ((1 << (SoqlParser.ASSIGN - 216)) | (1 << (SoqlParser.ADD_ASSIGN - 216)) | (1 << (SoqlParser.SUB_ASSIGN - 216)) | (1 << (SoqlParser.MUL_ASSIGN - 216)) | (1 << (SoqlParser.DIV_ASSIGN - 216)) | (1 << (SoqlParser.AND_ASSIGN - 216)) | (1 << (SoqlParser.OR_ASSIGN - 216)) | (1 << (SoqlParser.XOR_ASSIGN - 216)))) !== 0) || ((((_la - 248)) & ~0x1F) === 0 && ((1 << (_la - 248)) & ((1 << (SoqlParser.LSHIFT_ASSIGN - 248)) | (1 << (SoqlParser.RSHIFT_ASSIGN - 248)) | (1 << (SoqlParser.URSHIFT_ASSIGN - 248)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1047;
						this.expression(1);
						}
						break;

					case 13:
						{
						_localctx = new DotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1048;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 1049;
						_la = this._input.LA(1);
						if (!(_la === SoqlParser.DOT || _la === SoqlParser.QUESTIONDOT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1052;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
						case 1:
							{
							this.state = 1050;
							this.dotMethodCall();
							}
							break;

						case 2:
							{
							this.state = 1051;
							this.anyId();
							}
							break;
						}
						}
						break;

					case 14:
						{
						_localctx = new ArrayExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1054;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1055;
						this.match(SoqlParser.LBRACK);
						this.state = 1056;
						this.expression(0);
						this.state = 1057;
						this.match(SoqlParser.RBRACK);
						}
						break;

					case 15:
						{
						_localctx = new PostOpExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1059;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1060;
						_la = this._input.LA(1);
						if (!(_la === SoqlParser.INC || _la === SoqlParser.DEC)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 16:
						{
						_localctx = new InstanceOfExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SoqlParser.RULE_expression);
						this.state = 1061;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1062;
						this.match(SoqlParser.INSTANCEOF);
						this.state = 1063;
						this.typeRef();
						}
						break;
					}
					}
				}
				this.state = 1068;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SoqlParser.RULE_primary);
		try {
			this.state = 1082;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				_localctx = new ThisPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1069;
				this.match(SoqlParser.THIS);
				}
				break;

			case 2:
				_localctx = new SuperPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1070;
				this.match(SoqlParser.SUPER);
				}
				break;

			case 3:
				_localctx = new LiteralPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1071;
				this.literal();
				}
				break;

			case 4:
				_localctx = new TypeRefPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1072;
				this.typeRef();
				this.state = 1073;
				this.match(SoqlParser.DOT);
				this.state = 1074;
				this.match(SoqlParser.CLASS);
				}
				break;

			case 5:
				_localctx = new VoidPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1076;
				this.match(SoqlParser.VOID);
				this.state = 1077;
				this.match(SoqlParser.DOT);
				this.state = 1078;
				this.match(SoqlParser.CLASS);
				}
				break;

			case 6:
				_localctx = new IdPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1079;
				this.id();
				}
				break;

			case 7:
				_localctx = new SoqlPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1080;
				this.soqlLiteral();
				}
				break;

			case 8:
				_localctx = new SoslPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1081;
				this.soslLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SoqlParser.RULE_methodCall);
		let _la: number;
		try {
			this.state = 1103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.AFTER:
			case SoqlParser.BEFORE:
			case SoqlParser.GET:
			case SoqlParser.INHERITED:
			case SoqlParser.INSTANCEOF:
			case SoqlParser.SET:
			case SoqlParser.SHARING:
			case SoqlParser.SWITCH:
			case SoqlParser.TRANSIENT:
			case SoqlParser.TRIGGER:
			case SoqlParser.WHEN:
			case SoqlParser.WITH:
			case SoqlParser.WITHOUT:
			case SoqlParser.SYSTEM:
			case SoqlParser.USER:
			case SoqlParser.SELECT:
			case SoqlParser.COUNT:
			case SoqlParser.FROM:
			case SoqlParser.AS:
			case SoqlParser.USING:
			case SoqlParser.SCOPE:
			case SoqlParser.WHERE:
			case SoqlParser.ORDER:
			case SoqlParser.BY:
			case SoqlParser.LIMIT:
			case SoqlParser.SOQLAND:
			case SoqlParser.SOQLOR:
			case SoqlParser.NOT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TYPEOF:
			case SoqlParser.END:
			case SoqlParser.THEN:
			case SoqlParser.LIKE:
			case SoqlParser.IN:
			case SoqlParser.INCLUDES:
			case SoqlParser.EXCLUDES:
			case SoqlParser.ASC:
			case SoqlParser.DESC:
			case SoqlParser.NULLS:
			case SoqlParser.FIRST:
			case SoqlParser.LAST:
			case SoqlParser.GROUP:
			case SoqlParser.ALL:
			case SoqlParser.ROWS:
			case SoqlParser.VIEW:
			case SoqlParser.HAVING:
			case SoqlParser.ROLLUP:
			case SoqlParser.TOLABEL:
			case SoqlParser.OFFSET:
			case SoqlParser.DATA:
			case SoqlParser.CATEGORY:
			case SoqlParser.AT:
			case SoqlParser.ABOVE:
			case SoqlParser.BELOW:
			case SoqlParser.ABOVE_OR_BELOW:
			case SoqlParser.SECURITY_ENFORCED:
			case SoqlParser.SYSTEM_MODE:
			case SoqlParser.USER_MODE:
			case SoqlParser.REFERENCE:
			case SoqlParser.CUBE:
			case SoqlParser.FORMAT:
			case SoqlParser.TRACKING:
			case SoqlParser.VIEWSTAT:
			case SoqlParser.CUSTOM:
			case SoqlParser.STANDARD:
			case SoqlParser.DISTANCE:
			case SoqlParser.GEOLOCATION:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.CONVERT_TIMEZONE:
			case SoqlParser.YESTERDAY:
			case SoqlParser.TODAY:
			case SoqlParser.TOMORROW:
			case SoqlParser.LAST_WEEK:
			case SoqlParser.THIS_WEEK:
			case SoqlParser.NEXT_WEEK:
			case SoqlParser.LAST_MONTH:
			case SoqlParser.THIS_MONTH:
			case SoqlParser.NEXT_MONTH:
			case SoqlParser.LAST_90_DAYS:
			case SoqlParser.NEXT_90_DAYS:
			case SoqlParser.LAST_N_DAYS_N:
			case SoqlParser.NEXT_N_DAYS_N:
			case SoqlParser.N_DAYS_AGO_N:
			case SoqlParser.NEXT_N_WEEKS_N:
			case SoqlParser.LAST_N_WEEKS_N:
			case SoqlParser.N_WEEKS_AGO_N:
			case SoqlParser.NEXT_N_MONTHS_N:
			case SoqlParser.LAST_N_MONTHS_N:
			case SoqlParser.N_MONTHS_AGO_N:
			case SoqlParser.THIS_QUARTER:
			case SoqlParser.LAST_QUARTER:
			case SoqlParser.NEXT_QUARTER:
			case SoqlParser.NEXT_N_QUARTERS_N:
			case SoqlParser.LAST_N_QUARTERS_N:
			case SoqlParser.N_QUARTERS_AGO_N:
			case SoqlParser.THIS_YEAR:
			case SoqlParser.LAST_YEAR:
			case SoqlParser.NEXT_YEAR:
			case SoqlParser.NEXT_N_YEARS_N:
			case SoqlParser.LAST_N_YEARS_N:
			case SoqlParser.N_YEARS_AGO_N:
			case SoqlParser.THIS_FISCAL_QUARTER:
			case SoqlParser.LAST_FISCAL_QUARTER:
			case SoqlParser.NEXT_FISCAL_QUARTER:
			case SoqlParser.NEXT_N_FISCAL_QUARTERS_N:
			case SoqlParser.LAST_N_FISCAL_QUARTERS_N:
			case SoqlParser.N_FISCAL_QUARTERS_AGO_N:
			case SoqlParser.THIS_FISCAL_YEAR:
			case SoqlParser.LAST_FISCAL_YEAR:
			case SoqlParser.NEXT_FISCAL_YEAR:
			case SoqlParser.NEXT_N_FISCAL_YEARS_N:
			case SoqlParser.LAST_N_FISCAL_YEARS_N:
			case SoqlParser.N_FISCAL_YEARS_AGO_N:
			case SoqlParser.IntegralCurrencyLiteral:
			case SoqlParser.FIND:
			case SoqlParser.EMAIL:
			case SoqlParser.NAME:
			case SoqlParser.PHONE:
			case SoqlParser.SIDEBAR:
			case SoqlParser.FIELDS:
			case SoqlParser.METADATA:
			case SoqlParser.PRICEBOOKID:
			case SoqlParser.NETWORK:
			case SoqlParser.SNIPPET:
			case SoqlParser.TARGET_LENGTH:
			case SoqlParser.DIVISION:
			case SoqlParser.RETURNING:
			case SoqlParser.LISTVIEW:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1084;
				this.id();
				this.state = 1085;
				this.match(SoqlParser.LPAREN);
				this.state = 1087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
					{
					this.state = 1086;
					this.expressionList();
					}
				}

				this.state = 1089;
				this.match(SoqlParser.RPAREN);
				}
				break;
			case SoqlParser.THIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1091;
				this.match(SoqlParser.THIS);
				this.state = 1092;
				this.match(SoqlParser.LPAREN);
				this.state = 1094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
					{
					this.state = 1093;
					this.expressionList();
					}
				}

				this.state = 1096;
				this.match(SoqlParser.RPAREN);
				}
				break;
			case SoqlParser.SUPER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1097;
				this.match(SoqlParser.SUPER);
				this.state = 1098;
				this.match(SoqlParser.LPAREN);
				this.state = 1100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
					{
					this.state = 1099;
					this.expressionList();
					}
				}

				this.state = 1102;
				this.match(SoqlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotMethodCall(): DotMethodCallContext {
		let _localctx: DotMethodCallContext = new DotMethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SoqlParser.RULE_dotMethodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1105;
			this.anyId();
			this.state = 1106;
			this.match(SoqlParser.LPAREN);
			this.state = 1108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
				{
				this.state = 1107;
				this.expressionList();
				}
			}

			this.state = 1110;
			this.match(SoqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SoqlParser.RULE_creator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1112;
			this.createdName();
			this.state = 1118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 1113;
				this.noRest();
				}
				break;

			case 2:
				{
				this.state = 1114;
				this.classCreatorRest();
				}
				break;

			case 3:
				{
				this.state = 1115;
				this.arrayCreatorRest();
				}
				break;

			case 4:
				{
				this.state = 1116;
				this.mapCreatorRest();
				}
				break;

			case 5:
				{
				this.state = 1117;
				this.setCreatorRest();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SoqlParser.RULE_createdName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1120;
			this.idCreatedNamePair();
			this.state = 1125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.DOT) {
				{
				{
				this.state = 1121;
				this.match(SoqlParser.DOT);
				this.state = 1122;
				this.idCreatedNamePair();
				}
				}
				this.state = 1127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idCreatedNamePair(): IdCreatedNamePairContext {
		let _localctx: IdCreatedNamePairContext = new IdCreatedNamePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SoqlParser.RULE_idCreatedNamePair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1128;
			this.anyId();
			this.state = 1133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LT) {
				{
				this.state = 1129;
				this.match(SoqlParser.LT);
				this.state = 1130;
				this.typeList();
				this.state = 1131;
				this.match(SoqlParser.GT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noRest(): NoRestContext {
		let _localctx: NoRestContext = new NoRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SoqlParser.RULE_noRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1135;
			this.match(SoqlParser.LBRACE);
			this.state = 1136;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SoqlParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1138;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SoqlParser.RULE_arrayCreatorRest);
		try {
			this.state = 1149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1140;
				this.match(SoqlParser.LBRACK);
				this.state = 1141;
				this.expression(0);
				this.state = 1142;
				this.match(SoqlParser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1144;
				this.match(SoqlParser.LBRACK);
				this.state = 1145;
				this.match(SoqlParser.RBRACK);
				this.state = 1147;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 1146;
					this.arrayInitializer();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapCreatorRest(): MapCreatorRestContext {
		let _localctx: MapCreatorRestContext = new MapCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SoqlParser.RULE_mapCreatorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1151;
			this.match(SoqlParser.LBRACE);
			this.state = 1152;
			this.mapCreatorRestPair();
			this.state = 1157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 1153;
				this.match(SoqlParser.COMMA);
				this.state = 1154;
				this.mapCreatorRestPair();
				}
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1160;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapCreatorRestPair(): MapCreatorRestPairContext {
		let _localctx: MapCreatorRestPairContext = new MapCreatorRestPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, SoqlParser.RULE_mapCreatorRestPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1162;
			this.expression(0);
			this.state = 1163;
			this.match(SoqlParser.MAPTO);
			this.state = 1164;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setCreatorRest(): SetCreatorRestContext {
		let _localctx: SetCreatorRestContext = new SetCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SoqlParser.RULE_setCreatorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this.match(SoqlParser.LBRACE);
			this.state = 1167;
			this.expression(0);
			this.state = 1172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 1168;
				this.match(SoqlParser.COMMA);
				{
				this.state = 1169;
				this.expression(0);
				}
				}
				}
				this.state = 1174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1175;
			this.match(SoqlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, SoqlParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1177;
			this.match(SoqlParser.LPAREN);
			this.state = 1179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SUPER - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.THIS - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.VOID - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.LIST - 34)) | (1 << (SoqlParser.MAP - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)) | (1 << (SoqlParser.FindLiteral - 196)) | (1 << (SoqlParser.IntegerLiteral - 196)) | (1 << (SoqlParser.LongLiteral - 196)) | (1 << (SoqlParser.NumberLiteral - 196)) | (1 << (SoqlParser.BooleanLiteral - 196)) | (1 << (SoqlParser.StringLiteral - 196)) | (1 << (SoqlParser.LPAREN - 196)) | (1 << (SoqlParser.LBRACK - 196)) | (1 << (SoqlParser.BANG - 196)) | (1 << (SoqlParser.TILDE - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SoqlParser.INC - 231)) | (1 << (SoqlParser.DEC - 231)) | (1 << (SoqlParser.ADD - 231)) | (1 << (SoqlParser.SUB - 231)) | (1 << (SoqlParser.Identifier - 231)))) !== 0)) {
				{
				this.state = 1178;
				this.expressionList();
				}
			}

			this.state = 1181;
			this.match(SoqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soqlLiteral(): SoqlLiteralContext {
		let _localctx: SoqlLiteralContext = new SoqlLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SoqlParser.RULE_soqlLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1183;
			this.match(SoqlParser.LBRACK);
			this.state = 1184;
			this.query();
			this.state = 1185;
			this.match(SoqlParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, SoqlParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1187;
			this.selectOrSoqlId();
			this.state = 1189;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 1188;
				this.selectList();
				}
				break;
			}
			this.state = 1192;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 1191;
				this.fromOrSoqlId();
				}
				break;
			}
			this.state = 1195;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 1194;
				this.fromNameList();
				}
				break;
			}
			this.state = 1198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.USING) {
				{
				this.state = 1197;
				this.usingScope();
				}
			}

			this.state = 1201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WHERE) {
				{
				this.state = 1200;
				this.whereClause();
				}
			}

			this.state = 1204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WITH) {
				{
				this.state = 1203;
				this.withClause();
				}
			}

			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.GROUP) {
				{
				this.state = 1206;
				this.groupByClause();
				}
			}

			this.state = 1210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ORDER) {
				{
				this.state = 1209;
				this.orderByClause();
				}
			}

			this.state = 1213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LIMIT) {
				{
				this.state = 1212;
				this.limitClause();
				}
			}

			this.state = 1216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.OFFSET) {
				{
				this.state = 1215;
				this.offsetClause();
				}
			}

			this.state = 1219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ALL) {
				{
				this.state = 1218;
				this.allRowsClause();
				}
			}

			this.state = 1221;
			this.forClauses();
			this.state = 1224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.UPDATE) {
				{
				this.state = 1222;
				this.match(SoqlParser.UPDATE);
				this.state = 1223;
				this.updateList();
				}
			}

			this.state = 1227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ZF_INTELLISENSE) {
				{
				this.state = 1226;
				this.endOfQuery();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endOfQuery(): EndOfQueryContext {
		let _localctx: EndOfQueryContext = new EndOfQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, SoqlParser.RULE_endOfQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1229;
			this.match(SoqlParser.ZF_INTELLISENSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectOrSoqlId(): SelectOrSoqlIdContext {
		let _localctx: SelectOrSoqlIdContext = new SelectOrSoqlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, SoqlParser.RULE_selectOrSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1231;
			_la = this._input.LA(1);
			if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (SoqlParser.ZF_INTELLISENSE - 59)) | (1 << (SoqlParser.SZF_INTELLISENSE - 59)) | (1 << (SoqlParser.SEZF_INTELLISENSE - 59)) | (1 << (SoqlParser.SELZF_INTELLISENSE - 59)) | (1 << (SoqlParser.SELEZF_INTELLISENSE - 59)) | (1 << (SoqlParser.SELECZF_INTELLISENSE - 59)) | (1 << (SoqlParser.SELECT - 59)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromOrSoqlId(): FromOrSoqlIdContext {
		let _localctx: FromOrSoqlIdContext = new FromOrSoqlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, SoqlParser.RULE_fromOrSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1233;
			_la = this._input.LA(1);
			if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (SoqlParser.ZF_INTELLISENSE - 59)) | (1 << (SoqlParser.FZF_INTELLISENSE - 59)) | (1 << (SoqlParser.FRZF_INTELLISENSE - 59)) | (1 << (SoqlParser.FROZF_INTELLISENSE - 59)) | (1 << (SoqlParser.FROM - 59)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subQuery(): SubQueryContext {
		let _localctx: SubQueryContext = new SubQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, SoqlParser.RULE_subQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1235;
			this.selectOrSoqlId();
			this.state = 1237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1236;
				this.subFieldList();
				}
				break;
			}
			this.state = 1240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1239;
				this.fromOrSoqlId();
				}
				break;
			}
			this.state = 1243;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1242;
				this.fromNameList();
				}
				break;
			}
			this.state = 1246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WHERE) {
				{
				this.state = 1245;
				this.whereClause();
				}
			}

			this.state = 1249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ORDER) {
				{
				this.state = 1248;
				this.orderByClause();
				}
			}

			this.state = 1252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LIMIT) {
				{
				this.state = 1251;
				this.limitClause();
				}
			}

			this.state = 1254;
			this.forClauses();
			this.state = 1257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.UPDATE) {
				{
				this.state = 1255;
				this.match(SoqlParser.UPDATE);
				this.state = 1256;
				this.updateList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subQueryFromNameList(): SubQueryFromNameListContext {
		let _localctx: SubQueryFromNameListContext = new SubQueryFromNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, SoqlParser.RULE_subQueryFromNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1259;
			this.subQueryFromNameFieldName();
			this.state = 1261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.Identifier) {
				{
				this.state = 1260;
				this.fromSoqlId();
				}
			}

			this.state = 1270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 1263;
				this.match(SoqlParser.COMMA);
				this.state = 1264;
				this.subQueryFromNameFieldName();
				this.state = 1266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.Identifier) {
					{
					this.state = 1265;
					this.fromSoqlId();
					}
				}

				}
				}
				this.state = 1272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subQueryFromNameFieldName(): SubQueryFromNameFieldNameContext {
		let _localctx: SubQueryFromNameFieldNameContext = new SubQueryFromNameFieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, SoqlParser.RULE_subQueryFromNameFieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1273;
			this.subQueryFromNameSoqlId();
			this.state = 1278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.DOT) {
				{
				{
				this.state = 1274;
				this.match(SoqlParser.DOT);
				this.state = 1275;
				this.subQueryFromNameSoqlId();
				}
				}
				this.state = 1280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subQueryFromNameSoqlId(): SubQueryFromNameSoqlIdContext {
		let _localctx: SubQueryFromNameSoqlIdContext = new SubQueryFromNameSoqlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, SoqlParser.RULE_subQueryFromNameSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1281;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.NAME || _la === SoqlParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectList(): SelectListContext {
		let _localctx: SelectListContext = new SelectListContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, SoqlParser.RULE_selectList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1283;
			this.selectEntry();
			this.state = 1290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 1284;
				this.match(SoqlParser.COMMA);
				this.state = 1286;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
				case 1:
					{
					this.state = 1285;
					this.selectEntry();
					}
					break;
				}
				}
				}
				this.state = 1292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectEntry(): SelectEntryContext {
		let _localctx: SelectEntryContext = new SelectEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, SoqlParser.RULE_selectEntry);
		try {
			this.state = 1301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1293;
				this.fieldName();
				this.state = 1295;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
				case 1:
					{
					this.state = 1294;
					this.match(SoqlParser.ZF_INTELLISENSE);
					}
					break;
				}
				}
				break;
			case SoqlParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1297;
				this.match(SoqlParser.LPAREN);
				this.state = 1298;
				this.subQuery();
				this.state = 1299;
				this.match(SoqlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, SoqlParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1303;
			this.soqlId();
			this.state = 1308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.DOT) {
				{
				{
				this.state = 1304;
				this.match(SoqlParser.DOT);
				this.state = 1305;
				this.soqlId();
				}
				}
				this.state = 1310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromNameList(): FromNameListContext {
		let _localctx: FromNameListContext = new FromNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, SoqlParser.RULE_fromNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1311;
			this.fromNameFieldName();
			this.state = 1313;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1312;
				this.fromSoqlId();
				}
				break;
			}
			this.state = 1322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 1315;
				this.match(SoqlParser.COMMA);
				this.state = 1316;
				this.fromNameFieldName();
				this.state = 1318;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
				case 1:
					{
					this.state = 1317;
					this.fromSoqlId();
					}
					break;
				}
				}
				}
				this.state = 1324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromNameFieldName(): FromNameFieldNameContext {
		let _localctx: FromNameFieldNameContext = new FromNameFieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, SoqlParser.RULE_fromNameFieldName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1325;
			this.fromNameSoqlId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromNameSoqlId(): FromNameSoqlIdContext {
		let _localctx: FromNameSoqlIdContext = new FromNameSoqlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, SoqlParser.RULE_fromNameSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1327;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.USER || _la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.NAME || _la === SoqlParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromSoqlId(): FromSoqlIdContext {
		let _localctx: FromSoqlIdContext = new FromSoqlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, SoqlParser.RULE_fromSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1329;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subFieldList(): SubFieldListContext {
		let _localctx: SubFieldListContext = new SubFieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, SoqlParser.RULE_subFieldList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1331;
			this.subFieldEntry();
			this.state = 1336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 1332;
				this.match(SoqlParser.COMMA);
				this.state = 1333;
				this.subFieldEntry();
				}
				}
				this.state = 1338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subFieldEntry(): SubFieldEntryContext {
		let _localctx: SubFieldEntryContext = new SubFieldEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, SoqlParser.RULE_subFieldEntry);
		try {
			this.state = 1348;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1339;
				this.subFieldEntryFieldName();
				this.state = 1341;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
				case 1:
					{
					this.state = 1340;
					this.match(SoqlParser.ZF_INTELLISENSE);
					}
					break;
				}
				}
				break;
			case SoqlParser.COUNT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TOLABEL:
			case SoqlParser.FORMAT:
			case SoqlParser.DISTANCE:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.FIELDS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1343;
				this.soqlFunction();
				this.state = 1345;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
				case 1:
					{
					this.state = 1344;
					this.soqlId();
					}
					break;
				}
				}
				break;
			case SoqlParser.TYPEOF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1347;
				this.typeOf();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subFieldEntryFieldName(): SubFieldEntryFieldNameContext {
		let _localctx: SubFieldEntryFieldNameContext = new SubFieldEntryFieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, SoqlParser.RULE_subFieldEntryFieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1350;
			this.subFieldEntrySoqlId();
			this.state = 1355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.DOT) {
				{
				{
				this.state = 1351;
				this.match(SoqlParser.DOT);
				this.state = 1352;
				this.subFieldEntrySoqlId();
				}
				}
				this.state = 1357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subFieldEntrySoqlId(): SubFieldEntrySoqlIdContext {
		let _localctx: SubFieldEntrySoqlIdContext = new SubFieldEntrySoqlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, SoqlParser.RULE_subFieldEntrySoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1358;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.NAME || _la === SoqlParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soqlFieldsParameter(): SoqlFieldsParameterContext {
		let _localctx: SoqlFieldsParameterContext = new SoqlFieldsParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, SoqlParser.RULE_soqlFieldsParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1360;
			_la = this._input.LA(1);
			if (!(((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (SoqlParser.ALL - 99)) | (1 << (SoqlParser.CUSTOM - 99)) | (1 << (SoqlParser.STANDARD - 99)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soqlFunction(): SoqlFunctionContext {
		let _localctx: SoqlFunctionContext = new SoqlFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, SoqlParser.RULE_soqlFunction);
		try {
			this.state = 1484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1362;
				this.match(SoqlParser.AVG);
				this.state = 1363;
				this.match(SoqlParser.LPAREN);
				this.state = 1364;
				this.fieldName();
				this.state = 1365;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1367;
				this.match(SoqlParser.COUNT);
				this.state = 1368;
				this.match(SoqlParser.LPAREN);
				this.state = 1369;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1370;
				this.match(SoqlParser.COUNT);
				this.state = 1371;
				this.match(SoqlParser.LPAREN);
				this.state = 1372;
				this.fieldName();
				this.state = 1373;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1375;
				this.match(SoqlParser.COUNT_DISTINCT);
				this.state = 1376;
				this.match(SoqlParser.LPAREN);
				this.state = 1377;
				this.fieldName();
				this.state = 1378;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1380;
				this.match(SoqlParser.MIN);
				this.state = 1381;
				this.match(SoqlParser.LPAREN);
				this.state = 1382;
				this.fieldName();
				this.state = 1383;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1385;
				this.match(SoqlParser.MAX);
				this.state = 1386;
				this.match(SoqlParser.LPAREN);
				this.state = 1387;
				this.fieldName();
				this.state = 1388;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1390;
				this.match(SoqlParser.SUM);
				this.state = 1391;
				this.match(SoqlParser.LPAREN);
				this.state = 1392;
				this.fieldName();
				this.state = 1393;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1395;
				this.match(SoqlParser.TOLABEL);
				this.state = 1396;
				this.match(SoqlParser.LPAREN);
				this.state = 1397;
				this.fieldName();
				this.state = 1398;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1400;
				this.match(SoqlParser.FORMAT);
				this.state = 1401;
				this.match(SoqlParser.LPAREN);
				this.state = 1402;
				this.fieldName();
				this.state = 1403;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1405;
				this.match(SoqlParser.CALENDAR_MONTH);
				this.state = 1406;
				this.match(SoqlParser.LPAREN);
				this.state = 1407;
				this.dateFieldName();
				this.state = 1408;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1410;
				this.match(SoqlParser.CALENDAR_QUARTER);
				this.state = 1411;
				this.match(SoqlParser.LPAREN);
				this.state = 1412;
				this.dateFieldName();
				this.state = 1413;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1415;
				this.match(SoqlParser.CALENDAR_YEAR);
				this.state = 1416;
				this.match(SoqlParser.LPAREN);
				this.state = 1417;
				this.dateFieldName();
				this.state = 1418;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1420;
				this.match(SoqlParser.DAY_IN_MONTH);
				this.state = 1421;
				this.match(SoqlParser.LPAREN);
				this.state = 1422;
				this.dateFieldName();
				this.state = 1423;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1425;
				this.match(SoqlParser.DAY_IN_WEEK);
				this.state = 1426;
				this.match(SoqlParser.LPAREN);
				this.state = 1427;
				this.dateFieldName();
				this.state = 1428;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1430;
				this.match(SoqlParser.DAY_IN_YEAR);
				this.state = 1431;
				this.match(SoqlParser.LPAREN);
				this.state = 1432;
				this.dateFieldName();
				this.state = 1433;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1435;
				this.match(SoqlParser.DAY_ONLY);
				this.state = 1436;
				this.match(SoqlParser.LPAREN);
				this.state = 1437;
				this.dateFieldName();
				this.state = 1438;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1440;
				this.match(SoqlParser.FISCAL_MONTH);
				this.state = 1441;
				this.match(SoqlParser.LPAREN);
				this.state = 1442;
				this.dateFieldName();
				this.state = 1443;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1445;
				this.match(SoqlParser.FISCAL_QUARTER);
				this.state = 1446;
				this.match(SoqlParser.LPAREN);
				this.state = 1447;
				this.dateFieldName();
				this.state = 1448;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1450;
				this.match(SoqlParser.FISCAL_YEAR);
				this.state = 1451;
				this.match(SoqlParser.LPAREN);
				this.state = 1452;
				this.dateFieldName();
				this.state = 1453;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1455;
				this.match(SoqlParser.HOUR_IN_DAY);
				this.state = 1456;
				this.match(SoqlParser.LPAREN);
				this.state = 1457;
				this.dateFieldName();
				this.state = 1458;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1460;
				this.match(SoqlParser.WEEK_IN_MONTH);
				this.state = 1461;
				this.match(SoqlParser.LPAREN);
				this.state = 1462;
				this.dateFieldName();
				this.state = 1463;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1465;
				this.match(SoqlParser.WEEK_IN_YEAR);
				this.state = 1466;
				this.match(SoqlParser.LPAREN);
				this.state = 1467;
				this.dateFieldName();
				this.state = 1468;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1470;
				this.match(SoqlParser.FIELDS);
				this.state = 1471;
				this.match(SoqlParser.LPAREN);
				this.state = 1472;
				this.soqlFieldsParameter();
				this.state = 1473;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1475;
				this.match(SoqlParser.DISTANCE);
				this.state = 1476;
				this.match(SoqlParser.LPAREN);
				this.state = 1477;
				this.locationValue();
				this.state = 1478;
				this.match(SoqlParser.COMMA);
				this.state = 1479;
				this.locationValue();
				this.state = 1480;
				this.match(SoqlParser.COMMA);
				this.state = 1481;
				this.match(SoqlParser.StringLiteral);
				this.state = 1482;
				this.match(SoqlParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateFieldName(): DateFieldNameContext {
		let _localctx: DateFieldNameContext = new DateFieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, SoqlParser.RULE_dateFieldName);
		try {
			this.state = 1492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.CONVERT_TIMEZONE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1486;
				this.match(SoqlParser.CONVERT_TIMEZONE);
				this.state = 1487;
				this.match(SoqlParser.LPAREN);
				this.state = 1488;
				this.fieldName();
				this.state = 1489;
				this.match(SoqlParser.RPAREN);
				}
				break;
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1491;
				this.fieldName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public locationValue(): LocationValueContext {
		let _localctx: LocationValueContext = new LocationValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, SoqlParser.RULE_locationValue);
		try {
			this.state = 1502;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1494;
				this.fieldName();
				}
				break;
			case SoqlParser.GEOLOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1495;
				this.match(SoqlParser.GEOLOCATION);
				this.state = 1496;
				this.match(SoqlParser.LPAREN);
				this.state = 1497;
				this.coordinateValue();
				this.state = 1498;
				this.match(SoqlParser.COMMA);
				this.state = 1499;
				this.coordinateValue();
				this.state = 1500;
				this.match(SoqlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coordinateValue(): CoordinateValueContext {
		let _localctx: CoordinateValueContext = new CoordinateValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, SoqlParser.RULE_coordinateValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1504;
			this.signedNumber();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeOf(): TypeOfContext {
		let _localctx: TypeOfContext = new TypeOfContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, SoqlParser.RULE_typeOf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this.match(SoqlParser.TYPEOF);
			this.state = 1507;
			this.fieldName();
			this.state = 1509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1508;
				this.whenClause();
				}
				}
				this.state = 1511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SoqlParser.WHEN);
			this.state = 1514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ELSE) {
				{
				this.state = 1513;
				this.elseClause();
				}
			}

			this.state = 1516;
			this.match(SoqlParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, SoqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1518;
			this.match(SoqlParser.WHEN);
			this.state = 1519;
			this.fieldName();
			this.state = 1520;
			this.match(SoqlParser.THEN);
			this.state = 1521;
			this.fieldNameList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseClause(): ElseClauseContext {
		let _localctx: ElseClauseContext = new ElseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, SoqlParser.RULE_elseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1523;
			this.match(SoqlParser.ELSE);
			this.state = 1524;
			this.fieldNameList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldNameList(): FieldNameListContext {
		let _localctx: FieldNameListContext = new FieldNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, SoqlParser.RULE_fieldNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1526;
			this.fieldName();
			this.state = 1531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 1527;
				this.match(SoqlParser.COMMA);
				this.state = 1528;
				this.fieldName();
				}
				}
				this.state = 1533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingScope(): UsingScopeContext {
		let _localctx: UsingScopeContext = new UsingScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, SoqlParser.RULE_usingScope);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1534;
			this.match(SoqlParser.USING);
			this.state = 1535;
			this.match(SoqlParser.SCOPE);
			this.state = 1536;
			this.soqlId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let _localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, SoqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1538;
			this.match(SoqlParser.WHERE);
			this.state = 1539;
			this.logicalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalExpression(): LogicalExpressionContext {
		let _localctx: LogicalExpressionContext = new LogicalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, SoqlParser.RULE_logicalExpression);
		let _la: number;
		try {
			this.state = 1552;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.COUNT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TOLABEL:
			case SoqlParser.FORMAT:
			case SoqlParser.DISTANCE:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.NAME:
			case SoqlParser.FIELDS:
			case SoqlParser.LPAREN:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1541;
				this.conditionalExpression();
				this.state = 1547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.SOQLAND || _la === SoqlParser.SOQLOR) {
					{
					{
					this.state = 1542;
					this.andOrSoql();
					this.state = 1543;
					this.conditionalExpression();
					}
					}
					this.state = 1549;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SoqlParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1550;
				this.match(SoqlParser.NOT);
				this.state = 1551;
				this.conditionalExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andOrSoql(): AndOrSoqlContext {
		let _localctx: AndOrSoqlContext = new AndOrSoqlContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, SoqlParser.RULE_andOrSoql);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1554;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.SOQLAND || _la === SoqlParser.SOQLOR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, SoqlParser.RULE_conditionalExpression);
		try {
			this.state = 1561;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1556;
				this.match(SoqlParser.LPAREN);
				this.state = 1557;
				this.logicalExpression();
				this.state = 1558;
				this.match(SoqlParser.RPAREN);
				}
				break;
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.COUNT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TOLABEL:
			case SoqlParser.FORMAT:
			case SoqlParser.DISTANCE:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.NAME:
			case SoqlParser.FIELDS:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1560;
				this.fieldExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldExpression(): FieldExpressionContext {
		let _localctx: FieldExpressionContext = new FieldExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, SoqlParser.RULE_fieldExpression);
		let _la: number;
		try {
			this.state = 1574;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1563;
				this.fieldName();
				this.state = 1565;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
				case 1:
					{
					this.state = 1564;
					this.comparisonOperator();
					}
					break;
				}
				this.state = 1568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.NULL || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SoqlParser.YESTERDAY - 138)) | (1 << (SoqlParser.TODAY - 138)) | (1 << (SoqlParser.TOMORROW - 138)) | (1 << (SoqlParser.LAST_WEEK - 138)) | (1 << (SoqlParser.THIS_WEEK - 138)) | (1 << (SoqlParser.NEXT_WEEK - 138)) | (1 << (SoqlParser.LAST_MONTH - 138)) | (1 << (SoqlParser.THIS_MONTH - 138)) | (1 << (SoqlParser.NEXT_MONTH - 138)) | (1 << (SoqlParser.LAST_90_DAYS - 138)) | (1 << (SoqlParser.NEXT_90_DAYS - 138)) | (1 << (SoqlParser.LAST_N_DAYS_N - 138)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 138)) | (1 << (SoqlParser.N_DAYS_AGO_N - 138)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 138)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 138)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 138)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 138)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 138)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 138)) | (1 << (SoqlParser.THIS_QUARTER - 138)) | (1 << (SoqlParser.LAST_QUARTER - 138)) | (1 << (SoqlParser.NEXT_QUARTER - 138)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 138)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 138)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 138)) | (1 << (SoqlParser.THIS_YEAR - 138)) | (1 << (SoqlParser.LAST_YEAR - 138)) | (1 << (SoqlParser.NEXT_YEAR - 138)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 138)) | (1 << (SoqlParser.LAST_N_YEARS_N - 138)) | (1 << (SoqlParser.N_YEARS_AGO_N - 138)))) !== 0) || ((((_la - 170)) & ~0x1F) === 0 && ((1 << (_la - 170)) & ((1 << (SoqlParser.THIS_FISCAL_QUARTER - 170)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 170)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 170)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 170)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 170)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 170)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 170)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 170)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 170)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 170)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 170)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 170)) | (1 << (SoqlParser.DateLiteral - 170)) | (1 << (SoqlParser.DateTimeLiteral - 170)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 170)) | (1 << (SoqlParser.IntegerLiteral - 170)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (SoqlParser.NumberLiteral - 203)) | (1 << (SoqlParser.BooleanLiteral - 203)) | (1 << (SoqlParser.StringLiteral - 203)) | (1 << (SoqlParser.LPAREN - 203)) | (1 << (SoqlParser.ADD - 203)) | (1 << (SoqlParser.SUB - 203)))) !== 0)) {
					{
					this.state = 1567;
					this.value();
					}
				}

				}
				break;
			case SoqlParser.COUNT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TOLABEL:
			case SoqlParser.FORMAT:
			case SoqlParser.DISTANCE:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.FIELDS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1570;
				this.soqlFunction();
				this.state = 1571;
				this.comparisonOperator();
				this.state = 1572;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, SoqlParser.RULE_comparisonOperator);
		try {
			this.state = 1592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1576;
				this.match(SoqlParser.ASSIGN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1577;
				this.match(SoqlParser.NOTEQUAL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1578;
				this.match(SoqlParser.LT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1579;
				this.match(SoqlParser.GT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1580;
				this.match(SoqlParser.LT);
				this.state = 1581;
				this.match(SoqlParser.ASSIGN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1582;
				this.match(SoqlParser.GT);
				this.state = 1583;
				this.match(SoqlParser.ASSIGN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1584;
				this.match(SoqlParser.LESSANDGREATER);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1585;
				this.match(SoqlParser.LIKE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1586;
				this.match(SoqlParser.IN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1587;
				this.match(SoqlParser.NOT);
				this.state = 1588;
				this.match(SoqlParser.IN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1589;
				this.match(SoqlParser.INCLUDES);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1590;
				this.match(SoqlParser.EXCLUDES);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1591;
				this.match(SoqlParser.ZF_INTELLISENSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, SoqlParser.RULE_value);
		let _la: number;
		try {
			this.state = 1613;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1594;
				this.match(SoqlParser.NULL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1595;
				this.match(SoqlParser.BooleanLiteral);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1596;
				this.signedNumber();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1597;
				this.match(SoqlParser.StringLiteral);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1598;
				this.match(SoqlParser.DateLiteral);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1599;
				this.match(SoqlParser.DateTimeLiteral);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1600;
				this.dateFormula();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1601;
				this.match(SoqlParser.IntegralCurrencyLiteral);
				this.state = 1606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.DOT) {
					{
					this.state = 1602;
					this.match(SoqlParser.DOT);
					this.state = 1604;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SoqlParser.IntegerLiteral) {
						{
						this.state = 1603;
						this.match(SoqlParser.IntegerLiteral);
						}
					}

					}
				}

				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1608;
				this.match(SoqlParser.LPAREN);
				this.state = 1609;
				this.subQuery();
				this.state = 1610;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1612;
				this.valueList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueList(): ValueListContext {
		let _localctx: ValueListContext = new ValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, SoqlParser.RULE_valueList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1615;
			this.match(SoqlParser.LPAREN);
			this.state = 1616;
			this.value();
			this.state = 1621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 1617;
				this.match(SoqlParser.COMMA);
				this.state = 1618;
				this.value();
				}
				}
				this.state = 1623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1624;
			this.match(SoqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signedNumber(): SignedNumberContext {
		let _localctx: SignedNumberContext = new SignedNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, SoqlParser.RULE_signedNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ADD || _la === SoqlParser.SUB) {
				{
				this.state = 1626;
				_la = this._input.LA(1);
				if (!(_la === SoqlParser.ADD || _la === SoqlParser.SUB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1629;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.IntegerLiteral || _la === SoqlParser.NumberLiteral)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let _localctx: WithClauseContext = new WithClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, SoqlParser.RULE_withClause);
		try {
			this.state = 1643;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1631;
				this.match(SoqlParser.WITH);
				this.state = 1632;
				this.match(SoqlParser.DATA);
				this.state = 1633;
				this.match(SoqlParser.CATEGORY);
				this.state = 1634;
				this.filteringExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1635;
				this.match(SoqlParser.WITH);
				this.state = 1636;
				this.match(SoqlParser.SECURITY_ENFORCED);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1637;
				this.match(SoqlParser.WITH);
				this.state = 1638;
				this.match(SoqlParser.SYSTEM_MODE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1639;
				this.match(SoqlParser.WITH);
				this.state = 1640;
				this.match(SoqlParser.USER_MODE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1641;
				this.match(SoqlParser.WITH);
				this.state = 1642;
				this.logicalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filteringExpression(): FilteringExpressionContext {
		let _localctx: FilteringExpressionContext = new FilteringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, SoqlParser.RULE_filteringExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1645;
			this.dataCategorySelection();
			this.state = 1650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.AND) {
				{
				{
				this.state = 1646;
				this.match(SoqlParser.AND);
				this.state = 1647;
				this.dataCategorySelection();
				}
				}
				this.state = 1652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataCategorySelection(): DataCategorySelectionContext {
		let _localctx: DataCategorySelectionContext = new DataCategorySelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, SoqlParser.RULE_dataCategorySelection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1653;
			this.soqlId();
			this.state = 1654;
			this.filteringSelector();
			this.state = 1655;
			this.dataCategoryName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataCategoryName(): DataCategoryNameContext {
		let _localctx: DataCategoryNameContext = new DataCategoryNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, SoqlParser.RULE_dataCategoryName);
		let _la: number;
		try {
			this.state = 1669;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1657;
				this.soqlId();
				}
				break;
			case SoqlParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1658;
				this.match(SoqlParser.LPAREN);
				this.state = 1659;
				this.soqlId();
				this.state = 1664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.COMMA) {
					{
					{
					this.state = 1660;
					this.match(SoqlParser.COMMA);
					this.state = 1661;
					this.soqlId();
					}
					}
					this.state = 1666;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1667;
				this.match(SoqlParser.LPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filteringSelector(): FilteringSelectorContext {
		let _localctx: FilteringSelectorContext = new FilteringSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, SoqlParser.RULE_filteringSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1671;
			_la = this._input.LA(1);
			if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (SoqlParser.AT - 108)) | (1 << (SoqlParser.ABOVE - 108)) | (1 << (SoqlParser.BELOW - 108)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 108)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupByClause(): GroupByClauseContext {
		let _localctx: GroupByClauseContext = new GroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, SoqlParser.RULE_groupByClause);
		let _la: number;
		try {
			this.state = 1708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1673;
				this.match(SoqlParser.GROUP);
				this.state = 1674;
				this.match(SoqlParser.BY);
				this.state = 1675;
				this.selectList();
				this.state = 1678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.HAVING) {
					{
					this.state = 1676;
					this.match(SoqlParser.HAVING);
					this.state = 1677;
					this.logicalExpression();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1680;
				this.match(SoqlParser.GROUP);
				this.state = 1681;
				this.match(SoqlParser.BY);
				this.state = 1682;
				this.match(SoqlParser.ROLLUP);
				this.state = 1683;
				this.match(SoqlParser.LPAREN);
				this.state = 1684;
				this.fieldName();
				this.state = 1689;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.COMMA) {
					{
					{
					this.state = 1685;
					this.match(SoqlParser.COMMA);
					this.state = 1686;
					this.fieldName();
					}
					}
					this.state = 1691;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1692;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1694;
				this.match(SoqlParser.GROUP);
				this.state = 1695;
				this.match(SoqlParser.BY);
				this.state = 1696;
				this.match(SoqlParser.CUBE);
				this.state = 1697;
				this.match(SoqlParser.LPAREN);
				this.state = 1698;
				this.fieldName();
				this.state = 1703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.COMMA) {
					{
					{
					this.state = 1699;
					this.match(SoqlParser.COMMA);
					this.state = 1700;
					this.fieldName();
					}
					}
					this.state = 1705;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1706;
				this.match(SoqlParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByClause(): OrderByClauseContext {
		let _localctx: OrderByClauseContext = new OrderByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, SoqlParser.RULE_orderByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1710;
			this.match(SoqlParser.ORDER);
			this.state = 1711;
			this.match(SoqlParser.BY);
			this.state = 1712;
			this.fieldOrderList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldOrderList(): FieldOrderListContext {
		let _localctx: FieldOrderListContext = new FieldOrderListContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, SoqlParser.RULE_fieldOrderList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1714;
			this.fieldOrder();
			this.state = 1719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 1715;
				this.match(SoqlParser.COMMA);
				this.state = 1716;
				this.fieldOrder();
				}
				}
				this.state = 1721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldOrder(): FieldOrderContext {
		let _localctx: FieldOrderContext = new FieldOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, SoqlParser.RULE_fieldOrder);
		let _la: number;
		try {
			this.state = 1738;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1722;
				this.fieldName();
				this.state = 1724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ASC || _la === SoqlParser.DESC) {
					{
					this.state = 1723;
					_la = this._input.LA(1);
					if (!(_la === SoqlParser.ASC || _la === SoqlParser.DESC)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 1728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.NULLS) {
					{
					this.state = 1726;
					this.match(SoqlParser.NULLS);
					this.state = 1727;
					_la = this._input.LA(1);
					if (!(_la === SoqlParser.FIRST || _la === SoqlParser.LAST)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			case SoqlParser.COUNT:
			case SoqlParser.AVG:
			case SoqlParser.COUNT_DISTINCT:
			case SoqlParser.MIN:
			case SoqlParser.MAX:
			case SoqlParser.SUM:
			case SoqlParser.TOLABEL:
			case SoqlParser.FORMAT:
			case SoqlParser.DISTANCE:
			case SoqlParser.CALENDAR_MONTH:
			case SoqlParser.CALENDAR_QUARTER:
			case SoqlParser.CALENDAR_YEAR:
			case SoqlParser.DAY_IN_MONTH:
			case SoqlParser.DAY_IN_WEEK:
			case SoqlParser.DAY_IN_YEAR:
			case SoqlParser.DAY_ONLY:
			case SoqlParser.FISCAL_MONTH:
			case SoqlParser.FISCAL_QUARTER:
			case SoqlParser.FISCAL_YEAR:
			case SoqlParser.HOUR_IN_DAY:
			case SoqlParser.WEEK_IN_MONTH:
			case SoqlParser.WEEK_IN_YEAR:
			case SoqlParser.FIELDS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1730;
				this.soqlFunction();
				this.state = 1732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ASC || _la === SoqlParser.DESC) {
					{
					this.state = 1731;
					_la = this._input.LA(1);
					if (!(_la === SoqlParser.ASC || _la === SoqlParser.DESC)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 1736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.NULLS) {
					{
					this.state = 1734;
					this.match(SoqlParser.NULLS);
					this.state = 1735;
					_la = this._input.LA(1);
					if (!(_la === SoqlParser.FIRST || _la === SoqlParser.LAST)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitClause(): LimitClauseContext {
		let _localctx: LimitClauseContext = new LimitClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, SoqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1740;
			this.match(SoqlParser.LIMIT);
			this.state = 1741;
			this.match(SoqlParser.IntegerLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public offsetClause(): OffsetClauseContext {
		let _localctx: OffsetClauseContext = new OffsetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, SoqlParser.RULE_offsetClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1743;
			this.match(SoqlParser.OFFSET);
			this.state = 1744;
			this.match(SoqlParser.IntegerLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allRowsClause(): AllRowsClauseContext {
		let _localctx: AllRowsClauseContext = new AllRowsClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, SoqlParser.RULE_allRowsClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1746;
			this.match(SoqlParser.ALL);
			this.state = 1747;
			this.match(SoqlParser.ROWS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forClauses(): ForClausesContext {
		let _localctx: ForClausesContext = new ForClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, SoqlParser.RULE_forClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.FOR) {
				{
				{
				this.state = 1749;
				this.match(SoqlParser.FOR);
				this.state = 1750;
				_la = this._input.LA(1);
				if (!(_la === SoqlParser.UPDATE || _la === SoqlParser.VIEW || _la === SoqlParser.REFERENCE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 1755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateFormula(): DateFormulaContext {
		let _localctx: DateFormulaContext = new DateFormulaContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, SoqlParser.RULE_dateFormula);
		try {
			this.state = 1842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.YESTERDAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1756;
				this.match(SoqlParser.YESTERDAY);
				}
				break;
			case SoqlParser.TODAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1757;
				this.match(SoqlParser.TODAY);
				}
				break;
			case SoqlParser.TOMORROW:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1758;
				this.match(SoqlParser.TOMORROW);
				}
				break;
			case SoqlParser.LAST_WEEK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1759;
				this.match(SoqlParser.LAST_WEEK);
				}
				break;
			case SoqlParser.THIS_WEEK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1760;
				this.match(SoqlParser.THIS_WEEK);
				}
				break;
			case SoqlParser.NEXT_WEEK:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1761;
				this.match(SoqlParser.NEXT_WEEK);
				}
				break;
			case SoqlParser.LAST_MONTH:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1762;
				this.match(SoqlParser.LAST_MONTH);
				}
				break;
			case SoqlParser.THIS_MONTH:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1763;
				this.match(SoqlParser.THIS_MONTH);
				}
				break;
			case SoqlParser.NEXT_MONTH:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1764;
				this.match(SoqlParser.NEXT_MONTH);
				}
				break;
			case SoqlParser.LAST_90_DAYS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1765;
				this.match(SoqlParser.LAST_90_DAYS);
				}
				break;
			case SoqlParser.NEXT_90_DAYS:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1766;
				this.match(SoqlParser.NEXT_90_DAYS);
				}
				break;
			case SoqlParser.LAST_N_DAYS_N:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1767;
				this.match(SoqlParser.LAST_N_DAYS_N);
				this.state = 1768;
				this.match(SoqlParser.COLON);
				this.state = 1769;
				this.signedInteger();
				}
				break;
			case SoqlParser.NEXT_N_DAYS_N:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1770;
				this.match(SoqlParser.NEXT_N_DAYS_N);
				this.state = 1771;
				this.match(SoqlParser.COLON);
				this.state = 1772;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_DAYS_AGO_N:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1773;
				this.match(SoqlParser.N_DAYS_AGO_N);
				this.state = 1774;
				this.match(SoqlParser.COLON);
				this.state = 1775;
				this.signedInteger();
				}
				break;
			case SoqlParser.NEXT_N_WEEKS_N:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1776;
				this.match(SoqlParser.NEXT_N_WEEKS_N);
				this.state = 1777;
				this.match(SoqlParser.COLON);
				this.state = 1778;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_WEEKS_N:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1779;
				this.match(SoqlParser.LAST_N_WEEKS_N);
				this.state = 1780;
				this.match(SoqlParser.COLON);
				this.state = 1781;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_WEEKS_AGO_N:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1782;
				this.match(SoqlParser.N_WEEKS_AGO_N);
				this.state = 1783;
				this.match(SoqlParser.COLON);
				this.state = 1784;
				this.signedInteger();
				}
				break;
			case SoqlParser.NEXT_N_MONTHS_N:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1785;
				this.match(SoqlParser.NEXT_N_MONTHS_N);
				this.state = 1786;
				this.match(SoqlParser.COLON);
				this.state = 1787;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_MONTHS_N:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1788;
				this.match(SoqlParser.LAST_N_MONTHS_N);
				this.state = 1789;
				this.match(SoqlParser.COLON);
				this.state = 1790;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_MONTHS_AGO_N:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1791;
				this.match(SoqlParser.N_MONTHS_AGO_N);
				this.state = 1792;
				this.match(SoqlParser.COLON);
				this.state = 1793;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_QUARTER:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1794;
				this.match(SoqlParser.THIS_QUARTER);
				}
				break;
			case SoqlParser.LAST_QUARTER:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1795;
				this.match(SoqlParser.LAST_QUARTER);
				}
				break;
			case SoqlParser.NEXT_QUARTER:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1796;
				this.match(SoqlParser.NEXT_QUARTER);
				}
				break;
			case SoqlParser.NEXT_N_QUARTERS_N:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1797;
				this.match(SoqlParser.NEXT_N_QUARTERS_N);
				this.state = 1798;
				this.match(SoqlParser.COLON);
				this.state = 1799;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_QUARTERS_N:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1800;
				this.match(SoqlParser.LAST_N_QUARTERS_N);
				this.state = 1801;
				this.match(SoqlParser.COLON);
				this.state = 1802;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_QUARTERS_AGO_N:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1803;
				this.match(SoqlParser.N_QUARTERS_AGO_N);
				this.state = 1804;
				this.match(SoqlParser.COLON);
				this.state = 1805;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_YEAR:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1806;
				this.match(SoqlParser.THIS_YEAR);
				}
				break;
			case SoqlParser.LAST_YEAR:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1807;
				this.match(SoqlParser.LAST_YEAR);
				}
				break;
			case SoqlParser.NEXT_YEAR:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1808;
				this.match(SoqlParser.NEXT_YEAR);
				}
				break;
			case SoqlParser.NEXT_N_YEARS_N:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1809;
				this.match(SoqlParser.NEXT_N_YEARS_N);
				this.state = 1810;
				this.match(SoqlParser.COLON);
				this.state = 1811;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_YEARS_N:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1812;
				this.match(SoqlParser.LAST_N_YEARS_N);
				this.state = 1813;
				this.match(SoqlParser.COLON);
				this.state = 1814;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_YEARS_AGO_N:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1815;
				this.match(SoqlParser.N_YEARS_AGO_N);
				this.state = 1816;
				this.match(SoqlParser.COLON);
				this.state = 1817;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1818;
				this.match(SoqlParser.THIS_FISCAL_QUARTER);
				}
				break;
			case SoqlParser.LAST_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1819;
				this.match(SoqlParser.LAST_FISCAL_QUARTER);
				}
				break;
			case SoqlParser.NEXT_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 1820;
				this.match(SoqlParser.NEXT_FISCAL_QUARTER);
				}
				break;
			case SoqlParser.NEXT_N_FISCAL_QUARTERS_N:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 1821;
				this.match(SoqlParser.NEXT_N_FISCAL_QUARTERS_N);
				this.state = 1822;
				this.match(SoqlParser.COLON);
				this.state = 1823;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_FISCAL_QUARTERS_N:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 1824;
				this.match(SoqlParser.LAST_N_FISCAL_QUARTERS_N);
				this.state = 1825;
				this.match(SoqlParser.COLON);
				this.state = 1826;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_FISCAL_QUARTERS_AGO_N:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 1827;
				this.match(SoqlParser.N_FISCAL_QUARTERS_AGO_N);
				this.state = 1828;
				this.match(SoqlParser.COLON);
				this.state = 1829;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 1830;
				this.match(SoqlParser.THIS_FISCAL_YEAR);
				}
				break;
			case SoqlParser.LAST_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 1831;
				this.match(SoqlParser.LAST_FISCAL_YEAR);
				}
				break;
			case SoqlParser.NEXT_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 1832;
				this.match(SoqlParser.NEXT_FISCAL_YEAR);
				}
				break;
			case SoqlParser.NEXT_N_FISCAL_YEARS_N:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 1833;
				this.match(SoqlParser.NEXT_N_FISCAL_YEARS_N);
				this.state = 1834;
				this.match(SoqlParser.COLON);
				this.state = 1835;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_FISCAL_YEARS_N:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 1836;
				this.match(SoqlParser.LAST_N_FISCAL_YEARS_N);
				this.state = 1837;
				this.match(SoqlParser.COLON);
				this.state = 1838;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_FISCAL_YEARS_AGO_N:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 1839;
				this.match(SoqlParser.N_FISCAL_YEARS_AGO_N);
				this.state = 1840;
				this.match(SoqlParser.COLON);
				this.state = 1841;
				this.signedInteger();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signedInteger(): SignedIntegerContext {
		let _localctx: SignedIntegerContext = new SignedIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, SoqlParser.RULE_signedInteger);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1845;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ADD || _la === SoqlParser.SUB) {
				{
				this.state = 1844;
				_la = this._input.LA(1);
				if (!(_la === SoqlParser.ADD || _la === SoqlParser.SUB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1847;
			this.match(SoqlParser.IntegerLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soqlId(): SoqlIdContext {
		let _localctx: SoqlIdContext = new SoqlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, SoqlParser.RULE_soqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1849;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.NAME || _la === SoqlParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soslLiteral(): SoslLiteralContext {
		let _localctx: SoslLiteralContext = new SoslLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, SoqlParser.RULE_soslLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1851;
			this.match(SoqlParser.FindLiteral);
			this.state = 1852;
			this.soslClauses();
			this.state = 1853;
			this.match(SoqlParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soslLiteralAlt(): SoslLiteralAltContext {
		let _localctx: SoslLiteralAltContext = new SoslLiteralAltContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, SoqlParser.RULE_soslLiteralAlt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1855;
			this.match(SoqlParser.FindLiteralAlt);
			this.state = 1856;
			this.soslClauses();
			this.state = 1857;
			this.match(SoqlParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soslClauses(): SoslClausesContext {
		let _localctx: SoslClausesContext = new SoslClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, SoqlParser.RULE_soslClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.IN) {
				{
				this.state = 1859;
				this.match(SoqlParser.IN);
				this.state = 1860;
				this.searchGroup();
				}
			}

			this.state = 1865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.RETURNING) {
				{
				this.state = 1863;
				this.match(SoqlParser.RETURNING);
				this.state = 1864;
				this.fieldSpecList();
				}
			}

			this.state = 1871;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				this.state = 1867;
				this.match(SoqlParser.WITH);
				this.state = 1868;
				this.match(SoqlParser.DIVISION);
				this.state = 1869;
				this.match(SoqlParser.ASSIGN);
				this.state = 1870;
				this.match(SoqlParser.StringLiteral);
				}
				break;
			}
			this.state = 1877;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1873;
				this.match(SoqlParser.WITH);
				this.state = 1874;
				this.match(SoqlParser.DATA);
				this.state = 1875;
				this.match(SoqlParser.CATEGORY);
				this.state = 1876;
				this.filteringExpression();
				}
				break;
			}
			this.state = 1888;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				{
				this.state = 1879;
				this.match(SoqlParser.WITH);
				this.state = 1880;
				this.match(SoqlParser.SNIPPET);
				this.state = 1886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.LPAREN) {
					{
					this.state = 1881;
					this.match(SoqlParser.LPAREN);
					this.state = 1882;
					this.match(SoqlParser.TARGET_LENGTH);
					this.state = 1883;
					this.match(SoqlParser.ASSIGN);
					this.state = 1884;
					this.match(SoqlParser.IntegerLiteral);
					this.state = 1885;
					this.match(SoqlParser.RPAREN);
					}
				}

				}
				break;
			}
			this.state = 1897;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				{
				this.state = 1890;
				this.match(SoqlParser.WITH);
				this.state = 1891;
				this.match(SoqlParser.NETWORK);
				this.state = 1892;
				this.match(SoqlParser.IN);
				this.state = 1893;
				this.match(SoqlParser.LPAREN);
				this.state = 1894;
				this.networkList();
				this.state = 1895;
				this.match(SoqlParser.RPAREN);
				}
				break;
			}
			this.state = 1903;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				{
				this.state = 1899;
				this.match(SoqlParser.WITH);
				this.state = 1900;
				this.match(SoqlParser.NETWORK);
				this.state = 1901;
				this.match(SoqlParser.ASSIGN);
				this.state = 1902;
				this.match(SoqlParser.StringLiteral);
				}
				break;
			}
			this.state = 1909;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				{
				this.state = 1905;
				this.match(SoqlParser.WITH);
				this.state = 1906;
				this.match(SoqlParser.PRICEBOOKID);
				this.state = 1907;
				this.match(SoqlParser.ASSIGN);
				this.state = 1908;
				this.match(SoqlParser.StringLiteral);
				}
				break;
			}
			this.state = 1915;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WITH) {
				{
				this.state = 1911;
				this.match(SoqlParser.WITH);
				this.state = 1912;
				this.match(SoqlParser.METADATA);
				this.state = 1913;
				this.match(SoqlParser.ASSIGN);
				this.state = 1914;
				this.match(SoqlParser.StringLiteral);
				}
			}

			this.state = 1918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LIMIT) {
				{
				this.state = 1917;
				this.limitClause();
				}
			}

			this.state = 1922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.UPDATE) {
				{
				this.state = 1920;
				this.match(SoqlParser.UPDATE);
				this.state = 1921;
				this.updateList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public searchGroup(): SearchGroupContext {
		let _localctx: SearchGroupContext = new SearchGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, SoqlParser.RULE_searchGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1924;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.ALL || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & ((1 << (SoqlParser.EMAIL - 186)) | (1 << (SoqlParser.NAME - 186)) | (1 << (SoqlParser.PHONE - 186)) | (1 << (SoqlParser.SIDEBAR - 186)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1925;
			this.match(SoqlParser.FIELDS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSpecList(): FieldSpecListContext {
		let _localctx: FieldSpecListContext = new FieldSpecListContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, SoqlParser.RULE_fieldSpecList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1927;
			this.fieldSpec();
			this.state = 1932;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1928;
					this.match(SoqlParser.COMMA);
					this.state = 1929;
					this.fieldSpecList();
					}
					}
				}
				this.state = 1934;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSpec(): FieldSpecContext {
		let _localctx: FieldSpecContext = new FieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, SoqlParser.RULE_fieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1935;
			this.soslId();
			this.state = 1961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LPAREN) {
				{
				this.state = 1936;
				this.match(SoqlParser.LPAREN);
				this.state = 1937;
				this.fieldList();
				this.state = 1940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.WHERE) {
					{
					this.state = 1938;
					this.match(SoqlParser.WHERE);
					this.state = 1939;
					this.logicalExpression();
					}
				}

				this.state = 1946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.USING) {
					{
					this.state = 1942;
					this.match(SoqlParser.USING);
					this.state = 1943;
					this.match(SoqlParser.LISTVIEW);
					this.state = 1944;
					this.match(SoqlParser.ASSIGN);
					this.state = 1945;
					this.soslId();
					}
				}

				this.state = 1951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ORDER) {
					{
					this.state = 1948;
					this.match(SoqlParser.ORDER);
					this.state = 1949;
					this.match(SoqlParser.BY);
					this.state = 1950;
					this.fieldOrderList();
					}
				}

				this.state = 1954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.LIMIT) {
					{
					this.state = 1953;
					this.limitClause();
					}
				}

				this.state = 1957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.OFFSET) {
					{
					this.state = 1956;
					this.offsetClause();
					}
				}

				this.state = 1959;
				this.match(SoqlParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldList(): FieldListContext {
		let _localctx: FieldListContext = new FieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, SoqlParser.RULE_fieldList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1963;
			this.soslId();
			this.state = 1968;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1964;
					this.match(SoqlParser.COMMA);
					this.state = 1965;
					this.fieldList();
					}
					}
				}
				this.state = 1970;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateList(): UpdateListContext {
		let _localctx: UpdateListContext = new UpdateListContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, SoqlParser.RULE_updateList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1971;
			this.updateType();
			this.state = 1974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.COMMA) {
				{
				this.state = 1972;
				this.match(SoqlParser.COMMA);
				this.state = 1973;
				this.updateList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateType(): UpdateTypeContext {
		let _localctx: UpdateTypeContext = new UpdateTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, SoqlParser.RULE_updateType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1976;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.TRACKING || _la === SoqlParser.VIEWSTAT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public networkList(): NetworkListContext {
		let _localctx: NetworkListContext = new NetworkListContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, SoqlParser.RULE_networkList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1978;
			this.match(SoqlParser.StringLiteral);
			this.state = 1981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.COMMA) {
				{
				this.state = 1979;
				this.match(SoqlParser.COMMA);
				this.state = 1980;
				this.networkList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soslId(): SoslIdContext {
		let _localctx: SoslIdContext = new SoslIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, SoqlParser.RULE_soslId);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1983;
			this.id();
			this.state = 1988;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1984;
					this.match(SoqlParser.DOT);
					this.state = 1985;
					this.soslId();
					}
					}
				}
				this.state = 1990;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, SoqlParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1991;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)))) !== 0) || _la === SoqlParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anyId(): AnyIdContext {
		let _localctx: AnyIdContext = new AnyIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, SoqlParser.RULE_anyId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1993;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.BREAK) | (1 << SoqlParser.CATCH) | (1 << SoqlParser.CLASS) | (1 << SoqlParser.CONTINUE) | (1 << SoqlParser.DELETE) | (1 << SoqlParser.DO) | (1 << SoqlParser.ELSE) | (1 << SoqlParser.ENUM) | (1 << SoqlParser.EXTENDS) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.FINALLY) | (1 << SoqlParser.FOR) | (1 << SoqlParser.GET) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.IF) | (1 << SoqlParser.IMPLEMENTS) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSERT) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.INTERFACE) | (1 << SoqlParser.MERGE) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL) | (1 << SoqlParser.ON) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SoqlParser.RETURN - 32)) | (1 << (SoqlParser.SET - 32)) | (1 << (SoqlParser.SHARING - 32)) | (1 << (SoqlParser.STATIC - 32)) | (1 << (SoqlParser.SUPER - 32)) | (1 << (SoqlParser.SWITCH - 32)) | (1 << (SoqlParser.TESTMETHOD - 32)) | (1 << (SoqlParser.THIS - 32)) | (1 << (SoqlParser.THROW - 32)) | (1 << (SoqlParser.TRANSIENT - 32)) | (1 << (SoqlParser.TRIGGER - 32)) | (1 << (SoqlParser.TRY - 32)) | (1 << (SoqlParser.UNDELETE - 32)) | (1 << (SoqlParser.UPDATE - 32)) | (1 << (SoqlParser.UPSERT - 32)) | (1 << (SoqlParser.VIRTUAL - 32)) | (1 << (SoqlParser.WEBSERVICE - 32)) | (1 << (SoqlParser.WHEN - 32)) | (1 << (SoqlParser.WHILE - 32)) | (1 << (SoqlParser.WITH - 32)) | (1 << (SoqlParser.WITHOUT - 32)) | (1 << (SoqlParser.LIST - 32)) | (1 << (SoqlParser.MAP - 32)) | (1 << (SoqlParser.SYSTEM - 32)) | (1 << (SoqlParser.USER - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SoqlParser.SELECT - 68)) | (1 << (SoqlParser.COUNT - 68)) | (1 << (SoqlParser.FROM - 68)) | (1 << (SoqlParser.AS - 68)) | (1 << (SoqlParser.USING - 68)) | (1 << (SoqlParser.SCOPE - 68)) | (1 << (SoqlParser.WHERE - 68)) | (1 << (SoqlParser.ORDER - 68)) | (1 << (SoqlParser.BY - 68)) | (1 << (SoqlParser.LIMIT - 68)) | (1 << (SoqlParser.SOQLAND - 68)) | (1 << (SoqlParser.SOQLOR - 68)) | (1 << (SoqlParser.NOT - 68)) | (1 << (SoqlParser.AVG - 68)) | (1 << (SoqlParser.COUNT_DISTINCT - 68)) | (1 << (SoqlParser.MIN - 68)) | (1 << (SoqlParser.MAX - 68)) | (1 << (SoqlParser.SUM - 68)) | (1 << (SoqlParser.TYPEOF - 68)) | (1 << (SoqlParser.END - 68)) | (1 << (SoqlParser.THEN - 68)) | (1 << (SoqlParser.LIKE - 68)) | (1 << (SoqlParser.IN - 68)) | (1 << (SoqlParser.INCLUDES - 68)) | (1 << (SoqlParser.EXCLUDES - 68)) | (1 << (SoqlParser.ASC - 68)) | (1 << (SoqlParser.DESC - 68)) | (1 << (SoqlParser.NULLS - 68)) | (1 << (SoqlParser.FIRST - 68)) | (1 << (SoqlParser.LAST - 68)) | (1 << (SoqlParser.GROUP - 68)) | (1 << (SoqlParser.ALL - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.ROWS - 100)) | (1 << (SoqlParser.VIEW - 100)) | (1 << (SoqlParser.HAVING - 100)) | (1 << (SoqlParser.ROLLUP - 100)) | (1 << (SoqlParser.TOLABEL - 100)) | (1 << (SoqlParser.OFFSET - 100)) | (1 << (SoqlParser.DATA - 100)) | (1 << (SoqlParser.CATEGORY - 100)) | (1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)) | (1 << (SoqlParser.SECURITY_ENFORCED - 100)) | (1 << (SoqlParser.SYSTEM_MODE - 100)) | (1 << (SoqlParser.USER_MODE - 100)) | (1 << (SoqlParser.REFERENCE - 100)) | (1 << (SoqlParser.CUBE - 100)) | (1 << (SoqlParser.FORMAT - 100)) | (1 << (SoqlParser.TRACKING - 100)) | (1 << (SoqlParser.VIEWSTAT - 100)) | (1 << (SoqlParser.CUSTOM - 100)) | (1 << (SoqlParser.STANDARD - 100)) | (1 << (SoqlParser.DISTANCE - 100)) | (1 << (SoqlParser.GEOLOCATION - 100)) | (1 << (SoqlParser.CALENDAR_MONTH - 100)) | (1 << (SoqlParser.CALENDAR_QUARTER - 100)) | (1 << (SoqlParser.CALENDAR_YEAR - 100)) | (1 << (SoqlParser.DAY_IN_MONTH - 100)) | (1 << (SoqlParser.DAY_IN_WEEK - 100)) | (1 << (SoqlParser.DAY_IN_YEAR - 100)) | (1 << (SoqlParser.DAY_ONLY - 100)) | (1 << (SoqlParser.FISCAL_MONTH - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SoqlParser.FISCAL_QUARTER - 132)) | (1 << (SoqlParser.FISCAL_YEAR - 132)) | (1 << (SoqlParser.HOUR_IN_DAY - 132)) | (1 << (SoqlParser.WEEK_IN_MONTH - 132)) | (1 << (SoqlParser.WEEK_IN_YEAR - 132)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 132)) | (1 << (SoqlParser.YESTERDAY - 132)) | (1 << (SoqlParser.TODAY - 132)) | (1 << (SoqlParser.TOMORROW - 132)) | (1 << (SoqlParser.LAST_WEEK - 132)) | (1 << (SoqlParser.THIS_WEEK - 132)) | (1 << (SoqlParser.NEXT_WEEK - 132)) | (1 << (SoqlParser.LAST_MONTH - 132)) | (1 << (SoqlParser.THIS_MONTH - 132)) | (1 << (SoqlParser.NEXT_MONTH - 132)) | (1 << (SoqlParser.LAST_90_DAYS - 132)) | (1 << (SoqlParser.NEXT_90_DAYS - 132)) | (1 << (SoqlParser.LAST_N_DAYS_N - 132)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 132)) | (1 << (SoqlParser.N_DAYS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 132)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 132)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 132)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 132)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 132)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 132)) | (1 << (SoqlParser.THIS_QUARTER - 132)) | (1 << (SoqlParser.LAST_QUARTER - 132)) | (1 << (SoqlParser.NEXT_QUARTER - 132)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 132)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 132)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SoqlParser.THIS_YEAR - 164)) | (1 << (SoqlParser.LAST_YEAR - 164)) | (1 << (SoqlParser.NEXT_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_YEARS_N - 164)) | (1 << (SoqlParser.N_YEARS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 164)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 164)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 164)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 164)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 164)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 164)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 164)) | (1 << (SoqlParser.FIND - 164)) | (1 << (SoqlParser.EMAIL - 164)) | (1 << (SoqlParser.NAME - 164)) | (1 << (SoqlParser.PHONE - 164)) | (1 << (SoqlParser.SIDEBAR - 164)) | (1 << (SoqlParser.FIELDS - 164)) | (1 << (SoqlParser.METADATA - 164)) | (1 << (SoqlParser.PRICEBOOKID - 164)) | (1 << (SoqlParser.NETWORK - 164)) | (1 << (SoqlParser.SNIPPET - 164)) | (1 << (SoqlParser.TARGET_LENGTH - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SoqlParser.DIVISION - 196)) | (1 << (SoqlParser.RETURNING - 196)) | (1 << (SoqlParser.LISTVIEW - 196)))) !== 0) || _la === SoqlParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 77:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);

		case 8:
			return this.precpred(this._ctx, 4);

		case 9:
			return this.precpred(this._ctx, 3);

		case 10:
			return this.precpred(this._ctx, 2);

		case 11:
			return this.precpred(this._ctx, 1);

		case 12:
			return this.precpred(this._ctx, 22);

		case 13:
			return this.precpred(this._ctx, 21);

		case 14:
			return this.precpred(this._ctx, 16);

		case 15:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0102\u07CE\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x07\x02\u0149\n\x02\f\x02\x0E\x02\u014C\v\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03\u015A\n\x03\f\x03\x0E\x03\u015D\v\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07\x05\u0168" +
		"\n\x05\f\x05\x0E\x05\u016B\v\x05\x03\x05\x03\x05\x03\x06\x07\x06\u0170" +
		"\n\x06\f\x06\x0E\x06\u0173\v\x06\x03\x06\x03\x06\x05\x06\u0177\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x07\b\u017D\n\b\f\b\x0E\b\u0180\v\b\x03\b\x03" +
		"\b\x07\b\u0184\n\b\f\b\x0E\b\u0187\v\b\x03\b\x03\b\x07\b\u018B\n\b\f\b" +
		"\x0E\b\u018E\v\b\x03\b\x05\b\u0191\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\u0197" +
		"\n\t\x03\t\x03\t\x05\t\u019B\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\u01A3\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v\u01AA\n\v\f\v\x0E\v\u01AD" +
		"\v\v\x03\f\x03\f\x03\f\x03\f\x05\f\u01B3\n\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x07\r\u01BA\n\r\f\r\x0E\r\u01BD\v\r\x03\x0E\x03\x0E\x07\x0E\u01C1\n" +
		"\x0E\f\x0E\x0E\x0E\u01C4\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x07\x0F" +
		"\u01CA\n\x0F\f\x0F\x0E\x0F\u01CD\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x05\x10\u01D3\n\x10\x03\x10\x03\x10\x07\x10\u01D7\n\x10\f\x10\x0E\x10" +
		"\u01DA\v\x10\x03\x10\x05\x10\u01DD\n\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01F2\n\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01FB\n\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0203\n\x13\x03" +
		"\x14\x03\x14\x05\x14\u0207\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\u020D\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u021B\n\x17\f\x17\x0E\x17" +
		"\u021E\v\x17\x03\x17\x03\x17\x03\x18\x07\x18\u0223\n\x18\f\x18\x0E\x18" +
		"\u0226\v\x18\x03\x18\x03\x18\x05\x18\u022A\n\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x07\x19\u0233\n\x19\f\x19\x0E\x19\u0236" +
		"\v\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u023B\n\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u0241\n\x1B\f\x1B\x0E\x1B\u0244\v\x1B\x03\x1B\x05" +
		"\x1B\u0247\n\x1B\x05\x1B\u0249\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x07\x1C\u0250\n\x1C\f\x1C\x0E\x1C\u0253\v\x1C\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x07\x1D\u0259\n\x1D\f\x1D\x0E\x1D\u025C\v\x1D\x03\x1E\x03" +
		"\x1E\x05\x1E\u0260\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0264\n\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0268\n\x1E\x03\x1E\x03\x1E\x05\x1E\u026C\n\x1E\x05\x1E\u026E" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u0276\n \x03 \x03" +
		" \x03!\x03!\x03!\x07!\u027D\n!\f!\x0E!\u0280\v!\x03\"\x07\"\u0283\n\"" +
		"\f\"\x0E\"\u0286\v\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x07#\u028E\n#\f" +
		"#\x0E#\u0291\v#\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x05%\u029A\n%\x03%" +
		"\x05%\u029D\n%\x03&\x03&\x05&\u02A1\n&\x03&\x07&\u02A4\n&\f&\x0E&\u02A7" +
		"\v&\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x05(\u02B0\n(\x03)\x03)\x03" +
		")\x03)\x07)\u02B6\n)\f)\x0E)\u02B9\v)\x05)\u02BB\n)\x03)\x05)\u02BE\n" +
		")\x03)\x03)\x03*\x03*\x07*\u02C4\n*\f*\x0E*\u02C7\v*\x03*\x03*\x03+\x03" +
		"+\x03+\x03,\x07,\u02CF\n,\f,\x0E,\u02D2\v,\x03,\x03,\x03,\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x05-\u02EB\n-\x03.\x03.\x03.\x03.\x03.\x05.\u02F2\n." +
		"\x03/\x03/\x03/\x03/\x03/\x06/\u02F9\n/\r/\x0E/\u02FA\x03/\x03/\x030\x03" +
		"0\x030\x030\x031\x031\x031\x031\x071\u0307\n1\f1\x0E1\u030A\v1\x031\x03" +
		"1\x031\x051\u030F\n1\x032\x052\u0312\n2\x032\x032\x032\x032\x032\x032" +
		"\x032\x032\x032\x052\u031D\n2\x033\x033\x033\x033\x033\x033\x053\u0325" +
		"\n3\x034\x034\x034\x034\x054\u032B\n4\x035\x035\x035\x035\x035\x035\x03" +
		"6\x036\x036\x066\u0336\n6\r6\x0E6\u0337\x036\x056\u033B\n6\x036\x056\u033E" +
		"\n6\x037\x037\x057\u0342\n7\x037\x037\x038\x038\x038\x038\x039\x039\x03" +
		"9\x03:\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x05<\u0355\n<\x03<\x03<\x03" +
		"<\x03=\x03=\x05=\u035C\n=\x03=\x03=\x03=\x03>\x03>\x05>\u0363\n>\x03>" +
		"\x03>\x03>\x03?\x03?\x05?\u036A\n?\x03?\x03?\x03?\x03@\x03@\x05@\u0371" +
		"\n@\x03@\x03@\x05@\u0375\n@\x03@\x03@\x03A\x03A\x05A\u037B\nA\x03A\x03" +
		"A\x03A\x03A\x03B\x03B\x03B\x05B\u0384\nB\x03B\x03B\x03B\x03C\x03C\x03" +
		"C\x03D\x07D\u038D\nD\fD\x0ED\u0390\vD\x03D\x03D\x05D\u0394\nD\x03E\x03" +
		"E\x03E\x05E\u0399\nE\x03F\x03F\x03F\x05F\u039E\nF\x03G\x03G\x03G\x07G" +
		"\u03A3\nG\fG\x0EG\u03A6\vG\x03G\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03" +
		"I\x03I\x05I\u03B2\nI\x03I\x03I\x05I\u03B6\nI\x03I\x03I\x05I\u03BA\nI\x05" +
		"I\u03BC\nI\x03J\x03J\x05J\u03C0\nJ\x03K\x03K\x03K\x03K\x03K\x03L\x03L" +
		"\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x07N\u03D0\nN\fN\x0EN\u03D3\vN\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x05O\u03E7\nO\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u03F7\nO\x03O\x03O\x03O\x03O\x05" +
		"O\u03FD\nO\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u041F\nO\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x07O\u042B\nO\fO\x0EO\u042E\vO\x03P\x03P\x03" +
		"P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u043D\nP\x03" +
		"Q\x03Q\x03Q\x05Q\u0442\nQ\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u0449\nQ\x03Q" +
		"\x03Q\x03Q\x03Q\x05Q\u044F\nQ\x03Q\x05Q\u0452\nQ\x03R\x03R\x03R\x05R\u0457" +
		"\nR\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u0461\nS\x03T\x03T\x03" +
		"T\x07T\u0466\nT\fT\x0ET\u0469\vT\x03U\x03U\x03U\x03U\x03U\x05U\u0470\n" +
		"U\x03V\x03V\x03V\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u047E" +
		"\nX\x05X\u0480\nX\x03Y\x03Y\x03Y\x03Y\x07Y\u0486\nY\fY\x0EY\u0489\vY\x03" +
		"Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03[\x03[\x03[\x03[\x07[\u0495\n[\f[\x0E[\u0498" +
		"\v[\x03[\x03[\x03\\\x03\\\x05\\\u049E\n\\\x03\\\x03\\\x03]\x03]\x03]\x03" +
		"]\x03^\x03^\x05^\u04A8\n^\x03^\x05^\u04AB\n^\x03^\x05^\u04AE\n^\x03^\x05" +
		"^\u04B1\n^\x03^\x05^\u04B4\n^\x03^\x05^\u04B7\n^\x03^\x05^\u04BA\n^\x03" +
		"^\x05^\u04BD\n^\x03^\x05^\u04C0\n^\x03^\x05^\u04C3\n^\x03^\x05^\u04C6" +
		"\n^\x03^\x03^\x03^\x05^\u04CB\n^\x03^\x05^\u04CE\n^\x03_\x03_\x03`\x03" +
		"`\x03a\x03a\x03b\x03b\x05b\u04D8\nb\x03b\x05b\u04DB\nb\x03b\x05b\u04DE" +
		"\nb\x03b\x05b\u04E1\nb\x03b\x05b\u04E4\nb\x03b\x05b\u04E7\nb\x03b\x03" +
		"b\x03b\x05b\u04EC\nb\x03c\x03c\x05c\u04F0\nc\x03c\x03c\x03c\x05c\u04F5" +
		"\nc\x07c\u04F7\nc\fc\x0Ec\u04FA\vc\x03d\x03d\x03d\x07d\u04FF\nd\fd\x0E" +
		"d\u0502\vd\x03e\x03e\x03f\x03f\x03f\x05f\u0509\nf\x07f\u050B\nf\ff\x0E" +
		"f\u050E\vf\x03g\x03g\x05g\u0512\ng\x03g\x03g\x03g\x03g\x05g\u0518\ng\x03" +
		"h\x03h\x03h\x07h\u051D\nh\fh\x0Eh\u0520\vh\x03i\x03i\x05i\u0524\ni\x03" +
		"i\x03i\x03i\x05i\u0529\ni\x07i\u052B\ni\fi\x0Ei\u052E\vi\x03j\x03j\x03" +
		"k\x03k\x03l\x03l\x03m\x03m\x03m\x07m\u0539\nm\fm\x0Em\u053C\vm\x03n\x03" +
		"n\x05n\u0540\nn\x03n\x03n\x05n\u0544\nn\x03n\x05n\u0547\nn\x03o\x03o\x03" +
		"o\x07o\u054C\no\fo\x0Eo\u054F\vo\x03p\x03p\x03q\x03q\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x05r\u05CF\nr\x03s\x03s\x03s\x03s\x03" +
		"s\x03s\x05s\u05D7\ns\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x05t\u05E1" +
		"\nt\x03u\x03u\x03v\x03v\x03v\x06v\u05E8\nv\rv\x0Ev\u05E9\x03v\x05v\u05ED" +
		"\nv\x03v\x03v\x03w\x03w\x03w\x03w\x03w\x03x\x03x\x03x\x03y\x03y\x03y\x07" +
		"y\u05FC\ny\fy\x0Ey\u05FF\vy\x03z\x03z\x03z\x03z\x03{\x03{\x03{\x03|\x03" +
		"|\x03|\x03|\x07|\u060C\n|\f|\x0E|\u060F\v|\x03|\x03|\x05|\u0613\n|\x03" +
		"}\x03}\x03~\x03~\x03~\x03~\x03~\x05~\u061C\n~\x03\x7F\x03\x7F\x05\x7F" +
		"\u0620\n\x7F\x03\x7F\x05\x7F\u0623\n\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
		"\x05\x7F\u0629\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03" +
		"\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03" +
		"\x80\x05\x80\u063B\n\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81" +
		"\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u0647\n\x81\x05\x81\u0649\n\x81" +
		"\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u0650\n\x81\x03\x82\x03" +
		"\x82\x03\x82\x03\x82\x07\x82\u0656\n\x82\f\x82\x0E\x82\u0659\v\x82\x03" +
		"\x82\x03\x82\x03\x83\x05\x83\u065E\n\x83\x03\x83\x03\x83\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x05\x84\u066E\n\x84\x03\x85\x03\x85\x03\x85\x07\x85\u0673\n\x85" +
		"\f\x85\x0E\x85\u0676\v\x85\x03\x86\x03\x86\x03\x86\x03\x86\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x87\x07\x87\u0681\n\x87\f\x87\x0E\x87\u0684\v" +
		"\x87\x03\x87\x03\x87\x05\x87\u0688\n\x87\x03\x88\x03\x88\x03\x89\x03\x89" +
		"\x03\x89\x03\x89\x03\x89\x05\x89\u0691\n\x89\x03\x89\x03\x89\x03\x89\x03" +
		"\x89\x03\x89\x03\x89\x03\x89\x07\x89\u069A\n\x89\f\x89\x0E\x89\u069D\v" +
		"\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03" +
		"\x89\x07\x89\u06A8\n\x89\f\x89\x0E\x89\u06AB\v\x89\x03\x89\x03\x89\x05" +
		"\x89\u06AF\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8B" +
		"\x07\x8B\u06B8\n\x8B\f\x8B\x0E\x8B\u06BB\v\x8B\x03\x8C\x03\x8C\x05\x8C" +
		"\u06BF\n\x8C\x03\x8C\x03\x8C\x05\x8C\u06C3\n\x8C\x03\x8C\x03\x8C\x05\x8C" +
		"\u06C7\n\x8C\x03\x8C\x03\x8C\x05\x8C\u06CB\n\x8C\x05\x8C\u06CD\n\x8C\x03" +
		"\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x03" +
		"\x90\x03\x90\x07\x90\u06DA\n\x90\f\x90\x0E\x90\u06DD\v\x90\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x05\x91\u0735\n\x91\x03\x92\x05\x92\u0738" +
		"\n\x92\x03\x92\x03\x92\x03\x93\x03\x93\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x95\x03\x95\x03\x95\x03\x95\x03\x96\x03\x96\x05\x96\u0748\n\x96\x03" +
		"\x96\x03\x96\x05\x96\u074C\n\x96\x03\x96\x03\x96\x03\x96\x03\x96\x05\x96" +
		"\u0752\n\x96\x03\x96\x03\x96\x03\x96\x03\x96\x05\x96\u0758\n\x96\x03\x96" +
		"\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x05\x96\u0761\n\x96\x05" +
		"\x96\u0763\n\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96" +
		"\x05\x96\u076C\n\x96\x03\x96\x03\x96\x03\x96\x03\x96\x05\x96\u0772\n\x96" +
		"\x03\x96\x03\x96\x03\x96\x03\x96\x05\x96\u0778\n\x96\x03\x96\x03\x96\x03" +
		"\x96\x03\x96\x05\x96\u077E\n\x96\x03\x96\x05\x96\u0781\n\x96\x03\x96\x03" +
		"\x96\x05\x96\u0785\n\x96\x03\x97\x03\x97\x03\x97\x03\x98\x03\x98\x03\x98" +
		"\x07\x98\u078D\n\x98\f\x98\x0E\x98\u0790\v\x98\x03\x99\x03\x99\x03\x99" +
		"\x03\x99\x03\x99\x05\x99\u0797\n\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05" +
		"\x99\u079D\n\x99\x03\x99\x03\x99\x03\x99\x05\x99\u07A2\n\x99\x03\x99\x05" +
		"\x99\u07A5\n\x99\x03\x99\x05\x99\u07A8\n\x99\x03\x99\x03\x99\x05\x99\u07AC" +
		"\n\x99\x03\x9A\x03\x9A\x03\x9A\x07\x9A\u07B1\n\x9A\f\x9A\x0E\x9A\u07B4" +
		"\v\x9A\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u07B9\n\x9B\x03\x9C\x03\x9C\x03" +
		"\x9D\x03\x9D\x03\x9D\x05\x9D\u07C0\n\x9D\x03\x9E\x03\x9E\x03\x9E\x07\x9E" +
		"\u07C5\n\x9E\f\x9E\x0E\x9E\u07C8\v\x9E\x03\x9F\x03\x9F\x03\xA0\x03\xA0" +
		"\x03\xA0\x02\x02\x03\x9C\xA1\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02" +
		"\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02" +
		"\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02" +
		"\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02" +
		"\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02" +
		"\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02" +
		"\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02" +
		"\u013E\x02\x02\x1F\x03\x02\x04\x05\x05\x02\n\n\x17\x17/0\x04\x02\x1C\x1C" +
		"\xCB\xCF\x03\x02;<\x03\x02\xE9\xEC\x03\x02\xDD\xDE\x03\x02\xED\xEE\x03" +
		"\x02\xEB\xEC\x03\x02\xDB\xDC\x03\x02\xE2\xE6\x04\x02\xDA\xDA\xF3\xFC\x04" +
		"\x02\xD9\xD9\xDF\xDF\x03\x02\xE9\xEA\x04\x02=BFF\x05\x02==CEHH\x05\x02" +
		"==\xBD\xBD\xFE\xFE\x05\x02<=\xBD\xBD\xFE\xFE\x04\x02==\xFE\xFE\x04\x02" +
		"eez{\x03\x02PQ\x04\x02\xCB\xCB\xCD\xCD\x03\x02nq\x03\x02_`\x03\x02bc\x05" +
		"\x0200gguu\x04\x02ee\xBC\xBF\x03\x02xy\x0F\x02\x04\x05\x12\x12\x16\x16" +
		"\x18\x18$%((,-5578;<F\xB7\xBA\xC8\xFE\xFE\b\x02\x03\"$24<F\xB7\xBA\xC8" +
		"\xFE\xFE\x02\u08A1\x02\u0140\x03\x02\x02\x02\x04\u0151\x03\x02\x02\x02" +
		"\x06\u0162\x03\x02\x02\x02\b\u0165\x03\x02\x02\x02\n\u0176\x03\x02\x02" +
		"\x02\f\u0178\x03\x02\x02\x02\x0E\u0190\x03\x02\x02\x02\x10\u0192\x03\x02" +
		"\x02\x02\x12\u019E\x03\x02\x02\x02\x14\u01A6\x03\x02\x02\x02\x16\u01AE" +
		"\x03\x02\x02\x02\x18\u01B6\x03\x02\x02\x02\x1A\u01BE\x03\x02\x02\x02\x1C" +
		"\u01C7\x03\x02\x02\x02\x1E\u01DC\x03\x02\x02\x02 \u01F1\x03\x02\x02\x02" +
		"\"\u01FA\x03\x02\x02\x02$\u0202\x03\x02\x02\x02&\u0206\x03\x02\x02\x02" +
		"(\u020E\x03\x02\x02\x02*\u0212\x03\x02\x02\x02,\u0216\x03\x02\x02\x02" +
		".\u0224\x03\x02\x02\x020\u022F\x03\x02\x02\x022\u0237\x03\x02\x02\x02" +
		"4\u023C\x03\x02\x02\x026\u024C\x03\x02\x02\x028\u025A\x03\x02\x02\x02" +
		":\u026D\x03\x02\x02\x02<\u026F\x03\x02\x02\x02>\u0273\x03\x02\x02\x02" +
		"@\u0279\x03\x02\x02\x02B\u0284\x03\x02\x02\x02D\u028A\x03\x02\x02\x02" +
		"F\u0292\x03\x02\x02\x02H\u0294\x03\x02\x02\x02J\u029E\x03\x02\x02\x02" +
		"L\u02A8\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"N\u02AF\x03\x02\x02\x02P\u02B1\x03\x02\x02\x02R\u02C1\x03\x02\x02\x02" +
		"T\u02CA\x03\x02\x02\x02V\u02D0\x03\x02\x02\x02X\u02EA\x03\x02\x02\x02" +
		"Z\u02EC\x03\x02\x02\x02\\\u02F3\x03\x02\x02\x02^\u02FE\x03\x02\x02\x02" +
		"`\u030E\x03\x02\x02\x02b\u031C\x03\x02\x02\x02d\u031E\x03\x02\x02\x02" +
		"f\u0326\x03\x02\x02\x02h\u032C\x03\x02\x02\x02j\u0332\x03\x02\x02\x02" +
		"l\u033F\x03\x02\x02\x02n\u0345\x03\x02\x02\x02p\u0349\x03\x02\x02\x02" +
		"r\u034C\x03\x02\x02\x02t\u034F\x03\x02\x02\x02v\u0352\x03\x02\x02\x02" +
		"x\u0359\x03\x02\x02\x02z\u0360\x03\x02\x02\x02|\u0367\x03\x02\x02\x02" +
		"~\u036E\x03\x02\x02\x02\x80\u0378\x03\x02\x02\x02\x82\u0380\x03\x02\x02" +
		"\x02\x84\u0388\x03\x02\x02\x02\x86\u038E\x03\x02\x02\x02\x88\u0395\x03" +
		"\x02\x02\x02\x8A\u039A\x03\x02\x02\x02\x8C\u039F\x03\x02\x02\x02\x8E\u03AC" +
		"\x03\x02\x02\x02\x90\u03BB\x03\x02\x02\x02\x92\u03BF\x03\x02\x02\x02\x94" +
		"\u03C1\x03\x02\x02\x02\x96\u03C6\x03\x02\x02\x02\x98\u03C8\x03\x02\x02" +
		"\x02\x9A\u03CC\x03\x02\x02\x02\x9C\u03E6\x03\x02\x02\x02\x9E\u043C\x03" +
		"\x02\x02\x02\xA0\u0451\x03\x02\x02\x02\xA2\u0453\x03\x02\x02\x02\xA4\u045A" +
		"\x03\x02\x02\x02\xA6\u0462\x03\x02\x02\x02\xA8\u046A\x03\x02\x02\x02\xAA" +
		"\u0471\x03\x02\x02\x02\xAC\u0474\x03\x02\x02\x02\xAE\u047F\x03\x02\x02" +
		"\x02\xB0\u0481\x03\x02\x02\x02\xB2\u048C\x03\x02\x02\x02\xB4\u0490\x03" +
		"\x02\x02\x02\xB6\u049B\x03\x02\x02\x02\xB8\u04A1\x03\x02\x02\x02\xBA\u04A5" +
		"\x03\x02\x02\x02\xBC\u04CF\x03\x02\x02\x02\xBE\u04D1\x03\x02\x02\x02\xC0" +
		"\u04D3\x03\x02\x02\x02\xC2\u04D5\x03\x02\x02\x02\xC4\u04ED\x03\x02\x02" +
		"\x02\xC6\u04FB\x03\x02\x02\x02\xC8\u0503\x03\x02\x02\x02\xCA\u0505\x03" +
		"\x02\x02\x02\xCC\u0517\x03\x02\x02\x02\xCE\u0519\x03\x02\x02\x02\xD0\u0521" +
		"\x03\x02\x02\x02\xD2\u052F\x03\x02\x02\x02\xD4\u0531\x03\x02\x02\x02\xD6" +
		"\u0533\x03\x02\x02\x02\xD8\u0535\x03\x02\x02\x02\xDA\u0546\x03\x02\x02" +
		"\x02\xDC\u0548\x03\x02\x02\x02\xDE\u0550\x03\x02\x02\x02\xE0\u0552\x03" +
		"\x02\x02\x02\xE2\u05CE\x03\x02\x02\x02\xE4\u05D6\x03\x02\x02\x02\xE6\u05E0" +
		"\x03\x02\x02\x02\xE8\u05E2\x03\x02\x02\x02\xEA\u05E4\x03\x02\x02\x02\xEC" +
		"\u05F0\x03\x02\x02\x02\xEE\u05F5\x03\x02\x02\x02\xF0\u05F8\x03\x02\x02" +
		"\x02\xF2\u0600\x03\x02\x02\x02\xF4\u0604\x03\x02\x02\x02\xF6\u0612\x03" +
		"\x02\x02\x02\xF8\u0614\x03\x02\x02\x02\xFA\u061B\x03\x02\x02\x02\xFC\u0628" +
		"\x03\x02\x02\x02\xFE\u063A\x03\x02\x02\x02\u0100\u064F\x03\x02\x02\x02" +
		"\u0102\u0651\x03\x02\x02\x02\u0104\u065D\x03\x02\x02\x02\u0106\u066D\x03" +
		"\x02\x02\x02\u0108\u066F\x03\x02\x02\x02\u010A\u0677\x03\x02\x02\x02\u010C" +
		"\u0687\x03\x02\x02\x02\u010E\u0689\x03\x02\x02\x02\u0110\u06AE\x03\x02" +
		"\x02\x02\u0112\u06B0\x03\x02\x02\x02\u0114\u06B4\x03\x02\x02\x02\u0116" +
		"\u06CC\x03\x02\x02\x02\u0118\u06CE\x03\x02\x02\x02\u011A\u06D1\x03\x02" +
		"\x02\x02\u011C\u06D4\x03\x02\x02\x02\u011E\u06DB\x03\x02\x02\x02\u0120" +
		"\u0734\x03\x02\x02\x02\u0122\u0737\x03\x02\x02\x02\u0124\u073B\x03\x02" +
		"\x02\x02\u0126\u073D\x03\x02\x02\x02\u0128\u0741\x03\x02\x02\x02\u012A" +
		"\u0747\x03\x02\x02\x02\u012C\u0786\x03\x02\x02\x02\u012E\u0789\x03\x02" +
		"\x02\x02\u0130\u0791\x03\x02\x02\x02\u0132\u07AD\x03\x02\x02\x02\u0134" +
		"\u07B5\x03\x02\x02\x02\u0136\u07BA\x03\x02\x02\x02\u0138\u07BC\x03\x02" +
		"\x02\x02\u013A\u07C1\x03\x02\x02\x02\u013C\u07C9\x03\x02\x02\x02\u013E" +
		"\u07CB\x03\x02\x02\x02\u0140\u0141\x07-\x02\x02\u0141\u0142\x05\u013C" +
		"\x9F\x02\u0142\u0143\x07\x1D\x02\x02\u0143\u0144\x05\u013C\x9F\x02\u0144" +
		"\u0145\x07\xD1\x02\x02\u0145\u014A\x05\x06\x04\x02\u0146\u0147\x07\xD8" +
		"\x02\x02\u0147\u0149\x05\x06\x04\x02\u0148\u0146\x03\x02\x02\x02\u0149" +
		"\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D" +
		"\u014E\x07\xD2\x02\x02\u014E\u014F\x05R*\x02\u014F\u0150\x07\x02\x02\x03" +
		"\u0150\x03\x03\x02\x02\x02\u0151\u0152\x07-\x02\x02\u0152\u0153\x05\u013C" +
		"\x9F\x02\u0153\u0154\x07\x1D\x02\x02\u0154\u0155\x05\u013C\x9F\x02\u0155" +
		"\u0156\x07\xD1\x02\x02\u0156\u015B\x05\x06\x04\x02\u0157\u0158\x07\xD8" +
		"\x02\x02\u0158\u015A\x05\x06\x04\x02\u0159\u0157\x03\x02\x02\x02\u015A" +
		"\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02" +
		"\x02\x02\u015C\u015E\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E" +
		"\u015F\x07\xD2\x02\x02\u015F\u0160\x05\b\x05\x02\u0160\u0161\x07\x02\x02" +
		"\x03\u0161\x05\x03\x02\x02\x02\u0162\u0163\t\x02\x02\x02\u0163\u0164\t" +
		"\x03\x02\x02\u0164\x07\x03\x02\x02\x02\u0165\u0169\x07\xD3\x02\x02\u0166" +
		"\u0168\x05\n\x06\x02\u0167\u0166\x03\x02\x02\x02\u0168\u016B\x03\x02\x02" +
		"\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016C" +
		"\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u016D\x07\xD4\x02\x02" +
		"\u016D\t\x03\x02\x02\x02\u016E\u0170\x05 \x11\x02\u016F\u016E\x03\x02" +
		"\x02\x02\u0170\u0173\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0171" +
		"\u0172\x03\x02\x02\x02\u0172\u0174\x03\x02\x02\x02\u0173\u0171\x03\x02" +
		"\x02\x02\u0174\u0177\x05$\x13\x02\u0175\u0177\x05X-\x02\u0176\u0171\x03" +
		"\x02\x02\x02\u0176\u0175\x03\x02\x02\x02\u0177\v\x03\x02\x02\x02\u0178" +
		"\u0179\x05\x0E\b\x02\u0179\u017A\x07\x02\x02\x03\u017A\r\x03\x02\x02\x02" +
		"\u017B\u017D\x05 \x11\x02\u017C\u017B\x03\x02\x02\x02\u017D\u0180\x03" +
		"\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F" +
		"\u0181\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0191\x05\x10" +
		"\t\x02\u0182\u0184\x05 \x11\x02\u0183\u0182\x03\x02\x02\x02\u0184\u0187" +
		"\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02" +
		"\u0186\u0188\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0191\x05" +
		"\x12\n\x02\u0189\u018B\x05 \x11\x02\u018A\u0189\x03\x02\x02\x02\u018B" +
		"\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02" +
		"\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
		"\u0191\x05\x16\f\x02\u0190\u017E\x03\x02\x02\x02\u0190\u0185\x03\x02\x02" +
		"\x02\u0190\u018C\x03\x02\x02\x02\u0191\x0F\x03\x02\x02\x02\u0192\u0193" +
		"\x07\b\x02\x02\u0193\u0196\x05\u013C\x9F\x02\u0194\u0195\x07\x0E\x02\x02" +
		"\u0195\u0197\x056\x1C\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0197\x03" +
		"\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0199\x07\x15\x02\x02\u0199" +
		"\u019B\x05\x18\r\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02" +
		"\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x05\x1A\x0E\x02\u019D\x11" +
		"\x03\x02\x02\x02\u019E\u019F\x07\r\x02\x02\u019F\u01A0\x05\u013C\x9F\x02" +
		"\u01A0\u01A2\x07\xD3\x02\x02\u01A1\u01A3\x05\x14\v\x02\u01A2\u01A1\x03" +
		"\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4" +
		"\u01A5\x07\xD4\x02\x02\u01A5\x13\x03\x02\x02\x02\u01A6\u01AB\x05\u013C" +
		"\x9F\x02\u01A7\u01A8\x07\xD8\x02\x02\u01A8\u01AA\x05\u013C\x9F\x02\u01A9" +
		"\u01A7\x03\x02\x02\x02\u01AA\u01AD\x03\x02\x02\x02\u01AB\u01A9\x03\x02" +
		"\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\x15\x03\x02\x02\x02\u01AD\u01AB" +
		"\x03\x02\x02\x02\u01AE\u01AF\x07\x19\x02\x02\u01AF\u01B2\x05\u013C\x9F" +
		"\x02\u01B0\u01B1\x07\x0E\x02\x02\u01B1\u01B3\x05\x18\r\x02\u01B2\u01B0" +
		"\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02" +
		"\u01B4\u01B5\x05\x1C\x0F\x02\u01B5\x17\x03\x02\x02\x02\u01B6\u01BB\x05" +
		"6\x1C\x02\u01B7\u01B8\x07\xD8\x02\x02\u01B8\u01BA\x056\x1C\x02\u01B9\u01B7" +
		"\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02" +
		"\u01BB\u01BC\x03\x02\x02\x02\u01BC\x19\x03\x02\x02\x02\u01BD\u01BB\x03" +
		"\x02\x02\x02\u01BE\u01C2\x07\xD3\x02\x02\u01BF\u01C1\x05\x1E\x10\x02\u01C0" +
		"\u01BF\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02" +
		"\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4" +
		"\u01C2\x03\x02\x02\x02\u01C5\u01C6\x07\xD4\x02\x02\u01C6\x1B\x03\x02\x02" +
		"\x02\u01C7\u01CB\x07\xD3\x02\x02\u01C8\u01CA\x05.\x18\x02\u01C9\u01C8" +
		"\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02" +
		"\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01CB\x03" +
		"\x02\x02\x02\u01CE\u01CF\x07\xD4\x02\x02\u01CF\x1D\x03\x02\x02\x02\u01D0" +
		"\u01DD\x07\xD7\x02\x02\u01D1\u01D3\x07&\x02\x02\u01D2\u01D1\x03\x02\x02" +
		"\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01DD" +
		"\x05R*\x02\u01D5\u01D7\x05 \x11\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7" +
		"\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02" +
		"\x02\x02\u01D9\u01DB\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB" +
		"\u01DD\x05\"\x12\x02\u01DC\u01D0\x03\x02\x02\x02\u01DC\u01D2\x03\x02\x02" +
		"\x02\u01DC\u01D8\x03\x02\x02\x02\u01DD\x1F\x03\x02\x02\x02\u01DE\u01F2" +
		"\x05H%\x02\u01DF\u01F2\x07\x13\x02\x02\u01E0\u01F2\x07!\x02\x02\u01E1" +
		"\u01F2\x07 \x02\x02\u01E2\u01F2\x07\x1F\x02\x02\u01E3\u01F2\x07,\x02\x02" +
		"\u01E4\u01F2\x07&\x02\x02\u01E5\u01F2\x07\x03\x02\x02\u01E6\u01F2\x07" +
		"\x0F\x02\x02\u01E7\u01F2\x074\x02\x02\u01E8\u01F2\x07\x1E\x02\x02\u01E9" +
		"\u01F2\x072\x02\x02\u01EA\u01F2\x07)\x02\x02\u01EB\u01EC\x077\x02\x02" +
		"\u01EC\u01F2\x07%\x02\x02\u01ED\u01EE\x078\x02\x02\u01EE\u01F2\x07%\x02" +
		"\x02\u01EF\u01F0\x07\x16\x02\x02\u01F0\u01F2\x07%\x02\x02\u01F1\u01DE" +
		"\x03\x02\x02\x02\u01F1\u01DF\x03\x02\x02\x02\u01F1\u01E0\x03\x02\x02\x02" +
		"\u01F1\u01E1\x03\x02\x02\x02\u01F1\u01E2\x03\x02\x02\x02\u01F1\u01E3\x03" +
		"\x02\x02\x02\u01F1\u01E4\x03\x02\x02\x02\u01F1\u01E5\x03\x02\x02\x02\u01F1" +
		"\u01E6\x03\x02\x02\x02\u01F1\u01E7\x03\x02\x02\x02\u01F1\u01E8\x03\x02" +
		"\x02\x02\u01F1\u01E9\x03\x02\x02\x02\u01F1\u01EA\x03\x02\x02\x02\u01F1" +
		"\u01EB\x03\x02\x02\x02\u01F1\u01ED\x03\x02\x02\x02\u01F1\u01EF\x03\x02" +
		"\x02\x02\u01F2!\x03\x02\x02\x02\u01F3\u01FB\x05&\x14\x02\u01F4\u01FB\x05" +
		"*\x16\x02\u01F5\u01FB\x05(\x15\x02\u01F6\u01FB\x05\x16\f\x02\u01F7\u01FB" +
		"\x05\x10\t\x02\u01F8\u01FB\x05\x12\n\x02\u01F9\u01FB\x05,\x17\x02\u01FA" +
		"\u01F3\x03\x02\x02\x02\u01FA\u01F4\x03\x02\x02\x02\u01FA\u01F5\x03\x02" +
		"\x02\x02\u01FA\u01F6\x03\x02\x02\x02\u01FA\u01F7\x03\x02\x02\x02\u01FA" +
		"\u01F8\x03\x02\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB#\x03\x02\x02" +
		"\x02\u01FC\u0203\x05&\x14\x02\u01FD\u0203\x05*\x16\x02\u01FE\u0203\x05" +
		"\x16\f\x02\u01FF\u0203\x05\x10\t\x02\u0200\u0203\x05\x12\n\x02\u0201\u0203" +
		"\x05,\x17\x02\u0202\u01FC\x03\x02\x02\x02\u0202\u01FD\x03\x02\x02\x02" +
		"\u0202\u01FE\x03\x02\x02\x02\u0202\u01FF\x03\x02\x02\x02\u0202\u0200\x03" +
		"\x02\x02\x02\u0202\u0201\x03\x02\x02\x02\u0203%\x03\x02\x02\x02\u0204" +
		"\u0207\x056\x1C\x02\u0205\u0207\x073\x02\x02\u0206\u0204\x03\x02\x02\x02" +
		"\u0206\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x05" +
		"\u013C\x9F\x02\u0209\u020C\x05> \x02\u020A\u020D\x05R*\x02\u020B\u020D" +
		"\x07\xD7\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02" +
		"\u020D\'\x03\x02\x02\x02\u020E\u020F\x05D#\x02\u020F\u0210\x05> \x02\u0210" +
		"\u0211\x05R*\x02\u0211)\x03\x02\x02\x02\u0212\u0213\x056\x1C\x02\u0213" +
		"\u0214\x050\x19\x02\u0214\u0215\x07\xD7\x02\x02\u0215+\x03\x02\x02\x02" +
		"\u0216\u0217\x056\x1C\x02\u0217\u0218\x05\u013C\x9F\x02\u0218\u021C\x07" +
		"\xD3\x02\x02\u0219\u021B\x05\x86D\x02\u021A\u0219\x03\x02\x02\x02\u021B" +
		"\u021E\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02" +
		"\x02\x02\u021D\u021F\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021F" +
		"\u0220\x07\xD4\x02\x02\u0220-\x03\x02\x02\x02\u0221\u0223\x05 \x11\x02" +
		"\u0222\u0221\x03\x02\x02\x02\u0223\u0226\x03\x02\x02\x02\u0224\u0222\x03" +
		"\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0229\x03\x02\x02\x02\u0226" +
		"\u0224\x03\x02\x02\x02\u0227\u022A\x056\x1C\x02\u0228\u022A\x073\x02\x02" +
		"\u0229\u0227\x03\x02\x02\x02\u0229\u0228\x03\x02\x02\x02\u022A\u022B\x03" +
		"\x02\x02\x02\u022B\u022C\x05\u013C\x9F\x02\u022C\u022D\x05> \x02\u022D" +
		"\u022E\x07\xD7\x02\x02\u022E/\x03\x02\x02\x02\u022F\u0234\x052\x1A\x02" +
		"\u0230\u0231\x07\xD8\x02\x02\u0231\u0233\x052\x1A\x02\u0232\u0230\x03" +
		"\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02\u0234" +
		"\u0235\x03\x02\x02\x02\u02351\x03\x02\x02\x02\u0236\u0234\x03\x02\x02" +
		"\x02\u0237\u023A\x05\u013C\x9F\x02\u0238\u0239\x07\xDA\x02\x02\u0239\u023B" +
		"\x05\x9CO\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02" +
		"\u023B3\x03\x02\x02\x02\u023C\u0248\x07\xD3\x02\x02\u023D\u0242\x05\x9C" +
		"O\x02\u023E\u023F\x07\xD8\x02\x02\u023F\u0241\x05\x9CO\x02\u0240\u023E" +
		"\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02" +
		"\u0242\u0243\x03\x02\x02\x02\u0243\u0246\x03\x02\x02\x02\u0244\u0242\x03" +
		"\x02\x02\x02\u0245\u0247\x07\xD8\x02\x02\u0246\u0245\x03\x02\x02\x02\u0246" +
		"\u0247\x03\x02\x02\x02\u0247\u0249\x03\x02\x02\x02\u0248\u023D\x03\x02" +
		"\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A" +
		"\u024B\x07\xD4\x02\x02\u024B5\x03\x02\x02\x02\u024C\u0251\x05:\x1E\x02" +
		"\u024D\u024E\x07\xD9\x02\x02\u024E\u0250\x05:\x1E\x02\u024F\u024D\x03" +
		"\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251" +
		"\u0252\x03\x02\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253\u0251\x03\x02" +
		"\x02\x02\u0254\u0255\x058\x1D\x02\u02557\x03\x02\x02\x02\u0256\u0257\x07" +
		"\xD5\x02\x02\u0257\u0259\x07\xD6\x02\x02\u0258\u0256\x03\x02\x02\x02\u0259" +
		"\u025C\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02\u025A\u025B\x03\x02" +
		"\x02\x02\u025B9\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025D\u025F" +
		"\x079\x02\x02\u025E\u0260\x05<\x1F\x02\u025F\u025E\x03\x02\x02\x02\u025F" +
		"\u0260\x03\x02\x02\x02\u0260\u026E\x03\x02\x02\x02\u0261\u0263\x07$\x02" +
		"\x02\u0262\u0264\x05<\x1F\x02\u0263\u0262\x03\x02\x02\x02\u0263\u0264" +
		"\x03\x02\x02\x02\u0264\u026E\x03\x02\x02\x02\u0265\u0267\x07:\x02\x02" +
		"\u0266\u0268\x05<\x1F\x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268\x03" +
		"\x02\x02\x02\u0268\u026E\x03\x02\x02\x02\u0269\u026B\x05\u013C\x9F\x02" +
		"\u026A\u026C\x05<\x1F\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03" +
		"\x02\x02\x02\u026C\u026E\x03\x02\x02\x02\u026D\u025D\x03\x02\x02\x02\u026D" +
		"\u0261\x03\x02\x02\x02\u026D\u0265\x03\x02\x02\x02\u026D\u0269\x03\x02" +
		"\x02\x02\u026E;\x03\x02\x02\x02\u026F\u0270\x07\xDC\x02\x02\u0270\u0271" +
		"\x05\x18\r\x02\u0271\u0272\x07\xDB\x02\x02\u0272=\x03\x02\x02\x02\u0273" +
		"\u0275\x07\xD1\x02\x02\u0274\u0276\x05@!\x02\u0275\u0274\x03\x02\x02\x02" +
		"\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x07" +
		"\xD2\x02\x02\u0278?\x03\x02\x02\x02\u0279\u027E\x05B\"\x02\u027A\u027B" +
		"\x07\xD8\x02\x02\u027B\u027D\x05B\"\x02\u027C\u027A\x03\x02\x02\x02\u027D" +
		"\u0280\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02" +
		"\x02\x02\u027FA\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0281\u0283" +
		"\x05 \x11\x02\u0282\u0281\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02" +
		"\u0284\u0282\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0287\x03" +
		"\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0287\u0288\x056\x1C\x02\u0288" +
		"\u0289\x05\u013C\x9F\x02\u0289C\x03\x02\x02\x02\u028A\u028F\x05\u013C" +
		"\x9F\x02\u028B\u028C\x07\xD9\x02\x02\u028C\u028E\x05\u013C\x9F\x02\u028D" +
		"\u028B\x03\x02\x02\x02\u028E\u0291\x03\x02\x02\x02\u028F\u028D\x03\x02" +
		"\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290E\x03\x02\x02\x02\u0291\u028F" +
		"\x03\x02\x02\x02\u0292\u0293\t\x04\x02\x02\u0293G\x03\x02\x02\x02\u0294" +
		"\u0295\x07\xFD\x02\x02\u0295\u029C\x05D#\x02\u0296\u0299\x07\xD1\x02\x02" +
		"\u0297\u029A\x05J&\x02\u0298\u029A\x05N(\x02\u0299\u0297\x03\x02\x02\x02" +
		"\u0299\u0298\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029B\x03" +
		"\x02\x02\x02\u029B\u029D\x07\xD2\x02\x02\u029C\u0296\x03\x02\x02\x02\u029C" +
		"\u029D\x03\x02\x02\x02\u029DI\x03\x02\x02\x02\u029E\u02A5\x05L\'\x02\u029F" +
		"\u02A1\x07\xD8\x02\x02\u02A0\u029F\x03\x02\x02\x02\u02A0\u02A1\x03\x02" +
		"\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A4\x05L\'\x02\u02A3\u02A0" +
		"\x03\x02\x02\x02\u02A4\u02A7\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02" +
		"\u02A5\u02A6\x03\x02\x02\x02\u02A6K\x03\x02\x02\x02\u02A7\u02A5\x03\x02" +
		"\x02\x02\u02A8\u02A9\x05\u013C\x9F\x02\u02A9\u02AA\x07\xDA\x02\x02\u02AA" +
		"\u02AB\x05N(\x02\u02ABM\x03\x02\x02\x02\u02AC\u02B0\x05\x9CO\x02\u02AD" +
		"\u02B0\x05H%\x02\u02AE\u02B0\x05P)\x02\u02AF\u02AC\x03\x02\x02\x02\u02AF" +
		"\u02AD\x03\x02\x02\x02\u02AF\u02AE\x03\x02\x02\x02\u02B0O\x03\x02\x02" +
		"\x02\u02B1\u02BA\x07\xD3\x02\x02\u02B2\u02B7\x05N(\x02\u02B3\u02B4\x07" +
		"\xD8\x02\x02\u02B4\u02B6\x05N(\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6\u02B9" +
		"\x03\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02" +
		"\u02B8\u02BB\x03\x02\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02BA\u02B2\x03" +
		"\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BD\x03\x02\x02\x02\u02BC" +
		"\u02BE\x07\xD8\x02\x02\u02BD\u02BC\x03\x02\x02\x02\u02BD\u02BE\x03\x02" +
		"\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0\x07\xD4\x02\x02\u02C0" +
		"Q\x03\x02\x02\x02\u02C1\u02C5\x07\xD3\x02\x02\u02C2\u02C4\x05X-\x02\u02C3" +
		"\u02C2\x03\x02\x02\x02\u02C4\u02C7\x03\x02\x02\x02\u02C5\u02C3\x03\x02" +
		"\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02C8\x03\x02\x02\x02\u02C7" +
		"\u02C5\x03\x02\x02\x02\u02C8\u02C9\x07\xD4\x02\x02\u02C9S\x03\x02\x02" +
		"\x02\u02CA\u02CB\x05V,\x02\u02CB\u02CC\x07\xD7\x02\x02\u02CCU\x03\x02" +
		"\x02\x02\u02CD\u02CF\x05 \x11\x02\u02CE\u02CD\x03\x02\x02\x02\u02CF\u02D2" +
		"\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02" +
		"\u02D1\u02D3\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D4\x05" +
		"6\x1C\x02\u02D4\u02D5\x050\x19\x02\u02D5W\x03\x02\x02\x02\u02D6\u02EB" +
		"\x05R*\x02\u02D7\u02EB\x05Z.\x02\u02D8\u02EB\x05\\/\x02\u02D9\u02EB\x05" +
		"d3\x02\u02DA\u02EB\x05f4\x02\u02DB\u02EB\x05h5\x02\u02DC\u02EB\x05j6\x02" +
		"\u02DD\u02EB\x05l7\x02\u02DE\u02EB\x05n8\x02\u02DF\u02EB\x05p9\x02\u02E0" +
		"\u02EB\x05r:\x02\u02E1\u02EB\x05v<\x02\u02E2\u02EB\x05x=\x02\u02E3\u02EB" +
		"\x05z>\x02\u02E4\u02EB\x05|?\x02\u02E5\u02EB\x05~@\x02\u02E6\u02EB\x05" +
		"\x80A\x02\u02E7\u02EB\x05\x82B\x02\u02E8\u02EB\x05T+\x02\u02E9\u02EB\x05" +
		"\x84C\x02\u02EA\u02D6\x03\x02\x02\x02\u02EA\u02D7\x03\x02\x02\x02\u02EA" +
		"\u02D8\x03\x02\x02\x02\u02EA\u02D9\x03\x02\x02\x02\u02EA\u02DA\x03\x02" +
		"\x02\x02\u02EA\u02DB\x03\x02\x02\x02\u02EA\u02DC\x03\x02\x02\x02\u02EA" +
		"\u02DD\x03\x02\x02\x02\u02EA\u02DE\x03\x02\x02\x02\u02EA\u02DF\x03\x02" +
		"\x02\x02\u02EA\u02E0\x03\x02\x02\x02\u02EA\u02E1\x03\x02\x02\x02\u02EA" +
		"\u02E2\x03\x02\x02\x02\u02EA\u02E3\x03\x02\x02\x02\u02EA\u02E4\x03\x02" +
		"\x02\x02\u02EA\u02E5\x03\x02\x02\x02\u02EA\u02E6\x03\x02\x02\x02\u02EA" +
		"\u02E7\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02E9\x03\x02" +
		"\x02\x02\u02EBY\x03\x02\x02\x02\u02EC\u02ED\x07\x14\x02\x02\u02ED\u02EE" +
		"\x05\x98M\x02\u02EE\u02F1\x05X-\x02\u02EF\u02F0\x07\f\x02\x02\u02F0\u02F2" +
		"\x05X-\x02\u02F1\u02EF\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2" +
		"[\x03\x02\x02\x02\u02F3\u02F4\x07(\x02\x02\u02F4\u02F5\x07\x1D\x02\x02" +
		"\u02F5\u02F6\x05\x9CO\x02\u02F6\u02F8\x07\xD3\x02\x02\u02F7\u02F9\x05" +
		"^0\x02\u02F8\u02F7\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02F8" +
		"\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02" +
		"\u02FC\u02FD\x07\xD4\x02\x02\u02FD]\x03\x02\x02\x02\u02FE\u02FF\x075\x02" +
		"\x02\u02FF\u0300\x05`1\x02\u0300\u0301\x05R*\x02\u0301_\x03\x02\x02\x02" +
		"\u0302\u030F\x07\f\x02\x02\u0303\u0308\x05b2\x02\u0304\u0305\x07\xD8\x02" +
		"\x02\u0305\u0307\x05b2\x02\u0306\u0304\x03\x02\x02\x02\u0307\u030A\x03" +
		"\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309" +
		"\u030F\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B\u030C\x05\u013C" +
		"\x9F\x02\u030C\u030D\x05\u013C\x9F\x02\u030D\u030F\x03\x02\x02\x02\u030E" +
		"\u0302\x03\x02\x02\x02\u030E\u0303\x03\x02\x02\x02\u030E\u030B\x03\x02" +
		"\x02\x02\u030Fa\x03\x02\x02\x02\u0310\u0312\x07\xEC\x02\x02\u0311\u0310" +
		"\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02" +
		"\u0313\u031D\x07\xCB\x02\x02\u0314\u031D\x07\xCC\x02\x02\u0315\u031D\x07" +
		"\xCF\x02\x02\u0316\u031D\x07\x1C\x02\x02\u0317\u031D\x05\u013C\x9F\x02" +
		"\u0318\u0319\x07\xD1\x02\x02\u0319\u031A\x05b2\x02\u031A\u031B\x07\xD2" +
		"\x02\x02\u031B\u031D\x03\x02\x02\x02\u031C\u0311\x03\x02\x02\x02\u031C" +
		"\u0314\x03\x02\x02\x02\u031C\u0315\x03\x02\x02\x02\u031C\u0316\x03\x02" +
		"\x02\x02\u031C\u0317\x03\x02\x02\x02\u031C\u0318\x03\x02\x02\x02\u031D" +
		"c\x03\x02\x02\x02\u031E\u031F\x07\x11\x02\x02\u031F\u0320\x07\xD1\x02" +
		"\x02\u0320\u0321\x05\x90I\x02\u0321\u0324\x07\xD2\x02\x02\u0322\u0325" +
		"\x05X-\x02\u0323\u0325\x07\xD7\x02\x02\u0324\u0322\x03\x02\x02\x02\u0324" +
		"\u0323\x03\x02\x02\x02\u0325e\x03\x02\x02\x02\u0326\u0327\x076\x02\x02" +
		"\u0327\u032A\x05\x98M\x02\u0328\u032B\x05X-\x02\u0329\u032B\x07\xD7\x02" +
		"\x02\u032A\u0328\x03\x02\x02\x02\u032A\u0329\x03\x02\x02\x02\u032Bg\x03" +
		"\x02\x02\x02\u032C\u032D\x07\v\x02\x02\u032D\u032E\x05X-\x02\u032E\u032F" +
		"\x076\x02\x02\u032F\u0330\x05\x98M\x02\u0330\u0331\x07\xD7\x02\x02\u0331" +
		"i\x03\x02\x02\x02\u0332\u0333\x07.\x02\x02\u0333\u033D\x05R*\x02\u0334" +
		"\u0336\x05\x8CG\x02\u0335\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02\x02" +
		"\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u033A" +
		"\x03\x02\x02\x02\u0339\u033B\x05\x8EH\x02\u033A\u0339\x03\x02\x02\x02" +
		"\u033A\u033B\x03\x02\x02\x02\u033B\u033E\x03\x02\x02\x02\u033C\u033E\x05" +
		"\x8EH\x02\u033D\u0335\x03\x02\x02\x02\u033D\u033C\x03\x02\x02\x02\u033E" +
		"k\x03\x02\x02\x02\u033F\u0341\x07\"\x02\x02\u0340\u0342\x05\x9CO\x02\u0341" +
		"\u0340\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x03\x02" +
		"\x02\x02\u0343\u0344\x07\xD7\x02\x02\u0344m\x03\x02\x02\x02\u0345\u0346" +
		"\x07+\x02\x02\u0346\u0347\x05\x9CO\x02\u0347\u0348\x07\xD7\x02\x02\u0348" +
		"o\x03\x02\x02\x02\u0349\u034A\x07\x06\x02\x02\u034A\u034B\x07\xD7\x02" +
		"\x02\u034Bq\x03\x02\x02\x02\u034C\u034D\x07\t\x02\x02\u034D\u034E\x07" +
		"\xD7\x02\x02\u034Es\x03\x02\x02\x02\u034F\u0350\x07I\x02\x02\u0350\u0351" +
		"\t\x05\x02\x02\u0351u\x03\x02\x02\x02\u0352\u0354\x07\x17\x02\x02\u0353" +
		"\u0355\x05t;\x02\u0354\u0353\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02" +
		"\u0355\u0356\x03\x02\x02\x02\u0356\u0357\x05\x9CO\x02\u0357\u0358\x07" +
		"\xD7\x02\x02\u0358w\x03\x02\x02\x02\u0359\u035B\x070\x02\x02\u035A\u035C" +
		"\x05t;\x02\u035B\u035A\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C" +
		"\u035D\x03\x02\x02\x02\u035D\u035E\x05\x9CO\x02\u035E\u035F\x07\xD7\x02" +
		"\x02\u035Fy\x03\x02\x02\x02\u0360\u0362\x07\n\x02\x02\u0361\u0363\x05" +
		"t;\x02\u0362\u0361\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0364" +
		"\x03\x02\x02\x02\u0364\u0365\x05\x9CO\x02\u0365\u0366\x07\xD7\x02\x02" +
		"\u0366{\x03\x02\x02\x02\u0367\u0369\x07/\x02\x02\u0368\u036A\x05t;\x02" +
		"\u0369\u0368\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036B\x03" +
		"\x02\x02\x02\u036B\u036C\x05\x9CO\x02\u036C\u036D\x07\xD7\x02\x02\u036D" +
		"}\x03\x02\x02\x02\u036E\u0370\x071\x02\x02\u036F\u0371\x05t;\x02\u0370" +
		"\u036F\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0372\x03\x02" +
		"\x02\x02\u0372\u0374\x05\x9CO\x02\u0373\u0375\x05D#\x02\u0374\u0373\x03" +
		"\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376" +
		"\u0377\x07\xD7\x02\x02\u0377\x7F\x03\x02\x02\x02\u0378\u037A\x07\x1A\x02" +
		"\x02\u0379\u037B\x05t;\x02\u037A\u0379\x03\x02\x02\x02\u037A\u037B\x03" +
		"\x02\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C\u037D\x05\x9CO\x02\u037D" +
		"\u037E\x05\x9CO\x02\u037E\u037F\x07\xD7\x02\x02\u037F\x81\x03\x02\x02" +
		"\x02\u0380\u0381\x07#\x02\x02\u0381\u0383\x07\xD1\x02\x02\u0382\u0384" +
		"\x05\x9AN\x02\u0383\u0382\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02" +
		"\u0384\u0385\x03\x02\x02\x02\u0385\u0386\x07\xD2\x02\x02\u0386\u0387\x05" +
		"R*\x02\u0387\x83\x03\x02\x02\x02\u0388\u0389\x05\x9CO\x02\u0389\u038A";
	private static readonly _serializedATNSegment2: string =
		"\x07\xD7\x02\x02\u038A\x85\x03\x02\x02\x02\u038B\u038D\x05 \x11\x02\u038C" +
		"\u038B\x03\x02\x02\x02\u038D\u0390\x03\x02\x02\x02\u038E\u038C\x03\x02" +
		"\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0393\x03\x02\x02\x02\u0390" +
		"\u038E\x03\x02\x02\x02\u0391\u0394\x05\x88E\x02\u0392\u0394\x05\x8AF\x02" +
		"\u0393\u0391\x03\x02\x02\x02\u0393\u0392\x03\x02\x02\x02\u0394\x87\x03" +
		"\x02\x02\x02\u0395\u0398\x07\x12\x02\x02\u0396\u0399\x07\xD7\x02\x02\u0397" +
		"\u0399\x05R*\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0397\x03\x02\x02\x02" +
		"\u0399\x89\x03\x02\x02\x02\u039A\u039D\x07$\x02\x02\u039B\u039E\x07\xD7" +
		"\x02\x02\u039C\u039E\x05R*\x02\u039D\u039B\x03\x02\x02\x02\u039D\u039C" +
		"\x03\x02\x02\x02\u039E\x8B\x03\x02\x02\x02\u039F\u03A0\x07\x07\x02\x02" +
		"\u03A0\u03A4\x07\xD1\x02\x02\u03A1\u03A3\x05 \x11\x02\u03A2\u03A1\x03" +
		"\x02\x02\x02\u03A3\u03A6\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A4" +
		"\u03A5\x03\x02\x02\x02\u03A5\u03A7\x03\x02\x02\x02\u03A6\u03A4\x03\x02" +
		"\x02\x02\u03A7\u03A8\x05D#\x02\u03A8\u03A9\x05\u013C\x9F\x02\u03A9\u03AA" +
		"\x07\xD2\x02\x02\u03AA\u03AB\x05R*\x02\u03AB\x8D\x03\x02\x02\x02\u03AC" +
		"\u03AD\x07\x10\x02\x02\u03AD\u03AE\x05R*\x02\u03AE\x8F\x03\x02\x02\x02" +
		"\u03AF\u03BC\x05\x94K\x02\u03B0\u03B2\x05\x92J\x02\u03B1\u03B0\x03\x02" +
		"\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3" +
		"\u03B5\x07\xD7\x02\x02\u03B4\u03B6\x05\x9CO\x02\u03B5\u03B4\x03\x02\x02" +
		"\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7\u03B9" +
		"\x07\xD7\x02\x02\u03B8\u03BA\x05\x96L\x02\u03B9\u03B8\x03\x02\x02\x02" +
		"\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BC\x03\x02\x02\x02\u03BB\u03AF\x03" +
		"\x02\x02\x02\u03BB\u03B1\x03\x02\x02\x02\u03BC\x91\x03\x02\x02\x02\u03BD" +
		"\u03C0\x05V,\x02\u03BE\u03C0\x05\x9AN\x02\u03BF\u03BD\x03\x02\x02\x02" +
		"\u03BF\u03BE\x03\x02\x02\x02\u03C0\x93\x03\x02\x02\x02\u03C1\u03C2\x05" +
		"6\x1C\x02\u03C2\u03C3\x05\u013C\x9F\x02\u03C3\u03C4\x07\xE1\x02\x02\u03C4" +
		"\u03C5\x05\x9CO\x02\u03C5\x95\x03\x02\x02\x02\u03C6\u03C7\x05\x9AN\x02" +
		"\u03C7\x97\x03\x02\x02\x02\u03C8\u03C9\x07\xD1\x02\x02\u03C9\u03CA\x05" +
		"\x9CO\x02\u03CA\u03CB\x07\xD2\x02\x02\u03CB\x99\x03\x02\x02\x02\u03CC" +
		"\u03D1\x05\x9CO\x02\u03CD\u03CE\x07\xD8\x02\x02\u03CE\u03D0\x05\x9CO\x02" +
		"\u03CF\u03CD\x03\x02\x02\x02\u03D0\u03D3\x03\x02\x02\x02\u03D1\u03CF\x03" +
		"\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\x9B\x03\x02\x02\x02\u03D3" +
		"\u03D1\x03\x02\x02\x02\u03D4\u03D5\bO\x01\x02\u03D5\u03E7\x05\x9EP\x02" +
		"\u03D6\u03E7\x05\xA0Q\x02\u03D7\u03D8\x07\x1B\x02\x02\u03D8\u03E7\x05" +
		"\xA4S\x02\u03D9\u03DA\x07\xD1\x02\x02\u03DA\u03DB\x056\x1C\x02\u03DB\u03DC" +
		"\x07\xD2\x02\x02\u03DC\u03DD\x05\x9CO\x14\u03DD\u03E7\x03\x02\x02\x02" +
		"\u03DE\u03DF\x07\xD1\x02\x02\u03DF\u03E0\x05\x9CO\x02\u03E0\u03E1\x07" +
		"\xD2\x02\x02\u03E1\u03E7\x03\x02\x02\x02\u03E2\u03E3\t\x06\x02\x02\u03E3" +
		"\u03E7\x05\x9CO\x11\u03E4\u03E5\t\x07\x02\x02\u03E5\u03E7\x05\x9CO\x10" +
		"\u03E6\u03D4\x03\x02\x02\x02\u03E6\u03D6\x03\x02\x02\x02\u03E6\u03D7\x03" +
		"\x02\x02\x02\u03E6\u03D9\x03\x02\x02\x02\u03E6\u03DE\x03\x02\x02\x02\u03E6" +
		"\u03E2\x03\x02\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E7\u042C\x03\x02" +
		"\x02\x02\u03E8\u03E9\f\x0F\x02\x02\u03E9\u03EA\t\b\x02\x02\u03EA\u042B" +
		"\x05\x9CO\x10\u03EB\u03EC\f\x0E\x02\x02\u03EC\u03ED\t\t\x02\x02\u03ED" +
		"\u042B\x05\x9CO\x0F\u03EE\u03F6\f\r\x02\x02\u03EF\u03F0\x07\xDC\x02\x02" +
		"\u03F0\u03F7\x07\xDC\x02\x02\u03F1\u03F2\x07\xDB\x02\x02\u03F2\u03F3\x07" +
		"\xDB\x02\x02\u03F3\u03F7\x07\xDB\x02\x02\u03F4\u03F5\x07\xDB\x02\x02\u03F5" +
		"\u03F7\x07\xDB\x02\x02\u03F6\u03EF\x03\x02\x02\x02\u03F6\u03F1\x03\x02" +
		"\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8" +
		"\u042B\x05\x9CO\x0E\u03F9\u03FA\f\f\x02\x02\u03FA\u03FC\t\n\x02\x02\u03FB" +
		"\u03FD\x07\xDA\x02\x02\u03FC\u03FB\x03\x02\x02\x02\u03FC\u03FD\x03\x02" +
		"\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\u042B\x05\x9CO\r\u03FF\u0400" +
		"\f\n\x02\x02\u0400\u0401\t\v\x02\x02\u0401\u042B\x05\x9CO\v\u0402\u0403" +
		"\f\t\x02\x02\u0403\u0404\x07\xEF\x02\x02\u0404\u042B\x05\x9CO\n\u0405" +
		"\u0406\f\b\x02\x02\u0406\u0407\x07\xF1\x02\x02\u0407\u042B\x05\x9CO\t" +
		"\u0408\u0409\f\x07\x02\x02\u0409\u040A\x07\xF0\x02\x02\u040A\u042B\x05" +
		"\x9CO\b\u040B\u040C\f\x06\x02\x02\u040C\u040D\x07\xE7\x02\x02\u040D\u042B" +
		"\x05\x9CO\x07\u040E\u040F\f\x05\x02\x02\u040F\u0410\x07\xE8\x02\x02\u0410" +
		"\u042B\x05\x9CO\x06\u0411\u0412\f\x04\x02\x02\u0412\u0413\x07\xE0\x02" +
		"\x02\u0413\u0414\x05\x9CO\x02\u0414\u0415\x07\xE1\x02\x02\u0415\u0416" +
		"\x05\x9CO\x04\u0416\u042B\x03\x02\x02\x02\u0417\u0418\f\x03\x02\x02\u0418" +
		"\u0419\t\f\x02\x02\u0419\u042B\x05\x9CO\x03\u041A\u041B\f\x18\x02\x02" +
		"\u041B\u041E\t\r\x02\x02\u041C\u041F\x05\xA2R\x02\u041D\u041F\x05\u013E" +
		"\xA0\x02\u041E\u041C\x03\x02\x02\x02\u041E\u041D\x03\x02\x02\x02\u041F" +
		"\u042B\x03\x02\x02\x02\u0420\u0421\f\x17\x02\x02\u0421\u0422\x07\xD5\x02" +
		"\x02\u0422\u0423\x05\x9CO\x02\u0423\u0424\x07\xD6\x02\x02\u0424\u042B" +
		"\x03\x02\x02\x02\u0425\u0426\f\x12\x02\x02\u0426\u042B\t\x0E\x02\x02\u0427" +
		"\u0428\f\v\x02\x02\u0428\u0429\x07\x18\x02\x02\u0429\u042B\x056\x1C\x02" +
		"\u042A\u03E8\x03\x02\x02\x02\u042A\u03EB\x03\x02\x02\x02\u042A\u03EE\x03" +
		"\x02\x02\x02\u042A\u03F9\x03\x02\x02\x02\u042A\u03FF\x03\x02\x02\x02\u042A" +
		"\u0402\x03\x02\x02\x02\u042A\u0405\x03\x02\x02\x02\u042A\u0408\x03\x02" +
		"\x02\x02\u042A\u040B\x03\x02\x02\x02\u042A\u040E\x03\x02\x02\x02\u042A" +
		"\u0411\x03\x02\x02\x02\u042A\u0417\x03\x02\x02\x02\u042A\u041A\x03\x02" +
		"\x02\x02\u042A\u0420\x03\x02\x02\x02\u042A\u0425\x03\x02\x02\x02\u042A" +
		"\u0427\x03\x02\x02\x02\u042B\u042E\x03\x02\x02\x02\u042C\u042A\x03\x02" +
		"\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\x9D\x03\x02\x02\x02\u042E\u042C" +
		"\x03\x02\x02\x02\u042F\u043D\x07*\x02\x02\u0430\u043D\x07\'\x02\x02\u0431" +
		"\u043D\x05F$\x02\u0432\u0433\x056\x1C\x02\u0433\u0434\x07\xD9\x02\x02" +
		"\u0434\u0435\x07\b\x02\x02\u0435\u043D\x03\x02\x02\x02\u0436\u0437\x07" +
		"3\x02\x02\u0437\u0438\x07\xD9\x02\x02\u0438\u043D\x07\b\x02\x02\u0439" +
		"\u043D\x05\u013C\x9F\x02\u043A\u043D\x05\xB8]\x02\u043B\u043D\x05\u0126" +
		"\x94\x02\u043C\u042F\x03\x02\x02\x02\u043C\u0430\x03\x02\x02\x02\u043C" +
		"\u0431\x03\x02\x02\x02\u043C\u0432\x03\x02\x02\x02\u043C\u0436\x03\x02" +
		"\x02\x02\u043C\u0439\x03\x02\x02\x02\u043C\u043A\x03\x02\x02\x02\u043C" +
		"\u043B\x03\x02\x02\x02\u043D\x9F\x03\x02\x02\x02\u043E\u043F\x05\u013C" +
		"\x9F\x02\u043F\u0441\x07\xD1\x02\x02\u0440\u0442\x05\x9AN\x02\u0441\u0440" +
		"\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442\u0443\x03\x02\x02\x02" +
		"\u0443\u0444\x07\xD2\x02\x02\u0444\u0452\x03\x02\x02\x02\u0445\u0446\x07" +
		"*\x02\x02\u0446\u0448\x07\xD1\x02\x02\u0447\u0449\x05\x9AN\x02\u0448\u0447" +
		"\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02" +
		"\u044A\u0452\x07\xD2\x02\x02\u044B\u044C\x07\'\x02\x02\u044C\u044E\x07" +
		"\xD1\x02\x02\u044D\u044F\x05\x9AN\x02\u044E\u044D\x03\x02\x02\x02\u044E" +
		"\u044F\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0452\x07\xD2" +
		"\x02\x02\u0451\u043E\x03\x02\x02\x02\u0451\u0445\x03\x02\x02\x02\u0451" +
		"\u044B\x03\x02\x02\x02\u0452\xA1\x03\x02\x02\x02\u0453\u0454\x05\u013E" +
		"\xA0\x02\u0454\u0456\x07\xD1\x02\x02\u0455\u0457\x05\x9AN\x02\u0456\u0455" +
		"\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02" +
		"\u0458\u0459\x07\xD2\x02\x02\u0459\xA3\x03\x02\x02\x02\u045A\u0460\x05" +
		"\xA6T\x02\u045B\u0461\x05\xAAV\x02\u045C\u0461\x05\xACW\x02\u045D\u0461" +
		"\x05\xAEX\x02\u045E\u0461\x05\xB0Y\x02\u045F\u0461\x05\xB4[\x02\u0460" +
		"\u045B\x03\x02\x02\x02\u0460\u045C\x03\x02\x02\x02\u0460\u045D\x03\x02" +
		"\x02\x02\u0460\u045E\x03\x02\x02\x02\u0460\u045F\x03\x02\x02\x02\u0461" +
		"\xA5\x03\x02\x02\x02\u0462\u0467\x05\xA8U\x02\u0463\u0464\x07\xD9\x02" +
		"\x02\u0464\u0466\x05\xA8U\x02\u0465\u0463\x03\x02\x02\x02\u0466\u0469" +
		"\x03\x02\x02\x02\u0467\u0465\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02" +
		"\u0468\xA7\x03\x02\x02\x02\u0469\u0467\x03\x02\x02\x02\u046A\u046F\x05" +
		"\u013E\xA0\x02\u046B\u046C\x07\xDC\x02\x02\u046C\u046D\x05\x18\r\x02\u046D" +
		"\u046E\x07\xDB\x02\x02\u046E\u0470\x03\x02\x02\x02\u046F\u046B\x03\x02" +
		"\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470\xA9\x03\x02\x02\x02\u0471\u0472" +
		"\x07\xD3\x02\x02\u0472\u0473\x07\xD4\x02\x02\u0473\xAB\x03\x02\x02\x02" +
		"\u0474\u0475\x05\xB6\\\x02\u0475\xAD\x03\x02\x02\x02\u0476\u0477\x07\xD5" +
		"\x02\x02\u0477\u0478\x05\x9CO\x02\u0478\u0479\x07\xD6\x02\x02\u0479\u0480" +
		"\x03\x02\x02\x02\u047A\u047B\x07\xD5\x02\x02\u047B\u047D\x07\xD6\x02\x02" +
		"\u047C\u047E\x054\x1B\x02\u047D\u047C\x03\x02\x02\x02\u047D\u047E\x03" +
		"\x02\x02\x02\u047E\u0480\x03\x02\x02\x02\u047F\u0476\x03\x02\x02\x02\u047F" +
		"\u047A\x03\x02\x02\x02\u0480\xAF\x03\x02\x02\x02\u0481\u0482\x07\xD3\x02" +
		"\x02\u0482\u0487\x05\xB2Z\x02\u0483\u0484\x07\xD8\x02\x02\u0484\u0486" +
		"\x05\xB2Z\x02\u0485\u0483\x03\x02\x02\x02\u0486\u0489\x03\x02\x02\x02" +
		"\u0487\u0485\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u048A\x03" +
		"\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u048A\u048B\x07\xD4\x02\x02\u048B" +
		"\xB1\x03\x02\x02\x02\u048C\u048D\x05\x9CO\x02\u048D\u048E\x07\xF2\x02" +
		"\x02\u048E\u048F\x05\x9CO\x02\u048F\xB3\x03\x02\x02\x02\u0490\u0491\x07" +
		"\xD3\x02\x02\u0491\u0496\x05\x9CO\x02\u0492\u0493\x07\xD8\x02\x02\u0493" +
		"\u0495\x05\x9CO\x02\u0494\u0492\x03\x02\x02\x02\u0495\u0498\x03\x02\x02" +
		"\x02\u0496\u0494\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0499" +
		"\x03\x02\x02\x02\u0498\u0496\x03\x02\x02\x02\u0499\u049A\x07\xD4\x02\x02" +
		"\u049A\xB5\x03\x02\x02\x02\u049B\u049D\x07\xD1\x02\x02\u049C\u049E\x05" +
		"\x9AN\x02\u049D\u049C\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E" +
		"\u049F\x03\x02\x02\x02\u049F\u04A0\x07\xD2\x02\x02\u04A0\xB7\x03\x02\x02" +
		"\x02\u04A1\u04A2\x07\xD5\x02\x02\u04A2\u04A3\x05\xBA^\x02\u04A3\u04A4" +
		"\x07\xD6\x02\x02\u04A4\xB9\x03\x02\x02\x02\u04A5\u04A7\x05\xBE`\x02\u04A6" +
		"\u04A8\x05\xCAf\x02\u04A7\u04A6\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02" +
		"\x02\u04A8\u04AA\x03\x02\x02\x02\u04A9\u04AB\x05\xC0a\x02\u04AA\u04A9" +
		"\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04AD\x03\x02\x02\x02" +
		"\u04AC\u04AE\x05\xD0i\x02\u04AD\u04AC\x03\x02\x02\x02\u04AD\u04AE\x03" +
		"\x02\x02\x02\u04AE\u04B0\x03\x02\x02\x02\u04AF\u04B1\x05\xF2z\x02\u04B0" +
		"\u04AF\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B3\x03\x02" +
		"\x02\x02\u04B2\u04B4\x05\xF4{\x02\u04B3\u04B2\x03\x02\x02\x02\u04B3\u04B4" +
		"\x03\x02\x02\x02\u04B4\u04B6\x03\x02\x02\x02\u04B5\u04B7\x05\u0106\x84" +
		"\x02\u04B6\u04B5\x03\x02\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\u04B9" +
		"\x03\x02\x02\x02\u04B8\u04BA\x05\u0110\x89\x02\u04B9\u04B8\x03\x02\x02" +
		"\x02\u04B9\u04BA\x03\x02\x02\x02\u04BA\u04BC\x03\x02\x02\x02\u04BB\u04BD" +
		"\x05\u0112\x8A\x02\u04BC\u04BB\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02" +
		"\x02\u04BD\u04BF\x03\x02\x02\x02\u04BE\u04C0\x05\u0118\x8D\x02\u04BF\u04BE" +
		"\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C2\x03\x02\x02\x02" +
		"\u04C1\u04C3\x05\u011A\x8E\x02\u04C2\u04C1\x03\x02\x02\x02\u04C2\u04C3" +
		"\x03\x02\x02\x02\u04C3\u04C5\x03\x02\x02\x02\u04C4\u04C6\x05\u011C\x8F" +
		"\x02\u04C5\u04C4\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C7" +
		"\x03\x02\x02\x02\u04C7\u04CA\x05\u011E\x90\x02\u04C8\u04C9\x070\x02\x02" +
		"\u04C9\u04CB\x05\u0134\x9B\x02\u04CA\u04C8\x03\x02\x02\x02\u04CA\u04CB" +
		"\x03\x02\x02\x02\u04CB\u04CD\x03\x02\x02\x02\u04CC\u04CE\x05\xBC_\x02" +
		"\u04CD\u04CC\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\xBB\x03" +
		"\x02\x02\x02\u04CF\u04D0\x07=\x02\x02\u04D0\xBD\x03\x02\x02\x02\u04D1" +
		"\u04D2\t\x0F\x02\x02\u04D2\xBF\x03\x02\x02\x02\u04D3\u04D4\t\x10\x02\x02" +
		"\u04D4\xC1\x03\x02\x02\x02\u04D5\u04D7\x05\xBE`\x02\u04D6\u04D8\x05\xD8" +
		"m\x02\u04D7\u04D6\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04DA" +
		"\x03\x02\x02\x02\u04D9\u04DB\x05\xC0a\x02\u04DA\u04D9\x03\x02\x02\x02" +
		"\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04DD\x03\x02\x02\x02\u04DC\u04DE\x05" +
		"\xD0i\x02\u04DD\u04DC\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE" +
		"\u04E0\x03\x02\x02\x02\u04DF\u04E1\x05\xF4{\x02\u04E0\u04DF\x03\x02\x02" +
		"\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1\u04E3\x03\x02\x02\x02\u04E2\u04E4" +
		"\x05\u0112\x8A\x02\u04E3\u04E2\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02" +
		"\x02\u04E4\u04E6\x03\x02\x02\x02\u04E5\u04E7\x05\u0118\x8D\x02\u04E6\u04E5" +
		"\x03\x02\x02\x02\u04E6\u04E7\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02" +
		"\u04E8\u04EB\x05\u011E\x90\x02\u04E9\u04EA\x070\x02\x02\u04EA\u04EC\x05" +
		"\u0134\x9B\x02\u04EB\u04E9\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02" +
		"\u04EC\xC3\x03\x02\x02\x02\u04ED\u04EF\x05\xC6d\x02\u04EE\u04F0\x05\xD6" +
		"l\x02\u04EF\u04EE\x03\x02\x02\x02\u04EF\u04F0\x03\x02\x02\x02\u04F0\u04F8" +
		"\x03\x02\x02\x02\u04F1\u04F2\x07\xD8\x02\x02\u04F2\u04F4\x05\xC6d\x02" +
		"\u04F3\u04F5\x05\xD6l\x02\u04F4\u04F3\x03\x02\x02\x02\u04F4\u04F5\x03" +
		"\x02\x02\x02\u04F5\u04F7\x03\x02\x02\x02\u04F6\u04F1\x03\x02\x02\x02\u04F7" +
		"\u04FA\x03\x02\x02\x02\u04F8\u04F6\x03\x02\x02\x02\u04F8\u04F9\x03\x02" +
		"\x02\x02\u04F9\xC5\x03\x02\x02\x02\u04FA\u04F8\x03\x02\x02\x02\u04FB\u0500" +
		"\x05\xC8e\x02\u04FC\u04FD\x07\xD9\x02\x02\u04FD\u04FF\x05\xC8e\x02\u04FE" +
		"\u04FC\x03\x02\x02\x02\u04FF\u0502\x03\x02\x02\x02\u0500\u04FE\x03\x02" +
		"\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\xC7\x03\x02\x02\x02\u0502\u0500" +
		"\x03\x02\x02\x02\u0503\u0504\t\x11\x02\x02\u0504\xC9\x03\x02\x02\x02\u0505" +
		"\u050C\x05\xCCg\x02\u0506\u0508\x07\xD8\x02\x02\u0507\u0509\x05\xCCg\x02" +
		"\u0508\u0507\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050B\x03" +
		"\x02\x02\x02\u050A\u0506\x03\x02\x02\x02\u050B\u050E\x03\x02\x02\x02\u050C" +
		"\u050A\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\xCB\x03\x02\x02" +
		"\x02\u050E\u050C\x03\x02\x02\x02\u050F\u0511\x05\xCEh\x02\u0510\u0512" +
		"\x07=\x02\x02\u0511\u0510\x03\x02\x02\x02\u0511\u0512\x03\x02\x02\x02" +
		"\u0512\u0518\x03\x02\x02\x02\u0513\u0514\x07\xD1\x02\x02\u0514\u0515\x05" +
		"\xC2b\x02\u0515\u0516\x07\xD2\x02\x02\u0516\u0518\x03\x02\x02\x02\u0517" +
		"\u050F\x03\x02\x02\x02\u0517\u0513\x03\x02\x02\x02\u0518\xCD\x03\x02\x02" +
		"\x02\u0519\u051E\x05\u0124\x93\x02\u051A\u051B\x07\xD9\x02\x02\u051B\u051D" +
		"\x05\u0124\x93\x02\u051C\u051A\x03\x02\x02\x02\u051D\u0520\x03\x02\x02" +
		"\x02\u051E\u051C\x03\x02\x02\x02\u051E\u051F\x03\x02\x02\x02\u051F\xCF" +
		"\x03\x02\x02\x02\u0520\u051E\x03\x02\x02\x02\u0521\u0523\x05\xD2j\x02" +
		"\u0522\u0524\x05\xD6l\x02\u0523\u0522\x03\x02\x02\x02\u0523\u0524\x03" +
		"\x02\x02\x02\u0524\u052C\x03\x02\x02\x02\u0525\u0526\x07\xD8\x02\x02\u0526" +
		"\u0528\x05\xD2j\x02\u0527\u0529\x05\xD6l\x02\u0528\u0527\x03\x02\x02\x02" +
		"\u0528\u0529\x03\x02\x02\x02\u0529\u052B\x03\x02\x02\x02\u052A\u0525\x03" +
		"\x02\x02\x02\u052B\u052E\x03\x02\x02\x02\u052C\u052A\x03\x02\x02\x02\u052C" +
		"\u052D\x03\x02\x02\x02\u052D\xD1\x03\x02\x02\x02\u052E\u052C\x03\x02\x02" +
		"\x02\u052F\u0530\x05\xD4k\x02\u0530\xD3\x03\x02\x02\x02\u0531\u0532\t" +
		"\x12\x02\x02\u0532\xD5\x03\x02\x02\x02\u0533\u0534\t\x13\x02\x02\u0534" +
		"\xD7\x03\x02\x02\x02\u0535\u053A\x05\xDAn\x02\u0536\u0537\x07\xD8\x02" +
		"\x02\u0537\u0539\x05\xDAn\x02\u0538\u0536\x03\x02\x02\x02\u0539\u053C" +
		"\x03\x02\x02\x02\u053A\u0538\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02" +
		"\u053B\xD9\x03\x02\x02\x02\u053C\u053A\x03\x02\x02\x02\u053D\u053F\x05" +
		"\xDCo\x02\u053E\u0540\x07=\x02\x02\u053F\u053E\x03\x02\x02\x02\u053F\u0540" +
		"\x03\x02\x02\x02\u0540\u0547\x03\x02\x02\x02\u0541\u0543\x05\xE2r\x02" +
		"\u0542\u0544\x05\u0124\x93\x02\u0543\u0542\x03\x02\x02\x02\u0543\u0544" +
		"\x03\x02\x02\x02\u0544\u0547\x03\x02\x02\x02\u0545\u0547\x05\xEAv\x02" +
		"\u0546\u053D\x03\x02\x02\x02\u0546\u0541\x03\x02\x02\x02\u0546\u0545\x03" +
		"\x02\x02\x02\u0547\xDB\x03\x02\x02\x02\u0548\u054D\x05\xDEp\x02\u0549" +
		"\u054A\x07\xD9\x02\x02\u054A\u054C\x05\xDEp\x02\u054B\u0549\x03\x02\x02" +
		"\x02\u054C\u054F\x03\x02\x02\x02\u054D\u054B\x03\x02\x02\x02\u054D\u054E" +
		"\x03\x02\x02\x02\u054E\xDD\x03\x02\x02\x02\u054F\u054D\x03\x02\x02\x02" +
		"\u0550\u0551\t\x11\x02\x02\u0551\xDF\x03\x02\x02\x02\u0552\u0553\t\x14" +
		"\x02\x02\u0553\xE1\x03\x02\x02\x02\u0554\u0555\x07S\x02\x02\u0555\u0556" +
		"\x07\xD1\x02\x02\u0556\u0557\x05\xCEh\x02\u0557\u0558\x07\xD2\x02\x02" +
		"\u0558\u05CF\x03\x02\x02\x02\u0559\u055A\x07G\x02\x02\u055A\u055B\x07" +
		"\xD1\x02\x02\u055B\u05CF\x07\xD2\x02\x02\u055C\u055D\x07G\x02\x02\u055D" +
		"\u055E\x07\xD1\x02\x02\u055E\u055F\x05\xCEh\x02\u055F\u0560\x07\xD2\x02" +
		"\x02\u0560\u05CF\x03\x02\x02\x02\u0561\u0562\x07T\x02\x02\u0562\u0563" +
		"\x07\xD1\x02\x02\u0563\u0564\x05\xCEh\x02\u0564\u0565\x07\xD2\x02\x02" +
		"\u0565\u05CF\x03\x02\x02\x02\u0566\u0567\x07U\x02\x02\u0567\u0568\x07" +
		"\xD1\x02\x02\u0568\u0569\x05\xCEh\x02\u0569\u056A\x07\xD2\x02\x02\u056A" +
		"\u05CF\x03\x02\x02\x02\u056B\u056C\x07V\x02\x02\u056C\u056D\x07\xD1\x02" +
		"\x02\u056D\u056E\x05\xCEh\x02\u056E\u056F\x07\xD2\x02\x02\u056F\u05CF" +
		"\x03\x02\x02\x02\u0570\u0571\x07W\x02\x02\u0571\u0572\x07\xD1\x02\x02" +
		"\u0572\u0573\x05\xCEh\x02\u0573\u0574\x07\xD2\x02\x02\u0574\u05CF\x03" +
		"\x02\x02\x02\u0575\u0576\x07j\x02\x02\u0576\u0577\x07\xD1\x02\x02\u0577" +
		"\u0578\x05\xCEh\x02\u0578\u0579\x07\xD2\x02\x02\u0579\u05CF\x03\x02\x02" +
		"\x02\u057A\u057B\x07w\x02\x02\u057B\u057C\x07\xD1\x02\x02\u057C\u057D" +
		"\x05\xCEh\x02\u057D\u057E\x07\xD2\x02\x02\u057E\u05CF\x03\x02\x02\x02" +
		"\u057F\u0580\x07~\x02\x02\u0580\u0581\x07\xD1\x02\x02\u0581\u0582\x05" +
		"\xE4s\x02\u0582\u0583\x07\xD2\x02\x02\u0583\u05CF\x03\x02\x02\x02\u0584" +
		"\u0585\x07\x7F\x02\x02\u0585\u0586\x07\xD1\x02\x02\u0586\u0587\x05\xE4" +
		"s\x02\u0587\u0588\x07\xD2\x02\x02\u0588\u05CF\x03\x02\x02\x02\u0589\u058A" +
		"\x07\x80\x02\x02\u058A\u058B\x07\xD1\x02\x02\u058B\u058C\x05\xE4s\x02" +
		"\u058C\u058D\x07\xD2\x02\x02\u058D\u05CF\x03\x02\x02\x02\u058E\u058F\x07" +
		"\x81\x02\x02\u058F\u0590\x07\xD1\x02\x02\u0590\u0591\x05\xE4s\x02\u0591" +
		"\u0592\x07\xD2\x02\x02\u0592\u05CF\x03\x02\x02\x02\u0593\u0594\x07\x82" +
		"\x02\x02\u0594\u0595\x07\xD1\x02\x02\u0595\u0596\x05\xE4s\x02\u0596\u0597" +
		"\x07\xD2\x02\x02\u0597\u05CF\x03\x02\x02\x02\u0598\u0599\x07\x83\x02\x02" +
		"\u0599\u059A\x07\xD1\x02\x02\u059A\u059B\x05\xE4s\x02\u059B\u059C\x07" +
		"\xD2\x02\x02\u059C\u05CF\x03\x02\x02\x02\u059D\u059E\x07\x84\x02\x02\u059E" +
		"\u059F\x07\xD1\x02\x02\u059F\u05A0\x05\xE4s\x02\u05A0\u05A1\x07\xD2\x02" +
		"\x02\u05A1\u05CF\x03\x02\x02\x02\u05A2\u05A3\x07\x85\x02\x02\u05A3\u05A4" +
		"\x07\xD1\x02\x02\u05A4\u05A5\x05\xE4s\x02\u05A5\u05A6\x07\xD2\x02\x02" +
		"\u05A6\u05CF\x03\x02\x02\x02\u05A7\u05A8\x07\x86\x02\x02\u05A8\u05A9\x07" +
		"\xD1\x02\x02\u05A9\u05AA\x05\xE4s\x02\u05AA\u05AB\x07\xD2\x02\x02\u05AB" +
		"\u05CF\x03\x02\x02\x02\u05AC\u05AD\x07\x87\x02\x02\u05AD\u05AE\x07\xD1" +
		"\x02\x02\u05AE\u05AF\x05\xE4s\x02\u05AF\u05B0\x07\xD2\x02\x02\u05B0\u05CF" +
		"\x03\x02\x02\x02\u05B1\u05B2\x07\x88\x02\x02\u05B2\u05B3\x07\xD1\x02\x02" +
		"\u05B3\u05B4\x05\xE4s\x02\u05B4\u05B5\x07\xD2\x02\x02\u05B5\u05CF\x03" +
		"\x02\x02\x02\u05B6\u05B7\x07\x89\x02\x02\u05B7\u05B8\x07\xD1\x02\x02\u05B8" +
		"\u05B9\x05\xE4s\x02\u05B9\u05BA\x07\xD2\x02\x02\u05BA\u05CF\x03\x02\x02" +
		"\x02\u05BB\u05BC\x07\x8A\x02\x02\u05BC\u05BD\x07\xD1\x02\x02\u05BD\u05BE" +
		"\x05\xE4s\x02\u05BE\u05BF\x07\xD2\x02\x02\u05BF\u05CF\x03\x02\x02\x02" +
		"\u05C0\u05C1\x07\xC0\x02\x02\u05C1\u05C2\x07\xD1\x02\x02\u05C2\u05C3\x05" +
		"\xE0q\x02\u05C3\u05C4\x07\xD2\x02\x02\u05C4\u05CF\x03\x02\x02\x02\u05C5" +
		"\u05C6\x07|\x02\x02\u05C6\u05C7\x07\xD1\x02\x02\u05C7\u05C8\x05\xE6t\x02" +
		"\u05C8\u05C9\x07\xD8\x02\x02\u05C9\u05CA\x05\xE6t\x02\u05CA\u05CB\x07" +
		"\xD8\x02\x02\u05CB\u05CC\x07\xCF\x02\x02\u05CC\u05CD\x07\xD2\x02\x02\u05CD" +
		"\u05CF\x03\x02\x02\x02\u05CE\u0554\x03\x02\x02\x02\u05CE\u0559\x03\x02" +
		"\x02\x02\u05CE\u055C\x03\x02\x02\x02\u05CE\u0561\x03\x02\x02\x02\u05CE" +
		"\u0566\x03\x02\x02\x02\u05CE\u056B\x03\x02\x02\x02\u05CE\u0570\x03\x02" +
		"\x02\x02\u05CE\u0575\x03\x02\x02\x02\u05CE\u057A\x03\x02\x02\x02\u05CE" +
		"\u057F\x03\x02\x02\x02\u05CE\u0584\x03\x02\x02\x02\u05CE\u0589\x03\x02" +
		"\x02\x02\u05CE\u058E\x03\x02\x02\x02\u05CE\u0593\x03\x02\x02\x02\u05CE" +
		"\u0598\x03\x02\x02\x02\u05CE\u059D\x03\x02\x02\x02\u05CE\u05A2\x03\x02" +
		"\x02\x02\u05CE\u05A7\x03\x02\x02\x02\u05CE\u05AC\x03\x02\x02\x02\u05CE" +
		"\u05B1\x03\x02\x02\x02\u05CE\u05B6\x03\x02\x02\x02\u05CE\u05BB\x03\x02" +
		"\x02\x02\u05CE\u05C0\x03\x02\x02\x02\u05CE\u05C5\x03\x02\x02\x02\u05CF" +
		"\xE3\x03\x02\x02\x02\u05D0\u05D1\x07\x8B\x02\x02\u05D1\u05D2\x07\xD1\x02" +
		"\x02\u05D2\u05D3\x05\xCEh\x02\u05D3\u05D4\x07\xD2\x02\x02\u05D4\u05D7" +
		"\x03\x02\x02\x02\u05D5\u05D7\x05\xCEh\x02\u05D6\u05D0\x03\x02\x02\x02" +
		"\u05D6\u05D5\x03\x02\x02\x02\u05D7\xE5\x03\x02\x02\x02\u05D8\u05E1\x05" +
		"\xCEh\x02\u05D9\u05DA\x07}\x02\x02\u05DA\u05DB\x07\xD1\x02\x02\u05DB\u05DC" +
		"\x05\xE8u\x02\u05DC\u05DD\x07\xD8\x02\x02\u05DD\u05DE\x05\xE8u\x02\u05DE" +
		"\u05DF\x07\xD2\x02\x02\u05DF\u05E1\x03\x02\x02\x02\u05E0\u05D8\x03\x02" +
		"\x02\x02\u05E0\u05D9\x03\x02\x02\x02\u05E1\xE7\x03\x02\x02\x02\u05E2\u05E3" +
		"\x05\u0104\x83\x02\u05E3\xE9\x03\x02\x02\x02\u05E4\u05E5\x07X\x02\x02" +
		"\u05E5\u05E7\x05\xCEh\x02\u05E6\u05E8\x05\xECw\x02\u05E7\u05E6\x03\x02" +
		"\x02\x02\u05E8\u05E9\x03\x02\x02\x02\u05E9\u05E7\x03\x02\x02\x02\u05E9" +
		"\u05EA\x03\x02\x02\x02\u05EA\u05EC\x03\x02\x02\x02\u05EB\u05ED\x05\xEE" +
		"x\x02\u05EC\u05EB\x03\x02\x02\x02\u05EC\u05ED\x03\x02\x02\x02\u05ED\u05EE" +
		"\x03\x02\x02\x02\u05EE\u05EF\x07Y\x02\x02\u05EF\xEB\x03\x02\x02\x02\u05F0" +
		"\u05F1\x075\x02\x02\u05F1\u05F2\x05\xCEh\x02\u05F2\u05F3\x07Z\x02\x02" +
		"\u05F3\u05F4\x05\xF0y\x02\u05F4\xED\x03\x02\x02\x02\u05F5\u05F6\x07\f" +
		"\x02\x02\u05F6\u05F7\x05\xF0y\x02\u05F7\xEF\x03\x02\x02\x02\u05F8\u05FD" +
		"\x05\xCEh\x02\u05F9\u05FA\x07\xD8\x02\x02\u05FA\u05FC\x05\xCEh\x02\u05FB" +
		"\u05F9\x03\x02\x02\x02\u05FC\u05FF\x03\x02\x02\x02\u05FD\u05FB\x03\x02" +
		"\x02\x02\u05FD\u05FE\x03\x02\x02\x02\u05FE\xF1\x03\x02\x02\x02\u05FF\u05FD" +
		"\x03\x02\x02\x02\u0600\u0601\x07J\x02\x02\u0601\u0602\x07K\x02\x02\u0602" +
		"\u0603\x05\u0124\x93\x02\u0603\xF3\x03\x02\x02\x02\u0604\u0605\x07L\x02" +
		"\x02\u0605\u0606\x05\xF6|\x02\u0606\xF5\x03\x02\x02\x02\u0607\u060D\x05" +
		"\xFA~\x02\u0608\u0609\x05\xF8}\x02\u0609\u060A\x05\xFA~\x02\u060A\u060C" +
		"\x03\x02\x02\x02\u060B\u0608\x03\x02\x02\x02\u060C\u060F\x03\x02\x02\x02" +
		"\u060D\u060B\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E\u0613\x03" +
		"\x02\x02\x02\u060F\u060D\x03\x02\x02\x02\u0610\u0611\x07R\x02\x02\u0611" +
		"\u0613\x05\xFA~\x02\u0612\u0607\x03\x02\x02\x02\u0612\u0610\x03\x02\x02" +
		"\x02\u0613\xF7\x03\x02\x02\x02\u0614\u0615\t\x15\x02\x02\u0615\xF9\x03" +
		"\x02\x02\x02\u0616\u0617\x07\xD1\x02\x02\u0617\u0618\x05\xF6|\x02\u0618" +
		"\u0619\x07\xD2\x02\x02\u0619\u061C\x03\x02\x02\x02\u061A\u061C\x05\xFC" +
		"\x7F\x02\u061B\u0616\x03\x02\x02\x02\u061B\u061A\x03\x02\x02\x02\u061C" +
		"\xFB\x03\x02\x02\x02\u061D\u061F\x05\xCEh\x02\u061E\u0620\x05\xFE\x80" +
		"\x02\u061F\u061E\x03\x02\x02\x02\u061F\u0620\x03\x02\x02\x02\u0620\u0622" +
		"\x03\x02\x02\x02\u0621\u0623\x05\u0100\x81\x02\u0622\u0621\x03\x02\x02" +
		"\x02\u0622\u0623\x03\x02\x02\x02\u0623\u0629\x03\x02\x02\x02\u0624\u0625" +
		"\x05\xE2r\x02\u0625\u0626\x05\xFE\x80\x02\u0626\u0627\x05\u0100\x81\x02" +
		"\u0627\u0629\x03\x02\x02\x02\u0628\u061D\x03\x02\x02\x02\u0628\u0624\x03" +
		"\x02\x02\x02\u0629\xFD\x03\x02\x02\x02\u062A\u063B\x07\xDA\x02\x02\u062B" +
		"\u063B\x07\xE4\x02\x02\u062C\u063B\x07\xDC\x02\x02\u062D\u063B\x07\xDB" +
		"\x02\x02\u062E\u062F\x07\xDC\x02\x02\u062F\u063B\x07\xDA\x02\x02\u0630" +
		"\u0631\x07\xDB\x02\x02\u0631\u063B\x07\xDA\x02\x02\u0632\u063B\x07\xE5" +
		"\x02\x02\u0633\u063B\x07[\x02\x02\u0634\u063B\x07\\\x02\x02\u0635\u0636" +
		"\x07R\x02\x02\u0636\u063B\x07\\\x02\x02\u0637\u063B\x07]\x02\x02\u0638" +
		"\u063B\x07^\x02\x02\u0639\u063B\x07=\x02\x02\u063A\u062A\x03\x02\x02\x02" +
		"\u063A\u062B\x03\x02\x02\x02\u063A\u062C\x03\x02\x02\x02\u063A\u062D\x03" +
		"\x02\x02\x02\u063A\u062E\x03\x02\x02\x02\u063A\u0630\x03\x02\x02\x02\u063A" +
		"\u0632\x03\x02\x02\x02\u063A\u0633\x03\x02\x02\x02\u063A\u0634\x03\x02" +
		"\x02\x02\u063A\u0635\x03\x02\x02\x02\u063A\u0637\x03\x02\x02\x02\u063A" +
		"\u0638\x03\x02";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\u063A\u0639\x03\x02\x02\x02\u063B\xFF\x03\x02\x02\x02\u063C\u0650" +
		"\x07\x1C\x02\x02\u063D\u0650\x07\xCE\x02\x02\u063E\u0650\x05\u0104\x83" +
		"\x02\u063F\u0650\x07\xCF\x02\x02\u0640\u0650\x07\xB8\x02\x02\u0641\u0650" +
		"\x07\xB9\x02\x02\u0642\u0650\x05\u0120\x91\x02\u0643\u0648\x07\xBA\x02" +
		"\x02\u0644\u0646\x07\xD9\x02\x02\u0645\u0647\x07\xCB\x02\x02\u0646\u0645" +
		"\x03\x02\x02\x02\u0646\u0647\x03\x02\x02\x02\u0647\u0649\x03\x02\x02\x02" +
		"\u0648\u0644\x03\x02\x02\x02\u0648\u0649\x03\x02\x02\x02\u0649\u0650\x03" +
		"\x02\x02\x02\u064A\u064B\x07\xD1\x02\x02\u064B\u064C\x05\xC2b\x02\u064C" +
		"\u064D\x07\xD2\x02\x02\u064D\u0650\x03\x02\x02\x02\u064E\u0650\x05\u0102" +
		"\x82\x02\u064F\u063C\x03\x02\x02\x02\u064F\u063D\x03\x02\x02\x02\u064F" +
		"\u063E\x03\x02\x02\x02\u064F\u063F\x03\x02\x02\x02\u064F\u0640\x03\x02" +
		"\x02\x02\u064F\u0641\x03\x02\x02\x02\u064F\u0642\x03\x02\x02\x02\u064F" +
		"\u0643\x03\x02\x02\x02\u064F\u064A\x03\x02\x02\x02\u064F\u064E\x03\x02" +
		"\x02\x02\u0650\u0101\x03\x02\x02\x02\u0651\u0652\x07\xD1\x02\x02\u0652" +
		"\u0657\x05\u0100\x81\x02\u0653\u0654\x07\xD8\x02\x02\u0654\u0656\x05\u0100" +
		"\x81\x02\u0655\u0653\x03\x02\x02\x02\u0656\u0659\x03\x02\x02\x02\u0657" +
		"\u0655\x03\x02\x02\x02\u0657\u0658\x03\x02\x02\x02\u0658\u065A\x03\x02" +
		"\x02\x02\u0659\u0657\x03\x02\x02\x02\u065A\u065B\x07\xD2\x02\x02\u065B" +
		"\u0103\x03\x02\x02\x02\u065C\u065E\t\t\x02\x02\u065D\u065C\x03\x02\x02" +
		"\x02\u065D\u065E\x03\x02\x02\x02\u065E\u065F\x03\x02\x02\x02\u065F\u0660" +
		"\t\x16\x02\x02\u0660\u0105\x03\x02\x02\x02\u0661\u0662\x077\x02\x02\u0662" +
		"\u0663\x07l\x02\x02\u0663\u0664\x07m\x02\x02\u0664\u066E\x05\u0108\x85" +
		"\x02\u0665\u0666\x077\x02\x02\u0666\u066E\x07r\x02\x02\u0667\u0668\x07" +
		"7\x02\x02\u0668\u066E\x07s\x02\x02\u0669\u066A\x077\x02\x02\u066A\u066E" +
		"\x07t\x02\x02\u066B\u066C\x077\x02\x02\u066C\u066E\x05\xF6|\x02\u066D" +
		"\u0661\x03\x02\x02\x02\u066D\u0665\x03\x02\x02\x02\u066D\u0667\x03\x02" +
		"\x02\x02\u066D\u0669\x03\x02\x02\x02\u066D\u066B\x03\x02\x02\x02\u066E" +
		"\u0107\x03\x02\x02\x02\u066F\u0674\x05\u010A\x86\x02\u0670\u0671\x07\xE7" +
		"\x02\x02\u0671\u0673\x05\u010A\x86\x02\u0672\u0670\x03\x02\x02\x02\u0673" +
		"\u0676\x03\x02\x02\x02\u0674\u0672\x03\x02\x02\x02\u0674\u0675\x03\x02" +
		"\x02\x02\u0675\u0109\x03\x02\x02\x02\u0676\u0674\x03\x02\x02\x02\u0677" +
		"\u0678\x05\u0124\x93\x02\u0678\u0679\x05\u010E\x88\x02\u0679\u067A\x05" +
		"\u010C\x87\x02\u067A\u010B\x03\x02\x02\x02\u067B\u0688\x05\u0124\x93\x02" +
		"\u067C\u067D\x07\xD1\x02\x02\u067D\u0682\x05\u0124\x93\x02\u067E\u067F" +
		"\x07\xD8\x02\x02\u067F\u0681\x05\u0124\x93\x02\u0680\u067E\x03\x02\x02" +
		"\x02\u0681\u0684\x03\x02\x02\x02\u0682\u0680\x03\x02\x02\x02\u0682\u0683" +
		"\x03\x02\x02\x02\u0683\u0685\x03\x02\x02\x02\u0684\u0682\x03\x02\x02\x02" +
		"\u0685\u0686\x07\xD1\x02\x02\u0686\u0688\x03\x02\x02\x02\u0687\u067B\x03" +
		"\x02\x02\x02\u0687\u067C\x03\x02\x02\x02\u0688\u010D\x03\x02\x02\x02\u0689" +
		"\u068A\t\x17\x02\x02\u068A\u010F\x03\x02\x02\x02\u068B\u068C\x07d\x02" +
		"\x02\u068C\u068D\x07N\x02\x02\u068D\u0690\x05\xCAf\x02\u068E\u068F\x07" +
		"h\x02\x02\u068F\u0691\x05\xF6|\x02\u0690\u068E\x03\x02\x02\x02\u0690\u0691" +
		"\x03\x02\x02\x02\u0691\u06AF\x03\x02\x02\x02\u0692\u0693\x07d\x02\x02" +
		"\u0693\u0694\x07N\x02\x02\u0694\u0695\x07i\x02\x02\u0695\u0696\x07\xD1" +
		"\x02\x02\u0696\u069B\x05\xCEh\x02\u0697\u0698\x07\xD8\x02\x02\u0698\u069A" +
		"\x05\xCEh\x02\u0699\u0697\x03\x02\x02\x02\u069A\u069D\x03\x02\x02\x02" +
		"\u069B\u0699\x03\x02\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C\u069E\x03" +
		"\x02\x02\x02\u069D\u069B\x03\x02\x02\x02\u069E\u069F\x07\xD2\x02\x02\u069F" +
		"\u06AF\x03\x02\x02\x02\u06A0\u06A1\x07d\x02\x02\u06A1\u06A2\x07N\x02\x02" +
		"\u06A2\u06A3\x07v\x02\x02\u06A3\u06A4\x07\xD1\x02\x02\u06A4\u06A9\x05" +
		"\xCEh\x02\u06A5\u06A6\x07\xD8\x02\x02\u06A6\u06A8\x05\xCEh\x02\u06A7\u06A5" +
		"\x03\x02\x02\x02\u06A8\u06AB\x03\x02\x02\x02\u06A9\u06A7\x03\x02\x02\x02" +
		"\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AC\x03\x02\x02\x02\u06AB\u06A9\x03" +
		"\x02\x02\x02\u06AC\u06AD\x07\xD2\x02\x02\u06AD\u06AF\x03\x02\x02\x02\u06AE" +
		"\u068B\x03\x02\x02\x02\u06AE\u0692\x03\x02\x02\x02\u06AE\u06A0\x03\x02" +
		"\x02\x02\u06AF\u0111\x03\x02\x02\x02\u06B0\u06B1\x07M\x02\x02\u06B1\u06B2" +
		"\x07N\x02\x02\u06B2\u06B3\x05\u0114\x8B\x02\u06B3\u0113\x03\x02\x02\x02" +
		"\u06B4\u06B9\x05\u0116\x8C\x02\u06B5\u06B6\x07\xD8\x02\x02\u06B6\u06B8" +
		"\x05\u0116\x8C\x02\u06B7\u06B5\x03\x02\x02\x02\u06B8\u06BB\x03\x02\x02" +
		"\x02\u06B9\u06B7\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u0115" +
		"\x03\x02\x02\x02\u06BB\u06B9\x03\x02\x02\x02\u06BC\u06BE\x05\xCEh\x02" +
		"\u06BD\u06BF\t\x18\x02\x02\u06BE\u06BD\x03\x02\x02\x02\u06BE\u06BF\x03" +
		"\x02\x02\x02\u06BF\u06C2\x03\x02\x02\x02\u06C0\u06C1\x07a\x02\x02\u06C1" +
		"\u06C3\t\x19\x02\x02\u06C2\u06C0\x03\x02\x02\x02\u06C2\u06C3\x03\x02\x02" +
		"\x02\u06C3\u06CD\x03\x02\x02\x02\u06C4\u06C6\x05\xE2r\x02\u06C5\u06C7" +
		"\t\x18\x02\x02\u06C6\u06C5\x03\x02\x02\x02\u06C6\u06C7\x03\x02\x02\x02" +
		"\u06C7\u06CA\x03\x02\x02\x02\u06C8\u06C9\x07a\x02\x02\u06C9\u06CB\t\x19" +
		"\x02\x02\u06CA\u06C8\x03\x02\x02\x02\u06CA\u06CB\x03\x02\x02\x02\u06CB" +
		"\u06CD\x03\x02\x02\x02\u06CC\u06BC\x03\x02\x02\x02\u06CC\u06C4\x03\x02" +
		"\x02\x02\u06CD\u0117\x03\x02\x02\x02\u06CE\u06CF\x07O\x02\x02\u06CF\u06D0" +
		"\x07\xCB\x02\x02\u06D0\u0119\x03\x02\x02\x02\u06D1\u06D2\x07k\x02\x02" +
		"\u06D2\u06D3\x07\xCB\x02\x02\u06D3\u011B\x03\x02\x02\x02\u06D4\u06D5\x07" +
		"e\x02\x02\u06D5\u06D6\x07f\x02\x02\u06D6\u011D\x03\x02\x02\x02\u06D7\u06D8" +
		"\x07\x11\x02\x02\u06D8\u06DA\t\x1A\x02\x02\u06D9\u06D7\x03\x02\x02\x02" +
		"\u06DA\u06DD\x03\x02\x02\x02\u06DB\u06D9\x03\x02\x02\x02\u06DB\u06DC\x03" +
		"\x02\x02\x02\u06DC\u011F\x03\x02\x02\x02\u06DD\u06DB\x03\x02\x02\x02\u06DE" +
		"\u0735\x07\x8C\x02\x02\u06DF\u0735\x07\x8D\x02\x02\u06E0\u0735\x07\x8E" +
		"\x02\x02\u06E1\u0735\x07\x8F\x02\x02\u06E2\u0735\x07\x90\x02\x02\u06E3" +
		"\u0735\x07\x91\x02\x02\u06E4\u0735\x07\x92\x02\x02\u06E5\u0735\x07\x93" +
		"\x02\x02\u06E6\u0735\x07\x94\x02\x02\u06E7\u0735\x07\x95\x02\x02\u06E8" +
		"\u0735\x07\x96\x02\x02\u06E9\u06EA\x07\x97\x02\x02\u06EA\u06EB\x07\xE1" +
		"\x02\x02\u06EB\u0735\x05\u0122\x92\x02\u06EC\u06ED\x07\x98\x02\x02\u06ED" +
		"\u06EE\x07\xE1\x02\x02\u06EE\u0735\x05\u0122\x92\x02\u06EF\u06F0\x07\x99" +
		"\x02\x02\u06F0\u06F1\x07\xE1\x02\x02\u06F1\u0735\x05\u0122\x92\x02\u06F2" +
		"\u06F3\x07\x9A\x02\x02\u06F3\u06F4\x07\xE1\x02\x02\u06F4\u0735\x05\u0122" +
		"\x92\x02\u06F5\u06F6\x07\x9B\x02\x02\u06F6\u06F7\x07\xE1\x02\x02\u06F7" +
		"\u0735\x05\u0122\x92\x02\u06F8\u06F9\x07\x9C\x02\x02\u06F9\u06FA\x07\xE1" +
		"\x02\x02\u06FA\u0735\x05\u0122\x92\x02\u06FB\u06FC\x07\x9D\x02\x02\u06FC" +
		"\u06FD\x07\xE1\x02\x02\u06FD\u0735\x05\u0122\x92\x02\u06FE\u06FF\x07\x9E" +
		"\x02\x02\u06FF\u0700\x07\xE1\x02\x02\u0700\u0735\x05\u0122\x92\x02\u0701" +
		"\u0702\x07\x9F\x02\x02\u0702\u0703\x07\xE1\x02\x02\u0703\u0735\x05\u0122" +
		"\x92\x02\u0704\u0735\x07\xA0\x02\x02\u0705\u0735\x07\xA1\x02\x02\u0706" +
		"\u0735\x07\xA2\x02\x02\u0707\u0708\x07\xA3\x02\x02\u0708\u0709\x07\xE1" +
		"\x02\x02\u0709\u0735\x05\u0122\x92\x02\u070A\u070B\x07\xA4\x02\x02\u070B" +
		"\u070C\x07\xE1\x02\x02\u070C\u0735\x05\u0122\x92\x02\u070D\u070E\x07\xA5" +
		"\x02\x02\u070E\u070F\x07\xE1\x02\x02\u070F\u0735\x05\u0122\x92\x02\u0710" +
		"\u0735\x07\xA6\x02\x02\u0711\u0735\x07\xA7\x02\x02\u0712\u0735\x07\xA8" +
		"\x02\x02\u0713\u0714\x07\xA9\x02\x02\u0714\u0715\x07\xE1\x02\x02\u0715" +
		"\u0735\x05\u0122\x92\x02\u0716\u0717\x07\xAA\x02\x02\u0717\u0718\x07\xE1" +
		"\x02\x02\u0718\u0735\x05\u0122\x92\x02\u0719\u071A\x07\xAB\x02\x02\u071A" +
		"\u071B\x07\xE1\x02\x02\u071B\u0735\x05\u0122\x92\x02\u071C\u0735\x07\xAC" +
		"\x02\x02\u071D\u0735\x07\xAD\x02\x02\u071E\u0735\x07\xAE\x02\x02\u071F" +
		"\u0720\x07\xAF\x02\x02\u0720\u0721\x07\xE1\x02\x02\u0721\u0735\x05\u0122" +
		"\x92\x02\u0722\u0723\x07\xB0\x02\x02\u0723\u0724\x07\xE1\x02\x02\u0724" +
		"\u0735\x05\u0122\x92\x02\u0725\u0726\x07\xB1\x02\x02\u0726\u0727\x07\xE1" +
		"\x02\x02\u0727\u0735\x05\u0122\x92\x02\u0728\u0735\x07\xB2\x02\x02\u0729" +
		"\u0735\x07\xB3\x02\x02\u072A\u0735\x07\xB4\x02\x02\u072B\u072C\x07\xB5" +
		"\x02\x02\u072C\u072D\x07\xE1\x02\x02\u072D\u0735\x05\u0122\x92\x02\u072E" +
		"\u072F\x07\xB6\x02\x02\u072F\u0730\x07\xE1\x02\x02\u0730\u0735\x05\u0122" +
		"\x92\x02\u0731\u0732\x07\xB7\x02\x02\u0732\u0733\x07\xE1\x02\x02\u0733" +
		"\u0735\x05\u0122\x92\x02\u0734\u06DE\x03\x02\x02\x02\u0734\u06DF\x03\x02" +
		"\x02\x02\u0734\u06E0\x03\x02\x02\x02\u0734\u06E1\x03\x02\x02\x02\u0734" +
		"\u06E2\x03\x02\x02\x02\u0734\u06E3\x03\x02\x02\x02\u0734\u06E4\x03\x02" +
		"\x02\x02\u0734\u06E5\x03\x02\x02\x02\u0734\u06E6\x03\x02\x02\x02\u0734" +
		"\u06E7\x03\x02\x02\x02\u0734\u06E8\x03\x02\x02\x02\u0734\u06E9\x03\x02" +
		"\x02\x02\u0734\u06EC\x03\x02\x02\x02\u0734\u06EF\x03\x02\x02\x02\u0734" +
		"\u06F2\x03\x02\x02\x02\u0734\u06F5\x03\x02\x02\x02\u0734\u06F8\x03\x02" +
		"\x02\x02\u0734\u06FB\x03\x02\x02\x02\u0734\u06FE\x03\x02\x02\x02\u0734" +
		"\u0701\x03\x02\x02\x02\u0734\u0704\x03\x02\x02\x02\u0734\u0705\x03\x02" +
		"\x02\x02\u0734\u0706\x03\x02\x02\x02\u0734\u0707\x03\x02\x02\x02\u0734" +
		"\u070A\x03\x02\x02\x02\u0734\u070D\x03\x02\x02\x02\u0734\u0710\x03\x02" +
		"\x02\x02\u0734\u0711\x03\x02\x02\x02\u0734\u0712\x03\x02\x02\x02\u0734" +
		"\u0713\x03\x02\x02\x02\u0734\u0716\x03\x02\x02\x02\u0734\u0719\x03\x02" +
		"\x02\x02\u0734\u071C\x03\x02\x02\x02\u0734\u071D\x03\x02\x02\x02\u0734" +
		"\u071E\x03\x02\x02\x02\u0734\u071F\x03\x02\x02\x02\u0734\u0722\x03\x02" +
		"\x02\x02\u0734\u0725\x03\x02\x02\x02\u0734\u0728\x03\x02\x02\x02\u0734" +
		"\u0729\x03\x02\x02\x02\u0734\u072A\x03\x02\x02\x02\u0734\u072B\x03\x02" +
		"\x02\x02\u0734\u072E\x03\x02\x02\x02\u0734\u0731\x03\x02\x02\x02\u0735" +
		"\u0121\x03\x02\x02\x02\u0736\u0738\t\t\x02\x02\u0737\u0736\x03\x02\x02" +
		"\x02\u0737\u0738\x03\x02\x02\x02\u0738\u0739\x03\x02\x02\x02\u0739\u073A" +
		"\x07\xCB\x02\x02\u073A\u0123\x03\x02\x02\x02\u073B\u073C\t\x11\x02\x02" +
		"\u073C\u0125\x03\x02\x02\x02\u073D\u073E\x07\xC9\x02\x02\u073E\u073F\x05" +
		"\u012A\x96\x02\u073F\u0740\x07\xD6\x02\x02\u0740\u0127\x03\x02\x02\x02" +
		"\u0741\u0742\x07\xCA\x02\x02\u0742\u0743\x05\u012A\x96\x02\u0743\u0744" +
		"\x07\xD6\x02\x02\u0744\u0129\x03\x02\x02\x02\u0745\u0746\x07\\\x02\x02" +
		"\u0746\u0748\x05\u012C\x97\x02\u0747\u0745\x03\x02\x02\x02\u0747\u0748" +
		"\x03\x02\x02\x02\u0748\u074B\x03\x02\x02\x02\u0749\u074A\x07\xC7\x02\x02" +
		"\u074A\u074C\x05\u012E\x98\x02\u074B\u0749\x03\x02\x02\x02\u074B\u074C" +
		"\x03\x02\x02\x02\u074C\u0751\x03\x02\x02\x02\u074D\u074E\x077\x02\x02" +
		"\u074E\u074F\x07\xC6\x02\x02\u074F\u0750\x07\xDA\x02\x02\u0750\u0752\x07" +
		"\xCF\x02\x02\u0751\u074D\x03\x02\x02\x02\u0751\u0752\x03\x02\x02\x02\u0752" +
		"\u0757\x03\x02\x02\x02\u0753\u0754\x077\x02\x02\u0754\u0755\x07l\x02\x02" +
		"\u0755\u0756\x07m\x02\x02\u0756\u0758\x05\u0108\x85\x02\u0757\u0753\x03" +
		"\x02\x02\x02\u0757\u0758\x03\x02\x02\x02\u0758\u0762\x03\x02\x02\x02\u0759" +
		"\u075A\x077\x02\x02\u075A\u0760\x07\xC4\x02\x02\u075B\u075C\x07\xD1\x02" +
		"\x02\u075C\u075D\x07\xC5\x02\x02\u075D\u075E\x07\xDA\x02\x02\u075E\u075F" +
		"\x07\xCB\x02\x02\u075F\u0761\x07\xD2\x02\x02\u0760\u075B\x03\x02\x02\x02" +
		"\u0760\u0761\x03\x02\x02\x02\u0761\u0763\x03\x02\x02\x02\u0762\u0759\x03" +
		"\x02\x02\x02\u0762\u0763\x03\x02\x02\x02\u0763\u076B\x03\x02\x02\x02\u0764" +
		"\u0765\x077\x02\x02\u0765\u0766\x07\xC3\x02\x02\u0766\u0767\x07\\\x02" +
		"\x02\u0767\u0768\x07\xD1\x02\x02\u0768\u0769\x05\u0138\x9D\x02\u0769\u076A" +
		"\x07\xD2\x02\x02\u076A\u076C\x03\x02\x02\x02\u076B\u0764\x03\x02\x02\x02" +
		"\u076B\u076C\x03\x02\x02\x02\u076C\u0771\x03\x02\x02\x02\u076D\u076E\x07" +
		"7\x02\x02\u076E\u076F\x07\xC3\x02\x02\u076F\u0770\x07\xDA\x02\x02\u0770" +
		"\u0772\x07\xCF\x02\x02\u0771\u076D\x03\x02\x02\x02\u0771\u0772\x03\x02" +
		"\x02\x02\u0772\u0777\x03\x02\x02\x02\u0773\u0774\x077\x02\x02\u0774\u0775" +
		"\x07\xC2\x02\x02\u0775\u0776\x07\xDA\x02\x02\u0776\u0778\x07\xCF\x02\x02" +
		"\u0777\u0773\x03\x02\x02\x02\u0777\u0778\x03\x02\x02\x02\u0778\u077D\x03" +
		"\x02\x02\x02\u0779\u077A\x077\x02\x02\u077A\u077B\x07\xC1\x02\x02\u077B" +
		"\u077C\x07\xDA\x02\x02\u077C\u077E\x07\xCF\x02\x02\u077D\u0779\x03\x02" +
		"\x02\x02\u077D\u077E\x03\x02\x02\x02\u077E\u0780\x03\x02\x02\x02\u077F" +
		"\u0781\x05\u0118\x8D\x02\u0780\u077F\x03\x02\x02\x02\u0780\u0781\x03\x02" +
		"\x02\x02\u0781\u0784\x03\x02\x02\x02\u0782\u0783\x070\x02\x02\u0783\u0785" +
		"\x05\u0134\x9B\x02\u0784\u0782\x03\x02\x02\x02\u0784\u0785\x03\x02\x02" +
		"\x02\u0785\u012B\x03\x02\x02\x02\u0786\u0787\t\x1B\x02\x02\u0787\u0788" +
		"\x07\xC0\x02\x02\u0788\u012D\x03\x02\x02\x02\u0789\u078E\x05\u0130\x99" +
		"\x02\u078A\u078B\x07\xD8\x02\x02\u078B\u078D\x05\u012E\x98\x02\u078C\u078A" +
		"\x03\x02\x02\x02\u078D\u0790\x03\x02\x02\x02\u078E\u078C\x03\x02\x02\x02" +
		"\u078E\u078F\x03\x02\x02\x02\u078F\u012F\x03\x02\x02\x02\u0790\u078E\x03" +
		"\x02\x02\x02\u0791\u07AB\x05\u013A\x9E\x02\u0792\u0793\x07\xD1\x02\x02" +
		"\u0793\u0796\x05\u0132\x9A\x02\u0794\u0795\x07L\x02\x02\u0795\u0797\x05" +
		"\xF6|\x02\u0796\u0794\x03\x02\x02\x02\u0796\u0797\x03\x02\x02\x02\u0797" +
		"\u079C\x03\x02\x02\x02\u0798\u0799\x07J\x02\x02\u0799\u079A\x07\xC8\x02" +
		"\x02\u079A\u079B\x07\xDA\x02\x02\u079B\u079D\x05\u013A\x9E\x02\u079C\u0798" +
		"\x03\x02\x02\x02\u079C\u079D\x03\x02\x02\x02\u079D\u07A1\x03\x02\x02\x02" +
		"\u079E\u079F\x07M\x02\x02\u079F\u07A0\x07N\x02\x02\u07A0\u07A2\x05\u0114" +
		"\x8B\x02\u07A1\u079E\x03\x02\x02\x02\u07A1\u07A2\x03\x02\x02\x02\u07A2" +
		"\u07A4\x03\x02\x02\x02\u07A3\u07A5\x05\u0118\x8D\x02\u07A4\u07A3\x03\x02" +
		"\x02\x02\u07A4\u07A5\x03\x02\x02\x02\u07A5\u07A7\x03\x02\x02\x02\u07A6" +
		"\u07A8\x05\u011A\x8E\x02\u07A7\u07A6\x03\x02\x02\x02\u07A7\u07A8\x03\x02" +
		"\x02\x02\u07A8\u07A9\x03\x02\x02\x02\u07A9\u07AA\x07\xD2\x02\x02\u07AA" +
		"\u07AC\x03\x02\x02\x02\u07AB\u0792\x03\x02\x02\x02\u07AB\u07AC\x03\x02" +
		"\x02\x02\u07AC\u0131\x03\x02\x02\x02\u07AD\u07B2\x05\u013A\x9E\x02\u07AE" +
		"\u07AF\x07\xD8\x02\x02\u07AF\u07B1\x05\u0132\x9A\x02\u07B0\u07AE\x03\x02" +
		"\x02\x02\u07B1\u07B4\x03\x02\x02\x02\u07B2\u07B0\x03\x02\x02\x02\u07B2" +
		"\u07B3\x03\x02\x02\x02\u07B3\u0133\x03\x02\x02\x02\u07B4\u07B2\x03\x02" +
		"\x02\x02\u07B5\u07B8\x05\u0136\x9C\x02\u07B6\u07B7\x07\xD8\x02\x02\u07B7" +
		"\u07B9\x05\u0134\x9B\x02\u07B8\u07B6\x03\x02\x02\x02\u07B8\u07B9\x03\x02" +
		"\x02\x02\u07B9\u0135\x03\x02\x02\x02\u07BA\u07BB\t\x1C\x02\x02\u07BB\u0137" +
		"\x03\x02\x02\x02\u07BC\u07BF\x07\xCF\x02\x02\u07BD\u07BE\x07\xD8\x02\x02" +
		"\u07BE\u07C0\x05\u0138\x9D\x02\u07BF\u07BD\x03\x02\x02\x02\u07BF\u07C0" +
		"\x03\x02\x02\x02\u07C0\u0139\x03\x02\x02\x02\u07C1\u07C6\x05\u013C\x9F" +
		"\x02\u07C2\u07C3\x07\xD9\x02\x02\u07C3\u07C5\x05\u013A\x9E\x02\u07C4\u07C2" +
		"\x03\x02\x02\x02\u07C5\u07C8\x03\x02\x02\x02\u07C6\u07C4\x03\x02\x02\x02" +
		"\u07C6\u07C7\x03\x02\x02\x02\u07C7\u013B\x03\x02\x02\x02\u07C8\u07C6\x03" +
		"\x02\x02\x02\u07C9\u07CA\t\x1D\x02\x02\u07CA\u013D\x03\x02\x02\x02\u07CB" +
		"\u07CC\t\x1E\x02\x02\u07CC\u013F\x03\x02\x02\x02\xCB\u014A\u015B\u0169" +
		"\u0171\u0176\u017E\u0185\u018C\u0190\u0196\u019A\u01A2\u01AB\u01B2\u01BB" +
		"\u01C2\u01CB\u01D2\u01D8\u01DC\u01F1\u01FA\u0202\u0206\u020C\u021C\u0224" +
		"\u0229\u0234\u023A\u0242\u0246\u0248\u0251\u025A\u025F\u0263\u0267\u026B" +
		"\u026D\u0275\u027E\u0284\u028F\u0299\u029C\u02A0\u02A5\u02AF\u02B7\u02BA" +
		"\u02BD\u02C5\u02D0\u02EA\u02F1\u02FA\u0308\u030E\u0311\u031C\u0324\u032A" +
		"\u0337\u033A\u033D\u0341\u0354\u035B\u0362\u0369\u0370\u0374\u037A\u0383" +
		"\u038E\u0393\u0398\u039D\u03A4\u03B1\u03B5\u03B9\u03BB\u03BF\u03D1\u03E6" +
		"\u03F6\u03FC\u041E\u042A\u042C\u043C\u0441\u0448\u044E\u0451\u0456\u0460" +
		"\u0467\u046F\u047D\u047F\u0487\u0496\u049D\u04A7\u04AA\u04AD\u04B0\u04B3" +
		"\u04B6\u04B9\u04BC\u04BF\u04C2\u04C5\u04CA\u04CD\u04D7\u04DA\u04DD\u04E0" +
		"\u04E3\u04E6\u04EB\u04EF\u04F4\u04F8\u0500\u0508\u050C\u0511\u0517\u051E" +
		"\u0523\u0528\u052C\u053A\u053F\u0543\u0546\u054D\u05CE\u05D6\u05E0\u05E9" +
		"\u05EC\u05FD\u060D\u0612\u061B\u061F\u0622\u0628\u063A\u0646\u0648\u064F" +
		"\u0657\u065D\u066D\u0674\u0682\u0687\u0690\u069B\u06A9\u06AE\u06B9\u06BE" +
		"\u06C2\u06C6\u06CA\u06CC\u06DB\u0734\u0737\u0747\u074B\u0751\u0757\u0760" +
		"\u0762\u076B\u0771\u0777\u077D\u0780\u0784\u078E\u0796\u079C\u07A1\u07A4" +
		"\u07A7\u07AB\u07B2\u07B8\u07BF\u07C6";
	public static readonly _serializedATN: string = Utils.join(
		[
			SoqlParser._serializedATNSegment0,
			SoqlParser._serializedATNSegment1,
			SoqlParser._serializedATNSegment2,
			SoqlParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SoqlParser.__ATN) {
			SoqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SoqlParser._serializedATN));
		}

		return SoqlParser.__ATN;
	}

}

export class TriggerUnitContext extends ParserRuleContext {
	public TRIGGER(): TerminalNode { return this.getToken(SoqlParser.TRIGGER, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public ON(): TerminalNode { return this.getToken(SoqlParser.ON, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public triggerCase(): TriggerCaseContext[];
	public triggerCase(i: number): TriggerCaseContext;
	public triggerCase(i?: number): TriggerCaseContext | TriggerCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TriggerCaseContext);
		} else {
			return this.getRuleContext(i, TriggerCaseContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(SoqlParser.EOF, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_triggerUnit; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTriggerUnit) {
			listener.enterTriggerUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTriggerUnit) {
			listener.exitTriggerUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTriggerUnit) {
			return visitor.visitTriggerUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriggerUnit2Context extends ParserRuleContext {
	public TRIGGER(): TerminalNode { return this.getToken(SoqlParser.TRIGGER, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public ON(): TerminalNode { return this.getToken(SoqlParser.ON, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public triggerCase(): TriggerCaseContext[];
	public triggerCase(i: number): TriggerCaseContext;
	public triggerCase(i?: number): TriggerCaseContext | TriggerCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TriggerCaseContext);
		} else {
			return this.getRuleContext(i, TriggerCaseContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public triggerBlock(): TriggerBlockContext {
		return this.getRuleContext(0, TriggerBlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(SoqlParser.EOF, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_triggerUnit2; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTriggerUnit2) {
			listener.enterTriggerUnit2(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTriggerUnit2) {
			listener.exitTriggerUnit2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTriggerUnit2) {
			return visitor.visitTriggerUnit2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriggerCaseContext extends ParserRuleContext {
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BEFORE, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AFTER, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INSERT, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.UPDATE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DELETE, 0); }
	public UNDELETE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.UNDELETE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_triggerCase; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTriggerCase) {
			listener.enterTriggerCase(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTriggerCase) {
			listener.exitTriggerCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTriggerCase) {
			return visitor.visitTriggerCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriggerBlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public triggerBlockMember(): TriggerBlockMemberContext[];
	public triggerBlockMember(i: number): TriggerBlockMemberContext;
	public triggerBlockMember(i?: number): TriggerBlockMemberContext | TriggerBlockMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TriggerBlockMemberContext);
		} else {
			return this.getRuleContext(i, TriggerBlockMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_triggerBlock; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTriggerBlock) {
			listener.enterTriggerBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTriggerBlock) {
			listener.exitTriggerBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTriggerBlock) {
			return visitor.visitTriggerBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriggerBlockMemberContext extends ParserRuleContext {
	public triggerMemberDeclaration(): TriggerMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TriggerMemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_triggerBlockMember; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTriggerBlockMember) {
			listener.enterTriggerBlockMember(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTriggerBlockMember) {
			listener.exitTriggerBlockMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTriggerBlockMember) {
			return visitor.visitTriggerBlockMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
	public EOF(): TerminalNode { return this.getToken(SoqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(SoqlParser.CLASS, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.EXTENDS, 0); }
	public typeRef(): TypeRefContext | undefined {
		return this.tryGetRuleContext(0, TypeRefContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(SoqlParser.ENUM, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(SoqlParser.INTERFACE, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.EXTENDS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public typeRef(): TypeRefContext[];
	public typeRef(i: number): TypeRefContext;
	public typeRef(i?: number): TypeRefContext | TypeRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeRefContext);
		} else {
			return this.getRuleContext(i, TypeRefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_typeList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_classBody; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext[];
	public interfaceMethodDeclaration(i: number): InterfaceMethodDeclarationContext;
	public interfaceMethodDeclaration(i?: number): InterfaceMethodDeclarationContext | InterfaceMethodDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GLOBAL, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PRIVATE, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRANSIENT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FINAL, 0); }
	public WEBSERVICE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WEBSERVICE, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.OVERRIDE, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.VIRTUAL, 0); }
	public TESTMETHOD(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TESTMETHOD, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WITH, 0); }
	public SHARING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SHARING, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WITHOUT, 0); }
	public INHERITED(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INHERITED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_modifier; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public propertyDeclaration(): PropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PropertyDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriggerMemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public propertyDeclaration(): PropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PropertyDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_triggerMemberDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTriggerMemberDeclaration) {
			listener.enterTriggerMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTriggerMemberDeclaration) {
			listener.exitTriggerMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTriggerMemberDeclaration) {
			return visitor.visitTriggerMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public typeRef(): TypeRefContext | undefined {
		return this.tryGetRuleContext(0, TypeRefContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.VOID, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDeclarationContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public propertyBlock(): PropertyBlockContext[];
	public propertyBlock(i: number): PropertyBlockContext;
	public propertyBlock(i?: number): PropertyBlockContext | PropertyBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyBlockContext);
		} else {
			return this.getRuleContext(i, PropertyBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_propertyDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterPropertyDeclaration) {
			listener.enterPropertyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitPropertyDeclaration) {
			listener.exitPropertyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitPropertyDeclaration) {
			return visitor.visitPropertyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	public typeRef(): TypeRefContext | undefined {
		return this.tryGetRuleContext(0, TypeRefContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.VOID, 0); }
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_interfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterInterfaceMethodDeclaration) {
			listener.enterInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitInterfaceMethodDeclaration) {
			listener.exitInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeRefContext extends ParserRuleContext {
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	public arraySubscripts(): ArraySubscriptsContext {
		return this.getRuleContext(0, ArraySubscriptsContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.DOT);
		} else {
			return this.getToken(SoqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_typeRef; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTypeRef) {
			listener.enterTypeRef(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTypeRef) {
			listener.exitTypeRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTypeRef) {
			return visitor.visitTypeRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArraySubscriptsContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.LBRACK);
		} else {
			return this.getToken(SoqlParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.RBRACK);
		} else {
			return this.getToken(SoqlParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_arraySubscripts; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterArraySubscripts) {
			listener.enterArraySubscripts(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitArraySubscripts) {
			listener.exitArraySubscripts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitArraySubscripts) {
			return visitor.visitArraySubscripts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LIST, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SET, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MAP, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_typeName; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(SoqlParser.LT, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(SoqlParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.DOT);
		} else {
			return this.getToken(SoqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IntegerLiteral, 0); }
	public LongLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LongLiteral, 0); }
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NumberLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.StringLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BooleanLiteral, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_literal; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public ATSIGN(): TerminalNode { return this.getToken(SoqlParser.ATSIGN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RPAREN, 0); }
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_annotation; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(SoqlParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_block; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_localVariableDeclarationStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterLocalVariableDeclarationStatement) {
			listener.enterLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitLocalVariableDeclarationStatement) {
			listener.exitLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public doWhileStatement(): DoWhileStatementContext | undefined {
		return this.tryGetRuleContext(0, DoWhileStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public insertStatement(): InsertStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertStatementContext);
	}
	public updateStatement(): UpdateStatementContext | undefined {
		return this.tryGetRuleContext(0, UpdateStatementContext);
	}
	public deleteStatement(): DeleteStatementContext | undefined {
		return this.tryGetRuleContext(0, DeleteStatementContext);
	}
	public undeleteStatement(): UndeleteStatementContext | undefined {
		return this.tryGetRuleContext(0, UndeleteStatementContext);
	}
	public upsertStatement(): UpsertStatementContext | undefined {
		return this.tryGetRuleContext(0, UpsertStatementContext);
	}
	public mergeStatement(): MergeStatementContext | undefined {
		return this.tryGetRuleContext(0, MergeStatementContext);
	}
	public runAsStatement(): RunAsStatementContext | undefined {
		return this.tryGetRuleContext(0, RunAsStatementContext);
	}
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_statement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(SoqlParser.IF, 0); }
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(SoqlParser.SWITCH, 0); }
	public ON(): TerminalNode { return this.getToken(SoqlParser.ON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public whenControl(): WhenControlContext[];
	public whenControl(i: number): WhenControlContext;
	public whenControl(i?: number): WhenControlContext | WhenControlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenControlContext);
		} else {
			return this.getRuleContext(i, WhenControlContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenControlContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(SoqlParser.WHEN, 0); }
	public whenValue(): WhenValueContext {
		return this.getRuleContext(0, WhenValueContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_whenControl; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterWhenControl) {
			listener.enterWhenControl(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitWhenControl) {
			listener.exitWhenControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitWhenControl) {
			return visitor.visitWhenControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenValueContext extends ParserRuleContext {
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ELSE, 0); }
	public whenLiteral(): WhenLiteralContext[];
	public whenLiteral(i: number): WhenLiteralContext;
	public whenLiteral(i?: number): WhenLiteralContext | WhenLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenLiteralContext);
		} else {
			return this.getRuleContext(i, WhenLiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_whenValue; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterWhenValue) {
			listener.enterWhenValue(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitWhenValue) {
			listener.exitWhenValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitWhenValue) {
			return visitor.visitWhenValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenLiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IntegerLiteral, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUB, 0); }
	public LongLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LongLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.StringLiteral, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NULL, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LPAREN, 0); }
	public whenLiteral(): WhenLiteralContext | undefined {
		return this.tryGetRuleContext(0, WhenLiteralContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_whenLiteral; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterWhenLiteral) {
			listener.enterWhenLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitWhenLiteral) {
			listener.exitWhenLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitWhenLiteral) {
			return visitor.visitWhenLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(SoqlParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public forControl(): ForControlContext {
		return this.getRuleContext(0, ForControlContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(SoqlParser.WHILE, 0); }
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(SoqlParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(SoqlParser.WHILE, 0); }
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_doWhileStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterDoWhileStatement) {
			listener.enterDoWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitDoWhileStatement) {
			listener.exitDoWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitDoWhileStatement) {
			return visitor.visitDoWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(SoqlParser.TRY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(SoqlParser.RETURN, 0); }
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(SoqlParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(SoqlParser.BREAK, 0); }
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(SoqlParser.CONTINUE, 0); }
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AccessLevelContext extends ParserRuleContext {
	public AS(): TerminalNode { return this.getToken(SoqlParser.AS, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SYSTEM, 0); }
	public USER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.USER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_accessLevel; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterAccessLevel) {
			listener.enterAccessLevel(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitAccessLevel) {
			listener.exitAccessLevel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitAccessLevel) {
			return visitor.visitAccessLevel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertStatementContext extends ParserRuleContext {
	public INSERT(): TerminalNode { return this.getToken(SoqlParser.INSERT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	public accessLevel(): AccessLevelContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_insertStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterInsertStatement) {
			listener.enterInsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitInsertStatement) {
			listener.exitInsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitInsertStatement) {
			return visitor.visitInsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateStatementContext extends ParserRuleContext {
	public UPDATE(): TerminalNode { return this.getToken(SoqlParser.UPDATE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	public accessLevel(): AccessLevelContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_updateStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterUpdateStatement) {
			listener.enterUpdateStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitUpdateStatement) {
			listener.exitUpdateStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateStatement) {
			return visitor.visitUpdateStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteStatementContext extends ParserRuleContext {
	public DELETE(): TerminalNode { return this.getToken(SoqlParser.DELETE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	public accessLevel(): AccessLevelContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_deleteStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterDeleteStatement) {
			listener.enterDeleteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitDeleteStatement) {
			listener.exitDeleteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitDeleteStatement) {
			return visitor.visitDeleteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UndeleteStatementContext extends ParserRuleContext {
	public UNDELETE(): TerminalNode { return this.getToken(SoqlParser.UNDELETE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	public accessLevel(): AccessLevelContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_undeleteStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterUndeleteStatement) {
			listener.enterUndeleteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitUndeleteStatement) {
			listener.exitUndeleteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitUndeleteStatement) {
			return visitor.visitUndeleteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpsertStatementContext extends ParserRuleContext {
	public UPSERT(): TerminalNode { return this.getToken(SoqlParser.UPSERT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	public accessLevel(): AccessLevelContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_upsertStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterUpsertStatement) {
			listener.enterUpsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitUpsertStatement) {
			listener.exitUpsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitUpsertStatement) {
			return visitor.visitUpsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MergeStatementContext extends ParserRuleContext {
	public MERGE(): TerminalNode { return this.getToken(SoqlParser.MERGE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	public accessLevel(): AccessLevelContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_mergeStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterMergeStatement) {
			listener.enterMergeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitMergeStatement) {
			listener.exitMergeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitMergeStatement) {
			return visitor.visitMergeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RunAsStatementContext extends ParserRuleContext {
	public SYSTEMRUNAS(): TerminalNode { return this.getToken(SoqlParser.SYSTEMRUNAS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_runAsStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterRunAsStatement) {
			listener.enterRunAsStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitRunAsStatement) {
			listener.exitRunAsStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitRunAsStatement) {
			return visitor.visitRunAsStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SoqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyBlockContext extends ParserRuleContext {
	public getter(): GetterContext | undefined {
		return this.tryGetRuleContext(0, GetterContext);
	}
	public setter(): SetterContext | undefined {
		return this.tryGetRuleContext(0, SetterContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_propertyBlock; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterPropertyBlock) {
			listener.enterPropertyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitPropertyBlock) {
			listener.exitPropertyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitPropertyBlock) {
			return visitor.visitPropertyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(SoqlParser.GET, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_getter; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterGetter) {
			listener.enterGetter(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitGetter) {
			listener.exitGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitGetter) {
			return visitor.visitGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(SoqlParser.SET, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_setter; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSetter) {
			listener.enterSetter(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSetter) {
			listener.exitSetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSetter) {
			return visitor.visitSetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(SoqlParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(SoqlParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.SEMI);
		} else {
			return this.getToken(SoqlParser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_forControl; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_forInit; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public COLON(): TerminalNode { return this.getToken(SoqlParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_forUpdate; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PrimaryExpressionContext extends ExpressionContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DOT, 0); }
	public QUESTIONDOT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.QUESTIONDOT, 0); }
	public dotMethodCall(): DotMethodCallContext | undefined {
		return this.tryGetRuleContext(0, DotMethodCallContext);
	}
	public anyId(): AnyIdContext | undefined {
		return this.tryGetRuleContext(0, AnyIdContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterDotExpression) {
			listener.enterDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitDotExpression) {
			listener.exitDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitDotExpression) {
			return visitor.visitDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LBRACK(): TerminalNode { return this.getToken(SoqlParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(SoqlParser.RBRACK, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterArrayExpression) {
			listener.enterArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitArrayExpression) {
			listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MethodCallExpressionContext extends ExpressionContext {
	public methodCall(): MethodCallContext {
		return this.getRuleContext(0, MethodCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterMethodCallExpression) {
			listener.enterMethodCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitMethodCallExpression) {
			listener.exitMethodCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitMethodCallExpression) {
			return visitor.visitMethodCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewExpressionContext extends ExpressionContext {
	public NEW(): TerminalNode { return this.getToken(SoqlParser.NEW, 0); }
	public creator(): CreatorContext {
		return this.getRuleContext(0, CreatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastExpressionContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubExpressionContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSubExpression) {
			listener.enterSubExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSubExpression) {
			listener.exitSubExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSubExpression) {
			return visitor.visitSubExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostOpExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DEC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterPostOpExpression) {
			listener.enterPostOpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitPostOpExpression) {
			listener.exitPostOpExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitPostOpExpression) {
			return visitor.visitPostOpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreOpExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUB, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DEC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterPreOpExpression) {
			listener.enterPreOpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitPreOpExpression) {
			listener.exitPreOpExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitPreOpExpression) {
			return visitor.visitPreOpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BANG, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterNegExpression) {
			listener.enterNegExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitNegExpression) {
			listener.exitNegExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitNegExpression) {
			return visitor.visitNegExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Arth1ExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterArth1Expression) {
			listener.enterArth1Expression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitArth1Expression) {
			listener.exitArth1Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitArth1Expression) {
			return visitor.visitArth1Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Arth2ExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterArth2Expression) {
			listener.enterArth2Expression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitArth2Expression) {
			listener.exitArth2Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitArth2Expression) {
			return visitor.visitArth2Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.LT);
		} else {
			return this.getToken(SoqlParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.GT);
		} else {
			return this.getToken(SoqlParser.GT, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterBitExpression) {
			listener.enterBitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitBitExpression) {
			listener.exitBitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitBitExpression) {
			return visitor.visitBitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmpExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LT, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ASSIGN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterCmpExpression) {
			listener.enterCmpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitCmpExpression) {
			listener.exitCmpExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitCmpExpression) {
			return visitor.visitCmpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceOfExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INSTANCEOF(): TerminalNode { return this.getToken(SoqlParser.INSTANCEOF, 0); }
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterInstanceOfExpression) {
			listener.enterInstanceOfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitInstanceOfExpression) {
			listener.exitInstanceOfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitInstanceOfExpression) {
			return visitor.visitInstanceOfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TRIPLEEQUAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRIPLEEQUAL, 0); }
	public TRIPLENOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRIPLENOTEQUAL, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NOTEQUAL, 0); }
	public LESSANDGREATER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LESSANDGREATER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BITAND(): TerminalNode { return this.getToken(SoqlParser.BITAND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CARET(): TerminalNode { return this.getToken(SoqlParser.CARET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BITOR(): TerminalNode { return this.getToken(SoqlParser.BITOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogAndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(SoqlParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterLogAndExpression) {
			listener.enterLogAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitLogAndExpression) {
			listener.exitLogAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitLogAndExpression) {
			return visitor.visitLogAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogOrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(SoqlParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterLogOrExpression) {
			listener.enterLogOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitLogOrExpression) {
			listener.exitLogOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitLogOrExpression) {
			return visitor.visitLogOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CondExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public QUESTION(): TerminalNode { return this.getToken(SoqlParser.QUESTION, 0); }
	public COLON(): TerminalNode { return this.getToken(SoqlParser.COLON, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterCondExpression) {
			listener.enterCondExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitCondExpression) {
			listener.exitCondExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitCondExpression) {
			return visitor.visitCondExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LSHIFT_ASSIGN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterAssignExpression) {
			listener.enterAssignExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitAssignExpression) {
			listener.exitAssignExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitAssignExpression) {
			return visitor.visitAssignExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_primary; }
	public copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class ThisPrimaryContext extends PrimaryContext {
	public THIS(): TerminalNode { return this.getToken(SoqlParser.THIS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterThisPrimary) {
			listener.enterThisPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitThisPrimary) {
			listener.exitThisPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitThisPrimary) {
			return visitor.visitThisPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperPrimaryContext extends PrimaryContext {
	public SUPER(): TerminalNode { return this.getToken(SoqlParser.SUPER, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSuperPrimary) {
			listener.enterSuperPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSuperPrimary) {
			listener.exitSuperPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSuperPrimary) {
			return visitor.visitSuperPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralPrimaryContext extends PrimaryContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterLiteralPrimary) {
			listener.enterLiteralPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitLiteralPrimary) {
			listener.exitLiteralPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitLiteralPrimary) {
			return visitor.visitLiteralPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRefPrimaryContext extends PrimaryContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public DOT(): TerminalNode { return this.getToken(SoqlParser.DOT, 0); }
	public CLASS(): TerminalNode { return this.getToken(SoqlParser.CLASS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTypeRefPrimary) {
			listener.enterTypeRefPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTypeRefPrimary) {
			listener.exitTypeRefPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTypeRefPrimary) {
			return visitor.visitTypeRefPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VoidPrimaryContext extends PrimaryContext {
	public VOID(): TerminalNode { return this.getToken(SoqlParser.VOID, 0); }
	public DOT(): TerminalNode { return this.getToken(SoqlParser.DOT, 0); }
	public CLASS(): TerminalNode { return this.getToken(SoqlParser.CLASS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterVoidPrimary) {
			listener.enterVoidPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitVoidPrimary) {
			listener.exitVoidPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitVoidPrimary) {
			return visitor.visitVoidPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdPrimaryContext extends PrimaryContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterIdPrimary) {
			listener.enterIdPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitIdPrimary) {
			listener.exitIdPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitIdPrimary) {
			return visitor.visitIdPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SoqlPrimaryContext extends PrimaryContext {
	public soqlLiteral(): SoqlLiteralContext {
		return this.getRuleContext(0, SoqlLiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSoqlPrimary) {
			listener.enterSoqlPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSoqlPrimary) {
			listener.exitSoqlPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSoqlPrimary) {
			return visitor.visitSoqlPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SoslPrimaryContext extends PrimaryContext {
	public soslLiteral(): SoslLiteralContext {
		return this.getRuleContext(0, SoslLiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSoslPrimary) {
			listener.enterSoslPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSoslPrimary) {
			listener.exitSoslPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSoslPrimary) {
			return visitor.visitSoslPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DotMethodCallContext extends ParserRuleContext {
	public anyId(): AnyIdContext {
		return this.getRuleContext(0, AnyIdContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_dotMethodCall; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterDotMethodCall) {
			listener.enterDotMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitDotMethodCall) {
			listener.exitDotMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitDotMethodCall) {
			return visitor.visitDotMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public noRest(): NoRestContext | undefined {
		return this.tryGetRuleContext(0, NoRestContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	public mapCreatorRest(): MapCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, MapCreatorRestContext);
	}
	public setCreatorRest(): SetCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, SetCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_creator; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public idCreatedNamePair(): IdCreatedNamePairContext[];
	public idCreatedNamePair(i: number): IdCreatedNamePairContext;
	public idCreatedNamePair(i?: number): IdCreatedNamePairContext | IdCreatedNamePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdCreatedNamePairContext);
		} else {
			return this.getRuleContext(i, IdCreatedNamePairContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.DOT);
		} else {
			return this.getToken(SoqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_createdName; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdCreatedNamePairContext extends ParserRuleContext {
	public anyId(): AnyIdContext {
		return this.getRuleContext(0, AnyIdContext);
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LT, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_idCreatedNamePair; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterIdCreatedNamePair) {
			listener.enterIdCreatedNamePair(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitIdCreatedNamePair) {
			listener.exitIdCreatedNamePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitIdCreatedNamePair) {
			return visitor.visitIdCreatedNamePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_noRest; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterNoRest) {
			listener.enterNoRest(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitNoRest) {
			listener.exitNoRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitNoRest) {
			return visitor.visitNoRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_classCreatorRest; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterClassCreatorRest) {
			listener.enterClassCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitClassCreatorRest) {
			listener.exitClassCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitClassCreatorRest) {
			return visitor.visitClassCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(SoqlParser.LBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(SoqlParser.RBRACK, 0); }
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_arrayCreatorRest; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterArrayCreatorRest) {
			listener.enterArrayCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitArrayCreatorRest) {
			listener.exitArrayCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitArrayCreatorRest) {
			return visitor.visitArrayCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapCreatorRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public mapCreatorRestPair(): MapCreatorRestPairContext[];
	public mapCreatorRestPair(i: number): MapCreatorRestPairContext;
	public mapCreatorRestPair(i?: number): MapCreatorRestPairContext | MapCreatorRestPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapCreatorRestPairContext);
		} else {
			return this.getRuleContext(i, MapCreatorRestPairContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_mapCreatorRest; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterMapCreatorRest) {
			listener.enterMapCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitMapCreatorRest) {
			listener.exitMapCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitMapCreatorRest) {
			return visitor.visitMapCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapCreatorRestPairContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MAPTO(): TerminalNode { return this.getToken(SoqlParser.MAPTO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_mapCreatorRestPair; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterMapCreatorRestPair) {
			listener.enterMapCreatorRestPair(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitMapCreatorRestPair) {
			listener.exitMapCreatorRestPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitMapCreatorRestPair) {
			return visitor.visitMapCreatorRestPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetCreatorRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SoqlParser.LBRACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(SoqlParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_setCreatorRest; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSetCreatorRest) {
			listener.enterSetCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSetCreatorRest) {
			listener.exitSetCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSetCreatorRest) {
			return visitor.visitSetCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_arguments; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoqlLiteralContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(SoqlParser.LBRACK, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(SoqlParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_soqlLiteral; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSoqlLiteral) {
			listener.enterSoqlLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSoqlLiteral) {
			listener.exitSoqlLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSoqlLiteral) {
			return visitor.visitSoqlLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public selectOrSoqlId(): SelectOrSoqlIdContext {
		return this.getRuleContext(0, SelectOrSoqlIdContext);
	}
	public forClauses(): ForClausesContext {
		return this.getRuleContext(0, ForClausesContext);
	}
	public selectList(): SelectListContext | undefined {
		return this.tryGetRuleContext(0, SelectListContext);
	}
	public fromOrSoqlId(): FromOrSoqlIdContext | undefined {
		return this.tryGetRuleContext(0, FromOrSoqlIdContext);
	}
	public fromNameList(): FromNameListContext | undefined {
		return this.tryGetRuleContext(0, FromNameListContext);
	}
	public usingScope(): UsingScopeContext | undefined {
		return this.tryGetRuleContext(0, UsingScopeContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public withClause(): WithClauseContext | undefined {
		return this.tryGetRuleContext(0, WithClauseContext);
	}
	public groupByClause(): GroupByClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupByClauseContext);
	}
	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public offsetClause(): OffsetClauseContext | undefined {
		return this.tryGetRuleContext(0, OffsetClauseContext);
	}
	public allRowsClause(): AllRowsClauseContext | undefined {
		return this.tryGetRuleContext(0, AllRowsClauseContext);
	}
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.UPDATE, 0); }
	public updateList(): UpdateListContext | undefined {
		return this.tryGetRuleContext(0, UpdateListContext);
	}
	public endOfQuery(): EndOfQueryContext | undefined {
		return this.tryGetRuleContext(0, EndOfQueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_query; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndOfQueryContext extends ParserRuleContext {
	public ZF_INTELLISENSE(): TerminalNode { return this.getToken(SoqlParser.ZF_INTELLISENSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_endOfQuery; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterEndOfQuery) {
			listener.enterEndOfQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitEndOfQuery) {
			listener.exitEndOfQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitEndOfQuery) {
			return visitor.visitEndOfQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectOrSoqlIdContext extends ParserRuleContext {
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SELECT, 0); }
	public SZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SZF_INTELLISENSE, 0); }
	public SEZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SEZF_INTELLISENSE, 0); }
	public SELZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SELZF_INTELLISENSE, 0); }
	public SELEZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SELEZF_INTELLISENSE, 0); }
	public SELECZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SELECZF_INTELLISENSE, 0); }
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_selectOrSoqlId; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSelectOrSoqlId) {
			listener.enterSelectOrSoqlId(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSelectOrSoqlId) {
			listener.exitSelectOrSoqlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSelectOrSoqlId) {
			return visitor.visitSelectOrSoqlId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromOrSoqlIdContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FROM, 0); }
	public FZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FZF_INTELLISENSE, 0); }
	public FRZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FRZF_INTELLISENSE, 0); }
	public FROZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FROZF_INTELLISENSE, 0); }
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fromOrSoqlId; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFromOrSoqlId) {
			listener.enterFromOrSoqlId(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFromOrSoqlId) {
			listener.exitFromOrSoqlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFromOrSoqlId) {
			return visitor.visitFromOrSoqlId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubQueryContext extends ParserRuleContext {
	public selectOrSoqlId(): SelectOrSoqlIdContext {
		return this.getRuleContext(0, SelectOrSoqlIdContext);
	}
	public forClauses(): ForClausesContext {
		return this.getRuleContext(0, ForClausesContext);
	}
	public subFieldList(): SubFieldListContext | undefined {
		return this.tryGetRuleContext(0, SubFieldListContext);
	}
	public fromOrSoqlId(): FromOrSoqlIdContext | undefined {
		return this.tryGetRuleContext(0, FromOrSoqlIdContext);
	}
	public fromNameList(): FromNameListContext | undefined {
		return this.tryGetRuleContext(0, FromNameListContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.UPDATE, 0); }
	public updateList(): UpdateListContext | undefined {
		return this.tryGetRuleContext(0, UpdateListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_subQuery; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSubQuery) {
			listener.enterSubQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSubQuery) {
			listener.exitSubQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSubQuery) {
			return visitor.visitSubQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubQueryFromNameListContext extends ParserRuleContext {
	public subQueryFromNameFieldName(): SubQueryFromNameFieldNameContext[];
	public subQueryFromNameFieldName(i: number): SubQueryFromNameFieldNameContext;
	public subQueryFromNameFieldName(i?: number): SubQueryFromNameFieldNameContext | SubQueryFromNameFieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubQueryFromNameFieldNameContext);
		} else {
			return this.getRuleContext(i, SubQueryFromNameFieldNameContext);
		}
	}
	public fromSoqlId(): FromSoqlIdContext[];
	public fromSoqlId(i: number): FromSoqlIdContext;
	public fromSoqlId(i?: number): FromSoqlIdContext | FromSoqlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FromSoqlIdContext);
		} else {
			return this.getRuleContext(i, FromSoqlIdContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_subQueryFromNameList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSubQueryFromNameList) {
			listener.enterSubQueryFromNameList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSubQueryFromNameList) {
			listener.exitSubQueryFromNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSubQueryFromNameList) {
			return visitor.visitSubQueryFromNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubQueryFromNameFieldNameContext extends ParserRuleContext {
	public subQueryFromNameSoqlId(): SubQueryFromNameSoqlIdContext[];
	public subQueryFromNameSoqlId(i: number): SubQueryFromNameSoqlIdContext;
	public subQueryFromNameSoqlId(i?: number): SubQueryFromNameSoqlIdContext | SubQueryFromNameSoqlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubQueryFromNameSoqlIdContext);
		} else {
			return this.getRuleContext(i, SubQueryFromNameSoqlIdContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.DOT);
		} else {
			return this.getToken(SoqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_subQueryFromNameFieldName; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSubQueryFromNameFieldName) {
			listener.enterSubQueryFromNameFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSubQueryFromNameFieldName) {
			listener.exitSubQueryFromNameFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSubQueryFromNameFieldName) {
			return visitor.visitSubQueryFromNameFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubQueryFromNameSoqlIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.Identifier, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NAME, 0); }
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_subQueryFromNameSoqlId; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSubQueryFromNameSoqlId) {
			listener.enterSubQueryFromNameSoqlId(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSubQueryFromNameSoqlId) {
			listener.exitSubQueryFromNameSoqlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSubQueryFromNameSoqlId) {
			return visitor.visitSubQueryFromNameSoqlId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectListContext extends ParserRuleContext {
	public selectEntry(): SelectEntryContext[];
	public selectEntry(i: number): SelectEntryContext;
	public selectEntry(i?: number): SelectEntryContext | SelectEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectEntryContext);
		} else {
			return this.getRuleContext(i, SelectEntryContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_selectList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSelectList) {
			listener.enterSelectList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSelectList) {
			listener.exitSelectList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSelectList) {
			return visitor.visitSelectList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectEntryContext extends ParserRuleContext {
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LPAREN, 0); }
	public subQuery(): SubQueryContext | undefined {
		return this.tryGetRuleContext(0, SubQueryContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_selectEntry; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSelectEntry) {
			listener.enterSelectEntry(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSelectEntry) {
			listener.exitSelectEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSelectEntry) {
			return visitor.visitSelectEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	public soqlId(): SoqlIdContext[];
	public soqlId(i: number): SoqlIdContext;
	public soqlId(i?: number): SoqlIdContext | SoqlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoqlIdContext);
		} else {
			return this.getRuleContext(i, SoqlIdContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.DOT);
		} else {
			return this.getToken(SoqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fieldName; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFieldName) {
			listener.enterFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFieldName) {
			listener.exitFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFieldName) {
			return visitor.visitFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromNameListContext extends ParserRuleContext {
	public fromNameFieldName(): FromNameFieldNameContext[];
	public fromNameFieldName(i: number): FromNameFieldNameContext;
	public fromNameFieldName(i?: number): FromNameFieldNameContext | FromNameFieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FromNameFieldNameContext);
		} else {
			return this.getRuleContext(i, FromNameFieldNameContext);
		}
	}
	public fromSoqlId(): FromSoqlIdContext[];
	public fromSoqlId(i: number): FromSoqlIdContext;
	public fromSoqlId(i?: number): FromSoqlIdContext | FromSoqlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FromSoqlIdContext);
		} else {
			return this.getRuleContext(i, FromSoqlIdContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fromNameList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFromNameList) {
			listener.enterFromNameList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFromNameList) {
			listener.exitFromNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFromNameList) {
			return visitor.visitFromNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromNameFieldNameContext extends ParserRuleContext {
	public fromNameSoqlId(): FromNameSoqlIdContext {
		return this.getRuleContext(0, FromNameSoqlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fromNameFieldName; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFromNameFieldName) {
			listener.enterFromNameFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFromNameFieldName) {
			listener.exitFromNameFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFromNameFieldName) {
			return visitor.visitFromNameFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromNameSoqlIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.Identifier, 0); }
	public USER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.USER, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NAME, 0); }
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fromNameSoqlId; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFromNameSoqlId) {
			listener.enterFromNameSoqlId(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFromNameSoqlId) {
			listener.exitFromNameSoqlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFromNameSoqlId) {
			return visitor.visitFromNameSoqlId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromSoqlIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.Identifier, 0); }
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fromSoqlId; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFromSoqlId) {
			listener.enterFromSoqlId(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFromSoqlId) {
			listener.exitFromSoqlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFromSoqlId) {
			return visitor.visitFromSoqlId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubFieldListContext extends ParserRuleContext {
	public subFieldEntry(): SubFieldEntryContext[];
	public subFieldEntry(i: number): SubFieldEntryContext;
	public subFieldEntry(i?: number): SubFieldEntryContext | SubFieldEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubFieldEntryContext);
		} else {
			return this.getRuleContext(i, SubFieldEntryContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_subFieldList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSubFieldList) {
			listener.enterSubFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSubFieldList) {
			listener.exitSubFieldList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSubFieldList) {
			return visitor.visitSubFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubFieldEntryContext extends ParserRuleContext {
	public subFieldEntryFieldName(): SubFieldEntryFieldNameContext | undefined {
		return this.tryGetRuleContext(0, SubFieldEntryFieldNameContext);
	}
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
	public soqlFunction(): SoqlFunctionContext | undefined {
		return this.tryGetRuleContext(0, SoqlFunctionContext);
	}
	public soqlId(): SoqlIdContext | undefined {
		return this.tryGetRuleContext(0, SoqlIdContext);
	}
	public typeOf(): TypeOfContext | undefined {
		return this.tryGetRuleContext(0, TypeOfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_subFieldEntry; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSubFieldEntry) {
			listener.enterSubFieldEntry(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSubFieldEntry) {
			listener.exitSubFieldEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSubFieldEntry) {
			return visitor.visitSubFieldEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubFieldEntryFieldNameContext extends ParserRuleContext {
	public subFieldEntrySoqlId(): SubFieldEntrySoqlIdContext[];
	public subFieldEntrySoqlId(i: number): SubFieldEntrySoqlIdContext;
	public subFieldEntrySoqlId(i?: number): SubFieldEntrySoqlIdContext | SubFieldEntrySoqlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubFieldEntrySoqlIdContext);
		} else {
			return this.getRuleContext(i, SubFieldEntrySoqlIdContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.DOT);
		} else {
			return this.getToken(SoqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_subFieldEntryFieldName; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSubFieldEntryFieldName) {
			listener.enterSubFieldEntryFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSubFieldEntryFieldName) {
			listener.exitSubFieldEntryFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSubFieldEntryFieldName) {
			return visitor.visitSubFieldEntryFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubFieldEntrySoqlIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.Identifier, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NAME, 0); }
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_subFieldEntrySoqlId; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSubFieldEntrySoqlId) {
			listener.enterSubFieldEntrySoqlId(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSubFieldEntrySoqlId) {
			listener.exitSubFieldEntrySoqlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSubFieldEntrySoqlId) {
			return visitor.visitSubFieldEntrySoqlId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoqlFieldsParameterContext extends ParserRuleContext {
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ALL, 0); }
	public CUSTOM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CUSTOM, 0); }
	public STANDARD(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.STANDARD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_soqlFieldsParameter; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSoqlFieldsParameter) {
			listener.enterSoqlFieldsParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSoqlFieldsParameter) {
			listener.exitSoqlFieldsParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSoqlFieldsParameter) {
			return visitor.visitSoqlFieldsParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoqlFunctionContext extends ParserRuleContext {
	public AVG(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AVG, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.COUNT, 0); }
	public COUNT_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.COUNT_DISTINCT, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MAX, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUM, 0); }
	public TOLABEL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TOLABEL, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FORMAT, 0); }
	public CALENDAR_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CALENDAR_MONTH, 0); }
	public dateFieldName(): DateFieldNameContext | undefined {
		return this.tryGetRuleContext(0, DateFieldNameContext);
	}
	public CALENDAR_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CALENDAR_QUARTER, 0); }
	public CALENDAR_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CALENDAR_YEAR, 0); }
	public DAY_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_IN_MONTH, 0); }
	public DAY_IN_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_IN_WEEK, 0); }
	public DAY_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_IN_YEAR, 0); }
	public DAY_ONLY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_ONLY, 0); }
	public FISCAL_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FISCAL_MONTH, 0); }
	public FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FISCAL_QUARTER, 0); }
	public FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FISCAL_YEAR, 0); }
	public HOUR_IN_DAY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.HOUR_IN_DAY, 0); }
	public WEEK_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WEEK_IN_MONTH, 0); }
	public WEEK_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WEEK_IN_YEAR, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FIELDS, 0); }
	public soqlFieldsParameter(): SoqlFieldsParameterContext | undefined {
		return this.tryGetRuleContext(0, SoqlFieldsParameterContext);
	}
	public DISTANCE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DISTANCE, 0); }
	public locationValue(): LocationValueContext[];
	public locationValue(i: number): LocationValueContext;
	public locationValue(i?: number): LocationValueContext | LocationValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocationValueContext);
		} else {
			return this.getRuleContext(i, LocationValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_soqlFunction; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSoqlFunction) {
			listener.enterSoqlFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSoqlFunction) {
			listener.exitSoqlFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSoqlFunction) {
			return visitor.visitSoqlFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateFieldNameContext extends ParserRuleContext {
	public CONVERT_TIMEZONE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CONVERT_TIMEZONE, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LPAREN, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_dateFieldName; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterDateFieldName) {
			listener.enterDateFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitDateFieldName) {
			listener.exitDateFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitDateFieldName) {
			return visitor.visitDateFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocationValueContext extends ParserRuleContext {
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public GEOLOCATION(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GEOLOCATION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LPAREN, 0); }
	public coordinateValue(): CoordinateValueContext[];
	public coordinateValue(i: number): CoordinateValueContext;
	public coordinateValue(i?: number): CoordinateValueContext | CoordinateValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoordinateValueContext);
		} else {
			return this.getRuleContext(i, CoordinateValueContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.COMMA, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_locationValue; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterLocationValue) {
			listener.enterLocationValue(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitLocationValue) {
			listener.exitLocationValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitLocationValue) {
			return visitor.visitLocationValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CoordinateValueContext extends ParserRuleContext {
	public signedNumber(): SignedNumberContext {
		return this.getRuleContext(0, SignedNumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_coordinateValue; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterCoordinateValue) {
			listener.enterCoordinateValue(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitCoordinateValue) {
			listener.exitCoordinateValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitCoordinateValue) {
			return visitor.visitCoordinateValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeOfContext extends ParserRuleContext {
	public TYPEOF(): TerminalNode { return this.getToken(SoqlParser.TYPEOF, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public END(): TerminalNode { return this.getToken(SoqlParser.END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public elseClause(): ElseClauseContext | undefined {
		return this.tryGetRuleContext(0, ElseClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_typeOf; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterTypeOf) {
			listener.enterTypeOf(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitTypeOf) {
			listener.exitTypeOf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitTypeOf) {
			return visitor.visitTypeOf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(SoqlParser.WHEN, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public THEN(): TerminalNode { return this.getToken(SoqlParser.THEN, 0); }
	public fieldNameList(): FieldNameListContext {
		return this.getRuleContext(0, FieldNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitWhenClause) {
			listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseClauseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(SoqlParser.ELSE, 0); }
	public fieldNameList(): FieldNameListContext {
		return this.getRuleContext(0, FieldNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_elseClause; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterElseClause) {
			listener.enterElseClause(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitElseClause) {
			listener.exitElseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitElseClause) {
			return visitor.visitElseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNameListContext extends ParserRuleContext {
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fieldNameList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFieldNameList) {
			listener.enterFieldNameList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFieldNameList) {
			listener.exitFieldNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFieldNameList) {
			return visitor.visitFieldNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingScopeContext extends ParserRuleContext {
	public USING(): TerminalNode { return this.getToken(SoqlParser.USING, 0); }
	public SCOPE(): TerminalNode { return this.getToken(SoqlParser.SCOPE, 0); }
	public soqlId(): SoqlIdContext {
		return this.getRuleContext(0, SoqlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_usingScope; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterUsingScope) {
			listener.enterUsingScope(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitUsingScope) {
			listener.exitUsingScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitUsingScope) {
			return visitor.visitUsingScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(SoqlParser.WHERE, 0); }
	public logicalExpression(): LogicalExpressionContext {
		return this.getRuleContext(0, LogicalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_whereClause; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterWhereClause) {
			listener.enterWhereClause(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitWhereClause) {
			listener.exitWhereClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitWhereClause) {
			return visitor.visitWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext[];
	public conditionalExpression(i: number): ConditionalExpressionContext;
	public conditionalExpression(i?: number): ConditionalExpressionContext | ConditionalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalExpressionContext);
		} else {
			return this.getRuleContext(i, ConditionalExpressionContext);
		}
	}
	public andOrSoql(): AndOrSoqlContext[];
	public andOrSoql(i: number): AndOrSoqlContext;
	public andOrSoql(i?: number): AndOrSoqlContext | AndOrSoqlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndOrSoqlContext);
		} else {
			return this.getRuleContext(i, AndOrSoqlContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_logicalExpression; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterLogicalExpression) {
			listener.enterLogicalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitLogicalExpression) {
			listener.exitLogicalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalExpression) {
			return visitor.visitLogicalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndOrSoqlContext extends ParserRuleContext {
	public SOQLAND(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SOQLAND, 0); }
	public SOQLOR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SOQLOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_andOrSoql; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterAndOrSoql) {
			listener.enterAndOrSoql(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitAndOrSoql) {
			listener.exitAndOrSoql(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitAndOrSoql) {
			return visitor.visitAndOrSoql(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LPAREN, 0); }
	public logicalExpression(): LogicalExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RPAREN, 0); }
	public fieldExpression(): FieldExpressionContext | undefined {
		return this.tryGetRuleContext(0, FieldExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldExpressionContext extends ParserRuleContext {
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public comparisonOperator(): ComparisonOperatorContext | undefined {
		return this.tryGetRuleContext(0, ComparisonOperatorContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public soqlFunction(): SoqlFunctionContext | undefined {
		return this.tryGetRuleContext(0, SoqlFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fieldExpression; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFieldExpression) {
			listener.enterFieldExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFieldExpression) {
			listener.exitFieldExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFieldExpression) {
			return visitor.visitFieldExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ASSIGN, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NOTEQUAL, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GT, 0); }
	public LESSANDGREATER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LESSANDGREATER, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LIKE, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NOT, 0); }
	public INCLUDES(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INCLUDES, 0); }
	public EXCLUDES(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.EXCLUDES, 0); }
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NULL, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BooleanLiteral, 0); }
	public signedNumber(): SignedNumberContext | undefined {
		return this.tryGetRuleContext(0, SignedNumberContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.StringLiteral, 0); }
	public DateLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DateLiteral, 0); }
	public DateTimeLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DateTimeLiteral, 0); }
	public dateFormula(): DateFormulaContext | undefined {
		return this.tryGetRuleContext(0, DateFormulaContext);
	}
	public IntegralCurrencyLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IntegralCurrencyLiteral, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DOT, 0); }
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IntegerLiteral, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LPAREN, 0); }
	public subQuery(): SubQueryContext | undefined {
		return this.tryGetRuleContext(0, SubQueryContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RPAREN, 0); }
	public valueList(): ValueListContext | undefined {
		return this.tryGetRuleContext(0, ValueListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_value; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SoqlParser.LPAREN, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(SoqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_valueList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterValueList) {
			listener.enterValueList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitValueList) {
			listener.exitValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitValueList) {
			return visitor.visitValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedNumberContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IntegerLiteral, 0); }
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NumberLiteral, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_signedNumber; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSignedNumber) {
			listener.enterSignedNumber(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSignedNumber) {
			listener.exitSignedNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSignedNumber) {
			return visitor.visitSignedNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithClauseContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(SoqlParser.WITH, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DATA, 0); }
	public CATEGORY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CATEGORY, 0); }
	public filteringExpression(): FilteringExpressionContext | undefined {
		return this.tryGetRuleContext(0, FilteringExpressionContext);
	}
	public SECURITY_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SECURITY_ENFORCED, 0); }
	public SYSTEM_MODE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SYSTEM_MODE, 0); }
	public USER_MODE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.USER_MODE, 0); }
	public logicalExpression(): LogicalExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_withClause; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterWithClause) {
			listener.enterWithClause(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitWithClause) {
			listener.exitWithClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitWithClause) {
			return visitor.visitWithClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilteringExpressionContext extends ParserRuleContext {
	public dataCategorySelection(): DataCategorySelectionContext[];
	public dataCategorySelection(i: number): DataCategorySelectionContext;
	public dataCategorySelection(i?: number): DataCategorySelectionContext | DataCategorySelectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataCategorySelectionContext);
		} else {
			return this.getRuleContext(i, DataCategorySelectionContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.AND);
		} else {
			return this.getToken(SoqlParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_filteringExpression; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFilteringExpression) {
			listener.enterFilteringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFilteringExpression) {
			listener.exitFilteringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFilteringExpression) {
			return visitor.visitFilteringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataCategorySelectionContext extends ParserRuleContext {
	public soqlId(): SoqlIdContext {
		return this.getRuleContext(0, SoqlIdContext);
	}
	public filteringSelector(): FilteringSelectorContext {
		return this.getRuleContext(0, FilteringSelectorContext);
	}
	public dataCategoryName(): DataCategoryNameContext {
		return this.getRuleContext(0, DataCategoryNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_dataCategorySelection; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterDataCategorySelection) {
			listener.enterDataCategorySelection(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitDataCategorySelection) {
			listener.exitDataCategorySelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitDataCategorySelection) {
			return visitor.visitDataCategorySelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataCategoryNameContext extends ParserRuleContext {
	public soqlId(): SoqlIdContext[];
	public soqlId(i: number): SoqlIdContext;
	public soqlId(i?: number): SoqlIdContext | SoqlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoqlIdContext);
		} else {
			return this.getRuleContext(i, SoqlIdContext);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.LPAREN);
		} else {
			return this.getToken(SoqlParser.LPAREN, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_dataCategoryName; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterDataCategoryName) {
			listener.enterDataCategoryName(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitDataCategoryName) {
			listener.exitDataCategoryName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitDataCategoryName) {
			return visitor.visitDataCategoryName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilteringSelectorContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AT, 0); }
	public ABOVE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ABOVE, 0); }
	public BELOW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BELOW, 0); }
	public ABOVE_OR_BELOW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ABOVE_OR_BELOW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_filteringSelector; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFilteringSelector) {
			listener.enterFilteringSelector(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFilteringSelector) {
			listener.exitFilteringSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFilteringSelector) {
			return visitor.visitFilteringSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByClauseContext extends ParserRuleContext {
	public GROUP(): TerminalNode { return this.getToken(SoqlParser.GROUP, 0); }
	public BY(): TerminalNode { return this.getToken(SoqlParser.BY, 0); }
	public selectList(): SelectListContext | undefined {
		return this.tryGetRuleContext(0, SelectListContext);
	}
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.HAVING, 0); }
	public logicalExpression(): LogicalExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalExpressionContext);
	}
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ROLLUP, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LPAREN, 0); }
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CUBE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_groupByClause; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterGroupByClause) {
			listener.enterGroupByClause(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitGroupByClause) {
			listener.exitGroupByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitGroupByClause) {
			return visitor.visitGroupByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByClauseContext extends ParserRuleContext {
	public ORDER(): TerminalNode { return this.getToken(SoqlParser.ORDER, 0); }
	public BY(): TerminalNode { return this.getToken(SoqlParser.BY, 0); }
	public fieldOrderList(): FieldOrderListContext {
		return this.getRuleContext(0, FieldOrderListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_orderByClause; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterOrderByClause) {
			listener.enterOrderByClause(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitOrderByClause) {
			listener.exitOrderByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitOrderByClause) {
			return visitor.visitOrderByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOrderListContext extends ParserRuleContext {
	public fieldOrder(): FieldOrderContext[];
	public fieldOrder(i: number): FieldOrderContext;
	public fieldOrder(i?: number): FieldOrderContext | FieldOrderContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldOrderContext);
		} else {
			return this.getRuleContext(i, FieldOrderContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fieldOrderList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFieldOrderList) {
			listener.enterFieldOrderList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFieldOrderList) {
			listener.exitFieldOrderList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFieldOrderList) {
			return visitor.visitFieldOrderList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOrderContext extends ParserRuleContext {
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NULLS, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DESC, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST, 0); }
	public soqlFunction(): SoqlFunctionContext | undefined {
		return this.tryGetRuleContext(0, SoqlFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fieldOrder; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFieldOrder) {
			listener.enterFieldOrder(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFieldOrder) {
			listener.exitFieldOrder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFieldOrder) {
			return visitor.visitFieldOrder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitClauseContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(SoqlParser.LIMIT, 0); }
	public IntegerLiteral(): TerminalNode { return this.getToken(SoqlParser.IntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_limitClause; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterLimitClause) {
			listener.enterLimitClause(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitLimitClause) {
			listener.exitLimitClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitLimitClause) {
			return visitor.visitLimitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OffsetClauseContext extends ParserRuleContext {
	public OFFSET(): TerminalNode { return this.getToken(SoqlParser.OFFSET, 0); }
	public IntegerLiteral(): TerminalNode { return this.getToken(SoqlParser.IntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_offsetClause; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterOffsetClause) {
			listener.enterOffsetClause(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitOffsetClause) {
			listener.exitOffsetClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitOffsetClause) {
			return visitor.visitOffsetClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AllRowsClauseContext extends ParserRuleContext {
	public ALL(): TerminalNode { return this.getToken(SoqlParser.ALL, 0); }
	public ROWS(): TerminalNode { return this.getToken(SoqlParser.ROWS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_allRowsClause; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterAllRowsClause) {
			listener.enterAllRowsClause(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitAllRowsClause) {
			listener.exitAllRowsClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitAllRowsClause) {
			return visitor.visitAllRowsClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForClausesContext extends ParserRuleContext {
	public FOR(): TerminalNode[];
	public FOR(i: number): TerminalNode;
	public FOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.FOR);
		} else {
			return this.getToken(SoqlParser.FOR, i);
		}
	}
	public VIEW(): TerminalNode[];
	public VIEW(i: number): TerminalNode;
	public VIEW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.VIEW);
		} else {
			return this.getToken(SoqlParser.VIEW, i);
		}
	}
	public UPDATE(): TerminalNode[];
	public UPDATE(i: number): TerminalNode;
	public UPDATE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.UPDATE);
		} else {
			return this.getToken(SoqlParser.UPDATE, i);
		}
	}
	public REFERENCE(): TerminalNode[];
	public REFERENCE(i: number): TerminalNode;
	public REFERENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.REFERENCE);
		} else {
			return this.getToken(SoqlParser.REFERENCE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_forClauses; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterForClauses) {
			listener.enterForClauses(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitForClauses) {
			listener.exitForClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitForClauses) {
			return visitor.visitForClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateFormulaContext extends ParserRuleContext {
	public YESTERDAY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.YESTERDAY, 0); }
	public TODAY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TODAY, 0); }
	public TOMORROW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TOMORROW, 0); }
	public LAST_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_WEEK, 0); }
	public THIS_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_WEEK, 0); }
	public NEXT_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_WEEK, 0); }
	public LAST_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_MONTH, 0); }
	public THIS_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_MONTH, 0); }
	public NEXT_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_MONTH, 0); }
	public LAST_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_90_DAYS, 0); }
	public NEXT_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_90_DAYS, 0); }
	public LAST_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_DAYS_N, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.COLON, 0); }
	public signedInteger(): SignedIntegerContext | undefined {
		return this.tryGetRuleContext(0, SignedIntegerContext);
	}
	public NEXT_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_DAYS_N, 0); }
	public N_DAYS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_DAYS_AGO_N, 0); }
	public NEXT_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_WEEKS_N, 0); }
	public LAST_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_WEEKS_N, 0); }
	public N_WEEKS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_WEEKS_AGO_N, 0); }
	public NEXT_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_MONTHS_N, 0); }
	public LAST_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_MONTHS_N, 0); }
	public N_MONTHS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_MONTHS_AGO_N, 0); }
	public THIS_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_QUARTER, 0); }
	public LAST_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_QUARTER, 0); }
	public NEXT_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_QUARTER, 0); }
	public NEXT_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_QUARTERS_N, 0); }
	public LAST_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_QUARTERS_N, 0); }
	public N_QUARTERS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_QUARTERS_AGO_N, 0); }
	public THIS_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_YEAR, 0); }
	public LAST_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_YEAR, 0); }
	public NEXT_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_YEAR, 0); }
	public NEXT_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_YEARS_N, 0); }
	public LAST_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_YEARS_N, 0); }
	public N_YEARS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_YEARS_AGO_N, 0); }
	public THIS_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_FISCAL_QUARTER, 0); }
	public LAST_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_FISCAL_QUARTER, 0); }
	public NEXT_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_FISCAL_QUARTER, 0); }
	public NEXT_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_FISCAL_QUARTERS_N, 0); }
	public LAST_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_FISCAL_QUARTERS_N, 0); }
	public N_FISCAL_QUARTERS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_FISCAL_QUARTERS_AGO_N, 0); }
	public THIS_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_FISCAL_YEAR, 0); }
	public LAST_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_FISCAL_YEAR, 0); }
	public NEXT_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_FISCAL_YEAR, 0); }
	public NEXT_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_FISCAL_YEARS_N, 0); }
	public LAST_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_FISCAL_YEARS_N, 0); }
	public N_FISCAL_YEARS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_FISCAL_YEARS_AGO_N, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_dateFormula; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterDateFormula) {
			listener.enterDateFormula(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitDateFormula) {
			listener.exitDateFormula(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitDateFormula) {
			return visitor.visitDateFormula(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedIntegerContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(SoqlParser.IntegerLiteral, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_signedInteger; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSignedInteger) {
			listener.enterSignedInteger(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSignedInteger) {
			listener.exitSignedInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSignedInteger) {
			return visitor.visitSignedInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoqlIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.Identifier, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NAME, 0); }
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_soqlId; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSoqlId) {
			listener.enterSoqlId(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSoqlId) {
			listener.exitSoqlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSoqlId) {
			return visitor.visitSoqlId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoslLiteralContext extends ParserRuleContext {
	public FindLiteral(): TerminalNode { return this.getToken(SoqlParser.FindLiteral, 0); }
	public soslClauses(): SoslClausesContext {
		return this.getRuleContext(0, SoslClausesContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(SoqlParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_soslLiteral; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSoslLiteral) {
			listener.enterSoslLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSoslLiteral) {
			listener.exitSoslLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSoslLiteral) {
			return visitor.visitSoslLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoslLiteralAltContext extends ParserRuleContext {
	public FindLiteralAlt(): TerminalNode { return this.getToken(SoqlParser.FindLiteralAlt, 0); }
	public soslClauses(): SoslClausesContext {
		return this.getRuleContext(0, SoslClausesContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(SoqlParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_soslLiteralAlt; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSoslLiteralAlt) {
			listener.enterSoslLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSoslLiteralAlt) {
			listener.exitSoslLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSoslLiteralAlt) {
			return visitor.visitSoslLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoslClausesContext extends ParserRuleContext {
	public IN(): TerminalNode[];
	public IN(i: number): TerminalNode;
	public IN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.IN);
		} else {
			return this.getToken(SoqlParser.IN, i);
		}
	}
	public searchGroup(): SearchGroupContext | undefined {
		return this.tryGetRuleContext(0, SearchGroupContext);
	}
	public RETURNING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RETURNING, 0); }
	public fieldSpecList(): FieldSpecListContext | undefined {
		return this.tryGetRuleContext(0, FieldSpecListContext);
	}
	public WITH(): TerminalNode[];
	public WITH(i: number): TerminalNode;
	public WITH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.WITH);
		} else {
			return this.getToken(SoqlParser.WITH, i);
		}
	}
	public DIVISION(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DIVISION, 0); }
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.ASSIGN);
		} else {
			return this.getToken(SoqlParser.ASSIGN, i);
		}
	}
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.StringLiteral);
		} else {
			return this.getToken(SoqlParser.StringLiteral, i);
		}
	}
	public DATA(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DATA, 0); }
	public CATEGORY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CATEGORY, 0); }
	public filteringExpression(): FilteringExpressionContext | undefined {
		return this.tryGetRuleContext(0, FilteringExpressionContext);
	}
	public SNIPPET(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SNIPPET, 0); }
	public NETWORK(): TerminalNode[];
	public NETWORK(i: number): TerminalNode;
	public NETWORK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.NETWORK);
		} else {
			return this.getToken(SoqlParser.NETWORK, i);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.LPAREN);
		} else {
			return this.getToken(SoqlParser.LPAREN, i);
		}
	}
	public networkList(): NetworkListContext | undefined {
		return this.tryGetRuleContext(0, NetworkListContext);
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.RPAREN);
		} else {
			return this.getToken(SoqlParser.RPAREN, i);
		}
	}
	public PRICEBOOKID(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PRICEBOOKID, 0); }
	public METADATA(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.METADATA, 0); }
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.UPDATE, 0); }
	public updateList(): UpdateListContext | undefined {
		return this.tryGetRuleContext(0, UpdateListContext);
	}
	public TARGET_LENGTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TARGET_LENGTH, 0); }
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_soslClauses; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSoslClauses) {
			listener.enterSoslClauses(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSoslClauses) {
			listener.exitSoslClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSoslClauses) {
			return visitor.visitSoslClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SearchGroupContext extends ParserRuleContext {
	public FIELDS(): TerminalNode { return this.getToken(SoqlParser.FIELDS, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ALL, 0); }
	public EMAIL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.EMAIL, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NAME, 0); }
	public PHONE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PHONE, 0); }
	public SIDEBAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SIDEBAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_searchGroup; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSearchGroup) {
			listener.enterSearchGroup(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSearchGroup) {
			listener.exitSearchGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSearchGroup) {
			return visitor.visitSearchGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSpecListContext extends ParserRuleContext {
	public fieldSpec(): FieldSpecContext {
		return this.getRuleContext(0, FieldSpecContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	public fieldSpecList(): FieldSpecListContext[];
	public fieldSpecList(i: number): FieldSpecListContext;
	public fieldSpecList(i?: number): FieldSpecListContext | FieldSpecListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldSpecListContext);
		} else {
			return this.getRuleContext(i, FieldSpecListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fieldSpecList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFieldSpecList) {
			listener.enterFieldSpecList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFieldSpecList) {
			listener.exitFieldSpecList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFieldSpecList) {
			return visitor.visitFieldSpecList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSpecContext extends ParserRuleContext {
	public soslId(): SoslIdContext[];
	public soslId(i: number): SoslIdContext;
	public soslId(i?: number): SoslIdContext | SoslIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoslIdContext);
		} else {
			return this.getRuleContext(i, SoslIdContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LPAREN, 0); }
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RPAREN, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WHERE, 0); }
	public logicalExpression(): LogicalExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalExpressionContext);
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.USING, 0); }
	public LISTVIEW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LISTVIEW, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ASSIGN, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BY, 0); }
	public fieldOrderList(): FieldOrderListContext | undefined {
		return this.tryGetRuleContext(0, FieldOrderListContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public offsetClause(): OffsetClauseContext | undefined {
		return this.tryGetRuleContext(0, OffsetClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fieldSpec; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFieldSpec) {
			listener.enterFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFieldSpec) {
			listener.exitFieldSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFieldSpec) {
			return visitor.visitFieldSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldListContext extends ParserRuleContext {
	public soslId(): SoslIdContext {
		return this.getRuleContext(0, SoslIdContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.COMMA);
		} else {
			return this.getToken(SoqlParser.COMMA, i);
		}
	}
	public fieldList(): FieldListContext[];
	public fieldList(i: number): FieldListContext;
	public fieldList(i?: number): FieldListContext | FieldListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldListContext);
		} else {
			return this.getRuleContext(i, FieldListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_fieldList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterFieldList) {
			listener.enterFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitFieldList) {
			listener.exitFieldList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitFieldList) {
			return visitor.visitFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateListContext extends ParserRuleContext {
	public updateType(): UpdateTypeContext {
		return this.getRuleContext(0, UpdateTypeContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.COMMA, 0); }
	public updateList(): UpdateListContext | undefined {
		return this.tryGetRuleContext(0, UpdateListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_updateList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterUpdateList) {
			listener.enterUpdateList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitUpdateList) {
			listener.exitUpdateList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateList) {
			return visitor.visitUpdateList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateTypeContext extends ParserRuleContext {
	public TRACKING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRACKING, 0); }
	public VIEWSTAT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.VIEWSTAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_updateType; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterUpdateType) {
			listener.enterUpdateType(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitUpdateType) {
			listener.exitUpdateType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateType) {
			return visitor.visitUpdateType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NetworkListContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(SoqlParser.StringLiteral, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.COMMA, 0); }
	public networkList(): NetworkListContext | undefined {
		return this.tryGetRuleContext(0, NetworkListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_networkList; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterNetworkList) {
			listener.enterNetworkList(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitNetworkList) {
			listener.exitNetworkList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitNetworkList) {
			return visitor.visitNetworkList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoslIdContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SoqlParser.DOT);
		} else {
			return this.getToken(SoqlParser.DOT, i);
		}
	}
	public soslId(): SoslIdContext[];
	public soslId(i: number): SoslIdContext;
	public soslId(i?: number): SoslIdContext | SoslIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoslIdContext);
		} else {
			return this.getRuleContext(i, SoslIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_soslId; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterSoslId) {
			listener.enterSoslId(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitSoslId) {
			listener.exitSoslId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitSoslId) {
			return visitor.visitSoslId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.Identifier, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AFTER, 0); }
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BEFORE, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GET, 0); }
	public INHERITED(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INHERITED, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INSTANCEOF, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SET, 0); }
	public SHARING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SHARING, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SWITCH, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRANSIENT, 0); }
	public TRIGGER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRIGGER, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WHEN, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WITH, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WITHOUT, 0); }
	public USER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.USER, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SYSTEM, 0); }
	public IntegralCurrencyLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IntegralCurrencyLiteral, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SELECT, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.COUNT, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FROM, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AS, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.USING, 0); }
	public SCOPE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SCOPE, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WHERE, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BY, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LIMIT, 0); }
	public SOQLAND(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SOQLAND, 0); }
	public SOQLOR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SOQLOR, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NOT, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AVG, 0); }
	public COUNT_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.COUNT_DISTINCT, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MAX, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUM, 0); }
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TYPEOF, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.END, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THEN, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LIKE, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IN, 0); }
	public INCLUDES(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INCLUDES, 0); }
	public EXCLUDES(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.EXCLUDES, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DESC, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NULLS, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GROUP, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ALL, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ROWS, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.VIEW, 0); }
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.HAVING, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ROLLUP, 0); }
	public TOLABEL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TOLABEL, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.OFFSET, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DATA, 0); }
	public CATEGORY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CATEGORY, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AT, 0); }
	public ABOVE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ABOVE, 0); }
	public BELOW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BELOW, 0); }
	public ABOVE_OR_BELOW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ABOVE_OR_BELOW, 0); }
	public SECURITY_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SECURITY_ENFORCED, 0); }
	public USER_MODE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.USER_MODE, 0); }
	public SYSTEM_MODE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SYSTEM_MODE, 0); }
	public REFERENCE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.REFERENCE, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CUBE, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FORMAT, 0); }
	public TRACKING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRACKING, 0); }
	public VIEWSTAT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.VIEWSTAT, 0); }
	public STANDARD(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.STANDARD, 0); }
	public CUSTOM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CUSTOM, 0); }
	public DISTANCE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DISTANCE, 0); }
	public GEOLOCATION(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GEOLOCATION, 0); }
	public CALENDAR_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CALENDAR_MONTH, 0); }
	public CALENDAR_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CALENDAR_QUARTER, 0); }
	public CALENDAR_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CALENDAR_YEAR, 0); }
	public DAY_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_IN_MONTH, 0); }
	public DAY_IN_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_IN_WEEK, 0); }
	public DAY_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_IN_YEAR, 0); }
	public DAY_ONLY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_ONLY, 0); }
	public FISCAL_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FISCAL_MONTH, 0); }
	public FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FISCAL_QUARTER, 0); }
	public FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FISCAL_YEAR, 0); }
	public HOUR_IN_DAY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.HOUR_IN_DAY, 0); }
	public WEEK_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WEEK_IN_MONTH, 0); }
	public WEEK_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WEEK_IN_YEAR, 0); }
	public CONVERT_TIMEZONE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CONVERT_TIMEZONE, 0); }
	public YESTERDAY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.YESTERDAY, 0); }
	public TODAY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TODAY, 0); }
	public TOMORROW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TOMORROW, 0); }
	public LAST_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_WEEK, 0); }
	public THIS_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_WEEK, 0); }
	public NEXT_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_WEEK, 0); }
	public LAST_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_MONTH, 0); }
	public THIS_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_MONTH, 0); }
	public NEXT_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_MONTH, 0); }
	public LAST_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_90_DAYS, 0); }
	public NEXT_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_90_DAYS, 0); }
	public LAST_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_DAYS_N, 0); }
	public NEXT_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_DAYS_N, 0); }
	public N_DAYS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_DAYS_AGO_N, 0); }
	public NEXT_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_WEEKS_N, 0); }
	public LAST_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_WEEKS_N, 0); }
	public N_WEEKS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_WEEKS_AGO_N, 0); }
	public NEXT_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_MONTHS_N, 0); }
	public LAST_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_MONTHS_N, 0); }
	public N_MONTHS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_MONTHS_AGO_N, 0); }
	public THIS_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_QUARTER, 0); }
	public LAST_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_QUARTER, 0); }
	public NEXT_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_QUARTER, 0); }
	public NEXT_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_QUARTERS_N, 0); }
	public LAST_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_QUARTERS_N, 0); }
	public N_QUARTERS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_QUARTERS_AGO_N, 0); }
	public THIS_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_YEAR, 0); }
	public LAST_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_YEAR, 0); }
	public NEXT_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_YEAR, 0); }
	public NEXT_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_YEARS_N, 0); }
	public LAST_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_YEARS_N, 0); }
	public N_YEARS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_YEARS_AGO_N, 0); }
	public THIS_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_FISCAL_QUARTER, 0); }
	public LAST_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_FISCAL_QUARTER, 0); }
	public NEXT_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_FISCAL_QUARTER, 0); }
	public NEXT_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_FISCAL_QUARTERS_N, 0); }
	public LAST_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_FISCAL_QUARTERS_N, 0); }
	public N_FISCAL_QUARTERS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_FISCAL_QUARTERS_AGO_N, 0); }
	public THIS_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_FISCAL_YEAR, 0); }
	public LAST_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_FISCAL_YEAR, 0); }
	public NEXT_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_FISCAL_YEAR, 0); }
	public NEXT_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_FISCAL_YEARS_N, 0); }
	public LAST_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_FISCAL_YEARS_N, 0); }
	public N_FISCAL_YEARS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_FISCAL_YEARS_AGO_N, 0); }
	public FIND(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FIND, 0); }
	public EMAIL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.EMAIL, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NAME, 0); }
	public PHONE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PHONE, 0); }
	public SIDEBAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SIDEBAR, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FIELDS, 0); }
	public METADATA(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.METADATA, 0); }
	public PRICEBOOKID(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PRICEBOOKID, 0); }
	public NETWORK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NETWORK, 0); }
	public SNIPPET(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SNIPPET, 0); }
	public TARGET_LENGTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TARGET_LENGTH, 0); }
	public DIVISION(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DIVISION, 0); }
	public RETURNING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RETURNING, 0); }
	public LISTVIEW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LISTVIEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_id; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnyIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.Identifier, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ABSTRACT, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AFTER, 0); }
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BEFORE, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BREAK, 0); }
	public CATCH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CATCH, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CLASS, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CONTINUE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DELETE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DO, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ELSE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ENUM, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.EXTENDS, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FINAL, 0); }
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FINALLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FOR, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GET, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GLOBAL, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IF, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IMPLEMENTS, 0); }
	public INHERITED(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INHERITED, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INSERT, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INSTANCEOF, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INTERFACE, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LIST, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MAP, 0); }
	public MERGE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MERGE, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEW, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NULL, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ON, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.OVERRIDE, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PRIVATE, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PROTECTED, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PUBLIC, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RETURN, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SET, 0); }
	public SHARING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SHARING, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.STATIC, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUPER, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SWITCH, 0); }
	public TESTMETHOD(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TESTMETHOD, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THROW, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRANSIENT, 0); }
	public TRIGGER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRIGGER, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRY, 0); }
	public UNDELETE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.UNDELETE, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.UPDATE, 0); }
	public UPSERT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.UPSERT, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.VIRTUAL, 0); }
	public WEBSERVICE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WEBSERVICE, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WHEN, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WHILE, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WITH, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WITHOUT, 0); }
	public USER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.USER, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SYSTEM, 0); }
	public IntegralCurrencyLiteral(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IntegralCurrencyLiteral, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SELECT, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.COUNT, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FROM, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AS, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.USING, 0); }
	public SCOPE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SCOPE, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WHERE, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BY, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LIMIT, 0); }
	public SOQLAND(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SOQLAND, 0); }
	public SOQLOR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SOQLOR, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NOT, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AVG, 0); }
	public COUNT_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.COUNT_DISTINCT, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.MAX, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SUM, 0); }
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TYPEOF, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.END, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THEN, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LIKE, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.IN, 0); }
	public INCLUDES(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.INCLUDES, 0); }
	public EXCLUDES(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.EXCLUDES, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DESC, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NULLS, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GROUP, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ALL, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ROWS, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.VIEW, 0); }
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.HAVING, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ROLLUP, 0); }
	public TOLABEL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TOLABEL, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.OFFSET, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DATA, 0); }
	public CATEGORY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CATEGORY, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.AT, 0); }
	public ABOVE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ABOVE, 0); }
	public BELOW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.BELOW, 0); }
	public ABOVE_OR_BELOW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ABOVE_OR_BELOW, 0); }
	public SECURITY_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SECURITY_ENFORCED, 0); }
	public SYSTEM_MODE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SYSTEM_MODE, 0); }
	public USER_MODE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.USER_MODE, 0); }
	public REFERENCE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.REFERENCE, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CUBE, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FORMAT, 0); }
	public TRACKING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TRACKING, 0); }
	public VIEWSTAT(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.VIEWSTAT, 0); }
	public STANDARD(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.STANDARD, 0); }
	public CUSTOM(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CUSTOM, 0); }
	public DISTANCE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DISTANCE, 0); }
	public GEOLOCATION(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.GEOLOCATION, 0); }
	public CALENDAR_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CALENDAR_MONTH, 0); }
	public CALENDAR_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CALENDAR_QUARTER, 0); }
	public CALENDAR_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CALENDAR_YEAR, 0); }
	public DAY_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_IN_MONTH, 0); }
	public DAY_IN_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_IN_WEEK, 0); }
	public DAY_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_IN_YEAR, 0); }
	public DAY_ONLY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DAY_ONLY, 0); }
	public FISCAL_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FISCAL_MONTH, 0); }
	public FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FISCAL_QUARTER, 0); }
	public FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FISCAL_YEAR, 0); }
	public HOUR_IN_DAY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.HOUR_IN_DAY, 0); }
	public WEEK_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WEEK_IN_MONTH, 0); }
	public WEEK_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.WEEK_IN_YEAR, 0); }
	public CONVERT_TIMEZONE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.CONVERT_TIMEZONE, 0); }
	public YESTERDAY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.YESTERDAY, 0); }
	public TODAY(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TODAY, 0); }
	public TOMORROW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TOMORROW, 0); }
	public LAST_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_WEEK, 0); }
	public THIS_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_WEEK, 0); }
	public NEXT_WEEK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_WEEK, 0); }
	public LAST_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_MONTH, 0); }
	public THIS_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_MONTH, 0); }
	public NEXT_MONTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_MONTH, 0); }
	public LAST_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_90_DAYS, 0); }
	public NEXT_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_90_DAYS, 0); }
	public LAST_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_DAYS_N, 0); }
	public NEXT_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_DAYS_N, 0); }
	public N_DAYS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_DAYS_AGO_N, 0); }
	public NEXT_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_WEEKS_N, 0); }
	public LAST_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_WEEKS_N, 0); }
	public N_WEEKS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_WEEKS_AGO_N, 0); }
	public NEXT_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_MONTHS_N, 0); }
	public LAST_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_MONTHS_N, 0); }
	public N_MONTHS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_MONTHS_AGO_N, 0); }
	public THIS_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_QUARTER, 0); }
	public LAST_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_QUARTER, 0); }
	public NEXT_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_QUARTER, 0); }
	public NEXT_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_QUARTERS_N, 0); }
	public LAST_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_QUARTERS_N, 0); }
	public N_QUARTERS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_QUARTERS_AGO_N, 0); }
	public THIS_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_YEAR, 0); }
	public LAST_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_YEAR, 0); }
	public NEXT_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_YEAR, 0); }
	public NEXT_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_YEARS_N, 0); }
	public LAST_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_YEARS_N, 0); }
	public N_YEARS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_YEARS_AGO_N, 0); }
	public THIS_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_FISCAL_QUARTER, 0); }
	public LAST_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_FISCAL_QUARTER, 0); }
	public NEXT_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_FISCAL_QUARTER, 0); }
	public NEXT_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_FISCAL_QUARTERS_N, 0); }
	public LAST_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_FISCAL_QUARTERS_N, 0); }
	public N_FISCAL_QUARTERS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_FISCAL_QUARTERS_AGO_N, 0); }
	public THIS_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.THIS_FISCAL_YEAR, 0); }
	public LAST_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_FISCAL_YEAR, 0); }
	public NEXT_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_FISCAL_YEAR, 0); }
	public NEXT_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NEXT_N_FISCAL_YEARS_N, 0); }
	public LAST_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LAST_N_FISCAL_YEARS_N, 0); }
	public N_FISCAL_YEARS_AGO_N(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.N_FISCAL_YEARS_AGO_N, 0); }
	public FIND(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FIND, 0); }
	public EMAIL(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.EMAIL, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NAME, 0); }
	public PHONE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PHONE, 0); }
	public SIDEBAR(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SIDEBAR, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.FIELDS, 0); }
	public METADATA(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.METADATA, 0); }
	public PRICEBOOKID(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.PRICEBOOKID, 0); }
	public NETWORK(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.NETWORK, 0); }
	public SNIPPET(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.SNIPPET, 0); }
	public TARGET_LENGTH(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.TARGET_LENGTH, 0); }
	public DIVISION(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.DIVISION, 0); }
	public RETURNING(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.RETURNING, 0); }
	public LISTVIEW(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.LISTVIEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SoqlParser.RULE_anyId; }
	// @Override
	public enterRule(listener: SoqlParserListener): void {
		if (listener.enterAnyId) {
			listener.enterAnyId(this);
		}
	}
	// @Override
	public exitRule(listener: SoqlParserListener): void {
		if (listener.exitAnyId) {
			listener.exitAnyId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SoqlParserVisitor<Result>): Result {
		if (visitor.visitAnyId) {
			return visitor.visitAnyId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


