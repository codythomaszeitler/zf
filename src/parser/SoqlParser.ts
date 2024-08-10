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
	public static readonly RULE_query = 0;
	public static readonly RULE_endOfQuery = 1;
	public static readonly RULE_selectOrSoqlId = 2;
	public static readonly RULE_fromOrSoqlId = 3;
	public static readonly RULE_subQuery = 4;
	public static readonly RULE_subQueryFromNameList = 5;
	public static readonly RULE_subQueryFromNameFieldName = 6;
	public static readonly RULE_subQueryFromNameSoqlId = 7;
	public static readonly RULE_selectList = 8;
	public static readonly RULE_selectEntry = 9;
	public static readonly RULE_fieldName = 10;
	public static readonly RULE_fromNameList = 11;
	public static readonly RULE_fromNameFieldName = 12;
	public static readonly RULE_fromNameSoqlId = 13;
	public static readonly RULE_fromSoqlId = 14;
	public static readonly RULE_subFieldList = 15;
	public static readonly RULE_subFieldEntry = 16;
	public static readonly RULE_subFieldEntryFieldName = 17;
	public static readonly RULE_subFieldEntrySoqlId = 18;
	public static readonly RULE_soqlFieldsParameter = 19;
	public static readonly RULE_soqlFunction = 20;
	public static readonly RULE_dateFieldName = 21;
	public static readonly RULE_locationValue = 22;
	public static readonly RULE_coordinateValue = 23;
	public static readonly RULE_typeOf = 24;
	public static readonly RULE_whenClause = 25;
	public static readonly RULE_elseClause = 26;
	public static readonly RULE_fieldNameList = 27;
	public static readonly RULE_usingScope = 28;
	public static readonly RULE_whereClause = 29;
	public static readonly RULE_logicalExpression = 30;
	public static readonly RULE_andOrSoql = 31;
	public static readonly RULE_conditionalExpression = 32;
	public static readonly RULE_fieldExpression = 33;
	public static readonly RULE_comparisonOperator = 34;
	public static readonly RULE_value = 35;
	public static readonly RULE_valueList = 36;
	public static readonly RULE_signedNumber = 37;
	public static readonly RULE_withClause = 38;
	public static readonly RULE_filteringExpression = 39;
	public static readonly RULE_dataCategorySelection = 40;
	public static readonly RULE_dataCategoryName = 41;
	public static readonly RULE_filteringSelector = 42;
	public static readonly RULE_groupByClause = 43;
	public static readonly RULE_orderByClause = 44;
	public static readonly RULE_fieldOrderList = 45;
	public static readonly RULE_fieldOrder = 46;
	public static readonly RULE_limitClause = 47;
	public static readonly RULE_offsetClause = 48;
	public static readonly RULE_allRowsClause = 49;
	public static readonly RULE_forClauses = 50;
	public static readonly RULE_dateFormula = 51;
	public static readonly RULE_signedInteger = 52;
	public static readonly RULE_soqlId = 53;
	public static readonly RULE_soslLiteral = 54;
	public static readonly RULE_soslLiteralAlt = 55;
	public static readonly RULE_soslClauses = 56;
	public static readonly RULE_searchGroup = 57;
	public static readonly RULE_fieldSpecList = 58;
	public static readonly RULE_fieldSpec = 59;
	public static readonly RULE_fieldList = 60;
	public static readonly RULE_updateList = 61;
	public static readonly RULE_updateType = 62;
	public static readonly RULE_networkList = 63;
	public static readonly RULE_soslId = 64;
	public static readonly RULE_id = 65;
	public static readonly RULE_anyId = 66;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"query", "endOfQuery", "selectOrSoqlId", "fromOrSoqlId", "subQuery", "subQueryFromNameList", 
		"subQueryFromNameFieldName", "subQueryFromNameSoqlId", "selectList", "selectEntry", 
		"fieldName", "fromNameList", "fromNameFieldName", "fromNameSoqlId", "fromSoqlId", 
		"subFieldList", "subFieldEntry", "subFieldEntryFieldName", "subFieldEntrySoqlId", 
		"soqlFieldsParameter", "soqlFunction", "dateFieldName", "locationValue", 
		"coordinateValue", "typeOf", "whenClause", "elseClause", "fieldNameList", 
		"usingScope", "whereClause", "logicalExpression", "andOrSoql", "conditionalExpression", 
		"fieldExpression", "comparisonOperator", "value", "valueList", "signedNumber", 
		"withClause", "filteringExpression", "dataCategorySelection", "dataCategoryName", 
		"filteringSelector", "groupByClause", "orderByClause", "fieldOrderList", 
		"fieldOrder", "limitClause", "offsetClause", "allRowsClause", "forClauses", 
		"dateFormula", "signedInteger", "soqlId", "soslLiteral", "soslLiteralAlt", 
		"soslClauses", "searchGroup", "fieldSpecList", "fieldSpec", "fieldList", 
		"updateList", "updateType", "networkList", "soslId", "id", "anyId",
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
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SoqlParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.selectOrSoqlId();
			this.state = 136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 135;
				this.selectList();
				}
				break;
			}
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 138;
				this.fromOrSoqlId();
				}
				break;
			}
			this.state = 142;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 141;
				this.fromNameList();
				}
				break;
			}
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.USING) {
				{
				this.state = 144;
				this.usingScope();
				}
			}

			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WHERE) {
				{
				this.state = 147;
				this.whereClause();
				}
			}

			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WITH) {
				{
				this.state = 150;
				this.withClause();
				}
			}

			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.GROUP) {
				{
				this.state = 153;
				this.groupByClause();
				}
			}

			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ORDER) {
				{
				this.state = 156;
				this.orderByClause();
				}
			}

			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LIMIT) {
				{
				this.state = 159;
				this.limitClause();
				}
			}

			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.OFFSET) {
				{
				this.state = 162;
				this.offsetClause();
				}
			}

			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ALL) {
				{
				this.state = 165;
				this.allRowsClause();
				}
			}

			this.state = 168;
			this.forClauses();
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.UPDATE) {
				{
				this.state = 169;
				this.match(SoqlParser.UPDATE);
				this.state = 170;
				this.updateList();
				}
			}

			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ZF_INTELLISENSE) {
				{
				this.state = 173;
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
		this.enterRule(_localctx, 2, SoqlParser.RULE_endOfQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
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
		this.enterRule(_localctx, 4, SoqlParser.RULE_selectOrSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
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
		this.enterRule(_localctx, 6, SoqlParser.RULE_fromOrSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
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
		this.enterRule(_localctx, 8, SoqlParser.RULE_subQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.selectOrSoqlId();
			this.state = 184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 183;
				this.subFieldList();
				}
				break;
			}
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 186;
				this.fromOrSoqlId();
				}
				break;
			}
			this.state = 190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 189;
				this.fromNameList();
				}
				break;
			}
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WHERE) {
				{
				this.state = 192;
				this.whereClause();
				}
			}

			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ORDER) {
				{
				this.state = 195;
				this.orderByClause();
				}
			}

			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LIMIT) {
				{
				this.state = 198;
				this.limitClause();
				}
			}

			this.state = 201;
			this.forClauses();
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.UPDATE) {
				{
				this.state = 202;
				this.match(SoqlParser.UPDATE);
				this.state = 203;
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
		this.enterRule(_localctx, 10, SoqlParser.RULE_subQueryFromNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.subQueryFromNameFieldName();
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.Identifier) {
				{
				this.state = 207;
				this.fromSoqlId();
				}
			}

			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 210;
				this.match(SoqlParser.COMMA);
				this.state = 211;
				this.subQueryFromNameFieldName();
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.Identifier) {
					{
					this.state = 212;
					this.fromSoqlId();
					}
				}

				}
				}
				this.state = 219;
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
		this.enterRule(_localctx, 12, SoqlParser.RULE_subQueryFromNameFieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.subQueryFromNameSoqlId();
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.DOT) {
				{
				{
				this.state = 221;
				this.match(SoqlParser.DOT);
				this.state = 222;
				this.subQueryFromNameSoqlId();
				}
				}
				this.state = 227;
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
		this.enterRule(_localctx, 14, SoqlParser.RULE_subQueryFromNameSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
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
		this.enterRule(_localctx, 16, SoqlParser.RULE_selectList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.selectEntry();
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 231;
				this.match(SoqlParser.COMMA);
				this.state = 233;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 232;
					this.selectEntry();
					}
					break;
				}
				}
				}
				this.state = 239;
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
		this.enterRule(_localctx, 18, SoqlParser.RULE_selectEntry);
		try {
			this.state = 248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
				this.fieldName();
				this.state = 242;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 241;
					this.match(SoqlParser.ZF_INTELLISENSE);
					}
					break;
				}
				}
				break;
			case SoqlParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 244;
				this.match(SoqlParser.LPAREN);
				this.state = 245;
				this.subQuery();
				this.state = 246;
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
		this.enterRule(_localctx, 20, SoqlParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.soqlId();
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.DOT) {
				{
				{
				this.state = 251;
				this.match(SoqlParser.DOT);
				this.state = 252;
				this.soqlId();
				}
				}
				this.state = 257;
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
		this.enterRule(_localctx, 22, SoqlParser.RULE_fromNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.fromNameFieldName();
			this.state = 260;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 259;
				this.fromSoqlId();
				}
				break;
			}
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 262;
				this.match(SoqlParser.COMMA);
				this.state = 263;
				this.fromNameFieldName();
				this.state = 265;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 264;
					this.fromSoqlId();
					}
					break;
				}
				}
				}
				this.state = 271;
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
		this.enterRule(_localctx, 24, SoqlParser.RULE_fromNameFieldName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
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
		this.enterRule(_localctx, 26, SoqlParser.RULE_fromNameSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
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
	public fromSoqlId(): FromSoqlIdContext {
		let _localctx: FromSoqlIdContext = new FromSoqlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SoqlParser.RULE_fromSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
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
		this.enterRule(_localctx, 30, SoqlParser.RULE_subFieldList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.subFieldEntry();
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 279;
				this.match(SoqlParser.COMMA);
				this.state = 280;
				this.subFieldEntry();
				}
				}
				this.state = 285;
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
		this.enterRule(_localctx, 32, SoqlParser.RULE_subFieldEntry);
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 286;
				this.subFieldEntryFieldName();
				this.state = 288;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 287;
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
				this.state = 290;
				this.soqlFunction();
				this.state = 292;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 291;
					this.soqlId();
					}
					break;
				}
				}
				break;
			case SoqlParser.TYPEOF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 294;
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
		this.enterRule(_localctx, 34, SoqlParser.RULE_subFieldEntryFieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.subFieldEntrySoqlId();
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.DOT) {
				{
				{
				this.state = 298;
				this.match(SoqlParser.DOT);
				this.state = 299;
				this.subFieldEntrySoqlId();
				}
				}
				this.state = 304;
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
		this.enterRule(_localctx, 36, SoqlParser.RULE_subFieldEntrySoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
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
		this.enterRule(_localctx, 38, SoqlParser.RULE_soqlFieldsParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
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
		this.enterRule(_localctx, 40, SoqlParser.RULE_soqlFunction);
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 309;
				this.match(SoqlParser.AVG);
				this.state = 310;
				this.match(SoqlParser.LPAREN);
				this.state = 311;
				this.fieldName();
				this.state = 312;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 314;
				this.match(SoqlParser.COUNT);
				this.state = 315;
				this.match(SoqlParser.LPAREN);
				this.state = 316;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 317;
				this.match(SoqlParser.COUNT);
				this.state = 318;
				this.match(SoqlParser.LPAREN);
				this.state = 319;
				this.fieldName();
				this.state = 320;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 322;
				this.match(SoqlParser.COUNT_DISTINCT);
				this.state = 323;
				this.match(SoqlParser.LPAREN);
				this.state = 324;
				this.fieldName();
				this.state = 325;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 327;
				this.match(SoqlParser.MIN);
				this.state = 328;
				this.match(SoqlParser.LPAREN);
				this.state = 329;
				this.fieldName();
				this.state = 330;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 332;
				this.match(SoqlParser.MAX);
				this.state = 333;
				this.match(SoqlParser.LPAREN);
				this.state = 334;
				this.fieldName();
				this.state = 335;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 337;
				this.match(SoqlParser.SUM);
				this.state = 338;
				this.match(SoqlParser.LPAREN);
				this.state = 339;
				this.fieldName();
				this.state = 340;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 342;
				this.match(SoqlParser.TOLABEL);
				this.state = 343;
				this.match(SoqlParser.LPAREN);
				this.state = 344;
				this.fieldName();
				this.state = 345;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 347;
				this.match(SoqlParser.FORMAT);
				this.state = 348;
				this.match(SoqlParser.LPAREN);
				this.state = 349;
				this.fieldName();
				this.state = 350;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 352;
				this.match(SoqlParser.CALENDAR_MONTH);
				this.state = 353;
				this.match(SoqlParser.LPAREN);
				this.state = 354;
				this.dateFieldName();
				this.state = 355;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 357;
				this.match(SoqlParser.CALENDAR_QUARTER);
				this.state = 358;
				this.match(SoqlParser.LPAREN);
				this.state = 359;
				this.dateFieldName();
				this.state = 360;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 362;
				this.match(SoqlParser.CALENDAR_YEAR);
				this.state = 363;
				this.match(SoqlParser.LPAREN);
				this.state = 364;
				this.dateFieldName();
				this.state = 365;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 367;
				this.match(SoqlParser.DAY_IN_MONTH);
				this.state = 368;
				this.match(SoqlParser.LPAREN);
				this.state = 369;
				this.dateFieldName();
				this.state = 370;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 372;
				this.match(SoqlParser.DAY_IN_WEEK);
				this.state = 373;
				this.match(SoqlParser.LPAREN);
				this.state = 374;
				this.dateFieldName();
				this.state = 375;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 377;
				this.match(SoqlParser.DAY_IN_YEAR);
				this.state = 378;
				this.match(SoqlParser.LPAREN);
				this.state = 379;
				this.dateFieldName();
				this.state = 380;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 382;
				this.match(SoqlParser.DAY_ONLY);
				this.state = 383;
				this.match(SoqlParser.LPAREN);
				this.state = 384;
				this.dateFieldName();
				this.state = 385;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 387;
				this.match(SoqlParser.FISCAL_MONTH);
				this.state = 388;
				this.match(SoqlParser.LPAREN);
				this.state = 389;
				this.dateFieldName();
				this.state = 390;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 392;
				this.match(SoqlParser.FISCAL_QUARTER);
				this.state = 393;
				this.match(SoqlParser.LPAREN);
				this.state = 394;
				this.dateFieldName();
				this.state = 395;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 397;
				this.match(SoqlParser.FISCAL_YEAR);
				this.state = 398;
				this.match(SoqlParser.LPAREN);
				this.state = 399;
				this.dateFieldName();
				this.state = 400;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 402;
				this.match(SoqlParser.HOUR_IN_DAY);
				this.state = 403;
				this.match(SoqlParser.LPAREN);
				this.state = 404;
				this.dateFieldName();
				this.state = 405;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 407;
				this.match(SoqlParser.WEEK_IN_MONTH);
				this.state = 408;
				this.match(SoqlParser.LPAREN);
				this.state = 409;
				this.dateFieldName();
				this.state = 410;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 412;
				this.match(SoqlParser.WEEK_IN_YEAR);
				this.state = 413;
				this.match(SoqlParser.LPAREN);
				this.state = 414;
				this.dateFieldName();
				this.state = 415;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 417;
				this.match(SoqlParser.FIELDS);
				this.state = 418;
				this.match(SoqlParser.LPAREN);
				this.state = 419;
				this.soqlFieldsParameter();
				this.state = 420;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 422;
				this.match(SoqlParser.DISTANCE);
				this.state = 423;
				this.match(SoqlParser.LPAREN);
				this.state = 424;
				this.locationValue();
				this.state = 425;
				this.match(SoqlParser.COMMA);
				this.state = 426;
				this.locationValue();
				this.state = 427;
				this.match(SoqlParser.COMMA);
				this.state = 428;
				this.match(SoqlParser.StringLiteral);
				this.state = 429;
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
		this.enterRule(_localctx, 42, SoqlParser.RULE_dateFieldName);
		try {
			this.state = 439;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.CONVERT_TIMEZONE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 433;
				this.match(SoqlParser.CONVERT_TIMEZONE);
				this.state = 434;
				this.match(SoqlParser.LPAREN);
				this.state = 435;
				this.fieldName();
				this.state = 436;
				this.match(SoqlParser.RPAREN);
				}
				break;
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 438;
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
		this.enterRule(_localctx, 44, SoqlParser.RULE_locationValue);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 441;
				this.fieldName();
				}
				break;
			case SoqlParser.GEOLOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 442;
				this.match(SoqlParser.GEOLOCATION);
				this.state = 443;
				this.match(SoqlParser.LPAREN);
				this.state = 444;
				this.coordinateValue();
				this.state = 445;
				this.match(SoqlParser.COMMA);
				this.state = 446;
				this.coordinateValue();
				this.state = 447;
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
		this.enterRule(_localctx, 46, SoqlParser.RULE_coordinateValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
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
		this.enterRule(_localctx, 48, SoqlParser.RULE_typeOf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(SoqlParser.TYPEOF);
			this.state = 454;
			this.fieldName();
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 455;
				this.whenClause();
				}
				}
				this.state = 458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SoqlParser.WHEN);
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ELSE) {
				{
				this.state = 460;
				this.elseClause();
				}
			}

			this.state = 463;
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
		this.enterRule(_localctx, 50, SoqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.match(SoqlParser.WHEN);
			this.state = 466;
			this.fieldName();
			this.state = 467;
			this.match(SoqlParser.THEN);
			this.state = 468;
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
		this.enterRule(_localctx, 52, SoqlParser.RULE_elseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this.match(SoqlParser.ELSE);
			this.state = 471;
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
		this.enterRule(_localctx, 54, SoqlParser.RULE_fieldNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.fieldName();
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 474;
				this.match(SoqlParser.COMMA);
				this.state = 475;
				this.fieldName();
				}
				}
				this.state = 480;
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
		this.enterRule(_localctx, 56, SoqlParser.RULE_usingScope);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(SoqlParser.USING);
			this.state = 482;
			this.match(SoqlParser.SCOPE);
			this.state = 483;
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
		this.enterRule(_localctx, 58, SoqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.match(SoqlParser.WHERE);
			this.state = 486;
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
		this.enterRule(_localctx, 60, SoqlParser.RULE_logicalExpression);
		let _la: number;
		try {
			this.state = 499;
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
				this.state = 488;
				this.conditionalExpression();
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.SOQLAND || _la === SoqlParser.SOQLOR) {
					{
					{
					this.state = 489;
					this.andOrSoql();
					this.state = 490;
					this.conditionalExpression();
					}
					}
					this.state = 496;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SoqlParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 497;
				this.match(SoqlParser.NOT);
				this.state = 498;
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
		this.enterRule(_localctx, 62, SoqlParser.RULE_andOrSoql);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
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
		this.enterRule(_localctx, 64, SoqlParser.RULE_conditionalExpression);
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 503;
				this.match(SoqlParser.LPAREN);
				this.state = 504;
				this.logicalExpression();
				this.state = 505;
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
				this.state = 507;
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
		this.enterRule(_localctx, 66, SoqlParser.RULE_fieldExpression);
		let _la: number;
		try {
			this.state = 521;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 510;
				this.fieldName();
				this.state = 512;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 511;
					this.comparisonOperator();
					}
					break;
				}
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.NULL || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SoqlParser.YESTERDAY - 138)) | (1 << (SoqlParser.TODAY - 138)) | (1 << (SoqlParser.TOMORROW - 138)) | (1 << (SoqlParser.LAST_WEEK - 138)) | (1 << (SoqlParser.THIS_WEEK - 138)) | (1 << (SoqlParser.NEXT_WEEK - 138)) | (1 << (SoqlParser.LAST_MONTH - 138)) | (1 << (SoqlParser.THIS_MONTH - 138)) | (1 << (SoqlParser.NEXT_MONTH - 138)) | (1 << (SoqlParser.LAST_90_DAYS - 138)) | (1 << (SoqlParser.NEXT_90_DAYS - 138)) | (1 << (SoqlParser.LAST_N_DAYS_N - 138)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 138)) | (1 << (SoqlParser.N_DAYS_AGO_N - 138)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 138)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 138)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 138)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 138)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 138)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 138)) | (1 << (SoqlParser.THIS_QUARTER - 138)) | (1 << (SoqlParser.LAST_QUARTER - 138)) | (1 << (SoqlParser.NEXT_QUARTER - 138)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 138)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 138)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 138)) | (1 << (SoqlParser.THIS_YEAR - 138)) | (1 << (SoqlParser.LAST_YEAR - 138)) | (1 << (SoqlParser.NEXT_YEAR - 138)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 138)) | (1 << (SoqlParser.LAST_N_YEARS_N - 138)) | (1 << (SoqlParser.N_YEARS_AGO_N - 138)))) !== 0) || ((((_la - 170)) & ~0x1F) === 0 && ((1 << (_la - 170)) & ((1 << (SoqlParser.THIS_FISCAL_QUARTER - 170)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 170)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 170)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 170)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 170)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 170)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 170)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 170)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 170)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 170)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 170)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 170)) | (1 << (SoqlParser.DateLiteral - 170)) | (1 << (SoqlParser.DateTimeLiteral - 170)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 170)) | (1 << (SoqlParser.IntegerLiteral - 170)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (SoqlParser.NumberLiteral - 203)) | (1 << (SoqlParser.BooleanLiteral - 203)) | (1 << (SoqlParser.StringLiteral - 203)) | (1 << (SoqlParser.LPAREN - 203)) | (1 << (SoqlParser.ADD - 203)) | (1 << (SoqlParser.SUB - 203)))) !== 0)) {
					{
					this.state = 514;
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
				this.state = 517;
				this.soqlFunction();
				this.state = 518;
				this.comparisonOperator();
				this.state = 519;
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
		this.enterRule(_localctx, 68, SoqlParser.RULE_comparisonOperator);
		try {
			this.state = 539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 523;
				this.match(SoqlParser.ASSIGN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 524;
				this.match(SoqlParser.NOTEQUAL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 525;
				this.match(SoqlParser.LT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 526;
				this.match(SoqlParser.GT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 527;
				this.match(SoqlParser.LT);
				this.state = 528;
				this.match(SoqlParser.ASSIGN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 529;
				this.match(SoqlParser.GT);
				this.state = 530;
				this.match(SoqlParser.ASSIGN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 531;
				this.match(SoqlParser.LESSANDGREATER);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 532;
				this.match(SoqlParser.LIKE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 533;
				this.match(SoqlParser.IN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 534;
				this.match(SoqlParser.NOT);
				this.state = 535;
				this.match(SoqlParser.IN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 536;
				this.match(SoqlParser.INCLUDES);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 537;
				this.match(SoqlParser.EXCLUDES);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 538;
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
		this.enterRule(_localctx, 70, SoqlParser.RULE_value);
		let _la: number;
		try {
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 541;
				this.match(SoqlParser.NULL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 542;
				this.match(SoqlParser.BooleanLiteral);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 543;
				this.signedNumber();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 544;
				this.match(SoqlParser.StringLiteral);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 545;
				this.match(SoqlParser.DateLiteral);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 546;
				this.match(SoqlParser.DateTimeLiteral);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 547;
				this.dateFormula();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 548;
				this.match(SoqlParser.IntegralCurrencyLiteral);
				this.state = 553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.DOT) {
					{
					this.state = 549;
					this.match(SoqlParser.DOT);
					this.state = 551;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SoqlParser.IntegerLiteral) {
						{
						this.state = 550;
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
				this.state = 555;
				this.match(SoqlParser.LPAREN);
				this.state = 556;
				this.subQuery();
				this.state = 557;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 559;
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
		this.enterRule(_localctx, 72, SoqlParser.RULE_valueList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(SoqlParser.LPAREN);
			this.state = 563;
			this.value();
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 564;
				this.match(SoqlParser.COMMA);
				this.state = 565;
				this.value();
				}
				}
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 571;
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
		this.enterRule(_localctx, 74, SoqlParser.RULE_signedNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ADD || _la === SoqlParser.SUB) {
				{
				this.state = 573;
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

			this.state = 576;
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
		this.enterRule(_localctx, 76, SoqlParser.RULE_withClause);
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 578;
				this.match(SoqlParser.WITH);
				this.state = 579;
				this.match(SoqlParser.DATA);
				this.state = 580;
				this.match(SoqlParser.CATEGORY);
				this.state = 581;
				this.filteringExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 582;
				this.match(SoqlParser.WITH);
				this.state = 583;
				this.match(SoqlParser.SECURITY_ENFORCED);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 584;
				this.match(SoqlParser.WITH);
				this.state = 585;
				this.match(SoqlParser.SYSTEM_MODE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 586;
				this.match(SoqlParser.WITH);
				this.state = 587;
				this.match(SoqlParser.USER_MODE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 588;
				this.match(SoqlParser.WITH);
				this.state = 589;
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
		this.enterRule(_localctx, 78, SoqlParser.RULE_filteringExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.dataCategorySelection();
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.AND) {
				{
				{
				this.state = 593;
				this.match(SoqlParser.AND);
				this.state = 594;
				this.dataCategorySelection();
				}
				}
				this.state = 599;
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
		this.enterRule(_localctx, 80, SoqlParser.RULE_dataCategorySelection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this.soqlId();
			this.state = 601;
			this.filteringSelector();
			this.state = 602;
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
		this.enterRule(_localctx, 82, SoqlParser.RULE_dataCategoryName);
		let _la: number;
		try {
			this.state = 616;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 604;
				this.soqlId();
				}
				break;
			case SoqlParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 605;
				this.match(SoqlParser.LPAREN);
				this.state = 606;
				this.soqlId();
				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.COMMA) {
					{
					{
					this.state = 607;
					this.match(SoqlParser.COMMA);
					this.state = 608;
					this.soqlId();
					}
					}
					this.state = 613;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 614;
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
		this.enterRule(_localctx, 84, SoqlParser.RULE_filteringSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
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
		this.enterRule(_localctx, 86, SoqlParser.RULE_groupByClause);
		let _la: number;
		try {
			this.state = 655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 620;
				this.match(SoqlParser.GROUP);
				this.state = 621;
				this.match(SoqlParser.BY);
				this.state = 622;
				this.selectList();
				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.HAVING) {
					{
					this.state = 623;
					this.match(SoqlParser.HAVING);
					this.state = 624;
					this.logicalExpression();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 627;
				this.match(SoqlParser.GROUP);
				this.state = 628;
				this.match(SoqlParser.BY);
				this.state = 629;
				this.match(SoqlParser.ROLLUP);
				this.state = 630;
				this.match(SoqlParser.LPAREN);
				this.state = 631;
				this.fieldName();
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.COMMA) {
					{
					{
					this.state = 632;
					this.match(SoqlParser.COMMA);
					this.state = 633;
					this.fieldName();
					}
					}
					this.state = 638;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 639;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 641;
				this.match(SoqlParser.GROUP);
				this.state = 642;
				this.match(SoqlParser.BY);
				this.state = 643;
				this.match(SoqlParser.CUBE);
				this.state = 644;
				this.match(SoqlParser.LPAREN);
				this.state = 645;
				this.fieldName();
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.COMMA) {
					{
					{
					this.state = 646;
					this.match(SoqlParser.COMMA);
					this.state = 647;
					this.fieldName();
					}
					}
					this.state = 652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 653;
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
		this.enterRule(_localctx, 88, SoqlParser.RULE_orderByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this.match(SoqlParser.ORDER);
			this.state = 658;
			this.match(SoqlParser.BY);
			this.state = 659;
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
		this.enterRule(_localctx, 90, SoqlParser.RULE_fieldOrderList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.fieldOrder();
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 662;
				this.match(SoqlParser.COMMA);
				this.state = 663;
				this.fieldOrder();
				}
				}
				this.state = 668;
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
		this.enterRule(_localctx, 92, SoqlParser.RULE_fieldOrder);
		let _la: number;
		try {
			this.state = 685;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 669;
				this.fieldName();
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ASC || _la === SoqlParser.DESC) {
					{
					this.state = 670;
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

				this.state = 675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.NULLS) {
					{
					this.state = 673;
					this.match(SoqlParser.NULLS);
					this.state = 674;
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
				this.state = 677;
				this.soqlFunction();
				this.state = 679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ASC || _la === SoqlParser.DESC) {
					{
					this.state = 678;
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

				this.state = 683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.NULLS) {
					{
					this.state = 681;
					this.match(SoqlParser.NULLS);
					this.state = 682;
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
		this.enterRule(_localctx, 94, SoqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.match(SoqlParser.LIMIT);
			this.state = 688;
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
		this.enterRule(_localctx, 96, SoqlParser.RULE_offsetClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.match(SoqlParser.OFFSET);
			this.state = 691;
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
		this.enterRule(_localctx, 98, SoqlParser.RULE_allRowsClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this.match(SoqlParser.ALL);
			this.state = 694;
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
		this.enterRule(_localctx, 100, SoqlParser.RULE_forClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.FOR) {
				{
				{
				this.state = 696;
				this.match(SoqlParser.FOR);
				this.state = 697;
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
				this.state = 702;
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
		this.enterRule(_localctx, 102, SoqlParser.RULE_dateFormula);
		try {
			this.state = 789;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.YESTERDAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.match(SoqlParser.YESTERDAY);
				}
				break;
			case SoqlParser.TODAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
				this.match(SoqlParser.TODAY);
				}
				break;
			case SoqlParser.TOMORROW:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 705;
				this.match(SoqlParser.TOMORROW);
				}
				break;
			case SoqlParser.LAST_WEEK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 706;
				this.match(SoqlParser.LAST_WEEK);
				}
				break;
			case SoqlParser.THIS_WEEK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 707;
				this.match(SoqlParser.THIS_WEEK);
				}
				break;
			case SoqlParser.NEXT_WEEK:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 708;
				this.match(SoqlParser.NEXT_WEEK);
				}
				break;
			case SoqlParser.LAST_MONTH:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 709;
				this.match(SoqlParser.LAST_MONTH);
				}
				break;
			case SoqlParser.THIS_MONTH:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 710;
				this.match(SoqlParser.THIS_MONTH);
				}
				break;
			case SoqlParser.NEXT_MONTH:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 711;
				this.match(SoqlParser.NEXT_MONTH);
				}
				break;
			case SoqlParser.LAST_90_DAYS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 712;
				this.match(SoqlParser.LAST_90_DAYS);
				}
				break;
			case SoqlParser.NEXT_90_DAYS:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 713;
				this.match(SoqlParser.NEXT_90_DAYS);
				}
				break;
			case SoqlParser.LAST_N_DAYS_N:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 714;
				this.match(SoqlParser.LAST_N_DAYS_N);
				this.state = 715;
				this.match(SoqlParser.COLON);
				this.state = 716;
				this.signedInteger();
				}
				break;
			case SoqlParser.NEXT_N_DAYS_N:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 717;
				this.match(SoqlParser.NEXT_N_DAYS_N);
				this.state = 718;
				this.match(SoqlParser.COLON);
				this.state = 719;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_DAYS_AGO_N:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 720;
				this.match(SoqlParser.N_DAYS_AGO_N);
				this.state = 721;
				this.match(SoqlParser.COLON);
				this.state = 722;
				this.signedInteger();
				}
				break;
			case SoqlParser.NEXT_N_WEEKS_N:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 723;
				this.match(SoqlParser.NEXT_N_WEEKS_N);
				this.state = 724;
				this.match(SoqlParser.COLON);
				this.state = 725;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_WEEKS_N:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 726;
				this.match(SoqlParser.LAST_N_WEEKS_N);
				this.state = 727;
				this.match(SoqlParser.COLON);
				this.state = 728;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_WEEKS_AGO_N:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 729;
				this.match(SoqlParser.N_WEEKS_AGO_N);
				this.state = 730;
				this.match(SoqlParser.COLON);
				this.state = 731;
				this.signedInteger();
				}
				break;
			case SoqlParser.NEXT_N_MONTHS_N:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 732;
				this.match(SoqlParser.NEXT_N_MONTHS_N);
				this.state = 733;
				this.match(SoqlParser.COLON);
				this.state = 734;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_MONTHS_N:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 735;
				this.match(SoqlParser.LAST_N_MONTHS_N);
				this.state = 736;
				this.match(SoqlParser.COLON);
				this.state = 737;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_MONTHS_AGO_N:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 738;
				this.match(SoqlParser.N_MONTHS_AGO_N);
				this.state = 739;
				this.match(SoqlParser.COLON);
				this.state = 740;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_QUARTER:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 741;
				this.match(SoqlParser.THIS_QUARTER);
				}
				break;
			case SoqlParser.LAST_QUARTER:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 742;
				this.match(SoqlParser.LAST_QUARTER);
				}
				break;
			case SoqlParser.NEXT_QUARTER:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 743;
				this.match(SoqlParser.NEXT_QUARTER);
				}
				break;
			case SoqlParser.NEXT_N_QUARTERS_N:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 744;
				this.match(SoqlParser.NEXT_N_QUARTERS_N);
				this.state = 745;
				this.match(SoqlParser.COLON);
				this.state = 746;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_QUARTERS_N:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 747;
				this.match(SoqlParser.LAST_N_QUARTERS_N);
				this.state = 748;
				this.match(SoqlParser.COLON);
				this.state = 749;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_QUARTERS_AGO_N:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 750;
				this.match(SoqlParser.N_QUARTERS_AGO_N);
				this.state = 751;
				this.match(SoqlParser.COLON);
				this.state = 752;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_YEAR:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 753;
				this.match(SoqlParser.THIS_YEAR);
				}
				break;
			case SoqlParser.LAST_YEAR:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 754;
				this.match(SoqlParser.LAST_YEAR);
				}
				break;
			case SoqlParser.NEXT_YEAR:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 755;
				this.match(SoqlParser.NEXT_YEAR);
				}
				break;
			case SoqlParser.NEXT_N_YEARS_N:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 756;
				this.match(SoqlParser.NEXT_N_YEARS_N);
				this.state = 757;
				this.match(SoqlParser.COLON);
				this.state = 758;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_YEARS_N:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 759;
				this.match(SoqlParser.LAST_N_YEARS_N);
				this.state = 760;
				this.match(SoqlParser.COLON);
				this.state = 761;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_YEARS_AGO_N:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 762;
				this.match(SoqlParser.N_YEARS_AGO_N);
				this.state = 763;
				this.match(SoqlParser.COLON);
				this.state = 764;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 765;
				this.match(SoqlParser.THIS_FISCAL_QUARTER);
				}
				break;
			case SoqlParser.LAST_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 766;
				this.match(SoqlParser.LAST_FISCAL_QUARTER);
				}
				break;
			case SoqlParser.NEXT_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 767;
				this.match(SoqlParser.NEXT_FISCAL_QUARTER);
				}
				break;
			case SoqlParser.NEXT_N_FISCAL_QUARTERS_N:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 768;
				this.match(SoqlParser.NEXT_N_FISCAL_QUARTERS_N);
				this.state = 769;
				this.match(SoqlParser.COLON);
				this.state = 770;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_FISCAL_QUARTERS_N:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 771;
				this.match(SoqlParser.LAST_N_FISCAL_QUARTERS_N);
				this.state = 772;
				this.match(SoqlParser.COLON);
				this.state = 773;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_FISCAL_QUARTERS_AGO_N:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 774;
				this.match(SoqlParser.N_FISCAL_QUARTERS_AGO_N);
				this.state = 775;
				this.match(SoqlParser.COLON);
				this.state = 776;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 777;
				this.match(SoqlParser.THIS_FISCAL_YEAR);
				}
				break;
			case SoqlParser.LAST_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 778;
				this.match(SoqlParser.LAST_FISCAL_YEAR);
				}
				break;
			case SoqlParser.NEXT_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 779;
				this.match(SoqlParser.NEXT_FISCAL_YEAR);
				}
				break;
			case SoqlParser.NEXT_N_FISCAL_YEARS_N:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 780;
				this.match(SoqlParser.NEXT_N_FISCAL_YEARS_N);
				this.state = 781;
				this.match(SoqlParser.COLON);
				this.state = 782;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_FISCAL_YEARS_N:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 783;
				this.match(SoqlParser.LAST_N_FISCAL_YEARS_N);
				this.state = 784;
				this.match(SoqlParser.COLON);
				this.state = 785;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_FISCAL_YEARS_AGO_N:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 786;
				this.match(SoqlParser.N_FISCAL_YEARS_AGO_N);
				this.state = 787;
				this.match(SoqlParser.COLON);
				this.state = 788;
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
		this.enterRule(_localctx, 104, SoqlParser.RULE_signedInteger);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ADD || _la === SoqlParser.SUB) {
				{
				this.state = 791;
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

			this.state = 794;
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
		this.enterRule(_localctx, 106, SoqlParser.RULE_soqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
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
		this.enterRule(_localctx, 108, SoqlParser.RULE_soslLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this.match(SoqlParser.FindLiteral);
			this.state = 799;
			this.soslClauses();
			this.state = 800;
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
		this.enterRule(_localctx, 110, SoqlParser.RULE_soslLiteralAlt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 802;
			this.match(SoqlParser.FindLiteralAlt);
			this.state = 803;
			this.soslClauses();
			this.state = 804;
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
		this.enterRule(_localctx, 112, SoqlParser.RULE_soslClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.IN) {
				{
				this.state = 806;
				this.match(SoqlParser.IN);
				this.state = 807;
				this.searchGroup();
				}
			}

			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.RETURNING) {
				{
				this.state = 810;
				this.match(SoqlParser.RETURNING);
				this.state = 811;
				this.fieldSpecList();
				}
			}

			this.state = 818;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 814;
				this.match(SoqlParser.WITH);
				this.state = 815;
				this.match(SoqlParser.DIVISION);
				this.state = 816;
				this.match(SoqlParser.ASSIGN);
				this.state = 817;
				this.match(SoqlParser.StringLiteral);
				}
				break;
			}
			this.state = 824;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 820;
				this.match(SoqlParser.WITH);
				this.state = 821;
				this.match(SoqlParser.DATA);
				this.state = 822;
				this.match(SoqlParser.CATEGORY);
				this.state = 823;
				this.filteringExpression();
				}
				break;
			}
			this.state = 835;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 826;
				this.match(SoqlParser.WITH);
				this.state = 827;
				this.match(SoqlParser.SNIPPET);
				this.state = 833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.LPAREN) {
					{
					this.state = 828;
					this.match(SoqlParser.LPAREN);
					this.state = 829;
					this.match(SoqlParser.TARGET_LENGTH);
					this.state = 830;
					this.match(SoqlParser.ASSIGN);
					this.state = 831;
					this.match(SoqlParser.IntegerLiteral);
					this.state = 832;
					this.match(SoqlParser.RPAREN);
					}
				}

				}
				break;
			}
			this.state = 844;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 837;
				this.match(SoqlParser.WITH);
				this.state = 838;
				this.match(SoqlParser.NETWORK);
				this.state = 839;
				this.match(SoqlParser.IN);
				this.state = 840;
				this.match(SoqlParser.LPAREN);
				this.state = 841;
				this.networkList();
				this.state = 842;
				this.match(SoqlParser.RPAREN);
				}
				break;
			}
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 846;
				this.match(SoqlParser.WITH);
				this.state = 847;
				this.match(SoqlParser.NETWORK);
				this.state = 848;
				this.match(SoqlParser.ASSIGN);
				this.state = 849;
				this.match(SoqlParser.StringLiteral);
				}
				break;
			}
			this.state = 856;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 852;
				this.match(SoqlParser.WITH);
				this.state = 853;
				this.match(SoqlParser.PRICEBOOKID);
				this.state = 854;
				this.match(SoqlParser.ASSIGN);
				this.state = 855;
				this.match(SoqlParser.StringLiteral);
				}
				break;
			}
			this.state = 862;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WITH) {
				{
				this.state = 858;
				this.match(SoqlParser.WITH);
				this.state = 859;
				this.match(SoqlParser.METADATA);
				this.state = 860;
				this.match(SoqlParser.ASSIGN);
				this.state = 861;
				this.match(SoqlParser.StringLiteral);
				}
			}

			this.state = 865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LIMIT) {
				{
				this.state = 864;
				this.limitClause();
				}
			}

			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.UPDATE) {
				{
				this.state = 867;
				this.match(SoqlParser.UPDATE);
				this.state = 868;
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
		this.enterRule(_localctx, 114, SoqlParser.RULE_searchGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
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
			this.state = 872;
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
		this.enterRule(_localctx, 116, SoqlParser.RULE_fieldSpecList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this.fieldSpec();
			this.state = 879;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 875;
					this.match(SoqlParser.COMMA);
					this.state = 876;
					this.fieldSpecList();
					}
					}
				}
				this.state = 881;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
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
		this.enterRule(_localctx, 118, SoqlParser.RULE_fieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			this.soslId();
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LPAREN) {
				{
				this.state = 883;
				this.match(SoqlParser.LPAREN);
				this.state = 884;
				this.fieldList();
				this.state = 887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.WHERE) {
					{
					this.state = 885;
					this.match(SoqlParser.WHERE);
					this.state = 886;
					this.logicalExpression();
					}
				}

				this.state = 893;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.USING) {
					{
					this.state = 889;
					this.match(SoqlParser.USING);
					this.state = 890;
					this.match(SoqlParser.LISTVIEW);
					this.state = 891;
					this.match(SoqlParser.ASSIGN);
					this.state = 892;
					this.soslId();
					}
				}

				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ORDER) {
					{
					this.state = 895;
					this.match(SoqlParser.ORDER);
					this.state = 896;
					this.match(SoqlParser.BY);
					this.state = 897;
					this.fieldOrderList();
					}
				}

				this.state = 901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.LIMIT) {
					{
					this.state = 900;
					this.limitClause();
					}
				}

				this.state = 904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.OFFSET) {
					{
					this.state = 903;
					this.offsetClause();
					}
				}

				this.state = 906;
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
		this.enterRule(_localctx, 120, SoqlParser.RULE_fieldList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			this.soslId();
			this.state = 915;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 911;
					this.match(SoqlParser.COMMA);
					this.state = 912;
					this.fieldList();
					}
					}
				}
				this.state = 917;
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
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateList(): UpdateListContext {
		let _localctx: UpdateListContext = new UpdateListContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SoqlParser.RULE_updateList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 918;
			this.updateType();
			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.COMMA) {
				{
				this.state = 919;
				this.match(SoqlParser.COMMA);
				this.state = 920;
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
		this.enterRule(_localctx, 124, SoqlParser.RULE_updateType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
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
		this.enterRule(_localctx, 126, SoqlParser.RULE_networkList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 925;
			this.match(SoqlParser.StringLiteral);
			this.state = 928;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.COMMA) {
				{
				this.state = 926;
				this.match(SoqlParser.COMMA);
				this.state = 927;
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
		this.enterRule(_localctx, 128, SoqlParser.RULE_soslId);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			this.id();
			this.state = 935;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 931;
					this.match(SoqlParser.DOT);
					this.state = 932;
					this.soslId();
					}
					}
				}
				this.state = 937;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
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
		this.enterRule(_localctx, 130, SoqlParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 938;
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
		this.enterRule(_localctx, 132, SoqlParser.RULE_anyId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0102\u03B1\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x03\x02\x03" +
		"\x02\x05\x02\x8B\n\x02\x03\x02\x05\x02\x8E\n\x02\x03\x02\x05\x02\x91\n" +
		"\x02\x03\x02\x05\x02\x94\n\x02\x03\x02\x05\x02\x97\n\x02\x03\x02\x05\x02" +
		"\x9A\n\x02\x03\x02\x05\x02\x9D\n\x02\x03\x02\x05\x02\xA0\n\x02\x03\x02" +
		"\x05\x02\xA3\n\x02\x03\x02\x05\x02\xA6\n\x02\x03\x02\x05\x02\xA9\n\x02" +
		"\x03\x02\x03\x02\x03\x02\x05\x02\xAE\n\x02\x03\x02\x05\x02\xB1\n\x02\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\xBB" +
		"\n\x06\x03\x06\x05\x06\xBE\n\x06\x03\x06\x05\x06\xC1\n\x06\x03\x06\x05" +
		"\x06\xC4\n\x06\x03\x06\x05\x06\xC7\n\x06\x03\x06\x05\x06\xCA\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\xCF\n\x06\x03\x07\x03\x07\x05\x07\xD3\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xD8\n\x07\x07\x07\xDA\n\x07\f\x07\x0E" +
		"\x07\xDD\v\x07\x03\b\x03\b\x03\b\x07\b\xE2\n\b\f\b\x0E\b\xE5\v\b\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x05\n\xEC\n\n\x07\n\xEE\n\n\f\n\x0E\n\xF1\v\n" +
		"\x03\v\x03\v\x05\v\xF5\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\xFB\n\v\x03\f" +
		"\x03\f\x03\f\x07\f\u0100\n\f\f\f\x0E\f\u0103\v\f\x03\r\x03\r\x05\r\u0107" +
		"\n\r\x03\r\x03\r\x03\r\x05\r\u010C\n\r\x07\r\u010E\n\r\f\r\x0E\r\u0111" +
		"\v\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x07\x11\u011C\n\x11\f\x11\x0E\x11\u011F\v\x11\x03\x12\x03\x12\x05" +
		"\x12\u0123\n\x12\x03\x12\x03\x12\x05\x12\u0127\n\x12\x03\x12\x05\x12\u012A" +
		"\n\x12\x03\x13\x03\x13\x03\x13\x07\x13\u012F\n\x13\f\x13\x0E\x13\u0132" +
		"\v\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x05\x16\u01B2\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x05\x17\u01BA\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u01C4\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x06\x1A\u01CB\n\x1A\r\x1A\x0E\x1A\u01CC\x03\x1A\x05\x1A\u01D0\n\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01DF\n\x1D\f\x1D\x0E\x1D\u01E2" +
		"\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03" +
		" \x03 \x03 \x07 \u01EF\n \f \x0E \u01F2\v \x03 \x03 \x05 \u01F6\n \x03" +
		"!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01FF\n\"\x03#\x03#\x05#\u0203" +
		"\n#\x03#\x05#\u0206\n#\x03#\x03#\x03#\x03#\x05#\u020C\n#\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05" +
		"$\u021E\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u022A" +
		"\n%\x05%\u022C\n%\x03%\x03%\x03%\x03%\x03%\x05%\u0233\n%\x03&\x03&\x03" +
		"&\x03&\x07&\u0239\n&\f&\x0E&\u023C\v&\x03&\x03&\x03\'\x05\'\u0241\n\'" +
		"\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x05(\u0251\n(\x03)\x03)\x03)\x07)\u0256\n)\f)\x0E)\u0259\v)\x03*\x03" +
		"*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x07+\u0264\n+\f+\x0E+\u0267\v+\x03" +
		"+\x03+\x05+\u026B\n+\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x05-\u0274\n-" +
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u027D\n-\f-\x0E-\u0280\v-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u028B\n-\f-\x0E-\u028E" +
		"\v-\x03-\x03-\x05-\u0292\n-\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x07/\u029B" +
		"\n/\f/\x0E/\u029E\v/\x030\x030\x050\u02A2\n0\x030\x030\x050\u02A6\n0\x03" +
		"0\x030\x050\u02AA\n0\x030\x030\x050\u02AE\n0\x050\u02B0\n0\x031\x031\x03" +
		"1\x032\x032\x032\x033\x033\x033\x034\x034\x074\u02BD\n4\f4\x0E4\u02C0" +
		"\v4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x055\u0318\n5\x036\x056\u031B\n6\x036\x036\x037\x037\x038" +
		"\x038\x038\x038\x039\x039\x039\x039\x03:\x03:\x05:\u032B\n:\x03:\x03:" +
		"\x05:\u032F\n:\x03:\x03:\x03:\x03:\x05:\u0335\n:\x03:\x03:\x03:\x03:\x05" +
		":\u033B\n:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0344\n:\x05:\u0346" +
		"\n:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u034F\n:\x03:\x03:\x03:\x03" +
		":\x05:\u0355\n:\x03:\x03:\x03:\x03:\x05:\u035B\n:\x03:\x03:\x03:\x03:" +
		"\x05:\u0361\n:\x03:\x05:\u0364\n:\x03:\x03:\x05:\u0368\n:\x03;\x03;\x03" +
		";\x03<\x03<\x03<\x07<\u0370\n<\f<\x0E<\u0373\v<\x03=\x03=\x03=\x03=\x03" +
		"=\x05=\u037A\n=\x03=\x03=\x03=\x03=\x05=\u0380\n=\x03=\x03=\x03=\x05=" +
		"\u0385\n=\x03=\x05=\u0388\n=\x03=\x05=\u038B\n=\x03=\x03=\x05=\u038F\n" +
		"=\x03>\x03>\x03>\x07>\u0394\n>\f>\x0E>\u0397\v>\x03?\x03?\x03?\x05?\u039C" +
		"\n?\x03@\x03@\x03A\x03A\x03A\x05A\u03A3\nA\x03B\x03B\x03B\x07B\u03A8\n" +
		"B\fB\x0EB\u03AB\vB\x03C\x03C\x03D\x03D\x03D\x02\x02\x02E\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02" +
		"h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82" +
		"\x02\x84\x02\x86\x02\x02\x12\x04\x02=BFF\x05\x02==CEHH\x05\x02==\xBD\xBD" +
		"\xFE\xFE\x04\x02==\xFE\xFE\x04\x02eez{\x03\x02PQ\x03\x02\xEB\xEC\x04\x02" +
		"\xCB\xCB\xCD\xCD\x03\x02nq\x03\x02_`\x03\x02bc\x05\x0200gguu\x04\x02e" +
		"e\xBC\xBF\x03\x02xy\x0F\x02\x04\x05\x12\x12\x16\x16\x18\x18$%((,-5578" +
		";<F\xB7\xBA\xC8\xFE\xFE\b\x02\x03\"$24<F\xB7\xBA\xC8\xFE\xFE\x02\u0424" +
		"\x02\x88\x03\x02\x02\x02\x04\xB2\x03\x02\x02\x02\x06\xB4\x03\x02\x02\x02" +
		"\b\xB6\x03\x02\x02\x02\n\xB8\x03\x02\x02\x02\f\xD0\x03\x02\x02\x02\x0E" +
		"\xDE\x03\x02\x02\x02\x10\xE6\x03\x02\x02\x02\x12\xE8\x03\x02\x02\x02\x14" +
		"\xFA\x03\x02\x02\x02\x16\xFC\x03\x02\x02\x02\x18\u0104\x03\x02\x02\x02" +
		"\x1A\u0112\x03\x02\x02\x02\x1C\u0114\x03\x02\x02\x02\x1E\u0116\x03\x02" +
		"\x02\x02 \u0118\x03\x02\x02\x02\"\u0129\x03\x02\x02\x02$\u012B\x03\x02" +
		"\x02\x02&\u0133\x03\x02\x02\x02(\u0135\x03\x02\x02\x02*\u01B1\x03\x02" +
		"\x02\x02,\u01B9\x03\x02\x02\x02.\u01C3\x03\x02\x02\x020\u01C5\x03\x02" +
		"\x02\x022\u01C7\x03\x02\x02\x024\u01D3\x03\x02\x02\x026\u01D8\x03\x02" +
		"\x02\x028\u01DB\x03\x02\x02\x02:\u01E3\x03\x02\x02\x02<\u01E7\x03\x02" +
		"\x02\x02>\u01F5\x03\x02\x02\x02@\u01F7\x03\x02\x02\x02B\u01FE\x03\x02" +
		"\x02\x02D\u020B\x03\x02\x02\x02F\u021D\x03\x02\x02\x02H\u0232\x03\x02" +
		"\x02\x02J\u0234\x03\x02\x02\x02L\u0240\x03\x02\x02\x02N\u0250\x03\x02" +
		"\x02\x02P\u0252\x03\x02\x02\x02R\u025A\x03\x02\x02\x02T\u026A\x03\x02" +
		"\x02\x02V\u026C\x03\x02\x02\x02X\u0291\x03\x02\x02\x02Z\u0293\x03\x02" +
		"\x02\x02\\\u0297\x03\x02\x02\x02^\u02AF\x03\x02\x02\x02`\u02B1\x03\x02" +
		"\x02\x02b\u02B4\x03\x02\x02\x02d\u02B7\x03\x02\x02\x02f\u02BE\x03\x02" +
		"\x02\x02h\u0317\x03\x02\x02\x02j\u031A\x03\x02\x02\x02l\u031E\x03\x02" +
		"\x02\x02n\u0320\x03\x02\x02\x02p\u0324\x03\x02\x02\x02r\u032A\x03\x02" +
		"\x02\x02t\u0369\x03\x02\x02\x02v\u036C\x03\x02\x02\x02x\u0374\x03\x02" +
		"\x02\x02z\u0390\x03\x02\x02\x02|\u0398\x03\x02\x02\x02~\u039D\x03\x02" +
		"\x02\x02\x80\u039F\x03\x02\x02\x02\x82\u03A4\x03\x02\x02\x02\x84\u03AC" +
		"\x03\x02\x02\x02\x86\u03AE\x03\x02\x02\x02\x88\x8A\x05\x06\x04\x02\x89" +
		"\x8B\x05\x12\n\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B" +
		"\x8D\x03\x02\x02\x02\x8C\x8E\x05\b\x05\x02\x8D\x8C\x03\x02\x02\x02\x8D" +
		"\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x91\x05\x18\r\x02\x90" +
		"\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92" +
		"\x94\x05:\x1E\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94" +
		"\x96\x03\x02\x02\x02\x95\x97\x05<\x1F\x02\x96\x95\x03\x02\x02\x02\x96" +
		"\x97\x03\x02\x02\x02\x97\x99\x03\x02\x02\x02\x98\x9A\x05N(\x02\x99\x98" +
		"\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x9D" +
		"\x05X-\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9F\x03" +
		"\x02\x02\x02\x9E\xA0\x05Z.\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02" +
		"\x02\x02\xA0\xA2\x03\x02\x02\x02\xA1\xA3\x05`1\x02\xA2\xA1\x03\x02\x02" +
		"\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA6\x05b2\x02" +
		"\xA5\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA8\x03\x02\x02\x02" +
		"\xA7\xA9\x05d3\x02\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9" +
		"\xAA\x03\x02\x02\x02\xAA\xAD\x05f4\x02\xAB\xAC\x070\x02\x02\xAC\xAE\x05" +
		"|?\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x03\x02" +
		"\x02\x02\xAF\xB1\x05\x04\x03\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02" +
		"\x02\x02\xB1\x03\x03\x02\x02\x02\xB2\xB3\x07=\x02\x02\xB3\x05\x03\x02" +
		"\x02\x02\xB4\xB5\t\x02\x02\x02\xB5\x07\x03\x02\x02\x02\xB6\xB7\t\x03\x02" +
		"\x02\xB7\t\x03\x02\x02\x02\xB8\xBA\x05\x06\x04\x02\xB9\xBB\x05 \x11\x02" +
		"\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD\x03\x02\x02\x02" +
		"\xBC\xBE\x05\b\x05\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
		"\xBE\xC0\x03\x02\x02\x02\xBF\xC1\x05\x18\r\x02\xC0\xBF\x03\x02\x02\x02" +
		"\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xC4\x05<\x1F\x02" +
		"\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC6\x03\x02\x02\x02" +
		"\xC5\xC7\x05Z.\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7" +
		"\xC9\x03\x02\x02\x02\xC8\xCA\x05`1\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA" +
		"\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCE\x05f4\x02\xCC\xCD\x07" +
		"0\x02\x02\xCD\xCF\x05|?\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02" +
		"\x02\xCF\v\x03\x02\x02\x02\xD0\xD2\x05\x0E\b\x02\xD1\xD3\x05\x1E\x10\x02" +
		"\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xDB\x03\x02\x02\x02" +
		"\xD4\xD5\x07\xD8\x02\x02\xD5\xD7\x05\x0E\b\x02\xD6\xD8\x05\x1E\x10\x02" +
		"\xD7\xD6\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDA\x03\x02\x02\x02" +
		"\xD9\xD4\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02" +
		"\xDB\xDC\x03\x02\x02\x02\xDC\r\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02" +
		"\xDE\xE3\x05\x10\t\x02\xDF\xE0\x07\xD9\x02\x02\xE0\xE2\x05\x10\t\x02\xE1" +
		"\xDF\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3" +
		"\xE4\x03\x02\x02\x02\xE4\x0F\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6" +
		"\xE7\t\x04\x02\x02\xE7\x11\x03\x02\x02\x02\xE8\xEF\x05\x14\v\x02\xE9\xEB" +
		"\x07\xD8\x02\x02\xEA\xEC\x05\x14\v\x02\xEB\xEA\x03\x02\x02\x02\xEB\xEC" +
		"\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xE9\x03\x02\x02\x02\xEE\xF1" +
		"\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\x13" +
		"\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF4\x05\x16\f\x02\xF3\xF5" +
		"\x07=\x02\x02\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xFB" +
		"\x03\x02\x02\x02\xF6\xF7\x07\xD1\x02\x02\xF7\xF8\x05\n\x06\x02\xF8\xF9" +
		"\x07\xD2\x02\x02\xF9\xFB\x03\x02\x02\x02\xFA\xF2\x03\x02\x02\x02\xFA\xF6" +
		"\x03\x02\x02\x02\xFB\x15\x03\x02\x02\x02\xFC\u0101\x05l7\x02\xFD\xFE\x07" +
		"\xD9\x02\x02\xFE\u0100\x05l7\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0103\x03" +
		"\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102" +
		"\x17\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\u0106\x05\x1A\x0E" +
		"\x02\u0105\u0107\x05\x1E\x10\x02\u0106\u0105\x03\x02\x02\x02\u0106\u0107" +
		"\x03\x02\x02\x02\u0107\u010F\x03\x02\x02\x02\u0108\u0109\x07\xD8\x02\x02" +
		"\u0109\u010B\x05\x1A\x0E\x02\u010A\u010C\x05\x1E\x10\x02\u010B\u010A\x03" +
		"\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03\x02\x02\x02\u010D" +
		"\u0108\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02" +
		"\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\x19\x03\x02\x02\x02\u0111\u010F" +
		"\x03\x02\x02\x02\u0112\u0113\x05\x1C\x0F\x02\u0113\x1B\x03\x02\x02\x02" +
		"\u0114\u0115\t\x04\x02\x02\u0115\x1D\x03\x02\x02\x02\u0116\u0117\t\x05" +
		"\x02\x02\u0117\x1F\x03\x02\x02\x02\u0118\u011D\x05\"\x12\x02\u0119\u011A" +
		"\x07\xD8\x02\x02\u011A\u011C\x05\"\x12\x02\u011B\u0119\x03\x02\x02\x02" +
		"\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03" +
		"\x02\x02\x02\u011E!\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120" +
		"\u0122\x05$\x13\x02\u0121\u0123\x07=\x02\x02\u0122\u0121\x03\x02\x02\x02" +
		"\u0122\u0123\x03\x02\x02\x02\u0123\u012A\x03\x02\x02\x02\u0124\u0126\x05" +
		"*\x16\x02\u0125\u0127\x05l7\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127" +
		"\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u012A\x052\x1A\x02" +
		"\u0129\u0120\x03\x02\x02\x02\u0129\u0124\x03\x02\x02\x02\u0129\u0128\x03" +
		"\x02\x02\x02\u012A#\x03\x02\x02\x02\u012B\u0130\x05&\x14\x02\u012C\u012D" +
		"\x07\xD9\x02\x02\u012D\u012F\x05&\x14\x02\u012E\u012C\x03\x02\x02\x02" +
		"\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03" +
		"\x02\x02\x02\u0131%\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133" +
		"\u0134\t\x04\x02\x02\u0134\'\x03\x02\x02\x02\u0135\u0136\t\x06\x02\x02" +
		"\u0136)\x03\x02\x02\x02\u0137\u0138\x07S\x02\x02\u0138\u0139\x07\xD1\x02" +
		"\x02\u0139\u013A\x05\x16\f\x02\u013A\u013B\x07\xD2\x02\x02\u013B\u01B2" +
		"\x03\x02\x02\x02\u013C\u013D\x07G\x02\x02\u013D\u013E\x07\xD1\x02\x02" +
		"\u013E\u01B2\x07\xD2\x02\x02\u013F\u0140\x07G\x02\x02\u0140\u0141\x07" +
		"\xD1\x02\x02\u0141\u0142\x05\x16\f\x02\u0142\u0143\x07\xD2\x02\x02\u0143" +
		"\u01B2\x03\x02\x02\x02\u0144\u0145\x07T\x02\x02\u0145\u0146\x07\xD1\x02" +
		"\x02\u0146\u0147\x05\x16\f\x02\u0147\u0148\x07\xD2\x02\x02\u0148\u01B2" +
		"\x03\x02\x02\x02\u0149\u014A\x07U\x02\x02\u014A\u014B\x07\xD1\x02\x02" +
		"\u014B\u014C\x05\x16\f\x02\u014C\u014D\x07\xD2\x02\x02\u014D\u01B2\x03" +
		"\x02\x02\x02\u014E\u014F\x07V\x02\x02\u014F\u0150\x07\xD1\x02\x02\u0150" +
		"\u0151\x05\x16\f\x02\u0151\u0152\x07\xD2\x02\x02\u0152\u01B2\x03\x02\x02" +
		"\x02\u0153\u0154\x07W\x02\x02\u0154\u0155\x07\xD1\x02\x02\u0155\u0156" +
		"\x05\x16\f\x02\u0156\u0157\x07\xD2\x02\x02\u0157\u01B2\x03\x02\x02\x02" +
		"\u0158\u0159\x07j\x02\x02\u0159\u015A\x07\xD1\x02\x02\u015A\u015B\x05" +
		"\x16\f\x02\u015B\u015C\x07\xD2\x02\x02\u015C\u01B2\x03\x02\x02\x02\u015D" +
		"\u015E\x07w\x02\x02\u015E\u015F\x07\xD1\x02\x02\u015F\u0160\x05\x16\f" +
		"\x02\u0160\u0161\x07\xD2\x02\x02\u0161\u01B2\x03\x02\x02\x02\u0162\u0163" +
		"\x07~\x02\x02\u0163\u0164\x07\xD1\x02\x02\u0164\u0165\x05,\x17\x02\u0165" +
		"\u0166\x07\xD2\x02\x02\u0166\u01B2\x03\x02\x02\x02\u0167\u0168\x07\x7F" +
		"\x02\x02\u0168\u0169\x07\xD1\x02\x02\u0169\u016A\x05,\x17\x02\u016A\u016B" +
		"\x07\xD2\x02\x02\u016B\u01B2\x03\x02\x02\x02\u016C\u016D\x07\x80\x02\x02" +
		"\u016D\u016E\x07\xD1\x02\x02\u016E\u016F\x05,\x17\x02\u016F\u0170\x07" +
		"\xD2\x02\x02\u0170\u01B2\x03\x02\x02\x02\u0171\u0172\x07\x81\x02\x02\u0172" +
		"\u0173\x07\xD1\x02\x02\u0173\u0174\x05,\x17\x02\u0174\u0175\x07\xD2\x02" +
		"\x02\u0175\u01B2\x03\x02\x02\x02\u0176\u0177\x07\x82\x02\x02\u0177\u0178" +
		"\x07\xD1\x02\x02\u0178\u0179\x05,\x17\x02\u0179\u017A\x07\xD2\x02\x02" +
		"\u017A\u01B2\x03\x02\x02\x02\u017B\u017C\x07\x83\x02\x02\u017C\u017D\x07" +
		"\xD1\x02\x02\u017D\u017E\x05,\x17\x02\u017E\u017F\x07\xD2\x02\x02\u017F" +
		"\u01B2\x03\x02\x02\x02\u0180\u0181\x07\x84\x02\x02\u0181\u0182\x07\xD1" +
		"\x02\x02\u0182\u0183\x05,\x17\x02\u0183\u0184\x07\xD2\x02\x02\u0184\u01B2" +
		"\x03\x02\x02\x02\u0185\u0186\x07\x85\x02\x02\u0186\u0187\x07\xD1\x02\x02" +
		"\u0187\u0188\x05,\x17\x02\u0188\u0189\x07\xD2\x02\x02\u0189\u01B2\x03" +
		"\x02\x02\x02\u018A\u018B\x07\x86\x02\x02\u018B\u018C\x07\xD1\x02\x02\u018C" +
		"\u018D\x05,\x17\x02\u018D\u018E\x07\xD2\x02\x02\u018E\u01B2\x03\x02\x02" +
		"\x02\u018F\u0190\x07\x87\x02\x02\u0190\u0191\x07\xD1\x02\x02\u0191\u0192" +
		"\x05,\x17\x02\u0192\u0193\x07\xD2\x02\x02\u0193\u01B2\x03\x02\x02\x02" +
		"\u0194\u0195\x07\x88\x02\x02\u0195\u0196\x07\xD1\x02\x02\u0196\u0197\x05" +
		",\x17\x02\u0197\u0198\x07\xD2\x02\x02\u0198\u01B2\x03\x02\x02\x02\u0199" +
		"\u019A\x07\x89\x02\x02\u019A\u019B\x07\xD1\x02\x02\u019B\u019C\x05,\x17" +
		"\x02\u019C\u019D\x07\xD2\x02\x02\u019D\u01B2\x03\x02\x02\x02\u019E\u019F" +
		"\x07\x8A\x02\x02\u019F\u01A0\x07\xD1\x02\x02\u01A0\u01A1\x05,\x17\x02" +
		"\u01A1\u01A2\x07\xD2\x02\x02\u01A2\u01B2\x03\x02\x02\x02\u01A3\u01A4\x07" +
		"\xC0\x02\x02\u01A4\u01A5\x07\xD1\x02\x02\u01A5\u01A6\x05(\x15\x02\u01A6" +
		"\u01A7\x07\xD2\x02\x02\u01A7\u01B2\x03\x02\x02\x02\u01A8\u01A9\x07|\x02" +
		"\x02\u01A9\u01AA\x07\xD1\x02\x02\u01AA\u01AB\x05.\x18\x02\u01AB\u01AC" +
		"\x07\xD8\x02\x02\u01AC\u01AD\x05.\x18\x02\u01AD\u01AE\x07\xD8\x02\x02" +
		"\u01AE\u01AF\x07\xCF\x02\x02\u01AF\u01B0\x07\xD2\x02\x02\u01B0\u01B2\x03" +
		"\x02\x02\x02\u01B1\u0137\x03\x02\x02\x02\u01B1\u013C\x03\x02\x02\x02\u01B1" +
		"\u013F\x03\x02\x02\x02\u01B1\u0144\x03\x02\x02\x02\u01B1\u0149\x03\x02" +
		"\x02\x02\u01B1\u014E\x03\x02\x02\x02\u01B1\u0153\x03\x02\x02\x02\u01B1" +
		"\u0158\x03\x02\x02\x02\u01B1\u015D\x03\x02\x02\x02\u01B1\u0162\x03\x02" +
		"\x02\x02\u01B1\u0167\x03\x02\x02\x02\u01B1\u016C\x03\x02\x02\x02\u01B1" +
		"\u0171\x03\x02\x02\x02\u01B1\u0176\x03\x02\x02\x02\u01B1\u017B\x03\x02" +
		"\x02\x02\u01B1\u0180\x03\x02\x02\x02\u01B1\u0185\x03\x02\x02\x02\u01B1" +
		"\u018A\x03\x02\x02\x02\u01B1\u018F\x03\x02\x02\x02\u01B1\u0194\x03\x02" +
		"\x02\x02\u01B1\u0199\x03\x02\x02\x02\u01B1\u019E\x03\x02\x02\x02\u01B1" +
		"\u01A3\x03\x02\x02\x02\u01B1\u01A8\x03\x02\x02\x02\u01B2+\x03\x02\x02" +
		"\x02\u01B3\u01B4\x07\x8B\x02\x02\u01B4\u01B5\x07\xD1\x02\x02\u01B5\u01B6" +
		"\x05\x16\f\x02\u01B6\u01B7\x07\xD2\x02\x02\u01B7\u01BA\x03\x02\x02\x02" +
		"\u01B8\u01BA\x05\x16\f\x02\u01B9\u01B3\x03\x02\x02\x02\u01B9\u01B8\x03" +
		"\x02\x02\x02\u01BA-\x03\x02\x02\x02\u01BB\u01C4\x05\x16\f\x02\u01BC\u01BD" +
		"\x07}\x02\x02\u01BD\u01BE\x07\xD1\x02\x02\u01BE\u01BF\x050\x19\x02\u01BF" +
		"\u01C0\x07\xD8\x02\x02\u01C0\u01C1\x050\x19\x02\u01C1\u01C2\x07\xD2\x02" +
		"\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01BB\x03\x02\x02\x02\u01C3\u01BC" +
		"\x03\x02\x02\x02\u01C4/\x03\x02\x02\x02\u01C5\u01C6\x05L\'\x02\u01C61" +
		"\x03\x02\x02\x02\u01C7\u01C8\x07X\x02\x02\u01C8\u01CA\x05\x16\f\x02\u01C9" +
		"\u01CB\x054\x1B\x02\u01CA\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02" +
		"\x02\u01CC";
	private static readonly _serializedATNSegment1: string =
		"\u01CA\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CF\x03\x02" +
		"\x02\x02\u01CE\u01D0\x056\x1C\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0" +
		"\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x07Y\x02\x02" +
		"\u01D23\x03\x02\x02\x02\u01D3\u01D4\x075\x02\x02\u01D4\u01D5\x05\x16\f" +
		"\x02\u01D5\u01D6\x07Z\x02\x02\u01D6\u01D7\x058\x1D\x02\u01D75\x03\x02" +
		"\x02\x02\u01D8\u01D9\x07\f\x02\x02\u01D9\u01DA\x058\x1D\x02\u01DA7\x03" +
		"\x02\x02\x02\u01DB\u01E0\x05\x16\f\x02\u01DC\u01DD\x07\xD8\x02\x02\u01DD" +
		"\u01DF\x05\x16\f\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02" +
		"\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E19\x03" +
		"\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E4\x07J\x02\x02\u01E4" +
		"\u01E5\x07K\x02\x02\u01E5\u01E6\x05l7\x02\u01E6;\x03\x02\x02\x02\u01E7" +
		"\u01E8\x07L\x02\x02\u01E8\u01E9\x05> \x02\u01E9=\x03\x02\x02\x02\u01EA" +
		"\u01F0\x05B\"\x02\u01EB\u01EC\x05@!\x02\u01EC\u01ED\x05B\"\x02\u01ED\u01EF" +
		"\x03\x02\x02\x02\u01EE\u01EB\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02" +
		"\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F6\x03" +
		"\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3\u01F4\x07R\x02\x02\u01F4" +
		"\u01F6\x05B\"\x02\u01F5\u01EA\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02" +
		"\x02\u01F6?\x03\x02\x02\x02\u01F7\u01F8\t\x07\x02\x02\u01F8A\x03\x02\x02" +
		"\x02\u01F9\u01FA\x07\xD1\x02\x02\u01FA\u01FB\x05> \x02\u01FB\u01FC\x07" +
		"\xD2\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FF\x05D#\x02\u01FE\u01F9" +
		"\x03\x02\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FFC\x03\x02\x02\x02\u0200" +
		"\u0202\x05\x16\f\x02\u0201\u0203\x05F$\x02\u0202\u0201\x03\x02\x02\x02" +
		"\u0202\u0203\x03\x02\x02\x02\u0203\u0205\x03\x02\x02\x02\u0204\u0206\x05" +
		"H%\x02\u0205\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u020C" +
		"\x03\x02\x02\x02\u0207\u0208\x05*\x16\x02\u0208\u0209\x05F$\x02\u0209" +
		"\u020A\x05H%\x02\u020A\u020C\x03\x02\x02\x02\u020B\u0200\x03\x02\x02\x02" +
		"\u020B\u0207\x03\x02\x02\x02\u020CE\x03\x02\x02\x02\u020D\u021E\x07\xDA" +
		"\x02\x02\u020E\u021E\x07\xE4\x02\x02\u020F\u021E\x07\xDC\x02\x02\u0210" +
		"\u021E\x07\xDB\x02\x02\u0211\u0212\x07\xDC\x02\x02\u0212\u021E\x07\xDA" +
		"\x02\x02\u0213\u0214\x07\xDB\x02\x02\u0214\u021E\x07\xDA\x02\x02\u0215" +
		"\u021E\x07\xE5\x02\x02\u0216\u021E\x07[\x02\x02\u0217\u021E\x07\\\x02" +
		"\x02\u0218\u0219\x07R\x02\x02\u0219\u021E\x07\\\x02\x02\u021A\u021E\x07" +
		"]\x02\x02\u021B\u021E\x07^\x02\x02\u021C\u021E\x07=\x02\x02\u021D\u020D" +
		"\x03\x02\x02\x02\u021D\u020E\x03\x02\x02\x02\u021D\u020F\x03\x02\x02\x02" +
		"\u021D\u0210\x03\x02\x02\x02\u021D\u0211\x03\x02\x02\x02\u021D\u0213\x03" +
		"\x02\x02\x02\u021D\u0215\x03\x02\x02\x02\u021D\u0216\x03\x02\x02\x02\u021D" +
		"\u0217\x03\x02\x02\x02\u021D\u0218\x03\x02\x02\x02\u021D\u021A\x03\x02" +
		"\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021C\x03\x02\x02\x02\u021E" +
		"G\x03\x02\x02\x02\u021F\u0233\x07\x1C\x02\x02\u0220\u0233\x07\xCE\x02" +
		"\x02\u0221\u0233\x05L\'\x02\u0222\u0233\x07\xCF\x02\x02\u0223\u0233\x07" +
		"\xB8\x02\x02\u0224\u0233\x07\xB9\x02\x02\u0225\u0233\x05h5\x02\u0226\u022B" +
		"\x07\xBA\x02\x02\u0227\u0229\x07\xD9\x02\x02\u0228\u022A\x07\xCB\x02\x02" +
		"\u0229\u0228\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022C\x03" +
		"\x02\x02\x02\u022B\u0227\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C" +
		"\u0233\x03\x02\x02\x02\u022D\u022E\x07\xD1\x02\x02\u022E\u022F\x05\n\x06" +
		"\x02\u022F\u0230\x07\xD2\x02\x02\u0230\u0233\x03\x02\x02\x02\u0231\u0233" +
		"\x05J&\x02\u0232\u021F\x03\x02\x02\x02\u0232\u0220\x03\x02\x02\x02\u0232" +
		"\u0221\x03\x02\x02\x02\u0232\u0222\x03\x02\x02\x02\u0232\u0223\x03\x02" +
		"\x02\x02\u0232\u0224\x03\x02\x02\x02\u0232\u0225\x03\x02\x02\x02\u0232" +
		"\u0226\x03\x02\x02\x02\u0232\u022D\x03\x02\x02\x02\u0232\u0231\x03\x02" +
		"\x02\x02\u0233I\x03\x02\x02\x02\u0234\u0235\x07\xD1\x02\x02\u0235\u023A" +
		"\x05H%\x02\u0236\u0237\x07\xD8\x02\x02\u0237\u0239\x05H%\x02\u0238\u0236" +
		"\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02" +
		"\u023A\u023B\x03\x02\x02\x02\u023B\u023D\x03\x02\x02\x02\u023C\u023A\x03" +
		"\x02\x02\x02\u023D\u023E\x07\xD2\x02\x02\u023EK\x03\x02\x02\x02\u023F" +
		"\u0241\t\b\x02\x02\u0240\u023F\x03\x02\x02\x02\u0240\u0241\x03\x02\x02" +
		"\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0243\t\t\x02\x02\u0243M\x03\x02" +
		"\x02\x02\u0244\u0245\x077\x02\x02\u0245\u0246\x07l\x02\x02\u0246\u0247" +
		"\x07m\x02\x02\u0247\u0251\x05P)\x02\u0248\u0249\x077\x02\x02\u0249\u0251" +
		"\x07r\x02\x02\u024A\u024B\x077\x02\x02\u024B\u0251\x07s\x02\x02\u024C" +
		"\u024D\x077\x02\x02\u024D\u0251\x07t\x02\x02\u024E\u024F\x077\x02\x02" +
		"\u024F\u0251\x05> \x02\u0250\u0244\x03\x02\x02\x02\u0250\u0248\x03\x02" +
		"\x02\x02\u0250\u024A\x03\x02\x02\x02\u0250\u024C\x03\x02\x02\x02\u0250" +
		"\u024E\x03\x02\x02\x02\u0251O\x03\x02\x02\x02\u0252\u0257\x05R*\x02\u0253" +
		"\u0254\x07\xE7\x02\x02\u0254\u0256\x05R*\x02\u0255\u0253\x03\x02\x02\x02" +
		"\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03" +
		"\x02\x02\x02\u0258Q\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u025A" +
		"\u025B\x05l7\x02\u025B\u025C\x05V,\x02\u025C\u025D\x05T+\x02\u025DS\x03" +
		"\x02\x02\x02\u025E\u026B\x05l7\x02\u025F\u0260\x07\xD1\x02\x02\u0260\u0265" +
		"\x05l7\x02\u0261\u0262\x07\xD8\x02\x02\u0262\u0264\x05l7\x02\u0263\u0261" +
		"\x03\x02\x02\x02\u0264\u0267\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02" +
		"\u0265\u0266\x03\x02\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267\u0265\x03" +
		"\x02\x02\x02\u0268\u0269\x07\xD1\x02\x02\u0269\u026B\x03\x02\x02\x02\u026A" +
		"\u025E\x03\x02\x02\x02\u026A\u025F\x03\x02\x02\x02\u026BU\x03\x02\x02" +
		"\x02\u026C\u026D\t\n\x02\x02\u026DW\x03\x02\x02\x02\u026E\u026F\x07d\x02" +
		"\x02\u026F\u0270\x07N\x02\x02\u0270\u0273\x05\x12\n\x02\u0271\u0272\x07" +
		"h\x02\x02\u0272\u0274\x05> \x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274" +
		"\x03\x02\x02\x02\u0274\u0292\x03\x02\x02\x02\u0275\u0276\x07d\x02\x02" +
		"\u0276\u0277\x07N\x02\x02\u0277\u0278\x07i\x02\x02\u0278\u0279\x07\xD1" +
		"\x02\x02\u0279\u027E\x05\x16\f\x02\u027A\u027B\x07\xD8\x02\x02\u027B\u027D" +
		"\x05\x16\f\x02\u027C\u027A\x03\x02\x02\x02\u027D\u0280\x03\x02\x02\x02" +
		"\u027E\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0281\x03" +
		"\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0281\u0282\x07\xD2\x02\x02\u0282" +
		"\u0292\x03\x02\x02\x02\u0283\u0284\x07d\x02\x02\u0284\u0285\x07N\x02\x02" +
		"\u0285\u0286\x07v\x02\x02\u0286\u0287\x07\xD1\x02\x02\u0287\u028C\x05" +
		"\x16\f\x02\u0288\u0289\x07\xD8\x02\x02\u0289\u028B\x05\x16\f\x02\u028A" +
		"\u0288\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02\u028C\u028A\x03\x02" +
		"\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028F\x03\x02\x02\x02\u028E" +
		"\u028C\x03\x02\x02\x02\u028F\u0290\x07\xD2\x02\x02\u0290\u0292\x03\x02" +
		"\x02\x02\u0291\u026E\x03\x02\x02\x02\u0291\u0275\x03\x02\x02\x02\u0291" +
		"\u0283\x03\x02\x02\x02\u0292Y\x03\x02\x02\x02\u0293\u0294\x07M\x02\x02" +
		"\u0294\u0295\x07N\x02\x02\u0295\u0296\x05\\/\x02\u0296[\x03\x02\x02\x02" +
		"\u0297\u029C\x05^0\x02\u0298\u0299\x07\xD8\x02\x02\u0299\u029B\x05^0\x02" +
		"\u029A\u0298\x03\x02\x02\x02\u029B\u029E\x03\x02\x02\x02\u029C\u029A\x03" +
		"\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D]\x03\x02\x02\x02\u029E" +
		"\u029C\x03\x02\x02\x02\u029F\u02A1\x05\x16\f\x02\u02A0\u02A2\t\v\x02\x02" +
		"\u02A1\u02A0\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A5\x03" +
		"\x02\x02\x02\u02A3\u02A4\x07a\x02\x02\u02A4\u02A6\t\f\x02\x02\u02A5\u02A3" +
		"\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02B0\x03\x02\x02\x02" +
		"\u02A7\u02A9\x05*\x16\x02\u02A8\u02AA\t\v\x02\x02\u02A9\u02A8\x03\x02" +
		"\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AD\x03\x02\x02\x02\u02AB" +
		"\u02AC\x07a\x02\x02\u02AC\u02AE\t\f\x02\x02\u02AD\u02AB\x03\x02\x02\x02" +
		"\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02B0\x03\x02\x02\x02\u02AF\u029F\x03" +
		"\x02\x02\x02\u02AF\u02A7\x03\x02\x02\x02\u02B0_\x03\x02\x02\x02\u02B1" +
		"\u02B2\x07O\x02\x02\u02B2\u02B3\x07\xCB\x02\x02\u02B3a\x03\x02\x02\x02" +
		"\u02B4\u02B5\x07k\x02\x02\u02B5\u02B6\x07\xCB\x02\x02\u02B6c\x03\x02\x02" +
		"\x02\u02B7\u02B8\x07e\x02\x02\u02B8\u02B9\x07f\x02\x02\u02B9e\x03\x02" +
		"\x02\x02\u02BA\u02BB\x07\x11\x02\x02\u02BB\u02BD\t\r\x02\x02\u02BC\u02BA" +
		"\x03\x02\x02\x02\u02BD\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02" +
		"\u02BE\u02BF\x03\x02\x02\x02\u02BFg\x03\x02\x02\x02\u02C0\u02BE\x03\x02" +
		"\x02\x02\u02C1\u0318\x07\x8C\x02\x02\u02C2\u0318\x07\x8D\x02\x02\u02C3" +
		"\u0318\x07\x8E\x02\x02\u02C4\u0318\x07\x8F\x02\x02\u02C5\u0318\x07\x90" +
		"\x02\x02\u02C6\u0318\x07\x91\x02\x02\u02C7\u0318\x07\x92\x02\x02\u02C8" +
		"\u0318\x07\x93\x02\x02\u02C9\u0318\x07\x94\x02\x02\u02CA\u0318\x07\x95" +
		"\x02\x02\u02CB\u0318\x07\x96\x02\x02\u02CC\u02CD\x07\x97\x02\x02\u02CD" +
		"\u02CE\x07\xE1\x02\x02\u02CE\u0318\x05j6\x02\u02CF\u02D0\x07\x98\x02\x02" +
		"\u02D0\u02D1\x07\xE1\x02\x02\u02D1\u0318\x05j6\x02\u02D2\u02D3\x07\x99" +
		"\x02\x02\u02D3\u02D4\x07\xE1\x02\x02\u02D4\u0318\x05j6\x02\u02D5\u02D6" +
		"\x07\x9A\x02\x02\u02D6\u02D7\x07\xE1\x02\x02\u02D7\u0318\x05j6\x02\u02D8" +
		"\u02D9\x07\x9B\x02\x02\u02D9\u02DA\x07\xE1\x02\x02\u02DA\u0318\x05j6\x02" +
		"\u02DB\u02DC\x07\x9C\x02\x02\u02DC\u02DD\x07\xE1\x02\x02\u02DD\u0318\x05" +
		"j6\x02\u02DE\u02DF\x07\x9D\x02\x02\u02DF\u02E0\x07\xE1\x02\x02\u02E0\u0318" +
		"\x05j6\x02\u02E1\u02E2\x07\x9E\x02\x02\u02E2\u02E3\x07\xE1\x02\x02\u02E3" +
		"\u0318\x05j6\x02\u02E4\u02E5\x07\x9F\x02\x02\u02E5\u02E6\x07\xE1\x02\x02" +
		"\u02E6\u0318\x05j6\x02\u02E7\u0318\x07\xA0\x02\x02\u02E8\u0318\x07\xA1" +
		"\x02\x02\u02E9\u0318\x07\xA2\x02\x02\u02EA\u02EB\x07\xA3\x02\x02\u02EB" +
		"\u02EC\x07\xE1\x02\x02\u02EC\u0318\x05j6\x02\u02ED\u02EE\x07\xA4\x02\x02" +
		"\u02EE\u02EF\x07\xE1\x02\x02\u02EF\u0318\x05j6\x02\u02F0\u02F1\x07\xA5" +
		"\x02\x02\u02F1\u02F2\x07\xE1\x02\x02\u02F2\u0318\x05j6\x02\u02F3\u0318" +
		"\x07\xA6\x02\x02\u02F4\u0318\x07\xA7\x02\x02\u02F5\u0318\x07\xA8\x02\x02" +
		"\u02F6\u02F7\x07\xA9\x02\x02\u02F7\u02F8\x07\xE1\x02\x02\u02F8\u0318\x05" +
		"j6\x02\u02F9\u02FA\x07\xAA\x02\x02\u02FA\u02FB\x07\xE1\x02\x02\u02FB\u0318" +
		"\x05j6\x02\u02FC\u02FD\x07\xAB\x02\x02\u02FD\u02FE\x07\xE1\x02\x02\u02FE" +
		"\u0318\x05j6\x02\u02FF\u0318\x07\xAC\x02\x02\u0300\u0318\x07\xAD\x02\x02" +
		"\u0301\u0318\x07\xAE\x02\x02\u0302\u0303\x07\xAF\x02\x02\u0303\u0304\x07" +
		"\xE1\x02\x02\u0304\u0318\x05j6\x02\u0305\u0306\x07\xB0\x02\x02\u0306\u0307" +
		"\x07\xE1\x02\x02\u0307\u0318\x05j6\x02\u0308\u0309\x07\xB1\x02\x02\u0309" +
		"\u030A\x07\xE1\x02\x02\u030A\u0318\x05j6\x02\u030B\u0318\x07\xB2\x02\x02" +
		"\u030C\u0318\x07\xB3\x02\x02\u030D\u0318\x07\xB4\x02\x02\u030E\u030F\x07" +
		"\xB5\x02\x02\u030F\u0310\x07\xE1\x02\x02\u0310\u0318\x05j6\x02\u0311\u0312" +
		"\x07\xB6\x02\x02\u0312\u0313\x07\xE1\x02\x02\u0313\u0318\x05j6\x02\u0314" +
		"\u0315\x07\xB7\x02\x02\u0315\u0316\x07\xE1\x02\x02\u0316\u0318\x05j6\x02" +
		"\u0317\u02C1\x03\x02\x02\x02\u0317\u02C2\x03\x02\x02\x02\u0317\u02C3\x03" +
		"\x02\x02\x02\u0317\u02C4\x03\x02\x02\x02\u0317\u02C5\x03\x02\x02\x02\u0317" +
		"\u02C6\x03\x02\x02\x02\u0317\u02C7\x03\x02\x02\x02\u0317\u02C8\x03\x02" +
		"\x02\x02\u0317\u02C9\x03\x02\x02\x02\u0317\u02CA\x03\x02\x02\x02\u0317" +
		"\u02CB\x03\x02\x02\x02\u0317\u02CC\x03\x02\x02\x02\u0317\u02CF\x03\x02" +
		"\x02\x02\u0317\u02D2\x03\x02\x02\x02\u0317\u02D5\x03\x02\x02\x02\u0317" +
		"\u02D8\x03\x02\x02\x02\u0317\u02DB\x03\x02\x02\x02\u0317\u02DE\x03\x02" +
		"\x02\x02\u0317\u02E1\x03\x02\x02\x02\u0317\u02E4\x03\x02\x02\x02\u0317" +
		"\u02E7\x03\x02\x02\x02\u0317\u02E8\x03\x02\x02\x02\u0317\u02E9\x03\x02" +
		"\x02\x02\u0317\u02EA\x03\x02\x02\x02\u0317\u02ED\x03\x02\x02\x02\u0317" +
		"\u02F0\x03\x02\x02\x02\u0317\u02F3\x03\x02\x02\x02\u0317\u02F4\x03\x02" +
		"\x02\x02\u0317\u02F5\x03\x02\x02\x02\u0317\u02F6\x03\x02\x02\x02\u0317" +
		"\u02F9\x03\x02\x02\x02\u0317\u02FC\x03\x02\x02\x02\u0317\u02FF\x03\x02" +
		"\x02\x02\u0317\u0300\x03\x02\x02\x02\u0317\u0301\x03\x02\x02\x02\u0317" +
		"\u0302\x03\x02\x02\x02\u0317\u0305\x03\x02\x02\x02\u0317\u0308\x03\x02" +
		"\x02\x02\u0317\u030B\x03\x02\x02\x02\u0317\u030C\x03\x02\x02\x02\u0317" +
		"\u030D\x03\x02\x02\x02\u0317\u030E\x03\x02\x02\x02\u0317\u0311\x03\x02" +
		"\x02\x02\u0317\u0314\x03\x02\x02\x02\u0318i\x03\x02\x02\x02\u0319\u031B" +
		"\t\b\x02\x02\u031A\u0319\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B" +
		"\u031C\x03\x02\x02\x02\u031C\u031D\x07\xCB\x02\x02\u031Dk\x03\x02\x02" +
		"\x02\u031E\u031F\t\x04\x02\x02\u031Fm\x03\x02\x02\x02\u0320\u0321\x07" +
		"\xC9\x02\x02\u0321\u0322\x05r:\x02\u0322\u0323\x07\xD6\x02\x02\u0323o" +
		"\x03\x02\x02\x02\u0324\u0325\x07\xCA\x02\x02\u0325\u0326\x05r:\x02\u0326" +
		"\u0327\x07\xD6\x02\x02\u0327q\x03\x02\x02\x02\u0328\u0329\x07\\\x02\x02" +
		"\u0329\u032B\x05t;\x02\u032A\u0328\x03\x02\x02\x02\u032A\u032B\x03\x02" +
		"\x02\x02\u032B\u032E\x03\x02\x02\x02\u032C\u032D\x07\xC7\x02\x02\u032D" +
		"\u032F\x05v<\x02\u032E\u032C\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02" +
		"\u032F\u0334\x03\x02\x02\x02\u0330\u0331\x077\x02\x02\u0331\u0332\x07" +
		"\xC6\x02\x02\u0332\u0333\x07\xDA\x02\x02\u0333\u0335\x07\xCF\x02\x02\u0334" +
		"\u0330\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u033A\x03\x02" +
		"\x02\x02\u0336\u0337\x077\x02\x02\u0337\u0338\x07l\x02\x02\u0338\u0339" +
		"\x07m\x02\x02\u0339\u033B\x05P)\x02\u033A\u0336\x03\x02\x02\x02\u033A" +
		"\u033B\x03\x02\x02\x02\u033B\u0345\x03\x02\x02\x02\u033C\u033D\x077\x02" +
		"\x02\u033D\u0343\x07\xC4\x02\x02\u033E\u033F\x07\xD1\x02\x02\u033F\u0340" +
		"\x07\xC5\x02\x02\u0340\u0341\x07\xDA\x02\x02\u0341\u0342\x07\xCB\x02\x02" +
		"\u0342\u0344\x07\xD2\x02\x02\u0343\u033E\x03\x02\x02\x02\u0343\u0344\x03" +
		"\x02\x02\x02\u0344\u0346\x03\x02\x02\x02\u0345\u033C\x03\x02\x02\x02\u0345" +
		"\u0346\x03\x02\x02\x02\u0346\u034E\x03\x02\x02\x02\u0347\u0348\x077\x02" +
		"\x02\u0348\u0349\x07\xC3\x02\x02\u0349\u034A\x07\\\x02\x02\u034A\u034B" +
		"\x07\xD1\x02\x02\u034B\u034C\x05\x80A\x02\u034C\u034D\x07\xD2\x02\x02" +
		"\u034D\u034F\x03\x02\x02\x02\u034E\u0347\x03\x02\x02\x02\u034E\u034F\x03" +
		"\x02\x02\x02\u034F\u0354\x03\x02\x02\x02\u0350\u0351\x077\x02\x02\u0351" +
		"\u0352\x07\xC3\x02\x02\u0352\u0353\x07\xDA\x02\x02\u0353\u0355\x07\xCF" +
		"\x02\x02\u0354\u0350\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355" +
		"\u035A\x03\x02\x02\x02\u0356\u0357\x077\x02\x02\u0357\u0358\x07\xC2\x02" +
		"\x02\u0358\u0359\x07\xDA\x02\x02\u0359\u035B\x07\xCF\x02\x02\u035A\u0356" +
		"\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u0360\x03\x02\x02\x02" +
		"\u035C\u035D\x077\x02\x02\u035D\u035E\x07\xC1\x02\x02\u035E\u035F\x07" +
		"\xDA\x02\x02\u035F\u0361\x07\xCF\x02\x02\u0360\u035C\x03\x02\x02\x02\u0360" +
		"\u0361\x03\x02\x02\x02\u0361\u0363\x03\x02\x02\x02\u0362\u0364\x05`1\x02" +
		"\u0363\u0362\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0367\x03" +
		"\x02\x02\x02\u0365\u0366\x070\x02\x02\u0366\u0368\x05|?\x02\u0367\u0365" +
		"\x03\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368s\x03\x02\x02\x02\u0369" +
		"\u036A\t\x0E\x02\x02\u036A\u036B\x07\xC0\x02\x02\u036Bu\x03\x02\x02\x02" +
		"\u036C\u0371\x05x=\x02\u036D\u036E\x07\xD8\x02\x02\u036E\u0370\x05v<\x02" +
		"\u036F\u036D\x03\x02\x02\x02\u0370\u0373\x03\x02\x02\x02\u0371\u036F\x03" +
		"\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372w\x03\x02\x02\x02\u0373" +
		"\u0371\x03\x02\x02\x02\u0374\u038E\x05\x82B\x02\u0375\u0376\x07\xD1\x02" +
		"\x02\u0376\u0379\x05z>\x02\u0377\u0378\x07L\x02\x02\u0378\u037A\x05> " +
		"\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037F" +
		"\x03\x02\x02\x02\u037B\u037C\x07J\x02\x02\u037C\u037D\x07\xC8\x02\x02" +
		"\u037D\u037E\x07\xDA\x02\x02\u037E\u0380\x05\x82B\x02\u037F\u037B\x03" +
		"\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380\u0384\x03\x02\x02\x02\u0381" +
		"\u0382\x07M\x02\x02\u0382\u0383\x07N\x02\x02\u0383\u0385\x05\\/\x02\u0384" +
		"\u0381\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0387\x03\x02" +
		"\x02\x02\u0386\u0388\x05`1\x02\u0387\u0386\x03\x02\x02\x02\u0387\u0388" +
		"\x03\x02\x02\x02\u0388\u038A\x03\x02\x02\x02\u0389\u038B\x05b2\x02\u038A" +
		"\u0389\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x03\x02" +
		"\x02\x02\u038C\u038D\x07\xD2\x02\x02\u038D\u038F\x03\x02\x02\x02\u038E" +
		"\u0375\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038Fy\x03\x02\x02" +
		"\x02\u0390\u0395\x05\x82B\x02\u0391\u0392\x07\xD8\x02\x02\u0392\u0394" +
		"\x05z>\x02\u0393\u0391\x03\x02\x02\x02\u0394\u0397\x03\x02\x02\x02\u0395" +
		"\u0393\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396{\x03\x02\x02" +
		"\x02\u0397\u0395\x03\x02\x02\x02\u0398\u039B\x05~@\x02\u0399\u039A\x07" +
		"\xD8\x02\x02\u039A\u039C\x05|?\x02\u039B\u0399\x03\x02\x02\x02\u039B\u039C" +
		"\x03\x02\x02\x02\u039C}\x03\x02\x02\x02\u039D\u039E\t\x0F\x02\x02\u039E" +
		"\x7F\x03\x02\x02\x02\u039F\u03A2\x07\xCF\x02\x02\u03A0\u03A1\x07\xD8\x02" +
		"\x02\u03A1\u03A3\x05\x80A\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A3" +
		"\x03\x02\x02\x02\u03A3\x81\x03\x02\x02\x02\u03A4\u03A9\x05\x84C\x02\u03A5" +
		"\u03A6\x07\xD9\x02\x02\u03A6\u03A8\x05\x82B\x02\u03A7\u03A5\x03\x02\x02" +
		"\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03A9\u03AA" +
		"\x03\x02\x02\x02\u03AA\x83\x03\x02\x02\x02\u03AB\u03A9\x03\x02\x02\x02" +
		"\u03AC\u03AD\t\x10\x02\x02\u03AD\x85\x03\x02\x02\x02\u03AE\u03AF\t\x11" +
		"\x02\x02\u03AF\x87\x03\x02\x02\x02a\x8A\x8D\x90\x93\x96\x99\x9C\x9F\xA2" +
		"\xA5\xA8\xAD\xB0\xBA\xBD\xC0\xC3\xC6\xC9\xCE\xD2\xD7\xDB\xE3\xEB\xEF\xF4" +
		"\xFA\u0101\u0106\u010B\u010F\u011D\u0122\u0126\u0129\u0130\u01B1\u01B9" +
		"\u01C3\u01CC\u01CF\u01E0\u01F0\u01F5\u01FE\u0202\u0205\u020B\u021D\u0229" +
		"\u022B\u0232\u023A\u0240\u0250\u0257\u0265\u026A\u0273\u027E\u028C\u0291" +
		"\u029C\u02A1\u02A5\u02A9\u02AD\u02AF\u02BE\u0317\u031A\u032A\u032E\u0334" +
		"\u033A\u0343\u0345\u034E\u0354\u035A\u0360\u0363\u0367\u0371\u0379\u037F" +
		"\u0384\u0387\u038A\u038E\u0395\u039B\u03A2\u03A9";
	public static readonly _serializedATN: string = Utils.join(
		[
			SoqlParser._serializedATNSegment0,
			SoqlParser._serializedATNSegment1,
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


