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
	public static readonly SELECT = 60;
	public static readonly COUNT = 61;
	public static readonly FROM = 62;
	public static readonly AS = 63;
	public static readonly USING = 64;
	public static readonly SCOPE = 65;
	public static readonly WHERE = 66;
	public static readonly ORDER = 67;
	public static readonly BY = 68;
	public static readonly LIMIT = 69;
	public static readonly SOQLAND = 70;
	public static readonly SOQLOR = 71;
	public static readonly NOT = 72;
	public static readonly AVG = 73;
	public static readonly COUNT_DISTINCT = 74;
	public static readonly MIN = 75;
	public static readonly MAX = 76;
	public static readonly SUM = 77;
	public static readonly TYPEOF = 78;
	public static readonly END = 79;
	public static readonly THEN = 80;
	public static readonly LIKE = 81;
	public static readonly IN = 82;
	public static readonly INCLUDES = 83;
	public static readonly EXCLUDES = 84;
	public static readonly ASC = 85;
	public static readonly DESC = 86;
	public static readonly NULLS = 87;
	public static readonly FIRST = 88;
	public static readonly LAST = 89;
	public static readonly GROUP = 90;
	public static readonly ALL = 91;
	public static readonly ROWS = 92;
	public static readonly VIEW = 93;
	public static readonly HAVING = 94;
	public static readonly ROLLUP = 95;
	public static readonly TOLABEL = 96;
	public static readonly OFFSET = 97;
	public static readonly DATA = 98;
	public static readonly CATEGORY = 99;
	public static readonly AT = 100;
	public static readonly ABOVE = 101;
	public static readonly BELOW = 102;
	public static readonly ABOVE_OR_BELOW = 103;
	public static readonly SECURITY_ENFORCED = 104;
	public static readonly SYSTEM_MODE = 105;
	public static readonly USER_MODE = 106;
	public static readonly REFERENCE = 107;
	public static readonly CUBE = 108;
	public static readonly FORMAT = 109;
	public static readonly TRACKING = 110;
	public static readonly VIEWSTAT = 111;
	public static readonly CUSTOM = 112;
	public static readonly STANDARD = 113;
	public static readonly DISTANCE = 114;
	public static readonly GEOLOCATION = 115;
	public static readonly CALENDAR_MONTH = 116;
	public static readonly CALENDAR_QUARTER = 117;
	public static readonly CALENDAR_YEAR = 118;
	public static readonly DAY_IN_MONTH = 119;
	public static readonly DAY_IN_WEEK = 120;
	public static readonly DAY_IN_YEAR = 121;
	public static readonly DAY_ONLY = 122;
	public static readonly FISCAL_MONTH = 123;
	public static readonly FISCAL_QUARTER = 124;
	public static readonly FISCAL_YEAR = 125;
	public static readonly HOUR_IN_DAY = 126;
	public static readonly WEEK_IN_MONTH = 127;
	public static readonly WEEK_IN_YEAR = 128;
	public static readonly CONVERT_TIMEZONE = 129;
	public static readonly YESTERDAY = 130;
	public static readonly TODAY = 131;
	public static readonly TOMORROW = 132;
	public static readonly LAST_WEEK = 133;
	public static readonly THIS_WEEK = 134;
	public static readonly NEXT_WEEK = 135;
	public static readonly LAST_MONTH = 136;
	public static readonly THIS_MONTH = 137;
	public static readonly NEXT_MONTH = 138;
	public static readonly LAST_90_DAYS = 139;
	public static readonly NEXT_90_DAYS = 140;
	public static readonly LAST_N_DAYS_N = 141;
	public static readonly NEXT_N_DAYS_N = 142;
	public static readonly N_DAYS_AGO_N = 143;
	public static readonly NEXT_N_WEEKS_N = 144;
	public static readonly LAST_N_WEEKS_N = 145;
	public static readonly N_WEEKS_AGO_N = 146;
	public static readonly NEXT_N_MONTHS_N = 147;
	public static readonly LAST_N_MONTHS_N = 148;
	public static readonly N_MONTHS_AGO_N = 149;
	public static readonly THIS_QUARTER = 150;
	public static readonly LAST_QUARTER = 151;
	public static readonly NEXT_QUARTER = 152;
	public static readonly NEXT_N_QUARTERS_N = 153;
	public static readonly LAST_N_QUARTERS_N = 154;
	public static readonly N_QUARTERS_AGO_N = 155;
	public static readonly THIS_YEAR = 156;
	public static readonly LAST_YEAR = 157;
	public static readonly NEXT_YEAR = 158;
	public static readonly NEXT_N_YEARS_N = 159;
	public static readonly LAST_N_YEARS_N = 160;
	public static readonly N_YEARS_AGO_N = 161;
	public static readonly THIS_FISCAL_QUARTER = 162;
	public static readonly LAST_FISCAL_QUARTER = 163;
	public static readonly NEXT_FISCAL_QUARTER = 164;
	public static readonly NEXT_N_FISCAL_QUARTERS_N = 165;
	public static readonly LAST_N_FISCAL_QUARTERS_N = 166;
	public static readonly N_FISCAL_QUARTERS_AGO_N = 167;
	public static readonly THIS_FISCAL_YEAR = 168;
	public static readonly LAST_FISCAL_YEAR = 169;
	public static readonly NEXT_FISCAL_YEAR = 170;
	public static readonly NEXT_N_FISCAL_YEARS_N = 171;
	public static readonly LAST_N_FISCAL_YEARS_N = 172;
	public static readonly N_FISCAL_YEARS_AGO_N = 173;
	public static readonly DateLiteral = 174;
	public static readonly DateTimeLiteral = 175;
	public static readonly IntegralCurrencyLiteral = 176;
	public static readonly FIND = 177;
	public static readonly EMAIL = 178;
	public static readonly NAME = 179;
	public static readonly PHONE = 180;
	public static readonly SIDEBAR = 181;
	public static readonly FIELDS = 182;
	public static readonly METADATA = 183;
	public static readonly PRICEBOOKID = 184;
	public static readonly NETWORK = 185;
	public static readonly SNIPPET = 186;
	public static readonly TARGET_LENGTH = 187;
	public static readonly DIVISION = 188;
	public static readonly RETURNING = 189;
	public static readonly LISTVIEW = 190;
	public static readonly FindLiteral = 191;
	public static readonly FindLiteralAlt = 192;
	public static readonly IntegerLiteral = 193;
	public static readonly LongLiteral = 194;
	public static readonly NumberLiteral = 195;
	public static readonly BooleanLiteral = 196;
	public static readonly StringLiteral = 197;
	public static readonly NullLiteral = 198;
	public static readonly LPAREN = 199;
	public static readonly RPAREN = 200;
	public static readonly LBRACE = 201;
	public static readonly RBRACE = 202;
	public static readonly LBRACK = 203;
	public static readonly RBRACK = 204;
	public static readonly SEMI = 205;
	public static readonly COMMA = 206;
	public static readonly DOT = 207;
	public static readonly ASSIGN = 208;
	public static readonly GT = 209;
	public static readonly LT = 210;
	public static readonly BANG = 211;
	public static readonly TILDE = 212;
	public static readonly QUESTIONDOT = 213;
	public static readonly QUESTION = 214;
	public static readonly COLON = 215;
	public static readonly EQUAL = 216;
	public static readonly TRIPLEEQUAL = 217;
	public static readonly NOTEQUAL = 218;
	public static readonly LESSANDGREATER = 219;
	public static readonly TRIPLENOTEQUAL = 220;
	public static readonly AND = 221;
	public static readonly OR = 222;
	public static readonly INC = 223;
	public static readonly DEC = 224;
	public static readonly ADD = 225;
	public static readonly SUB = 226;
	public static readonly MUL = 227;
	public static readonly DIV = 228;
	public static readonly BITAND = 229;
	public static readonly BITOR = 230;
	public static readonly CARET = 231;
	public static readonly MAPTO = 232;
	public static readonly ADD_ASSIGN = 233;
	public static readonly SUB_ASSIGN = 234;
	public static readonly MUL_ASSIGN = 235;
	public static readonly DIV_ASSIGN = 236;
	public static readonly AND_ASSIGN = 237;
	public static readonly OR_ASSIGN = 238;
	public static readonly XOR_ASSIGN = 239;
	public static readonly LSHIFT_ASSIGN = 240;
	public static readonly RSHIFT_ASSIGN = 241;
	public static readonly URSHIFT_ASSIGN = 242;
	public static readonly ATSIGN = 243;
	public static readonly Identifier = 244;
	public static readonly WS = 245;
	public static readonly DOC_COMMENT = 246;
	public static readonly COMMENT = 247;
	public static readonly LINE_COMMENT = 248;
	public static readonly RULE_query = 0;
	public static readonly RULE_endOfQuery = 1;
	public static readonly RULE_selectOrSoqlId = 2;
	public static readonly RULE_fromOrSoqlId = 3;
	public static readonly RULE_subQuery = 4;
	public static readonly RULE_selectList = 5;
	public static readonly RULE_selectEntry = 6;
	public static readonly RULE_fieldName = 7;
	public static readonly RULE_fromNameList = 8;
	public static readonly RULE_fromSoqlId = 9;
	public static readonly RULE_subFieldList = 10;
	public static readonly RULE_subFieldEntry = 11;
	public static readonly RULE_soqlFieldsParameter = 12;
	public static readonly RULE_soqlFunction = 13;
	public static readonly RULE_dateFieldName = 14;
	public static readonly RULE_locationValue = 15;
	public static readonly RULE_coordinateValue = 16;
	public static readonly RULE_typeOf = 17;
	public static readonly RULE_whenClause = 18;
	public static readonly RULE_elseClause = 19;
	public static readonly RULE_fieldNameList = 20;
	public static readonly RULE_usingScope = 21;
	public static readonly RULE_whereClause = 22;
	public static readonly RULE_logicalExpression = 23;
	public static readonly RULE_andOrSoql = 24;
	public static readonly RULE_conditionalExpression = 25;
	public static readonly RULE_fieldExpression = 26;
	public static readonly RULE_comparisonOperator = 27;
	public static readonly RULE_value = 28;
	public static readonly RULE_valueList = 29;
	public static readonly RULE_signedNumber = 30;
	public static readonly RULE_withClause = 31;
	public static readonly RULE_filteringExpression = 32;
	public static readonly RULE_dataCategorySelection = 33;
	public static readonly RULE_dataCategoryName = 34;
	public static readonly RULE_filteringSelector = 35;
	public static readonly RULE_groupByClause = 36;
	public static readonly RULE_orderByClause = 37;
	public static readonly RULE_fieldOrderList = 38;
	public static readonly RULE_fieldOrder = 39;
	public static readonly RULE_limitClause = 40;
	public static readonly RULE_offsetClause = 41;
	public static readonly RULE_allRowsClause = 42;
	public static readonly RULE_forClauses = 43;
	public static readonly RULE_dateFormula = 44;
	public static readonly RULE_signedInteger = 45;
	public static readonly RULE_soqlId = 46;
	public static readonly RULE_soslLiteral = 47;
	public static readonly RULE_soslLiteralAlt = 48;
	public static readonly RULE_soslClauses = 49;
	public static readonly RULE_searchGroup = 50;
	public static readonly RULE_fieldSpecList = 51;
	public static readonly RULE_fieldSpec = 52;
	public static readonly RULE_fieldList = 53;
	public static readonly RULE_updateList = 54;
	public static readonly RULE_updateType = 55;
	public static readonly RULE_networkList = 56;
	public static readonly RULE_soslId = 57;
	public static readonly RULE_id = 58;
	public static readonly RULE_anyId = 59;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"query", "endOfQuery", "selectOrSoqlId", "fromOrSoqlId", "subQuery", "selectList", 
		"selectEntry", "fieldName", "fromNameList", "fromSoqlId", "subFieldList", 
		"subFieldEntry", "soqlFieldsParameter", "soqlFunction", "dateFieldName", 
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
		"'map'", "'system'", "'user'", "'__zf_szi_location__'", "'select'", "'count'", 
		"'from'", "'as'", "'using'", "'scope'", "'where'", "'order'", "'by'", 
		"'limit'", "'and'", "'or'", "'not'", "'avg'", "'count_distinct'", "'min'", 
		"'max'", "'sum'", "'typeof'", "'end'", "'then'", "'like'", "'in'", "'includes'", 
		"'excludes'", "'asc'", "'desc'", "'nulls'", "'first'", "'last'", "'group'", 
		"'all'", "'rows'", "'view'", "'having'", "'rollup'", "'tolabel'", "'offset'", 
		"'data'", "'category'", "'at'", "'above'", "'below'", "'above_or_below'", 
		"'security_enforced'", "'system_mode'", "'user_mode'", "'reference'", 
		"'cube'", "'format'", "'tracking'", "'viewstat'", "'custom'", "'standard'", 
		"'distance'", "'geolocation'", "'calendar_month'", "'calendar_quarter'", 
		"'calendar_year'", "'day_in_month'", "'day_in_week'", "'day_in_year'", 
		"'day_only'", "'fiscal_month'", "'fiscal_quarter'", "'fiscal_year'", "'hour_in_day'", 
		"'week_in_month'", "'week_in_year'", "'converttimezone'", "'yesterday'", 
		"'today'", "'tomorrow'", "'last_week'", "'this_week'", "'next_week'", 
		"'last_month'", "'this_month'", "'next_month'", "'last_90_days'", "'next_90_days'", 
		"'last_n_days'", "'next_n_days'", "'n_days_ago'", "'next_n_weeks'", "'last_n_weeks'", 
		"'n_weeks_ago'", "'next_n_months'", "'last_n_months'", "'n_months_ago'", 
		"'this_quarter'", "'last_quarter'", "'next_quarter'", "'next_n_quarters'", 
		"'last_n_quarters'", "'n_quarters_ago'", "'this_year'", "'last_year'", 
		"'next_year'", "'next_n_years'", "'last_n_years'", "'n_years_ago'", "'this_fiscal_quarter'", 
		"'last_fiscal_quarter'", "'next_fiscal_quarter'", "'next_n_fiscal_quarters'", 
		"'last_n_fiscal_quarters'", "'n_fiscal_quarters_ago'", "'this_fiscal_year'", 
		"'last_fiscal_year'", "'next_fiscal_year'", "'next_n_fiscal_years'", "'last_n_fiscal_years'", 
		"'n_fiscal_years_ago'", undefined, undefined, undefined, "'find'", "'email'", 
		"'name'", "'phone'", "'sidebar'", "'fields'", "'metadata'", "'pricebookid'", 
		"'network'", "'snippet'", "'target_length'", "'division'", "'returning'", 
		"'listview'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", 
		"','", "'.'", "'='", "'>'", "'<'", "'!'", "'~'", "'?.'", "'?'", "':'", 
		"'=='", "'==='", "'!='", "'<>'", "'!=='", "'&&'", "'||'", "'++'", "'--'", 
		"'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'=>'", "'+='", "'-='", 
		"'*='", "'/='", "'&='", "'|='", "'^='", "'<<='", "'>>='", "'>>>='", "'@'",
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
			this.state = 120;
			this.selectOrSoqlId();
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 121;
				this.selectList();
				}
				break;
			}
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 124;
				this.fromOrSoqlId();
				}
				break;
			}
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 127;
				this.fromNameList();
				}
				break;
			}
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.USING) {
				{
				this.state = 130;
				this.usingScope();
				}
			}

			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WHERE) {
				{
				this.state = 133;
				this.whereClause();
				}
			}

			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WITH) {
				{
				this.state = 136;
				this.withClause();
				}
			}

			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.GROUP) {
				{
				this.state = 139;
				this.groupByClause();
				}
			}

			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ORDER) {
				{
				this.state = 142;
				this.orderByClause();
				}
			}

			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LIMIT) {
				{
				this.state = 145;
				this.limitClause();
				}
			}

			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.OFFSET) {
				{
				this.state = 148;
				this.offsetClause();
				}
			}

			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ALL) {
				{
				this.state = 151;
				this.allRowsClause();
				}
			}

			this.state = 154;
			this.forClauses();
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.UPDATE) {
				{
				this.state = 155;
				this.match(SoqlParser.UPDATE);
				this.state = 156;
				this.updateList();
				}
			}

			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ZF_INTELLISENSE) {
				{
				this.state = 159;
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
			this.state = 162;
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
			this.state = 164;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.SELECT)) {
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
			this.state = 166;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.FROM)) {
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
			this.state = 168;
			this.match(SoqlParser.SELECT);
			this.state = 169;
			this.subFieldList();
			this.state = 170;
			this.match(SoqlParser.FROM);
			this.state = 171;
			this.fromNameList();
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WHERE) {
				{
				this.state = 172;
				this.whereClause();
				}
			}

			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ORDER) {
				{
				this.state = 175;
				this.orderByClause();
				}
			}

			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LIMIT) {
				{
				this.state = 178;
				this.limitClause();
				}
			}

			this.state = 181;
			this.forClauses();
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.UPDATE) {
				{
				this.state = 182;
				this.match(SoqlParser.UPDATE);
				this.state = 183;
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
	public selectList(): SelectListContext {
		let _localctx: SelectListContext = new SelectListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SoqlParser.RULE_selectList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.selectEntry();
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 187;
				this.match(SoqlParser.COMMA);
				this.state = 189;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 188;
					this.selectEntry();
					}
					break;
				}
				}
				}
				this.state = 195;
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
		this.enterRule(_localctx, 12, SoqlParser.RULE_selectEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.fieldName();
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 197;
				this.match(SoqlParser.ZF_INTELLISENSE);
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
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SoqlParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.soqlId();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.DOT) {
				{
				{
				this.state = 201;
				this.match(SoqlParser.DOT);
				this.state = 202;
				this.soqlId();
				}
				}
				this.state = 207;
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
		this.enterRule(_localctx, 16, SoqlParser.RULE_fromNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.fieldName();
			this.state = 210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 209;
				this.fromSoqlId();
				}
				break;
			}
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 212;
				this.match(SoqlParser.COMMA);
				this.state = 213;
				this.fieldName();
				this.state = 215;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 214;
					this.fromSoqlId();
					}
					break;
				}
				}
				}
				this.state = 221;
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
	public fromSoqlId(): FromSoqlIdContext {
		let _localctx: FromSoqlIdContext = new FromSoqlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SoqlParser.RULE_fromSoqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
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
		this.enterRule(_localctx, 20, SoqlParser.RULE_subFieldList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.subFieldEntry();
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 225;
				this.match(SoqlParser.COMMA);
				this.state = 226;
				this.subFieldEntry();
				}
				}
				this.state = 231;
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
		this.enterRule(_localctx, 22, SoqlParser.RULE_subFieldEntry);
		let _la: number;
		try {
			this.state = 241;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 232;
				this.fieldName();
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.NAME || _la === SoqlParser.Identifier) {
					{
					this.state = 233;
					this.soqlId();
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
				this.state = 236;
				this.soqlFunction();
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ZF_INTELLISENSE || _la === SoqlParser.NAME || _la === SoqlParser.Identifier) {
					{
					this.state = 237;
					this.soqlId();
					}
				}

				}
				break;
			case SoqlParser.TYPEOF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 240;
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
	public soqlFieldsParameter(): SoqlFieldsParameterContext {
		let _localctx: SoqlFieldsParameterContext = new SoqlFieldsParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SoqlParser.RULE_soqlFieldsParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			_la = this._input.LA(1);
			if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SoqlParser.ALL - 91)) | (1 << (SoqlParser.CUSTOM - 91)) | (1 << (SoqlParser.STANDARD - 91)))) !== 0))) {
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
		this.enterRule(_localctx, 26, SoqlParser.RULE_soqlFunction);
		try {
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 245;
				this.match(SoqlParser.AVG);
				this.state = 246;
				this.match(SoqlParser.LPAREN);
				this.state = 247;
				this.fieldName();
				this.state = 248;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 250;
				this.match(SoqlParser.COUNT);
				this.state = 251;
				this.match(SoqlParser.LPAREN);
				this.state = 252;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 253;
				this.match(SoqlParser.COUNT);
				this.state = 254;
				this.match(SoqlParser.LPAREN);
				this.state = 255;
				this.fieldName();
				this.state = 256;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 258;
				this.match(SoqlParser.COUNT_DISTINCT);
				this.state = 259;
				this.match(SoqlParser.LPAREN);
				this.state = 260;
				this.fieldName();
				this.state = 261;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 263;
				this.match(SoqlParser.MIN);
				this.state = 264;
				this.match(SoqlParser.LPAREN);
				this.state = 265;
				this.fieldName();
				this.state = 266;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 268;
				this.match(SoqlParser.MAX);
				this.state = 269;
				this.match(SoqlParser.LPAREN);
				this.state = 270;
				this.fieldName();
				this.state = 271;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 273;
				this.match(SoqlParser.SUM);
				this.state = 274;
				this.match(SoqlParser.LPAREN);
				this.state = 275;
				this.fieldName();
				this.state = 276;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 278;
				this.match(SoqlParser.TOLABEL);
				this.state = 279;
				this.match(SoqlParser.LPAREN);
				this.state = 280;
				this.fieldName();
				this.state = 281;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 283;
				this.match(SoqlParser.FORMAT);
				this.state = 284;
				this.match(SoqlParser.LPAREN);
				this.state = 285;
				this.fieldName();
				this.state = 286;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 288;
				this.match(SoqlParser.CALENDAR_MONTH);
				this.state = 289;
				this.match(SoqlParser.LPAREN);
				this.state = 290;
				this.dateFieldName();
				this.state = 291;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 293;
				this.match(SoqlParser.CALENDAR_QUARTER);
				this.state = 294;
				this.match(SoqlParser.LPAREN);
				this.state = 295;
				this.dateFieldName();
				this.state = 296;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 298;
				this.match(SoqlParser.CALENDAR_YEAR);
				this.state = 299;
				this.match(SoqlParser.LPAREN);
				this.state = 300;
				this.dateFieldName();
				this.state = 301;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 303;
				this.match(SoqlParser.DAY_IN_MONTH);
				this.state = 304;
				this.match(SoqlParser.LPAREN);
				this.state = 305;
				this.dateFieldName();
				this.state = 306;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 308;
				this.match(SoqlParser.DAY_IN_WEEK);
				this.state = 309;
				this.match(SoqlParser.LPAREN);
				this.state = 310;
				this.dateFieldName();
				this.state = 311;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 313;
				this.match(SoqlParser.DAY_IN_YEAR);
				this.state = 314;
				this.match(SoqlParser.LPAREN);
				this.state = 315;
				this.dateFieldName();
				this.state = 316;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 318;
				this.match(SoqlParser.DAY_ONLY);
				this.state = 319;
				this.match(SoqlParser.LPAREN);
				this.state = 320;
				this.dateFieldName();
				this.state = 321;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 323;
				this.match(SoqlParser.FISCAL_MONTH);
				this.state = 324;
				this.match(SoqlParser.LPAREN);
				this.state = 325;
				this.dateFieldName();
				this.state = 326;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 328;
				this.match(SoqlParser.FISCAL_QUARTER);
				this.state = 329;
				this.match(SoqlParser.LPAREN);
				this.state = 330;
				this.dateFieldName();
				this.state = 331;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 333;
				this.match(SoqlParser.FISCAL_YEAR);
				this.state = 334;
				this.match(SoqlParser.LPAREN);
				this.state = 335;
				this.dateFieldName();
				this.state = 336;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 338;
				this.match(SoqlParser.HOUR_IN_DAY);
				this.state = 339;
				this.match(SoqlParser.LPAREN);
				this.state = 340;
				this.dateFieldName();
				this.state = 341;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 343;
				this.match(SoqlParser.WEEK_IN_MONTH);
				this.state = 344;
				this.match(SoqlParser.LPAREN);
				this.state = 345;
				this.dateFieldName();
				this.state = 346;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 348;
				this.match(SoqlParser.WEEK_IN_YEAR);
				this.state = 349;
				this.match(SoqlParser.LPAREN);
				this.state = 350;
				this.dateFieldName();
				this.state = 351;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 353;
				this.match(SoqlParser.FIELDS);
				this.state = 354;
				this.match(SoqlParser.LPAREN);
				this.state = 355;
				this.soqlFieldsParameter();
				this.state = 356;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 358;
				this.match(SoqlParser.DISTANCE);
				this.state = 359;
				this.match(SoqlParser.LPAREN);
				this.state = 360;
				this.locationValue();
				this.state = 361;
				this.match(SoqlParser.COMMA);
				this.state = 362;
				this.locationValue();
				this.state = 363;
				this.match(SoqlParser.COMMA);
				this.state = 364;
				this.match(SoqlParser.StringLiteral);
				this.state = 365;
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
		this.enterRule(_localctx, 28, SoqlParser.RULE_dateFieldName);
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.CONVERT_TIMEZONE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 369;
				this.match(SoqlParser.CONVERT_TIMEZONE);
				this.state = 370;
				this.match(SoqlParser.LPAREN);
				this.state = 371;
				this.fieldName();
				this.state = 372;
				this.match(SoqlParser.RPAREN);
				}
				break;
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
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
		this.enterRule(_localctx, 30, SoqlParser.RULE_locationValue);
		try {
			this.state = 385;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 377;
				this.fieldName();
				}
				break;
			case SoqlParser.GEOLOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 378;
				this.match(SoqlParser.GEOLOCATION);
				this.state = 379;
				this.match(SoqlParser.LPAREN);
				this.state = 380;
				this.coordinateValue();
				this.state = 381;
				this.match(SoqlParser.COMMA);
				this.state = 382;
				this.coordinateValue();
				this.state = 383;
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
		this.enterRule(_localctx, 32, SoqlParser.RULE_coordinateValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
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
		this.enterRule(_localctx, 34, SoqlParser.RULE_typeOf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(SoqlParser.TYPEOF);
			this.state = 390;
			this.fieldName();
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 391;
				this.whenClause();
				}
				}
				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SoqlParser.WHEN);
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ELSE) {
				{
				this.state = 396;
				this.elseClause();
				}
			}

			this.state = 399;
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
		this.enterRule(_localctx, 36, SoqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(SoqlParser.WHEN);
			this.state = 402;
			this.fieldName();
			this.state = 403;
			this.match(SoqlParser.THEN);
			this.state = 404;
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
		this.enterRule(_localctx, 38, SoqlParser.RULE_elseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(SoqlParser.ELSE);
			this.state = 407;
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
		this.enterRule(_localctx, 40, SoqlParser.RULE_fieldNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.fieldName();
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 410;
				this.match(SoqlParser.COMMA);
				this.state = 411;
				this.fieldName();
				}
				}
				this.state = 416;
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
		this.enterRule(_localctx, 42, SoqlParser.RULE_usingScope);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(SoqlParser.USING);
			this.state = 418;
			this.match(SoqlParser.SCOPE);
			this.state = 419;
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
		this.enterRule(_localctx, 44, SoqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(SoqlParser.WHERE);
			this.state = 422;
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
		this.enterRule(_localctx, 46, SoqlParser.RULE_logicalExpression);
		let _la: number;
		try {
			this.state = 435;
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
				this.state = 424;
				this.conditionalExpression();
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.SOQLAND || _la === SoqlParser.SOQLOR) {
					{
					{
					this.state = 425;
					this.andOrSoql();
					this.state = 426;
					this.conditionalExpression();
					}
					}
					this.state = 432;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SoqlParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 433;
				this.match(SoqlParser.NOT);
				this.state = 434;
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
		this.enterRule(_localctx, 48, SoqlParser.RULE_andOrSoql);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
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
		this.enterRule(_localctx, 50, SoqlParser.RULE_conditionalExpression);
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 439;
				this.match(SoqlParser.LPAREN);
				this.state = 440;
				this.logicalExpression();
				this.state = 441;
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
				this.state = 443;
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
		this.enterRule(_localctx, 52, SoqlParser.RULE_fieldExpression);
		let _la: number;
		try {
			this.state = 457;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 446;
				this.fieldName();
				this.state = 448;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 447;
					this.comparisonOperator();
					}
					break;
				}
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.NULL || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SoqlParser.YESTERDAY - 130)) | (1 << (SoqlParser.TODAY - 130)) | (1 << (SoqlParser.TOMORROW - 130)) | (1 << (SoqlParser.LAST_WEEK - 130)) | (1 << (SoqlParser.THIS_WEEK - 130)) | (1 << (SoqlParser.NEXT_WEEK - 130)) | (1 << (SoqlParser.LAST_MONTH - 130)) | (1 << (SoqlParser.THIS_MONTH - 130)) | (1 << (SoqlParser.NEXT_MONTH - 130)) | (1 << (SoqlParser.LAST_90_DAYS - 130)) | (1 << (SoqlParser.NEXT_90_DAYS - 130)) | (1 << (SoqlParser.LAST_N_DAYS_N - 130)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 130)) | (1 << (SoqlParser.N_DAYS_AGO_N - 130)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 130)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 130)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 130)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 130)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 130)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 130)) | (1 << (SoqlParser.THIS_QUARTER - 130)) | (1 << (SoqlParser.LAST_QUARTER - 130)) | (1 << (SoqlParser.NEXT_QUARTER - 130)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 130)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 130)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 130)) | (1 << (SoqlParser.THIS_YEAR - 130)) | (1 << (SoqlParser.LAST_YEAR - 130)) | (1 << (SoqlParser.NEXT_YEAR - 130)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 130)) | (1 << (SoqlParser.LAST_N_YEARS_N - 130)) | (1 << (SoqlParser.N_YEARS_AGO_N - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (SoqlParser.THIS_FISCAL_QUARTER - 162)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 162)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 162)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 162)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 162)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 162)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 162)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 162)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 162)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 162)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 162)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 162)) | (1 << (SoqlParser.DateLiteral - 162)) | (1 << (SoqlParser.DateTimeLiteral - 162)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 162)) | (1 << (SoqlParser.IntegerLiteral - 162)))) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & ((1 << (SoqlParser.NumberLiteral - 195)) | (1 << (SoqlParser.BooleanLiteral - 195)) | (1 << (SoqlParser.StringLiteral - 195)) | (1 << (SoqlParser.LPAREN - 195)) | (1 << (SoqlParser.ADD - 195)) | (1 << (SoqlParser.SUB - 195)))) !== 0)) {
					{
					this.state = 450;
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
				this.state = 453;
				this.soqlFunction();
				this.state = 454;
				this.comparisonOperator();
				this.state = 455;
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
		this.enterRule(_localctx, 54, SoqlParser.RULE_comparisonOperator);
		try {
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 459;
				this.match(SoqlParser.ASSIGN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 460;
				this.match(SoqlParser.NOTEQUAL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 461;
				this.match(SoqlParser.LT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 462;
				this.match(SoqlParser.GT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 463;
				this.match(SoqlParser.LT);
				this.state = 464;
				this.match(SoqlParser.ASSIGN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 465;
				this.match(SoqlParser.GT);
				this.state = 466;
				this.match(SoqlParser.ASSIGN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 467;
				this.match(SoqlParser.LESSANDGREATER);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 468;
				this.match(SoqlParser.LIKE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 469;
				this.match(SoqlParser.IN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 470;
				this.match(SoqlParser.NOT);
				this.state = 471;
				this.match(SoqlParser.IN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 472;
				this.match(SoqlParser.INCLUDES);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 473;
				this.match(SoqlParser.EXCLUDES);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 474;
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
		this.enterRule(_localctx, 56, SoqlParser.RULE_value);
		let _la: number;
		try {
			this.state = 496;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 477;
				this.match(SoqlParser.NULL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 478;
				this.match(SoqlParser.BooleanLiteral);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 479;
				this.signedNumber();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 480;
				this.match(SoqlParser.StringLiteral);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 481;
				this.match(SoqlParser.DateLiteral);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 482;
				this.match(SoqlParser.DateTimeLiteral);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 483;
				this.dateFormula();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 484;
				this.match(SoqlParser.IntegralCurrencyLiteral);
				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.DOT) {
					{
					this.state = 485;
					this.match(SoqlParser.DOT);
					this.state = 487;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SoqlParser.IntegerLiteral) {
						{
						this.state = 486;
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
				this.state = 491;
				this.match(SoqlParser.LPAREN);
				this.state = 492;
				this.subQuery();
				this.state = 493;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 495;
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
		this.enterRule(_localctx, 58, SoqlParser.RULE_valueList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.match(SoqlParser.LPAREN);
			this.state = 499;
			this.value();
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 500;
				this.match(SoqlParser.COMMA);
				this.state = 501;
				this.value();
				}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 507;
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
		this.enterRule(_localctx, 60, SoqlParser.RULE_signedNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ADD || _la === SoqlParser.SUB) {
				{
				this.state = 509;
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

			this.state = 512;
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
		this.enterRule(_localctx, 62, SoqlParser.RULE_withClause);
		try {
			this.state = 526;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 514;
				this.match(SoqlParser.WITH);
				this.state = 515;
				this.match(SoqlParser.DATA);
				this.state = 516;
				this.match(SoqlParser.CATEGORY);
				this.state = 517;
				this.filteringExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 518;
				this.match(SoqlParser.WITH);
				this.state = 519;
				this.match(SoqlParser.SECURITY_ENFORCED);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 520;
				this.match(SoqlParser.WITH);
				this.state = 521;
				this.match(SoqlParser.SYSTEM_MODE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 522;
				this.match(SoqlParser.WITH);
				this.state = 523;
				this.match(SoqlParser.USER_MODE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 524;
				this.match(SoqlParser.WITH);
				this.state = 525;
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
		this.enterRule(_localctx, 64, SoqlParser.RULE_filteringExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this.dataCategorySelection();
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.AND) {
				{
				{
				this.state = 529;
				this.match(SoqlParser.AND);
				this.state = 530;
				this.dataCategorySelection();
				}
				}
				this.state = 535;
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
		this.enterRule(_localctx, 66, SoqlParser.RULE_dataCategorySelection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.soqlId();
			this.state = 537;
			this.filteringSelector();
			this.state = 538;
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
		this.enterRule(_localctx, 68, SoqlParser.RULE_dataCategoryName);
		let _la: number;
		try {
			this.state = 552;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 540;
				this.soqlId();
				}
				break;
			case SoqlParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 541;
				this.match(SoqlParser.LPAREN);
				this.state = 542;
				this.soqlId();
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.COMMA) {
					{
					{
					this.state = 543;
					this.match(SoqlParser.COMMA);
					this.state = 544;
					this.soqlId();
					}
					}
					this.state = 549;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 550;
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
		this.enterRule(_localctx, 70, SoqlParser.RULE_filteringSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			_la = this._input.LA(1);
			if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SoqlParser.AT - 100)) | (1 << (SoqlParser.ABOVE - 100)) | (1 << (SoqlParser.BELOW - 100)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 100)))) !== 0))) {
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
		this.enterRule(_localctx, 72, SoqlParser.RULE_groupByClause);
		let _la: number;
		try {
			this.state = 591;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 556;
				this.match(SoqlParser.GROUP);
				this.state = 557;
				this.match(SoqlParser.BY);
				this.state = 558;
				this.selectList();
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.HAVING) {
					{
					this.state = 559;
					this.match(SoqlParser.HAVING);
					this.state = 560;
					this.logicalExpression();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 563;
				this.match(SoqlParser.GROUP);
				this.state = 564;
				this.match(SoqlParser.BY);
				this.state = 565;
				this.match(SoqlParser.ROLLUP);
				this.state = 566;
				this.match(SoqlParser.LPAREN);
				this.state = 567;
				this.fieldName();
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.COMMA) {
					{
					{
					this.state = 568;
					this.match(SoqlParser.COMMA);
					this.state = 569;
					this.fieldName();
					}
					}
					this.state = 574;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 575;
				this.match(SoqlParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 577;
				this.match(SoqlParser.GROUP);
				this.state = 578;
				this.match(SoqlParser.BY);
				this.state = 579;
				this.match(SoqlParser.CUBE);
				this.state = 580;
				this.match(SoqlParser.LPAREN);
				this.state = 581;
				this.fieldName();
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SoqlParser.COMMA) {
					{
					{
					this.state = 582;
					this.match(SoqlParser.COMMA);
					this.state = 583;
					this.fieldName();
					}
					}
					this.state = 588;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 589;
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
		this.enterRule(_localctx, 74, SoqlParser.RULE_orderByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.match(SoqlParser.ORDER);
			this.state = 594;
			this.match(SoqlParser.BY);
			this.state = 595;
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
		this.enterRule(_localctx, 76, SoqlParser.RULE_fieldOrderList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.fieldOrder();
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.COMMA) {
				{
				{
				this.state = 598;
				this.match(SoqlParser.COMMA);
				this.state = 599;
				this.fieldOrder();
				}
				}
				this.state = 604;
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
		this.enterRule(_localctx, 78, SoqlParser.RULE_fieldOrder);
		let _la: number;
		try {
			this.state = 621;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.ZF_INTELLISENSE:
			case SoqlParser.NAME:
			case SoqlParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 605;
				this.fieldName();
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ASC || _la === SoqlParser.DESC) {
					{
					this.state = 606;
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

				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.NULLS) {
					{
					this.state = 609;
					this.match(SoqlParser.NULLS);
					this.state = 610;
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
				this.state = 613;
				this.soqlFunction();
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ASC || _la === SoqlParser.DESC) {
					{
					this.state = 614;
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

				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.NULLS) {
					{
					this.state = 617;
					this.match(SoqlParser.NULLS);
					this.state = 618;
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
		this.enterRule(_localctx, 80, SoqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.match(SoqlParser.LIMIT);
			this.state = 624;
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
		this.enterRule(_localctx, 82, SoqlParser.RULE_offsetClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.match(SoqlParser.OFFSET);
			this.state = 627;
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
		this.enterRule(_localctx, 84, SoqlParser.RULE_allRowsClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.match(SoqlParser.ALL);
			this.state = 630;
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
		this.enterRule(_localctx, 86, SoqlParser.RULE_forClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SoqlParser.FOR) {
				{
				{
				this.state = 632;
				this.match(SoqlParser.FOR);
				this.state = 633;
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
	public dateFormula(): DateFormulaContext {
		let _localctx: DateFormulaContext = new DateFormulaContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SoqlParser.RULE_dateFormula);
		try {
			this.state = 725;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SoqlParser.YESTERDAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 639;
				this.match(SoqlParser.YESTERDAY);
				}
				break;
			case SoqlParser.TODAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 640;
				this.match(SoqlParser.TODAY);
				}
				break;
			case SoqlParser.TOMORROW:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 641;
				this.match(SoqlParser.TOMORROW);
				}
				break;
			case SoqlParser.LAST_WEEK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 642;
				this.match(SoqlParser.LAST_WEEK);
				}
				break;
			case SoqlParser.THIS_WEEK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 643;
				this.match(SoqlParser.THIS_WEEK);
				}
				break;
			case SoqlParser.NEXT_WEEK:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 644;
				this.match(SoqlParser.NEXT_WEEK);
				}
				break;
			case SoqlParser.LAST_MONTH:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 645;
				this.match(SoqlParser.LAST_MONTH);
				}
				break;
			case SoqlParser.THIS_MONTH:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 646;
				this.match(SoqlParser.THIS_MONTH);
				}
				break;
			case SoqlParser.NEXT_MONTH:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 647;
				this.match(SoqlParser.NEXT_MONTH);
				}
				break;
			case SoqlParser.LAST_90_DAYS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 648;
				this.match(SoqlParser.LAST_90_DAYS);
				}
				break;
			case SoqlParser.NEXT_90_DAYS:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 649;
				this.match(SoqlParser.NEXT_90_DAYS);
				}
				break;
			case SoqlParser.LAST_N_DAYS_N:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 650;
				this.match(SoqlParser.LAST_N_DAYS_N);
				this.state = 651;
				this.match(SoqlParser.COLON);
				this.state = 652;
				this.signedInteger();
				}
				break;
			case SoqlParser.NEXT_N_DAYS_N:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 653;
				this.match(SoqlParser.NEXT_N_DAYS_N);
				this.state = 654;
				this.match(SoqlParser.COLON);
				this.state = 655;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_DAYS_AGO_N:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 656;
				this.match(SoqlParser.N_DAYS_AGO_N);
				this.state = 657;
				this.match(SoqlParser.COLON);
				this.state = 658;
				this.signedInteger();
				}
				break;
			case SoqlParser.NEXT_N_WEEKS_N:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 659;
				this.match(SoqlParser.NEXT_N_WEEKS_N);
				this.state = 660;
				this.match(SoqlParser.COLON);
				this.state = 661;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_WEEKS_N:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 662;
				this.match(SoqlParser.LAST_N_WEEKS_N);
				this.state = 663;
				this.match(SoqlParser.COLON);
				this.state = 664;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_WEEKS_AGO_N:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 665;
				this.match(SoqlParser.N_WEEKS_AGO_N);
				this.state = 666;
				this.match(SoqlParser.COLON);
				this.state = 667;
				this.signedInteger();
				}
				break;
			case SoqlParser.NEXT_N_MONTHS_N:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 668;
				this.match(SoqlParser.NEXT_N_MONTHS_N);
				this.state = 669;
				this.match(SoqlParser.COLON);
				this.state = 670;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_MONTHS_N:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 671;
				this.match(SoqlParser.LAST_N_MONTHS_N);
				this.state = 672;
				this.match(SoqlParser.COLON);
				this.state = 673;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_MONTHS_AGO_N:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 674;
				this.match(SoqlParser.N_MONTHS_AGO_N);
				this.state = 675;
				this.match(SoqlParser.COLON);
				this.state = 676;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_QUARTER:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 677;
				this.match(SoqlParser.THIS_QUARTER);
				}
				break;
			case SoqlParser.LAST_QUARTER:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 678;
				this.match(SoqlParser.LAST_QUARTER);
				}
				break;
			case SoqlParser.NEXT_QUARTER:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 679;
				this.match(SoqlParser.NEXT_QUARTER);
				}
				break;
			case SoqlParser.NEXT_N_QUARTERS_N:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 680;
				this.match(SoqlParser.NEXT_N_QUARTERS_N);
				this.state = 681;
				this.match(SoqlParser.COLON);
				this.state = 682;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_QUARTERS_N:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 683;
				this.match(SoqlParser.LAST_N_QUARTERS_N);
				this.state = 684;
				this.match(SoqlParser.COLON);
				this.state = 685;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_QUARTERS_AGO_N:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 686;
				this.match(SoqlParser.N_QUARTERS_AGO_N);
				this.state = 687;
				this.match(SoqlParser.COLON);
				this.state = 688;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_YEAR:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 689;
				this.match(SoqlParser.THIS_YEAR);
				}
				break;
			case SoqlParser.LAST_YEAR:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 690;
				this.match(SoqlParser.LAST_YEAR);
				}
				break;
			case SoqlParser.NEXT_YEAR:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 691;
				this.match(SoqlParser.NEXT_YEAR);
				}
				break;
			case SoqlParser.NEXT_N_YEARS_N:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 692;
				this.match(SoqlParser.NEXT_N_YEARS_N);
				this.state = 693;
				this.match(SoqlParser.COLON);
				this.state = 694;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_YEARS_N:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 695;
				this.match(SoqlParser.LAST_N_YEARS_N);
				this.state = 696;
				this.match(SoqlParser.COLON);
				this.state = 697;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_YEARS_AGO_N:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 698;
				this.match(SoqlParser.N_YEARS_AGO_N);
				this.state = 699;
				this.match(SoqlParser.COLON);
				this.state = 700;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 701;
				this.match(SoqlParser.THIS_FISCAL_QUARTER);
				}
				break;
			case SoqlParser.LAST_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 702;
				this.match(SoqlParser.LAST_FISCAL_QUARTER);
				}
				break;
			case SoqlParser.NEXT_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 703;
				this.match(SoqlParser.NEXT_FISCAL_QUARTER);
				}
				break;
			case SoqlParser.NEXT_N_FISCAL_QUARTERS_N:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 704;
				this.match(SoqlParser.NEXT_N_FISCAL_QUARTERS_N);
				this.state = 705;
				this.match(SoqlParser.COLON);
				this.state = 706;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_FISCAL_QUARTERS_N:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 707;
				this.match(SoqlParser.LAST_N_FISCAL_QUARTERS_N);
				this.state = 708;
				this.match(SoqlParser.COLON);
				this.state = 709;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_FISCAL_QUARTERS_AGO_N:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 710;
				this.match(SoqlParser.N_FISCAL_QUARTERS_AGO_N);
				this.state = 711;
				this.match(SoqlParser.COLON);
				this.state = 712;
				this.signedInteger();
				}
				break;
			case SoqlParser.THIS_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 713;
				this.match(SoqlParser.THIS_FISCAL_YEAR);
				}
				break;
			case SoqlParser.LAST_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 714;
				this.match(SoqlParser.LAST_FISCAL_YEAR);
				}
				break;
			case SoqlParser.NEXT_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 715;
				this.match(SoqlParser.NEXT_FISCAL_YEAR);
				}
				break;
			case SoqlParser.NEXT_N_FISCAL_YEARS_N:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 716;
				this.match(SoqlParser.NEXT_N_FISCAL_YEARS_N);
				this.state = 717;
				this.match(SoqlParser.COLON);
				this.state = 718;
				this.signedInteger();
				}
				break;
			case SoqlParser.LAST_N_FISCAL_YEARS_N:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 719;
				this.match(SoqlParser.LAST_N_FISCAL_YEARS_N);
				this.state = 720;
				this.match(SoqlParser.COLON);
				this.state = 721;
				this.signedInteger();
				}
				break;
			case SoqlParser.N_FISCAL_YEARS_AGO_N:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 722;
				this.match(SoqlParser.N_FISCAL_YEARS_AGO_N);
				this.state = 723;
				this.match(SoqlParser.COLON);
				this.state = 724;
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
		this.enterRule(_localctx, 90, SoqlParser.RULE_signedInteger);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.ADD || _la === SoqlParser.SUB) {
				{
				this.state = 727;
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

			this.state = 730;
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
		this.enterRule(_localctx, 92, SoqlParser.RULE_soqlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
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
		this.enterRule(_localctx, 94, SoqlParser.RULE_soslLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.match(SoqlParser.FindLiteral);
			this.state = 735;
			this.soslClauses();
			this.state = 736;
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
		this.enterRule(_localctx, 96, SoqlParser.RULE_soslLiteralAlt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 738;
			this.match(SoqlParser.FindLiteralAlt);
			this.state = 739;
			this.soslClauses();
			this.state = 740;
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
		this.enterRule(_localctx, 98, SoqlParser.RULE_soslClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.IN) {
				{
				this.state = 742;
				this.match(SoqlParser.IN);
				this.state = 743;
				this.searchGroup();
				}
			}

			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.RETURNING) {
				{
				this.state = 746;
				this.match(SoqlParser.RETURNING);
				this.state = 747;
				this.fieldSpecList();
				}
			}

			this.state = 754;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 750;
				this.match(SoqlParser.WITH);
				this.state = 751;
				this.match(SoqlParser.DIVISION);
				this.state = 752;
				this.match(SoqlParser.ASSIGN);
				this.state = 753;
				this.match(SoqlParser.StringLiteral);
				}
				break;
			}
			this.state = 760;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 756;
				this.match(SoqlParser.WITH);
				this.state = 757;
				this.match(SoqlParser.DATA);
				this.state = 758;
				this.match(SoqlParser.CATEGORY);
				this.state = 759;
				this.filteringExpression();
				}
				break;
			}
			this.state = 771;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 762;
				this.match(SoqlParser.WITH);
				this.state = 763;
				this.match(SoqlParser.SNIPPET);
				this.state = 769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.LPAREN) {
					{
					this.state = 764;
					this.match(SoqlParser.LPAREN);
					this.state = 765;
					this.match(SoqlParser.TARGET_LENGTH);
					this.state = 766;
					this.match(SoqlParser.ASSIGN);
					this.state = 767;
					this.match(SoqlParser.IntegerLiteral);
					this.state = 768;
					this.match(SoqlParser.RPAREN);
					}
				}

				}
				break;
			}
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 773;
				this.match(SoqlParser.WITH);
				this.state = 774;
				this.match(SoqlParser.NETWORK);
				this.state = 775;
				this.match(SoqlParser.IN);
				this.state = 776;
				this.match(SoqlParser.LPAREN);
				this.state = 777;
				this.networkList();
				this.state = 778;
				this.match(SoqlParser.RPAREN);
				}
				break;
			}
			this.state = 786;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 782;
				this.match(SoqlParser.WITH);
				this.state = 783;
				this.match(SoqlParser.NETWORK);
				this.state = 784;
				this.match(SoqlParser.ASSIGN);
				this.state = 785;
				this.match(SoqlParser.StringLiteral);
				}
				break;
			}
			this.state = 792;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 788;
				this.match(SoqlParser.WITH);
				this.state = 789;
				this.match(SoqlParser.PRICEBOOKID);
				this.state = 790;
				this.match(SoqlParser.ASSIGN);
				this.state = 791;
				this.match(SoqlParser.StringLiteral);
				}
				break;
			}
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.WITH) {
				{
				this.state = 794;
				this.match(SoqlParser.WITH);
				this.state = 795;
				this.match(SoqlParser.METADATA);
				this.state = 796;
				this.match(SoqlParser.ASSIGN);
				this.state = 797;
				this.match(SoqlParser.StringLiteral);
				}
			}

			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LIMIT) {
				{
				this.state = 800;
				this.limitClause();
				}
			}

			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.UPDATE) {
				{
				this.state = 803;
				this.match(SoqlParser.UPDATE);
				this.state = 804;
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
		this.enterRule(_localctx, 100, SoqlParser.RULE_searchGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			_la = this._input.LA(1);
			if (!(_la === SoqlParser.ALL || ((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (SoqlParser.EMAIL - 178)) | (1 << (SoqlParser.NAME - 178)) | (1 << (SoqlParser.PHONE - 178)) | (1 << (SoqlParser.SIDEBAR - 178)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 808;
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
		this.enterRule(_localctx, 102, SoqlParser.RULE_fieldSpecList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.fieldSpec();
			this.state = 815;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 811;
					this.match(SoqlParser.COMMA);
					this.state = 812;
					this.fieldSpecList();
					}
					}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
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
		this.enterRule(_localctx, 104, SoqlParser.RULE_fieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 818;
			this.soslId();
			this.state = 844;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.LPAREN) {
				{
				this.state = 819;
				this.match(SoqlParser.LPAREN);
				this.state = 820;
				this.fieldList();
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.WHERE) {
					{
					this.state = 821;
					this.match(SoqlParser.WHERE);
					this.state = 822;
					this.logicalExpression();
					}
				}

				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.USING) {
					{
					this.state = 825;
					this.match(SoqlParser.USING);
					this.state = 826;
					this.match(SoqlParser.LISTVIEW);
					this.state = 827;
					this.match(SoqlParser.ASSIGN);
					this.state = 828;
					this.soslId();
					}
				}

				this.state = 834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.ORDER) {
					{
					this.state = 831;
					this.match(SoqlParser.ORDER);
					this.state = 832;
					this.match(SoqlParser.BY);
					this.state = 833;
					this.fieldOrderList();
					}
				}

				this.state = 837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.LIMIT) {
					{
					this.state = 836;
					this.limitClause();
					}
				}

				this.state = 840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SoqlParser.OFFSET) {
					{
					this.state = 839;
					this.offsetClause();
					}
				}

				this.state = 842;
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
		this.enterRule(_localctx, 106, SoqlParser.RULE_fieldList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
			this.soslId();
			this.state = 851;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 847;
					this.match(SoqlParser.COMMA);
					this.state = 848;
					this.fieldList();
					}
					}
				}
				this.state = 853;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
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
		this.enterRule(_localctx, 108, SoqlParser.RULE_updateList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this.updateType();
			this.state = 857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.COMMA) {
				{
				this.state = 855;
				this.match(SoqlParser.COMMA);
				this.state = 856;
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
		this.enterRule(_localctx, 110, SoqlParser.RULE_updateType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
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
		this.enterRule(_localctx, 112, SoqlParser.RULE_networkList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.match(SoqlParser.StringLiteral);
			this.state = 864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SoqlParser.COMMA) {
				{
				this.state = 862;
				this.match(SoqlParser.COMMA);
				this.state = 863;
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
		this.enterRule(_localctx, 114, SoqlParser.RULE_soslId);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			this.id();
			this.state = 871;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 867;
					this.match(SoqlParser.DOT);
					this.state = 868;
					this.soslId();
					}
					}
				}
				this.state = 873;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
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
		this.enterRule(_localctx, 116, SoqlParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.GET) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SoqlParser.SET - 34)) | (1 << (SoqlParser.SHARING - 34)) | (1 << (SoqlParser.SWITCH - 34)) | (1 << (SoqlParser.TRANSIENT - 34)) | (1 << (SoqlParser.TRIGGER - 34)) | (1 << (SoqlParser.WHEN - 34)) | (1 << (SoqlParser.WITH - 34)) | (1 << (SoqlParser.WITHOUT - 34)) | (1 << (SoqlParser.SYSTEM - 34)) | (1 << (SoqlParser.USER - 34)) | (1 << (SoqlParser.SELECT - 34)) | (1 << (SoqlParser.COUNT - 34)) | (1 << (SoqlParser.FROM - 34)) | (1 << (SoqlParser.AS - 34)) | (1 << (SoqlParser.USING - 34)) | (1 << (SoqlParser.SCOPE - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SoqlParser.WHERE - 66)) | (1 << (SoqlParser.ORDER - 66)) | (1 << (SoqlParser.BY - 66)) | (1 << (SoqlParser.LIMIT - 66)) | (1 << (SoqlParser.SOQLAND - 66)) | (1 << (SoqlParser.SOQLOR - 66)) | (1 << (SoqlParser.NOT - 66)) | (1 << (SoqlParser.AVG - 66)) | (1 << (SoqlParser.COUNT_DISTINCT - 66)) | (1 << (SoqlParser.MIN - 66)) | (1 << (SoqlParser.MAX - 66)) | (1 << (SoqlParser.SUM - 66)) | (1 << (SoqlParser.TYPEOF - 66)) | (1 << (SoqlParser.END - 66)) | (1 << (SoqlParser.THEN - 66)) | (1 << (SoqlParser.LIKE - 66)) | (1 << (SoqlParser.IN - 66)) | (1 << (SoqlParser.INCLUDES - 66)) | (1 << (SoqlParser.EXCLUDES - 66)) | (1 << (SoqlParser.ASC - 66)) | (1 << (SoqlParser.DESC - 66)) | (1 << (SoqlParser.NULLS - 66)) | (1 << (SoqlParser.FIRST - 66)) | (1 << (SoqlParser.LAST - 66)) | (1 << (SoqlParser.GROUP - 66)) | (1 << (SoqlParser.ALL - 66)) | (1 << (SoqlParser.ROWS - 66)) | (1 << (SoqlParser.VIEW - 66)) | (1 << (SoqlParser.HAVING - 66)) | (1 << (SoqlParser.ROLLUP - 66)) | (1 << (SoqlParser.TOLABEL - 66)) | (1 << (SoqlParser.OFFSET - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SoqlParser.DATA - 98)) | (1 << (SoqlParser.CATEGORY - 98)) | (1 << (SoqlParser.AT - 98)) | (1 << (SoqlParser.ABOVE - 98)) | (1 << (SoqlParser.BELOW - 98)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 98)) | (1 << (SoqlParser.SECURITY_ENFORCED - 98)) | (1 << (SoqlParser.SYSTEM_MODE - 98)) | (1 << (SoqlParser.USER_MODE - 98)) | (1 << (SoqlParser.REFERENCE - 98)) | (1 << (SoqlParser.CUBE - 98)) | (1 << (SoqlParser.FORMAT - 98)) | (1 << (SoqlParser.TRACKING - 98)) | (1 << (SoqlParser.VIEWSTAT - 98)) | (1 << (SoqlParser.CUSTOM - 98)) | (1 << (SoqlParser.STANDARD - 98)) | (1 << (SoqlParser.DISTANCE - 98)) | (1 << (SoqlParser.GEOLOCATION - 98)) | (1 << (SoqlParser.CALENDAR_MONTH - 98)) | (1 << (SoqlParser.CALENDAR_QUARTER - 98)) | (1 << (SoqlParser.CALENDAR_YEAR - 98)) | (1 << (SoqlParser.DAY_IN_MONTH - 98)) | (1 << (SoqlParser.DAY_IN_WEEK - 98)) | (1 << (SoqlParser.DAY_IN_YEAR - 98)) | (1 << (SoqlParser.DAY_ONLY - 98)) | (1 << (SoqlParser.FISCAL_MONTH - 98)) | (1 << (SoqlParser.FISCAL_QUARTER - 98)) | (1 << (SoqlParser.FISCAL_YEAR - 98)) | (1 << (SoqlParser.HOUR_IN_DAY - 98)) | (1 << (SoqlParser.WEEK_IN_MONTH - 98)) | (1 << (SoqlParser.WEEK_IN_YEAR - 98)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SoqlParser.YESTERDAY - 130)) | (1 << (SoqlParser.TODAY - 130)) | (1 << (SoqlParser.TOMORROW - 130)) | (1 << (SoqlParser.LAST_WEEK - 130)) | (1 << (SoqlParser.THIS_WEEK - 130)) | (1 << (SoqlParser.NEXT_WEEK - 130)) | (1 << (SoqlParser.LAST_MONTH - 130)) | (1 << (SoqlParser.THIS_MONTH - 130)) | (1 << (SoqlParser.NEXT_MONTH - 130)) | (1 << (SoqlParser.LAST_90_DAYS - 130)) | (1 << (SoqlParser.NEXT_90_DAYS - 130)) | (1 << (SoqlParser.LAST_N_DAYS_N - 130)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 130)) | (1 << (SoqlParser.N_DAYS_AGO_N - 130)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 130)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 130)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 130)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 130)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 130)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 130)) | (1 << (SoqlParser.THIS_QUARTER - 130)) | (1 << (SoqlParser.LAST_QUARTER - 130)) | (1 << (SoqlParser.NEXT_QUARTER - 130)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 130)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 130)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 130)) | (1 << (SoqlParser.THIS_YEAR - 130)) | (1 << (SoqlParser.LAST_YEAR - 130)) | (1 << (SoqlParser.NEXT_YEAR - 130)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 130)) | (1 << (SoqlParser.LAST_N_YEARS_N - 130)) | (1 << (SoqlParser.N_YEARS_AGO_N - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (SoqlParser.THIS_FISCAL_QUARTER - 162)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 162)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 162)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 162)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 162)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 162)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 162)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 162)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 162)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 162)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 162)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 162)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 162)) | (1 << (SoqlParser.FIND - 162)) | (1 << (SoqlParser.EMAIL - 162)) | (1 << (SoqlParser.NAME - 162)) | (1 << (SoqlParser.PHONE - 162)) | (1 << (SoqlParser.SIDEBAR - 162)) | (1 << (SoqlParser.FIELDS - 162)) | (1 << (SoqlParser.METADATA - 162)) | (1 << (SoqlParser.PRICEBOOKID - 162)) | (1 << (SoqlParser.NETWORK - 162)) | (1 << (SoqlParser.SNIPPET - 162)) | (1 << (SoqlParser.TARGET_LENGTH - 162)) | (1 << (SoqlParser.DIVISION - 162)) | (1 << (SoqlParser.RETURNING - 162)) | (1 << (SoqlParser.LISTVIEW - 162)))) !== 0) || _la === SoqlParser.Identifier)) {
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
		this.enterRule(_localctx, 118, SoqlParser.RULE_anyId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 876;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SoqlParser.ABSTRACT) | (1 << SoqlParser.AFTER) | (1 << SoqlParser.BEFORE) | (1 << SoqlParser.BREAK) | (1 << SoqlParser.CATCH) | (1 << SoqlParser.CLASS) | (1 << SoqlParser.CONTINUE) | (1 << SoqlParser.DELETE) | (1 << SoqlParser.DO) | (1 << SoqlParser.ELSE) | (1 << SoqlParser.ENUM) | (1 << SoqlParser.EXTENDS) | (1 << SoqlParser.FINAL) | (1 << SoqlParser.FINALLY) | (1 << SoqlParser.FOR) | (1 << SoqlParser.GET) | (1 << SoqlParser.GLOBAL) | (1 << SoqlParser.IF) | (1 << SoqlParser.IMPLEMENTS) | (1 << SoqlParser.INHERITED) | (1 << SoqlParser.INSERT) | (1 << SoqlParser.INSTANCEOF) | (1 << SoqlParser.INTERFACE) | (1 << SoqlParser.MERGE) | (1 << SoqlParser.NEW) | (1 << SoqlParser.NULL) | (1 << SoqlParser.ON) | (1 << SoqlParser.OVERRIDE) | (1 << SoqlParser.PRIVATE) | (1 << SoqlParser.PROTECTED) | (1 << SoqlParser.PUBLIC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SoqlParser.RETURN - 32)) | (1 << (SoqlParser.SET - 32)) | (1 << (SoqlParser.SHARING - 32)) | (1 << (SoqlParser.STATIC - 32)) | (1 << (SoqlParser.SUPER - 32)) | (1 << (SoqlParser.SWITCH - 32)) | (1 << (SoqlParser.TESTMETHOD - 32)) | (1 << (SoqlParser.THIS - 32)) | (1 << (SoqlParser.THROW - 32)) | (1 << (SoqlParser.TRANSIENT - 32)) | (1 << (SoqlParser.TRIGGER - 32)) | (1 << (SoqlParser.TRY - 32)) | (1 << (SoqlParser.UNDELETE - 32)) | (1 << (SoqlParser.UPDATE - 32)) | (1 << (SoqlParser.UPSERT - 32)) | (1 << (SoqlParser.VIRTUAL - 32)) | (1 << (SoqlParser.WEBSERVICE - 32)) | (1 << (SoqlParser.WHEN - 32)) | (1 << (SoqlParser.WHILE - 32)) | (1 << (SoqlParser.WITH - 32)) | (1 << (SoqlParser.WITHOUT - 32)) | (1 << (SoqlParser.LIST - 32)) | (1 << (SoqlParser.MAP - 32)) | (1 << (SoqlParser.SYSTEM - 32)) | (1 << (SoqlParser.USER - 32)) | (1 << (SoqlParser.SELECT - 32)) | (1 << (SoqlParser.COUNT - 32)) | (1 << (SoqlParser.FROM - 32)) | (1 << (SoqlParser.AS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SoqlParser.USING - 64)) | (1 << (SoqlParser.SCOPE - 64)) | (1 << (SoqlParser.WHERE - 64)) | (1 << (SoqlParser.ORDER - 64)) | (1 << (SoqlParser.BY - 64)) | (1 << (SoqlParser.LIMIT - 64)) | (1 << (SoqlParser.SOQLAND - 64)) | (1 << (SoqlParser.SOQLOR - 64)) | (1 << (SoqlParser.NOT - 64)) | (1 << (SoqlParser.AVG - 64)) | (1 << (SoqlParser.COUNT_DISTINCT - 64)) | (1 << (SoqlParser.MIN - 64)) | (1 << (SoqlParser.MAX - 64)) | (1 << (SoqlParser.SUM - 64)) | (1 << (SoqlParser.TYPEOF - 64)) | (1 << (SoqlParser.END - 64)) | (1 << (SoqlParser.THEN - 64)) | (1 << (SoqlParser.LIKE - 64)) | (1 << (SoqlParser.IN - 64)) | (1 << (SoqlParser.INCLUDES - 64)) | (1 << (SoqlParser.EXCLUDES - 64)) | (1 << (SoqlParser.ASC - 64)) | (1 << (SoqlParser.DESC - 64)) | (1 << (SoqlParser.NULLS - 64)) | (1 << (SoqlParser.FIRST - 64)) | (1 << (SoqlParser.LAST - 64)) | (1 << (SoqlParser.GROUP - 64)) | (1 << (SoqlParser.ALL - 64)) | (1 << (SoqlParser.ROWS - 64)) | (1 << (SoqlParser.VIEW - 64)) | (1 << (SoqlParser.HAVING - 64)) | (1 << (SoqlParser.ROLLUP - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (SoqlParser.TOLABEL - 96)) | (1 << (SoqlParser.OFFSET - 96)) | (1 << (SoqlParser.DATA - 96)) | (1 << (SoqlParser.CATEGORY - 96)) | (1 << (SoqlParser.AT - 96)) | (1 << (SoqlParser.ABOVE - 96)) | (1 << (SoqlParser.BELOW - 96)) | (1 << (SoqlParser.ABOVE_OR_BELOW - 96)) | (1 << (SoqlParser.SECURITY_ENFORCED - 96)) | (1 << (SoqlParser.SYSTEM_MODE - 96)) | (1 << (SoqlParser.USER_MODE - 96)) | (1 << (SoqlParser.REFERENCE - 96)) | (1 << (SoqlParser.CUBE - 96)) | (1 << (SoqlParser.FORMAT - 96)) | (1 << (SoqlParser.TRACKING - 96)) | (1 << (SoqlParser.VIEWSTAT - 96)) | (1 << (SoqlParser.CUSTOM - 96)) | (1 << (SoqlParser.STANDARD - 96)) | (1 << (SoqlParser.DISTANCE - 96)) | (1 << (SoqlParser.GEOLOCATION - 96)) | (1 << (SoqlParser.CALENDAR_MONTH - 96)) | (1 << (SoqlParser.CALENDAR_QUARTER - 96)) | (1 << (SoqlParser.CALENDAR_YEAR - 96)) | (1 << (SoqlParser.DAY_IN_MONTH - 96)) | (1 << (SoqlParser.DAY_IN_WEEK - 96)) | (1 << (SoqlParser.DAY_IN_YEAR - 96)) | (1 << (SoqlParser.DAY_ONLY - 96)) | (1 << (SoqlParser.FISCAL_MONTH - 96)) | (1 << (SoqlParser.FISCAL_QUARTER - 96)) | (1 << (SoqlParser.FISCAL_YEAR - 96)) | (1 << (SoqlParser.HOUR_IN_DAY - 96)) | (1 << (SoqlParser.WEEK_IN_MONTH - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (SoqlParser.WEEK_IN_YEAR - 128)) | (1 << (SoqlParser.CONVERT_TIMEZONE - 128)) | (1 << (SoqlParser.YESTERDAY - 128)) | (1 << (SoqlParser.TODAY - 128)) | (1 << (SoqlParser.TOMORROW - 128)) | (1 << (SoqlParser.LAST_WEEK - 128)) | (1 << (SoqlParser.THIS_WEEK - 128)) | (1 << (SoqlParser.NEXT_WEEK - 128)) | (1 << (SoqlParser.LAST_MONTH - 128)) | (1 << (SoqlParser.THIS_MONTH - 128)) | (1 << (SoqlParser.NEXT_MONTH - 128)) | (1 << (SoqlParser.LAST_90_DAYS - 128)) | (1 << (SoqlParser.NEXT_90_DAYS - 128)) | (1 << (SoqlParser.LAST_N_DAYS_N - 128)) | (1 << (SoqlParser.NEXT_N_DAYS_N - 128)) | (1 << (SoqlParser.N_DAYS_AGO_N - 128)) | (1 << (SoqlParser.NEXT_N_WEEKS_N - 128)) | (1 << (SoqlParser.LAST_N_WEEKS_N - 128)) | (1 << (SoqlParser.N_WEEKS_AGO_N - 128)) | (1 << (SoqlParser.NEXT_N_MONTHS_N - 128)) | (1 << (SoqlParser.LAST_N_MONTHS_N - 128)) | (1 << (SoqlParser.N_MONTHS_AGO_N - 128)) | (1 << (SoqlParser.THIS_QUARTER - 128)) | (1 << (SoqlParser.LAST_QUARTER - 128)) | (1 << (SoqlParser.NEXT_QUARTER - 128)) | (1 << (SoqlParser.NEXT_N_QUARTERS_N - 128)) | (1 << (SoqlParser.LAST_N_QUARTERS_N - 128)) | (1 << (SoqlParser.N_QUARTERS_AGO_N - 128)) | (1 << (SoqlParser.THIS_YEAR - 128)) | (1 << (SoqlParser.LAST_YEAR - 128)) | (1 << (SoqlParser.NEXT_YEAR - 128)) | (1 << (SoqlParser.NEXT_N_YEARS_N - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (SoqlParser.LAST_N_YEARS_N - 160)) | (1 << (SoqlParser.N_YEARS_AGO_N - 160)) | (1 << (SoqlParser.THIS_FISCAL_QUARTER - 160)) | (1 << (SoqlParser.LAST_FISCAL_QUARTER - 160)) | (1 << (SoqlParser.NEXT_FISCAL_QUARTER - 160)) | (1 << (SoqlParser.NEXT_N_FISCAL_QUARTERS_N - 160)) | (1 << (SoqlParser.LAST_N_FISCAL_QUARTERS_N - 160)) | (1 << (SoqlParser.N_FISCAL_QUARTERS_AGO_N - 160)) | (1 << (SoqlParser.THIS_FISCAL_YEAR - 160)) | (1 << (SoqlParser.LAST_FISCAL_YEAR - 160)) | (1 << (SoqlParser.NEXT_FISCAL_YEAR - 160)) | (1 << (SoqlParser.NEXT_N_FISCAL_YEARS_N - 160)) | (1 << (SoqlParser.LAST_N_FISCAL_YEARS_N - 160)) | (1 << (SoqlParser.N_FISCAL_YEARS_AGO_N - 160)) | (1 << (SoqlParser.IntegralCurrencyLiteral - 160)) | (1 << (SoqlParser.FIND - 160)) | (1 << (SoqlParser.EMAIL - 160)) | (1 << (SoqlParser.NAME - 160)) | (1 << (SoqlParser.PHONE - 160)) | (1 << (SoqlParser.SIDEBAR - 160)) | (1 << (SoqlParser.FIELDS - 160)) | (1 << (SoqlParser.METADATA - 160)) | (1 << (SoqlParser.PRICEBOOKID - 160)) | (1 << (SoqlParser.NETWORK - 160)) | (1 << (SoqlParser.SNIPPET - 160)) | (1 << (SoqlParser.TARGET_LENGTH - 160)) | (1 << (SoqlParser.DIVISION - 160)) | (1 << (SoqlParser.RETURNING - 160)) | (1 << (SoqlParser.LISTVIEW - 160)))) !== 0) || _la === SoqlParser.Identifier)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xFA\u0371\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x03\x02\x03\x02\x05\x02}\n\x02\x03\x02\x05\x02\x80\n\x02\x03\x02" +
		"\x05\x02\x83\n\x02\x03\x02\x05\x02\x86\n\x02\x03\x02\x05\x02\x89\n\x02" +
		"\x03\x02\x05\x02\x8C\n\x02\x03\x02\x05\x02\x8F\n\x02\x03\x02\x05\x02\x92" +
		"\n\x02\x03\x02\x05\x02\x95\n\x02\x03\x02\x05\x02\x98\n\x02\x03\x02\x05" +
		"\x02\x9B\n\x02\x03\x02\x03\x02\x03\x02\x05\x02\xA0\n\x02\x03\x02\x05\x02" +
		"\xA3\n\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB0\n\x06\x03\x06\x05\x06\xB3\n\x06" +
		"\x03\x06\x05\x06\xB6\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\xBB\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\xC0\n\x07\x07\x07\xC2\n\x07\f\x07\x0E\x07" +
		"\xC5\v\x07\x03\b\x03\b\x05\b\xC9\n\b\x03\t\x03\t\x03\t\x07\t\xCE\n\t\f" +
		"\t\x0E\t\xD1\v\t\x03\n\x03\n\x05\n\xD5\n\n\x03\n\x03\n\x03\n\x05\n\xDA" +
		"\n\n\x07\n\xDC\n\n\f\n\x0E\n\xDF\v\n\x03\v\x03\v\x03\f\x03\f\x03\f\x07" +
		"\f\xE6\n\f\f\f\x0E\f\xE9\v\f\x03\r\x03\r\x05\r\xED\n\r\x03\r\x03\r\x05" +
		"\r\xF1\n\r\x03\r\x05\r\xF4\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u0172\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\u017A\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x05\x11\u0184\n\x11\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x13\x06\x13\u018B\n\x13\r\x13\x0E\x13\u018C\x03\x13\x05\x13\u0190" +
		"\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x07\x16\u019F\n\x16\f\x16\x0E" +
		"\x16\u01A2\v\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u01AF\n\x19\f\x19\x0E\x19\u01B2" +
		"\v\x19\x03\x19\x03\x19\x05\x19\u01B6\n\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01BF\n\x1B\x03\x1C\x03\x1C\x05\x1C" +
		"\u01C3\n\x1C\x03\x1C\x05\x1C\u01C6\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x05\x1C\u01CC\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x05\x1D\u01DE\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01EA\n\x1E\x05\x1E\u01EC\n\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01F3\n\x1E\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x07\x1F\u01F9\n\x1F\f\x1F\x0E\x1F\u01FC\v\x1F\x03" +
		"\x1F\x03\x1F\x03 \x05 \u0201\n \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0211\n!\x03\"\x03\"\x03\"\x07\"" +
		"\u0216\n\"\f\"\x0E\"\u0219\v\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03" +
		"$\x03$\x07$\u0224\n$\f$\x0E$\u0227\v$\x03$\x03$\x05$\u022B\n$\x03%\x03" +
		"%\x03&\x03&\x03&\x03&\x03&\x05&\u0234\n&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x07&\u023D\n&\f&\x0E&\u0240\v&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x07&\u024B\n&\f&\x0E&\u024E\v&\x03&\x03&\x05&\u0252\n&\x03" +
		"\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x07(\u025B\n(\f(\x0E(\u025E\v(\x03" +
		")\x03)\x05)\u0262\n)\x03)\x03)\x05)\u0266\n)\x03)\x03)\x05)\u026A\n)\x03" +
		")\x03)\x05)\u026E\n)\x05)\u0270\n)\x03*\x03*\x03*\x03+\x03+\x03+\x03," +
		"\x03,\x03,\x03-\x03-\x07-\u027D\n-\f-\x0E-\u0280\v-\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u02D8" +
		"\n.\x03/\x05/\u02DB\n/\x03/\x03/\x030\x030\x031\x031\x031\x031\x032\x03" +
		"2\x032\x032\x033\x033\x053\u02EB\n3\x033\x033\x053\u02EF\n3\x033\x033" +
		"\x033\x033\x053\u02F5\n3\x033\x033\x033\x033\x053\u02FB\n3\x033\x033\x03" +
		"3\x033\x033\x033\x033\x053\u0304\n3\x053\u0306\n3\x033\x033\x033\x033" +
		"\x033\x033\x033\x053\u030F\n3\x033\x033\x033\x033\x053\u0315\n3\x033\x03" +
		"3\x033\x033\x053\u031B\n3\x033\x033\x033\x033\x053\u0321\n3\x033\x053" +
		"\u0324\n3\x033\x033\x053\u0328\n3\x034\x034\x034\x035\x035\x035\x075\u0330" +
		"\n5\f5\x0E5\u0333\v5\x036\x036\x036\x036\x036\x056\u033A\n6\x036\x036" +
		"\x036\x036\x056\u0340\n6\x036\x036\x036\x056\u0345\n6\x036\x056\u0348" +
		"\n6\x036\x056\u034B\n6\x036\x036\x056\u034F\n6\x037\x037\x037\x077\u0354" +
		"\n7\f7\x0E7\u0357\v7\x038\x038\x038\x058\u035C\n8\x039\x039\x03:\x03:" +
		"\x03:\x05:\u0363\n:\x03;\x03;\x03;\x07;\u0368\n;\f;\x0E;\u036B\v;\x03" +
		"<\x03<\x03=\x03=\x03=\x02\x02\x02>\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02\x02\x12\x03\x02=>\x04\x02==@@\x04\x02==\xF6" +
		"\xF6\x04\x02]]rs\x03\x02HI\x03\x02\xE3\xE4\x04\x02\xC3\xC3\xC5\xC5\x03" +
		"\x02fi\x03\x02WX\x03\x02Z[\x05\x0200__mm\x05\x02==\xB5\xB5\xF6\xF6\x04" +
		"\x02]]\xB4\xB7\x03\x02pq\x0F\x02\x04\x05\x12\x12\x16\x16\x18\x18$%((," +
		"-5578;<>\xAF\xB2\xC0\xF6\xF6\b\x02\x03\"$24<>\xAF\xB2\xC0\xF6\xF6\x02" +
		"\u03E2\x02z\x03\x02\x02\x02\x04\xA4\x03\x02\x02\x02\x06\xA6\x03\x02\x02" +
		"\x02\b\xA8\x03\x02\x02\x02\n\xAA\x03\x02\x02\x02\f\xBC\x03\x02\x02\x02" +
		"\x0E\xC6\x03\x02\x02\x02\x10\xCA\x03\x02\x02\x02\x12\xD2\x03\x02\x02\x02" +
		"\x14\xE0\x03\x02\x02\x02\x16\xE2\x03\x02\x02\x02\x18\xF3\x03\x02\x02\x02" +
		"\x1A\xF5\x03\x02\x02\x02\x1C\u0171\x03\x02\x02\x02\x1E\u0179\x03\x02\x02" +
		"\x02 \u0183\x03\x02\x02\x02\"\u0185\x03\x02\x02\x02$\u0187\x03\x02\x02" +
		"\x02&\u0193\x03\x02\x02\x02(\u0198\x03\x02\x02\x02*\u019B\x03\x02\x02" +
		"\x02,\u01A3\x03\x02\x02\x02.\u01A7\x03\x02\x02\x020\u01B5\x03\x02\x02" +
		"\x022\u01B7\x03\x02\x02\x024\u01BE\x03\x02\x02\x026\u01CB\x03\x02\x02" +
		"\x028\u01DD\x03\x02\x02\x02:\u01F2\x03\x02\x02\x02<\u01F4\x03\x02\x02" +
		"\x02>\u0200\x03\x02\x02\x02@\u0210\x03\x02\x02\x02B\u0212\x03\x02\x02" +
		"\x02D\u021A\x03\x02\x02\x02F\u022A\x03\x02\x02\x02H\u022C\x03\x02\x02" +
		"\x02J\u0251\x03\x02\x02\x02L\u0253\x03\x02\x02\x02N\u0257\x03\x02\x02" +
		"\x02P\u026F\x03\x02\x02\x02R\u0271\x03\x02\x02\x02T\u0274\x03\x02\x02" +
		"\x02V\u0277\x03\x02\x02\x02X\u027E\x03\x02\x02\x02Z\u02D7\x03\x02\x02" +
		"\x02\\\u02DA\x03\x02\x02\x02^\u02DE\x03\x02\x02\x02`\u02E0\x03\x02\x02" +
		"\x02b\u02E4\x03\x02\x02\x02d\u02EA\x03\x02\x02\x02f\u0329\x03\x02\x02" +
		"\x02h\u032C\x03\x02\x02\x02j\u0334\x03\x02\x02\x02l\u0350\x03\x02\x02" +
		"\x02n\u0358\x03\x02\x02\x02p\u035D\x03\x02\x02\x02r\u035F\x03\x02\x02" +
		"\x02t\u0364\x03\x02\x02\x02v\u036C\x03\x02\x02\x02x\u036E\x03\x02\x02" +
		"\x02z|\x05\x06\x04\x02{}\x05\f\x07\x02|{\x03\x02\x02\x02|}\x03\x02\x02" +
		"\x02}\x7F\x03\x02\x02\x02~\x80\x05\b\x05\x02\x7F~\x03\x02\x02\x02\x7F" +
		"\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81\x83\x05\x12\n\x02\x82" +
		"\x81\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x85\x03\x02\x02\x02\x84" +
		"\x86\x05,\x17\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86" +
		"\x88\x03\x02\x02\x02\x87\x89\x05.\x18\x02\x88\x87\x03\x02\x02\x02\x88" +
		"\x89\x03\x02\x02\x02\x89\x8B\x03\x02\x02\x02\x8A\x8C\x05@!\x02\x8B\x8A" +
		"\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8F" +
		"\x05J&\x02\x8E\x8D\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x03" +
		"\x02\x02\x02\x90\x92\x05L\'\x02\x91\x90\x03\x02\x02\x02\x91\x92\x03\x02" +
		"\x02\x02\x92\x94\x03\x02\x02\x02\x93\x95\x05R*\x02\x94\x93\x03\x02\x02" +
		"\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x98\x05T+\x02" +
		"\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02" +
		"\x99\x9B\x05V,\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B" +
		"\x9C\x03\x02\x02\x02\x9C\x9F\x05X-\x02\x9D\x9E\x070\x02\x02\x9E\xA0\x05" +
		"n8\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02" +
		"\x02\x02\xA1\xA3\x05\x04\x03\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02" +
		"\x02\x02\xA3\x03\x03\x02\x02\x02\xA4\xA5\x07=\x02\x02\xA5\x05\x03\x02" +
		"\x02\x02\xA6\xA7\t\x02\x02\x02\xA7\x07\x03\x02\x02\x02\xA8\xA9\t\x03\x02" +
		"\x02\xA9\t\x03\x02\x02\x02\xAA\xAB\x07>\x02\x02\xAB\xAC\x05\x16\f\x02" +
		"\xAC\xAD\x07@\x02\x02\xAD\xAF\x05\x12\n\x02\xAE\xB0\x05.\x18\x02\xAF\xAE" +
		"\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xB3" +
		"\x05L\'\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03" +
		"\x02\x02\x02\xB4\xB6\x05R*\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6\x03\x02" +
		"\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBA\x05X-\x02\xB8\xB9\x070\x02\x02" +
		"\xB9\xBB\x05n8\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB" +
		"\v\x03\x02\x02\x02\xBC\xC3\x05\x0E\b\x02\xBD\xBF\x07\xD0\x02\x02\xBE\xC0" +
		"\x05\x0E\b\x02\xBF\xBE\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2" +
		"\x03\x02\x02\x02\xC1\xBD\x03\x02\x02\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC1" +
		"\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\r\x03\x02\x02\x02\xC5\xC3" +
		"\x03\x02\x02\x02\xC6\xC8\x05\x10\t\x02\xC7\xC9\x07=\x02\x02\xC8\xC7\x03" +
		"\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\x0F\x03\x02\x02\x02\xCA\xCF\x05" +
		"^0\x02\xCB\xCC\x07\xD1\x02\x02\xCC\xCE\x05^0\x02\xCD\xCB\x03\x02\x02\x02" +
		"\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02" +
		"\xD0\x11\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD4\x05\x10\t\x02" +
		"\xD3\xD5\x05\x14\v\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02" +
		"\xD5\xDD\x03\x02\x02\x02\xD6\xD7\x07\xD0\x02\x02\xD7\xD9\x05\x10\t\x02" +
		"\xD8\xDA\x05\x14\v\x02\xD9\xD8\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02" +
		"\xDA\xDC\x03\x02\x02\x02\xDB\xD6\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02" +
		"\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\x13\x03\x02\x02\x02" +
		"\xDF\xDD\x03\x02\x02\x02\xE0\xE1\t\x04\x02\x02\xE1\x15\x03\x02\x02\x02" +
		"\xE2\xE7\x05\x18\r\x02\xE3\xE4\x07\xD0\x02\x02\xE4\xE6\x05\x18\r\x02\xE5" +
		"\xE3\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7" +
		"\xE8\x03\x02\x02\x02\xE8\x17\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA" +
		"\xEC\x05\x10\t\x02\xEB\xED\x05^0\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03" +
		"\x02\x02\x02\xED\xF4\x03\x02\x02\x02\xEE\xF0\x05\x1C\x0F\x02\xEF\xF1\x05" +
		"^0\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF4\x03\x02" +
		"\x02\x02\xF2\xF4\x05$\x13\x02\xF3\xEA\x03\x02\x02\x02\xF3\xEE\x03\x02" +
		"\x02\x02\xF3\xF2\x03\x02\x02\x02\xF4\x19\x03\x02\x02\x02\xF5\xF6\t\x05" +
		"\x02\x02\xF6\x1B\x03\x02\x02\x02\xF7\xF8\x07K\x02\x02\xF8\xF9\x07\xC9" +
		"\x02\x02\xF9\xFA\x05\x10\t\x02\xFA\xFB\x07\xCA\x02\x02\xFB\u0172\x03\x02" +
		"\x02\x02\xFC\xFD\x07?\x02\x02\xFD\xFE\x07\xC9\x02\x02\xFE\u0172\x07\xCA" +
		"\x02\x02\xFF\u0100\x07?\x02\x02\u0100\u0101\x07\xC9\x02\x02\u0101\u0102" +
		"\x05\x10\t\x02\u0102\u0103\x07\xCA\x02\x02\u0103\u0172\x03\x02\x02\x02" +
		"\u0104\u0105\x07L\x02\x02\u0105\u0106\x07\xC9\x02\x02\u0106\u0107\x05" +
		"\x10\t\x02\u0107\u0108\x07\xCA\x02\x02\u0108\u0172\x03\x02\x02\x02\u0109" +
		"\u010A\x07M\x02\x02\u010A\u010B\x07\xC9\x02\x02\u010B\u010C\x05\x10\t" +
		"\x02\u010C\u010D\x07\xCA\x02\x02\u010D\u0172\x03\x02\x02\x02\u010E\u010F" +
		"\x07N\x02\x02\u010F\u0110\x07\xC9\x02\x02\u0110\u0111\x05\x10\t\x02\u0111" +
		"\u0112\x07\xCA\x02\x02\u0112\u0172\x03\x02\x02\x02\u0113\u0114\x07O\x02" +
		"\x02\u0114\u0115\x07\xC9\x02\x02\u0115\u0116\x05\x10\t\x02\u0116\u0117" +
		"\x07\xCA\x02\x02\u0117\u0172\x03\x02\x02\x02\u0118\u0119\x07b\x02\x02" +
		"\u0119\u011A\x07\xC9\x02\x02\u011A\u011B\x05\x10\t\x02\u011B\u011C\x07" +
		"\xCA\x02\x02\u011C\u0172\x03\x02\x02\x02\u011D\u011E\x07o\x02\x02\u011E" +
		"\u011F\x07\xC9\x02\x02\u011F\u0120\x05\x10\t\x02\u0120\u0121\x07\xCA\x02" +
		"\x02\u0121\u0172\x03\x02\x02\x02\u0122\u0123\x07v\x02\x02\u0123\u0124" +
		"\x07\xC9\x02\x02\u0124\u0125\x05\x1E\x10\x02\u0125\u0126\x07\xCA\x02\x02" +
		"\u0126\u0172\x03\x02\x02\x02\u0127\u0128\x07w\x02\x02\u0128\u0129\x07" +
		"\xC9\x02\x02\u0129\u012A\x05\x1E\x10\x02\u012A\u012B\x07\xCA\x02\x02\u012B" +
		"\u0172\x03\x02\x02\x02\u012C\u012D\x07x\x02\x02\u012D\u012E\x07\xC9\x02" +
		"\x02\u012E\u012F\x05\x1E\x10\x02\u012F\u0130\x07\xCA\x02\x02\u0130\u0172" +
		"\x03\x02\x02\x02\u0131\u0132\x07y\x02\x02\u0132\u0133\x07\xC9\x02\x02" +
		"\u0133\u0134\x05\x1E\x10\x02\u0134\u0135\x07\xCA\x02\x02\u0135\u0172\x03" +
		"\x02\x02\x02\u0136\u0137\x07z\x02\x02\u0137\u0138\x07\xC9\x02\x02\u0138" +
		"\u0139\x05\x1E\x10\x02\u0139\u013A\x07\xCA\x02\x02\u013A\u0172\x03\x02" +
		"\x02\x02\u013B\u013C\x07{\x02\x02\u013C\u013D\x07\xC9\x02\x02\u013D\u013E" +
		"\x05\x1E\x10\x02\u013E\u013F\x07\xCA\x02\x02\u013F\u0172\x03\x02\x02\x02" +
		"\u0140\u0141\x07|\x02\x02\u0141\u0142\x07\xC9\x02\x02\u0142\u0143\x05" +
		"\x1E\x10\x02\u0143\u0144\x07\xCA\x02\x02\u0144\u0172\x03\x02\x02\x02\u0145" +
		"\u0146\x07}\x02\x02\u0146\u0147\x07\xC9\x02\x02\u0147\u0148\x05\x1E\x10" +
		"\x02\u0148\u0149\x07\xCA\x02\x02\u0149\u0172\x03\x02\x02\x02\u014A\u014B" +
		"\x07~\x02\x02\u014B\u014C\x07\xC9\x02\x02\u014C\u014D\x05\x1E\x10\x02" +
		"\u014D\u014E\x07\xCA\x02\x02\u014E\u0172\x03\x02\x02\x02\u014F\u0150\x07" +
		"\x7F\x02\x02\u0150\u0151\x07\xC9\x02\x02\u0151\u0152\x05\x1E\x10\x02\u0152" +
		"\u0153\x07\xCA\x02\x02\u0153\u0172\x03\x02\x02\x02\u0154\u0155\x07\x80" +
		"\x02\x02\u0155\u0156\x07\xC9\x02\x02\u0156\u0157\x05\x1E\x10\x02\u0157" +
		"\u0158\x07\xCA\x02\x02\u0158\u0172\x03\x02\x02\x02\u0159\u015A\x07\x81" +
		"\x02\x02\u015A\u015B\x07\xC9\x02\x02\u015B\u015C\x05\x1E\x10\x02\u015C" +
		"\u015D\x07\xCA\x02\x02\u015D\u0172\x03\x02\x02\x02\u015E\u015F\x07\x82" +
		"\x02\x02\u015F\u0160\x07\xC9\x02\x02\u0160\u0161\x05\x1E\x10\x02\u0161" +
		"\u0162\x07\xCA\x02\x02\u0162\u0172\x03\x02\x02\x02\u0163\u0164\x07\xB8" +
		"\x02\x02\u0164\u0165\x07\xC9\x02\x02\u0165\u0166\x05\x1A\x0E\x02\u0166" +
		"\u0167\x07\xCA\x02\x02\u0167\u0172\x03\x02\x02\x02\u0168\u0169\x07t\x02" +
		"\x02\u0169\u016A\x07\xC9\x02\x02\u016A\u016B\x05 \x11\x02\u016B\u016C" +
		"\x07\xD0\x02\x02\u016C\u016D\x05 \x11\x02\u016D\u016E\x07\xD0\x02\x02" +
		"\u016E\u016F\x07\xC7\x02\x02\u016F\u0170\x07\xCA\x02\x02\u0170\u0172\x03" +
		"\x02\x02\x02\u0171\xF7\x03\x02\x02\x02\u0171\xFC\x03\x02\x02\x02\u0171" +
		"\xFF\x03\x02\x02\x02\u0171\u0104\x03\x02\x02\x02\u0171\u0109\x03\x02\x02" +
		"\x02\u0171\u010E\x03\x02\x02\x02\u0171\u0113\x03\x02\x02\x02\u0171\u0118" +
		"\x03\x02\x02\x02\u0171\u011D\x03\x02\x02\x02\u0171\u0122\x03\x02\x02\x02" +
		"\u0171\u0127\x03\x02\x02\x02\u0171\u012C\x03\x02\x02\x02\u0171\u0131\x03" +
		"\x02\x02\x02\u0171\u0136\x03\x02\x02\x02\u0171\u013B\x03\x02\x02\x02\u0171" +
		"\u0140\x03\x02\x02\x02\u0171\u0145\x03\x02\x02\x02\u0171\u014A\x03\x02" +
		"\x02\x02\u0171\u014F\x03\x02\x02\x02\u0171\u0154\x03\x02\x02\x02\u0171" +
		"\u0159\x03\x02\x02\x02\u0171\u015E\x03\x02\x02\x02\u0171\u0163\x03\x02" +
		"\x02\x02\u0171\u0168\x03\x02\x02\x02\u0172\x1D\x03\x02\x02\x02\u0173\u0174" +
		"\x07\x83\x02\x02\u0174\u0175\x07\xC9\x02\x02\u0175\u0176\x05\x10\t\x02" +
		"\u0176\u0177\x07\xCA\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u017A\x05" +
		"\x10\t\x02\u0179\u0173\x03\x02\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A" +
		"\x1F\x03\x02\x02\x02\u017B\u0184\x05\x10\t\x02\u017C\u017D\x07u\x02\x02" +
		"\u017D\u017E\x07\xC9\x02\x02\u017E\u017F\x05\"\x12\x02\u017F\u0180\x07" +
		"\xD0\x02\x02\u0180\u0181\x05\"\x12\x02\u0181\u0182\x07\xCA\x02\x02\u0182" +
		"\u0184\x03\x02\x02\x02\u0183\u017B\x03\x02\x02\x02\u0183\u017C\x03\x02" +
		"\x02\x02\u0184!\x03\x02\x02\x02\u0185\u0186\x05> \x02\u0186#\x03\x02\x02" +
		"\x02\u0187\u0188\x07P\x02\x02\u0188\u018A\x05\x10\t\x02\u0189\u018B\x05" +
		"&\x14\x02\u018A\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C" +
		"\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018F\x03\x02" +
		"\x02\x02\u018E\u0190\x05(\x15\x02\u018F\u018E\x03\x02\x02\x02\u018F\u0190" +
		"\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x07Q\x02\x02" +
		"\u0192%\x03\x02\x02\x02\u0193\u0194\x075\x02\x02\u0194\u0195\x05\x10\t" +
		"\x02\u0195\u0196\x07R\x02\x02\u0196\u0197\x05*\x16\x02\u0197\'\x03\x02" +
		"\x02\x02\u0198\u0199\x07\f\x02\x02\u0199\u019A\x05*\x16\x02\u019A)\x03" +
		"\x02\x02\x02\u019B\u01A0\x05\x10\t\x02\u019C\u019D\x07\xD0\x02\x02\u019D" +
		"\u019F\x05\x10\t\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A2\x03\x02\x02" +
		"\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1+\x03" +
		"\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3\u01A4\x07B\x02\x02\u01A4" +
		"\u01A5\x07C\x02\x02\u01A5\u01A6\x05^0\x02\u01A6-\x03\x02\x02\x02\u01A7" +
		"\u01A8\x07D\x02\x02\u01A8\u01A9\x050\x19\x02\u01A9/\x03\x02\x02\x02\u01AA" +
		"\u01B0\x054\x1B\x02\u01AB\u01AC\x052\x1A\x02\u01AC\u01AD\x054\x1B\x02" +
		"\u01AD\u01AF\x03\x02\x02\x02\u01AE\u01AB\x03\x02\x02\x02\u01AF\u01B2\x03" +
		"\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1" +
		"\u01B6\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B4\x07J\x02" +
		"\x02\u01B4\u01B6\x054\x1B\x02\u01B5\u01AA\x03\x02\x02\x02\u01B5\u01B3" +
		"\x03\x02\x02\x02\u01B61\x03\x02\x02\x02\u01B7\u01B8\t\x06\x02\x02\u01B8" +
		"3\x03\x02\x02\x02\u01B9\u01BA\x07\xC9\x02\x02\u01BA\u01BB\x050\x19\x02" +
		"\u01BB\u01BC\x07\xCA\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BF\x05" +
		"6\x1C\x02\u01BE\u01B9\x03\x02\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BF" +
		"5\x03\x02\x02\x02\u01C0\u01C2\x05\x10\t\x02\u01C1\u01C3\x058\x1D\x02\u01C2" +
		"\u01C1\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02" +
		"\x02\x02\u01C4\u01C6\x05:\x1E\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6" +
		"\x03\x02\x02\x02\u01C6\u01CC\x03\x02\x02\x02\u01C7\u01C8\x05\x1C\x0F\x02" +
		"\u01C8\u01C9\x058\x1D\x02\u01C9\u01CA\x05:\x1E\x02\u01CA\u01CC\x03\x02" +
		"\x02\x02\u01CB\u01C0\x03\x02\x02\x02\u01CB\u01C7\x03\x02\x02\x02\u01CC" +
		"7\x03\x02\x02\x02\u01CD\u01DE\x07\xD2\x02\x02\u01CE\u01DE\x07\xDC\x02" +
		"\x02\u01CF\u01DE\x07\xD4\x02\x02\u01D0\u01DE\x07\xD3\x02\x02\u01D1\u01D2" +
		"\x07\xD4\x02\x02\u01D2\u01DE\x07\xD2\x02\x02\u01D3\u01D4\x07\xD3\x02\x02" +
		"\u01D4\u01DE\x07\xD2\x02\x02\u01D5\u01DE\x07\xDD\x02\x02\u01D6\u01DE\x07" +
		"S\x02\x02\u01D7\u01DE\x07T\x02\x02\u01D8\u01D9\x07J\x02\x02\u01D9\u01DE" +
		"\x07T\x02\x02\u01DA\u01DE\x07U\x02\x02\u01DB\u01DE\x07V\x02\x02\u01DC" +
		"\u01DE\x07=\x02\x02\u01DD\u01CD\x03\x02\x02\x02\u01DD\u01CE\x03\x02\x02" +
		"\x02\u01DD\u01CF\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u01DD\u01D0\x03\x02\x02\x02\u01DD\u01D1\x03\x02\x02\x02\u01DD" +
		"\u01D3\x03\x02\x02\x02\u01DD\u01D5\x03\x02\x02\x02\u01DD\u01D6\x03\x02" +
		"\x02\x02\u01DD\u01D7\x03\x02\x02\x02\u01DD\u01D8\x03\x02\x02\x02\u01DD" +
		"\u01DA\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DC\x03\x02" +
		"\x02\x02\u01DE9\x03\x02\x02\x02\u01DF\u01F3\x07\x1C\x02\x02\u01E0\u01F3" +
		"\x07\xC6\x02\x02\u01E1\u01F3\x05> \x02\u01E2\u01F3\x07\xC7\x02\x02\u01E3" +
		"\u01F3\x07\xB0\x02\x02\u01E4\u01F3\x07\xB1\x02\x02\u01E5\u01F3\x05Z.\x02" +
		"\u01E6\u01EB\x07\xB2\x02\x02\u01E7\u01E9\x07\xD1\x02\x02\u01E8\u01EA\x07" +
		"\xC3\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA" +
		"\u01EC\x03\x02\x02\x02\u01EB\u01E7\x03\x02\x02\x02\u01EB\u01EC\x03\x02" +
		"\x02\x02\u01EC\u01F3\x03\x02\x02\x02\u01ED\u01EE\x07\xC9\x02\x02\u01EE" +
		"\u01EF\x05\n\x06\x02\u01EF\u01F0\x07\xCA\x02\x02\u01F0\u01F3\x03\x02\x02" +
		"\x02\u01F1\u01F3\x05<\x1F\x02\u01F2\u01DF\x03\x02\x02\x02\u01F2\u01E0" +
		"\x03\x02\x02\x02\u01F2\u01E1\x03\x02\x02\x02\u01F2\u01E2\x03\x02\x02\x02" +
		"\u01F2\u01E3\x03\x02\x02\x02\u01F2\u01E4\x03\x02\x02\x02\u01F2\u01E5\x03" +
		"\x02\x02\x02\u01F2\u01E6\x03\x02\x02\x02\u01F2\u01ED\x03\x02\x02\x02\u01F2" +
		"\u01F1\x03\x02\x02\x02\u01F3;\x03\x02\x02\x02\u01F4\u01F5\x07\xC9\x02" +
		"\x02\u01F5\u01FA\x05:\x1E\x02\u01F6\u01F7\x07\xD0\x02\x02\u01F7\u01F9" +
		"\x05:\x1E\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02" +
		"\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FD\x03" +
		"\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\x07\xCA\x02\x02\u01FE" +
		"=\x03\x02\x02\x02\u01FF\u0201\t\x07\x02\x02\u0200\u01FF\x03\x02\x02\x02" +
		"\u0200\u0201\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0203\t" +
		"\b\x02\x02\u0203?\x03\x02\x02\x02\u0204\u0205\x077\x02\x02\u0205\u0206" +
		"\x07d\x02\x02\u0206\u0207\x07e\x02\x02\u0207\u0211\x05B\"\x02\u0208\u0209" +
		"\x077\x02\x02\u0209\u0211\x07j\x02\x02\u020A\u020B\x077\x02\x02\u020B" +
		"\u0211\x07k\x02\x02\u020C\u020D\x077\x02\x02\u020D\u0211\x07l\x02\x02" +
		"\u020E\u020F\x077\x02\x02\u020F\u0211\x050\x19\x02\u0210\u0204\x03\x02" +
		"\x02\x02\u0210\u0208\x03\x02\x02\x02\u0210\u020A\x03\x02\x02\x02\u0210" +
		"\u020C\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0211A\x03\x02\x02" +
		"\x02\u0212\u0217\x05D#\x02\u0213\u0214\x07\xDF\x02\x02\u0214\u0216\x05" +
		"D#\x02\u0215\u0213\x03\x02\x02\x02\u0216\u0219\x03\x02\x02\x02\u0217\u0215" +
		"\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218C\x03\x02\x02\x02\u0219" +
		"\u0217\x03\x02\x02\x02\u021A\u021B\x05^0\x02\u021B\u021C\x05H%\x02\u021C" +
		"\u021D\x05F$\x02\u021DE\x03\x02\x02\x02\u021E\u022B\x05^0\x02\u021F\u0220" +
		"\x07\xC9\x02\x02\u0220\u0225\x05^0\x02\u0221\u0222\x07\xD0\x02\x02\u0222" +
		"\u0224\x05^0\x02\u0223\u0221\x03\x02\x02\x02\u0224\u0227\x03\x02\x02\x02" +
		"\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0228\x03" +
		"\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228\u0229\x07\xC9\x02\x02\u0229" +
		"\u022B\x03\x02\x02\x02\u022A\u021E\x03\x02\x02\x02\u022A\u021F\x03\x02" +
		"\x02\x02\u022BG\x03\x02\x02\x02\u022C\u022D\t\t\x02\x02\u022DI\x03\x02" +
		"\x02\x02\u022E\u022F\x07\\\x02\x02\u022F\u0230\x07F\x02\x02\u0230\u0233" +
		"\x05\f\x07\x02\u0231\u0232\x07`\x02\x02\u0232\u0234\x050\x19\x02\u0233" +
		"\u0231\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0252\x03\x02" +
		"\x02\x02\u0235\u0236\x07\\\x02\x02\u0236\u0237\x07F\x02\x02\u0237\u0238" +
		"\x07a\x02\x02\u0238\u0239\x07\xC9\x02\x02\u0239\u023E\x05\x10\t\x02\u023A" +
		"\u023B\x07\xD0\x02\x02\u023B\u023D\x05\x10\t\x02\u023C\u023A\x03\x02\x02" +
		"\x02\u023D\u0240\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023E\u023F" +
		"\x03\x02\x02\x02\u023F\u0241\x03\x02\x02\x02\u0240\u023E\x03\x02\x02\x02" +
		"\u0241\u0242\x07\xCA\x02\x02\u0242\u0252\x03\x02\x02\x02\u0243\u0244\x07" +
		"\\\x02\x02\u0244\u0245\x07F\x02\x02\u0245\u0246\x07n\x02\x02\u0246\u0247" +
		"\x07\xC9\x02\x02\u0247\u024C\x05\x10\t\x02\u0248\u0249\x07\xD0\x02\x02" +
		"\u0249\u024B\x05\x10\t\x02\u024A\u0248\x03\x02\x02\x02\u024B\u024E\x03" +
		"\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D" +
		"\u024F\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024F\u0250\x07\xCA" +
		"\x02\x02\u0250\u0252\x03\x02\x02\x02\u0251\u022E\x03\x02\x02\x02\u0251" +
		"\u0235\x03\x02\x02\x02\u0251\u0243\x03\x02\x02\x02\u0252K\x03\x02\x02" +
		"\x02\u0253\u0254\x07E\x02\x02\u0254\u0255\x07F\x02\x02\u0255\u0256\x05" +
		"N(\x02\u0256M\x03\x02\x02\x02\u0257\u025C\x05P)\x02\u0258\u0259\x07\xD0" +
		"\x02\x02\u0259\u025B\x05P)\x02\u025A\u0258\x03\x02\x02\x02\u025B\u025E" +
		"\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02" +
		"\u025DO\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0261\x05\x10" +
		"\t\x02\u0260\u0262\t\n\x02\x02\u0261\u0260\x03\x02\x02\x02\u0261\u0262" +
		"\x03\x02\x02\x02\u0262\u0265\x03\x02\x02\x02\u0263\u0264\x07Y\x02\x02" +
		"\u0264\u0266\t\v\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02" +
		"\x02\x02\u0266\u0270\x03\x02\x02\x02\u0267\u0269\x05\x1C\x0F\x02\u0268" +
		"\u026A\t\n\x02\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02" +
		"\x02\u026A\u026D\x03\x02\x02\x02\u026B\u026C\x07Y\x02\x02\u026C\u026E" +
		"\t\v\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E" +
		"\u0270\x03\x02\x02\x02\u026F\u025F\x03\x02\x02\x02\u026F\u0267\x03\x02" +
		"\x02\x02\u0270Q\x03\x02\x02\x02\u0271\u0272\x07G\x02\x02\u0272\u0273\x07" +
		"\xC3\x02\x02\u0273S\x03\x02\x02\x02\u0274\u0275\x07c\x02\x02\u0275\u0276" +
		"\x07\xC3\x02\x02\u0276U\x03\x02\x02\x02\u0277\u0278\x07]\x02\x02\u0278" +
		"\u0279\x07^\x02\x02\u0279W\x03\x02\x02\x02\u027A\u027B\x07\x11\x02\x02" +
		"\u027B\u027D\t\f\x02\x02\u027C\u027A\x03\x02\x02\x02\u027D\u0280\x03\x02" +
		"\x02\x02\u027E\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F" +
		"Y\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0281\u02D8\x07\x84\x02" +
		"\x02\u0282\u02D8\x07\x85\x02\x02\u0283\u02D8\x07\x86\x02\x02\u0284\u02D8" +
		"\x07\x87\x02\x02\u0285\u02D8\x07\x88\x02\x02\u0286\u02D8\x07\x89\x02\x02" +
		"\u0287\u02D8\x07\x8A\x02\x02\u0288\u02D8\x07\x8B\x02\x02\u0289\u02D8\x07" +
		"\x8C\x02\x02\u028A\u02D8\x07\x8D\x02\x02\u028B\u02D8\x07\x8E\x02\x02\u028C" +
		"\u028D\x07\x8F\x02\x02\u028D\u028E\x07\xD9\x02\x02\u028E\u02D8\x05\\/" +
		"\x02\u028F\u0290\x07\x90\x02\x02\u0290\u0291\x07\xD9\x02\x02\u0291\u02D8" +
		"\x05\\/\x02\u0292\u0293\x07\x91\x02\x02\u0293\u0294\x07\xD9\x02\x02\u0294" +
		"\u02D8\x05\\/\x02\u0295\u0296\x07\x92\x02\x02\u0296\u0297\x07\xD9\x02" +
		"\x02\u0297\u02D8\x05\\/\x02\u0298\u0299\x07\x93\x02\x02\u0299\u029A\x07" +
		"\xD9\x02\x02\u029A\u02D8\x05\\/\x02\u029B\u029C\x07\x94\x02\x02\u029C" +
		"\u029D\x07\xD9\x02\x02\u029D\u02D8\x05\\/\x02\u029E\u029F\x07\x95\x02" +
		"\x02\u029F\u02A0\x07\xD9\x02\x02\u02A0\u02D8\x05\\/\x02\u02A1\u02A2\x07" +
		"\x96\x02\x02\u02A2\u02A3\x07\xD9\x02\x02\u02A3\u02D8\x05\\/\x02\u02A4" +
		"\u02A5\x07\x97\x02\x02\u02A5\u02A6\x07\xD9\x02\x02\u02A6\u02D8\x05\\/" +
		"\x02\u02A7\u02D8\x07\x98\x02\x02\u02A8\u02D8\x07\x99\x02\x02\u02A9\u02D8" +
		"\x07\x9A\x02\x02\u02AA\u02AB\x07\x9B\x02\x02\u02AB\u02AC\x07\xD9\x02\x02" +
		"\u02AC\u02D8\x05\\/\x02\u02AD\u02AE\x07\x9C\x02\x02\u02AE\u02AF\x07\xD9" +
		"\x02\x02\u02AF\u02D8\x05\\/\x02\u02B0\u02B1\x07\x9D\x02\x02\u02B1\u02B2" +
		"\x07\xD9\x02\x02\u02B2\u02D8\x05\\/\x02\u02B3\u02D8\x07\x9E\x02\x02\u02B4" +
		"\u02D8\x07\x9F\x02\x02\u02B5\u02D8\x07\xA0\x02\x02\u02B6\u02B7\x07\xA1" +
		"\x02\x02\u02B7\u02B8\x07\xD9\x02\x02\u02B8\u02D8\x05\\/\x02\u02B9\u02BA" +
		"\x07\xA2\x02\x02\u02BA\u02BB\x07\xD9\x02\x02\u02BB\u02D8\x05\\/\x02\u02BC" +
		"\u02BD\x07\xA3\x02\x02\u02BD\u02BE\x07\xD9\x02\x02\u02BE\u02D8\x05\\/" +
		"\x02\u02BF\u02D8\x07\xA4\x02\x02\u02C0\u02D8\x07\xA5\x02\x02\u02C1\u02D8" +
		"\x07\xA6\x02\x02\u02C2\u02C3\x07\xA7\x02\x02\u02C3\u02C4\x07\xD9\x02\x02" +
		"\u02C4\u02D8\x05\\/\x02\u02C5\u02C6\x07\xA8\x02\x02\u02C6\u02C7\x07\xD9" +
		"\x02\x02\u02C7\u02D8\x05\\/\x02\u02C8\u02C9\x07\xA9\x02\x02\u02C9\u02CA" +
		"\x07\xD9\x02\x02\u02CA\u02D8\x05\\/\x02\u02CB\u02D8\x07\xAA\x02\x02\u02CC" +
		"\u02D8\x07\xAB\x02\x02\u02CD\u02D8\x07\xAC\x02\x02\u02CE\u02CF\x07\xAD" +
		"\x02\x02\u02CF\u02D0\x07\xD9\x02\x02\u02D0\u02D8\x05\\/\x02\u02D1\u02D2" +
		"\x07\xAE\x02\x02\u02D2\u02D3\x07\xD9\x02\x02\u02D3\u02D8\x05\\/\x02\u02D4" +
		"\u02D5\x07\xAF\x02\x02\u02D5\u02D6\x07\xD9\x02\x02\u02D6\u02D8\x05\\/" +
		"\x02\u02D7\u0281\x03\x02\x02\x02\u02D7\u0282\x03\x02\x02\x02\u02D7\u0283" +
		"\x03\x02\x02\x02\u02D7\u0284\x03\x02\x02\x02\u02D7\u0285\x03\x02\x02\x02" +
		"\u02D7\u0286\x03\x02\x02\x02\u02D7\u0287\x03\x02\x02\x02\u02D7\u0288\x03" +
		"\x02\x02\x02\u02D7\u0289\x03\x02\x02\x02\u02D7\u028A\x03\x02\x02\x02\u02D7" +
		"\u028B\x03\x02\x02\x02\u02D7\u028C\x03\x02\x02\x02\u02D7\u028F\x03\x02" +
		"\x02\x02\u02D7\u0292\x03\x02\x02\x02\u02D7\u0295\x03\x02\x02\x02\u02D7" +
		"\u0298\x03\x02\x02\x02\u02D7\u029B\x03\x02\x02\x02\u02D7\u029E\x03\x02" +
		"\x02\x02\u02D7\u02A1\x03\x02\x02\x02\u02D7\u02A4\x03\x02\x02\x02\u02D7" +
		"\u02A7\x03\x02\x02\x02\u02D7\u02A8\x03\x02\x02\x02\u02D7\u02A9\x03\x02" +
		"\x02\x02\u02D7\u02AA\x03\x02\x02\x02\u02D7\u02AD\x03\x02\x02\x02\u02D7" +
		"\u02B0\x03\x02\x02\x02\u02D7\u02B3\x03\x02\x02\x02\u02D7\u02B4\x03\x02" +
		"\x02\x02\u02D7\u02B5\x03\x02\x02\x02\u02D7\u02B6\x03\x02\x02\x02\u02D7" +
		"\u02B9\x03\x02\x02\x02\u02D7\u02BC\x03\x02\x02\x02\u02D7\u02BF\x03\x02" +
		"\x02\x02\u02D7\u02C0\x03\x02\x02\x02\u02D7\u02C1\x03\x02\x02\x02\u02D7" +
		"\u02C2\x03\x02\x02\x02\u02D7\u02C5\x03\x02\x02\x02\u02D7\u02C8\x03\x02" +
		"\x02\x02\u02D7\u02CB\x03\x02\x02\x02\u02D7\u02CC\x03\x02\x02\x02\u02D7" +
		"\u02CD\x03\x02\x02\x02\u02D7\u02CE\x03\x02\x02\x02\u02D7\u02D1\x03\x02" +
		"\x02\x02\u02D7\u02D4\x03\x02\x02\x02\u02D8[\x03\x02\x02\x02\u02D9\u02DB" +
		"\t\x07\x02\x02\u02DA\u02D9\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02" +
		"\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DD\x07\xC3\x02\x02\u02DD]\x03\x02" +
		"\x02\x02\u02DE\u02DF\t\r\x02\x02\u02DF_\x03\x02\x02\x02\u02E0\u02E1\x07" +
		"\xC1\x02\x02\u02E1\u02E2\x05d3\x02\u02E2\u02E3\x07\xCE\x02\x02\u02E3a" +
		"\x03\x02\x02\x02\u02E4\u02E5\x07\xC2\x02\x02\u02E5\u02E6\x05d3\x02\u02E6" +
		"\u02E7\x07\xCE\x02\x02\u02E7c\x03\x02\x02\x02\u02E8\u02E9\x07T\x02\x02" +
		"\u02E9\u02EB\x05f4\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02" +
		"\x02\x02\u02EB\u02EE\x03\x02\x02\x02\u02EC\u02ED\x07\xBF\x02\x02\u02ED" +
		"\u02EF\x05h5\x02\u02EE\u02EC\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02" +
		"\u02EF\u02F4\x03\x02\x02\x02\u02F0\u02F1\x077\x02\x02\u02F1\u02F2\x07" +
		"\xBE\x02\x02\u02F2\u02F3\x07\xD2\x02\x02\u02F3\u02F5\x07\xC7\x02\x02\u02F4" +
		"\u02F0\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02FA\x03\x02" +
		"\x02\x02\u02F6\u02F7\x077\x02\x02\u02F7\u02F8\x07d\x02\x02\u02F8\u02F9" +
		"\x07e\x02\x02\u02F9\u02FB\x05B\"\x02\u02FA\u02F6\x03\x02\x02\x02\u02FA" +
		"\u02FB\x03\x02\x02\x02\u02FB\u0305\x03\x02\x02\x02\u02FC\u02FD\x077\x02" +
		"\x02\u02FD\u0303\x07\xBC\x02\x02\u02FE\u02FF\x07\xC9\x02\x02\u02FF\u0300" +
		"\x07\xBD\x02\x02\u0300\u0301\x07\xD2\x02\x02\u0301\u0302\x07\xC3\x02\x02" +
		"\u0302\u0304\x07\xCA\x02\x02\u0303\u02FE\x03\x02\x02\x02\u0303\u0304\x03" +
		"\x02\x02\x02\u0304\u0306\x03\x02\x02\x02\u0305\u02FC\x03\x02\x02\x02\u0305" +
		"\u0306\x03\x02\x02\x02\u0306\u030E\x03\x02\x02\x02\u0307\u0308\x077\x02" +
		"\x02\u0308\u0309\x07\xBB\x02\x02\u0309\u030A\x07T\x02\x02\u030A\u030B" +
		"\x07\xC9\x02\x02\u030B\u030C\x05r:\x02\u030C\u030D\x07\xCA\x02\x02\u030D" +
		"\u030F\x03\x02\x02\x02\u030E\u0307\x03\x02\x02\x02\u030E\u030F\x03\x02" +
		"\x02\x02\u030F\u0314\x03\x02\x02\x02\u0310\u0311\x077\x02\x02\u0311\u0312" +
		"\x07\xBB\x02\x02\u0312\u0313\x07\xD2\x02\x02\u0313\u0315\x07\xC7\x02\x02" +
		"\u0314\u0310\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u031A\x03" +
		"\x02\x02\x02\u0316\u0317\x077\x02\x02\u0317\u0318\x07\xBA\x02\x02\u0318" +
		"\u0319\x07\xD2\x02\x02\u0319\u031B\x07\xC7\x02\x02\u031A\u0316\x03\x02" +
		"\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u0320\x03\x02\x02\x02\u031C" +
		"\u031D\x077\x02\x02\u031D\u031E\x07\xB9\x02\x02\u031E\u031F\x07\xD2\x02" +
		"\x02\u031F\u0321\x07\xC7\x02\x02\u0320\u031C\x03\x02\x02\x02\u0320\u0321" +
		"\x03\x02\x02\x02\u0321\u0323\x03\x02\x02\x02\u0322\u0324\x05R*\x02\u0323" +
		"\u0322\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324\u0327\x03\x02" +
		"\x02\x02\u0325\u0326\x070\x02\x02\u0326\u0328\x05n8\x02\u0327\u0325\x03" +
		"\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328e\x03\x02\x02\x02\u0329" +
		"\u032A\t\x0E\x02\x02\u032A\u032B\x07\xB8\x02\x02\u032Bg\x03\x02\x02\x02" +
		"\u032C\u0331\x05j6\x02\u032D\u032E\x07\xD0\x02\x02\u032E\u0330\x05h5\x02" +
		"\u032F\u032D\x03\x02\x02\x02\u0330\u0333\x03\x02\x02\x02\u0331\u032F\x03" +
		"\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332i\x03\x02\x02\x02\u0333" +
		"\u0331\x03\x02\x02\x02\u0334\u034E\x05t;\x02\u0335\u0336\x07\xC9\x02\x02" +
		"\u0336\u0339\x05l7\x02\u0337\u0338\x07D\x02\x02\u0338\u033A\x050\x19\x02" +
		"\u0339\u0337\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u033F\x03" +
		"\x02\x02\x02\u033B\u033C\x07B\x02\x02\u033C\u033D\x07\xC0\x02\x02\u033D" +
		"\u033E\x07\xD2\x02\x02\u033E\u0340\x05t;\x02\u033F\u033B\x03\x02\x02\x02" +
		"\u033F\u0340\x03\x02\x02\x02\u0340\u0344\x03\x02\x02\x02\u0341\u0342\x07" +
		"E\x02\x02\u0342\u0343\x07F\x02\x02\u0343\u0345\x05N(\x02\u0344\u0341\x03" +
		"\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0347\x03\x02\x02\x02\u0346" +
		"\u0348\x05R*\x02\u0347\u0346\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02" +
		"\u0348\u034A\x03\x02\x02\x02\u0349\u034B\x05T+\x02\u034A\u0349\x03\x02" +
		"\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C" +
		"\u034D\x07\xCA\x02\x02\u034D\u034F\x03\x02\x02\x02\u034E\u0335\x03\x02" +
		"\x02\x02\u034E\u034F\x03\x02\x02\x02\u034Fk\x03\x02\x02\x02\u0350\u0355" +
		"\x05t;\x02\u0351\u0352\x07\xD0\x02\x02\u0352\u0354\x05l7\x02\u0353\u0351" +
		"\x03\x02\x02\x02\u0354\u0357\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02" +
		"\u0355\u0356\x03\x02\x02\x02\u0356m\x03\x02\x02\x02\u0357\u0355\x03\x02" +
		"\x02\x02\u0358\u035B\x05p9\x02\u0359\u035A\x07\xD0\x02\x02\u035A\u035C" +
		"\x05n8\x02\u035B\u0359\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C" +
		"o\x03\x02\x02\x02\u035D\u035E\t\x0F\x02\x02\u035Eq\x03\x02\x02\x02\u035F" +
		"\u0362\x07\xC7\x02\x02\u0360\u0361\x07\xD0\x02\x02\u0361\u0363\x05r:\x02" +
		"\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363s\x03\x02" +
		"\x02\x02\u0364\u0369\x05v<\x02\u0365\u0366\x07\xD1\x02\x02\u0366\u0368" +
		"\x05t;\x02\u0367\u0365\x03\x02\x02\x02\u0368\u036B\x03\x02\x02\x02\u0369" +
		"\u0367\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036Au\x03\x02\x02" +
		"\x02\u036B\u0369\x03\x02\x02\x02\u036C\u036D\t\x10\x02\x02\u036Dw\x03" +
		"\x02\x02\x02\u036E\u036F\t\x11\x02\x02\u036Fy\x03\x02\x02\x02X|\x7F\x82" +
		"\x85\x88\x8B\x8E\x91\x94\x97\x9A\x9F\xA2\xAF\xB2\xB5\xBA\xBF\xC3\xC8\xCF" +
		"\xD4\xD9\xDD\xE7\xEC\xF0\xF3\u0171\u0179\u0183\u018C\u018F\u01A0\u01B0" +
		"\u01B5\u01BE\u01C2\u01C5\u01CB\u01DD\u01E9\u01EB\u01F2\u01FA\u0200\u0210" +
		"\u0217\u0225\u022A\u0233\u023E\u024C\u0251\u025C\u0261\u0265\u0269\u026D" +
		"\u026F\u027E\u02D7\u02DA\u02EA\u02EE\u02F4\u02FA\u0303\u0305\u030E\u0314" +
		"\u031A\u0320\u0323\u0327\u0331\u0339\u033F\u0344\u0347\u034A\u034E\u0355" +
		"\u035B\u0362\u0369";
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
	public SELECT(): TerminalNode { return this.getToken(SoqlParser.SELECT, 0); }
	public subFieldList(): SubFieldListContext {
		return this.getRuleContext(0, SubFieldListContext);
	}
	public FROM(): TerminalNode { return this.getToken(SoqlParser.FROM, 0); }
	public fromNameList(): FromNameListContext {
		return this.getRuleContext(0, FromNameListContext);
	}
	public forClauses(): ForClausesContext {
		return this.getRuleContext(0, ForClausesContext);
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
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public ZF_INTELLISENSE(): TerminalNode | undefined { return this.tryGetToken(SoqlParser.ZF_INTELLISENSE, 0); }
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
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
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
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public soqlId(): SoqlIdContext | undefined {
		return this.tryGetRuleContext(0, SoqlIdContext);
	}
	public soqlFunction(): SoqlFunctionContext | undefined {
		return this.tryGetRuleContext(0, SoqlFunctionContext);
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


