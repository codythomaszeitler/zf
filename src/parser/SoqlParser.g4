/*
 [The "BSD licence"]
 Copyright (c) 2013 Terence Parr, Sam Harwell
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
    derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/**
 *  An Apexcode grammar derived from Java 1.7 grammar for ANTLR v4.
 *  Uses ANTLR v4's left-recursive expression notation.
 *
 *  @maintainer: Andrey Gavrikov
 *
 *  You can test with
 *
 *  $ antlr4 ApexGrammar.g4
 *  $ javac *.java
 *  $ grun Apexcode compilationUnit *.cls
 */
parser grammar SoqlParser;
options {tokenVocab=SoqlLexer;}

query
    : selectOrSoqlId selectList?
        fromOrSoqlId? fromNameList?
        usingScope?
        whereClause?
        withClause?
        groupByClause?
        orderByClause?
        limitClause?
        offsetClause?
        allRowsClause?
        forClauses
        (UPDATE updateList)?
        endOfQuery?
        ;

endOfQuery:
    ZF_INTELLISENSE;

selectOrSoqlId:
    SELECT
    | SZF_INTELLISENSE
    | SEZF_INTELLISENSE
    | SELZF_INTELLISENSE 
    | SELEZF_INTELLISENSE
    | SELECZF_INTELLISENSE
    | ZF_INTELLISENSE;

fromOrSoqlId:
    FROM 
    | FZF_INTELLISENSE
    | FRZF_INTELLISENSE
    | FROZF_INTELLISENSE
    | ZF_INTELLISENSE
    ;

subQuery
    : selectOrSoqlId subFieldList?
        fromOrSoqlId? fromNameList?
        whereClause?
        orderByClause?
        limitClause?
        forClauses
        (UPDATE updateList)?
        ;

subQueryFromNameList
    : subQueryFromNameFieldName fromSoqlId? (COMMA subQueryFromNameFieldName fromSoqlId?)*;

subQueryFromNameFieldName
    : subQueryFromNameSoqlId (DOT subQueryFromNameSoqlId)*;

subQueryFromNameSoqlId
    : Identifier
    | NAME
    | ZF_INTELLISENSE
    ;

selectList
    : 
    // There could be a select entry Id, INTELLISENSE, A FROM Account
    selectEntry (COMMA selectEntry?)*;

selectEntry
    : 
    fieldName ZF_INTELLISENSE?
    | LPAREN subQuery RPAREN
    ;

fieldName
    : soqlId (DOT soqlId)*;

fromNameList
    : fromNameFieldName fromSoqlId? (COMMA fromNameFieldName fromSoqlId?)*;

fromNameFieldName
    : fromNameSoqlId;

fromNameSoqlId
    : Identifier
    | NAME
    | ZF_INTELLISENSE
    ;

fromSoqlId
    : 
    Identifier
    | ZF_INTELLISENSE
    ;

subFieldList
    : subFieldEntry (COMMA subFieldEntry)*;

subFieldEntry
    : subFieldEntryFieldName ZF_INTELLISENSE?
    | soqlFunction soqlId?
    | typeOf
    ;

subFieldEntryFieldName
    : subFieldEntrySoqlId (DOT subFieldEntrySoqlId)*
    ;

subFieldEntrySoqlId
    : Identifier
    | NAME
    | ZF_INTELLISENSE
    ;

soqlFieldsParameter
    : ALL
    | CUSTOM
    | STANDARD;

soqlFunction
    : AVG LPAREN fieldName RPAREN
    | COUNT LPAREN RPAREN
    | COUNT LPAREN fieldName RPAREN
    | COUNT_DISTINCT LPAREN fieldName RPAREN
    | MIN LPAREN fieldName RPAREN
    | MAX LPAREN fieldName RPAREN
    | SUM LPAREN fieldName RPAREN
    | TOLABEL LPAREN fieldName RPAREN
    | FORMAT LPAREN fieldName RPAREN
    | CALENDAR_MONTH LPAREN dateFieldName RPAREN
    | CALENDAR_QUARTER LPAREN dateFieldName RPAREN
    | CALENDAR_YEAR LPAREN dateFieldName RPAREN
    | DAY_IN_MONTH LPAREN dateFieldName RPAREN
    | DAY_IN_WEEK LPAREN dateFieldName RPAREN
    | DAY_IN_YEAR LPAREN dateFieldName RPAREN
    | DAY_ONLY LPAREN dateFieldName RPAREN
    | FISCAL_MONTH LPAREN dateFieldName RPAREN
    | FISCAL_QUARTER LPAREN dateFieldName RPAREN
    | FISCAL_YEAR LPAREN dateFieldName RPAREN
    | HOUR_IN_DAY LPAREN dateFieldName RPAREN
    | WEEK_IN_MONTH LPAREN dateFieldName RPAREN
    | WEEK_IN_YEAR LPAREN dateFieldName RPAREN
    | FIELDS LPAREN soqlFieldsParameter RPAREN
    | DISTANCE LPAREN locationValue COMMA locationValue COMMA StringLiteral RPAREN
    ;

 dateFieldName
    : CONVERT_TIMEZONE LPAREN fieldName RPAREN
    | fieldName
    ;

locationValue
    : fieldName
    | GEOLOCATION LPAREN coordinateValue COMMA coordinateValue  RPAREN
    ;

coordinateValue
    : signedNumber
    ;

typeOf
    : TYPEOF fieldName whenClause+ elseClause? END;

whenClause
    : WHEN fieldName THEN fieldNameList;

elseClause
    : ELSE fieldNameList;

fieldNameList
    : fieldName (COMMA fieldName)*;

usingScope
    : USING SCOPE soqlId;

whereClause
    : WHERE logicalExpression;


logicalExpression
    : conditionalExpression (andOrSoql conditionalExpression)*
    | NOT conditionalExpression;

andOrSoql:
    SOQLAND 
    | SOQLOR;

conditionalExpression
    : LPAREN logicalExpression RPAREN
    | fieldExpression;

fieldExpression
    : fieldName comparisonOperator? value?
    | soqlFunction comparisonOperator value;

comparisonOperator
    : ASSIGN | NOTEQUAL | LT | GT | LT ASSIGN | GT ASSIGN | LESSANDGREATER | LIKE | IN | NOT IN | INCLUDES | EXCLUDES | ZF_INTELLISENSE;

value
    : NULL
    | BooleanLiteral
    | signedNumber
    | StringLiteral
    | DateLiteral
    | DateTimeLiteral
    | dateFormula
    | IntegralCurrencyLiteral (DOT IntegerLiteral?)?
    | LPAREN subQuery RPAREN
    | valueList
    ;

valueList
    : LPAREN value (COMMA value)* RPAREN;

// TODO: NumberLiteral has trailing [dD]?, SOQL does not support this but a fix would need wider changes
signedNumber
    : (ADD | SUB)? (IntegerLiteral | NumberLiteral);

withClause
    : WITH DATA CATEGORY filteringExpression
    | WITH SECURITY_ENFORCED
    | WITH SYSTEM_MODE
    | WITH USER_MODE
    | WITH logicalExpression;

filteringExpression
    : dataCategorySelection (AND dataCategorySelection)*;

dataCategorySelection
    : soqlId filteringSelector dataCategoryName;

dataCategoryName
    : soqlId
    | LPAREN soqlId (COMMA soqlId)* LPAREN;

filteringSelector
    : AT | ABOVE | BELOW | ABOVE_OR_BELOW;

groupByClause
    : GROUP BY selectList (HAVING logicalExpression)?
    | GROUP BY ROLLUP LPAREN fieldName (COMMA fieldName)* RPAREN
    | GROUP BY CUBE LPAREN fieldName (COMMA fieldName)* RPAREN;

orderByClause
    : ORDER BY fieldOrderList;

fieldOrderList
    : fieldOrder (COMMA fieldOrder)*;

fieldOrder
    : fieldName (ASC | DESC)? (NULLS (FIRST|LAST))?
    | soqlFunction (ASC | DESC)? (NULLS (FIRST|LAST))?;

limitClause
    : LIMIT IntegerLiteral
    ;

offsetClause
    : OFFSET IntegerLiteral
    ;

allRowsClause
    : ALL ROWS;

forClauses
    : (FOR (VIEW | UPDATE | REFERENCE))*;

dateFormula
    : YESTERDAY
    | TODAY
    | TOMORROW
    | LAST_WEEK
    | THIS_WEEK
    | NEXT_WEEK
    | LAST_MONTH
    | THIS_MONTH
    | NEXT_MONTH
    | LAST_90_DAYS
    | NEXT_90_DAYS
    | LAST_N_DAYS_N COLON signedInteger
    | NEXT_N_DAYS_N COLON signedInteger
    | N_DAYS_AGO_N COLON signedInteger
    | NEXT_N_WEEKS_N COLON signedInteger
    | LAST_N_WEEKS_N COLON signedInteger
    | N_WEEKS_AGO_N COLON signedInteger
    | NEXT_N_MONTHS_N COLON signedInteger
    | LAST_N_MONTHS_N COLON signedInteger
    | N_MONTHS_AGO_N COLON signedInteger
    | THIS_QUARTER
    | LAST_QUARTER
    | NEXT_QUARTER
    | NEXT_N_QUARTERS_N COLON signedInteger
    | LAST_N_QUARTERS_N COLON signedInteger
    | N_QUARTERS_AGO_N COLON signedInteger
    | THIS_YEAR
    | LAST_YEAR
    | NEXT_YEAR
    | NEXT_N_YEARS_N COLON signedInteger
    | LAST_N_YEARS_N COLON signedInteger
    | N_YEARS_AGO_N COLON signedInteger
    | THIS_FISCAL_QUARTER
    | LAST_FISCAL_QUARTER
    | NEXT_FISCAL_QUARTER
    | NEXT_N_FISCAL_QUARTERS_N COLON signedInteger
    | LAST_N_FISCAL_QUARTERS_N COLON signedInteger
    | N_FISCAL_QUARTERS_AGO_N COLON signedInteger
    | THIS_FISCAL_YEAR
    | LAST_FISCAL_YEAR
    | NEXT_FISCAL_YEAR
    | NEXT_N_FISCAL_YEARS_N COLON signedInteger
    | LAST_N_FISCAL_YEARS_N COLON signedInteger
    | N_FISCAL_YEARS_AGO_N COLON signedInteger
    ;

signedInteger
    : (ADD | SUB)? IntegerLiteral;

// I can't tell if I hate this or not...
soqlId
    : Identifier
    | NAME
    | ZF_INTELLISENSE
    ;

// SOSL
soslLiteral
    : FindLiteral soslClauses RBRACK
    ;

soslLiteralAlt
    : FindLiteralAlt soslClauses RBRACK
    ;

soslClauses
    : (IN searchGroup)?
      (RETURNING fieldSpecList)?
      (WITH DIVISION ASSIGN StringLiteral)?
      (WITH DATA CATEGORY filteringExpression)?
      (WITH SNIPPET (LPAREN TARGET_LENGTH ASSIGN IntegerLiteral RPAREN)? )?
      (WITH NETWORK IN LPAREN networkList RPAREN)?
      (WITH NETWORK ASSIGN StringLiteral)?
      (WITH PRICEBOOKID ASSIGN StringLiteral)?
      (WITH METADATA ASSIGN StringLiteral)?
      limitClause?
      (UPDATE updateList)?
    ;

searchGroup
    : (ALL|EMAIL|NAME|PHONE|SIDEBAR) FIELDS
    ;

fieldSpecList
    : fieldSpec (COMMA fieldSpecList)*
    ;

fieldSpec
    : soslId (LPAREN fieldList
        (WHERE logicalExpression)?
        (USING LISTVIEW ASSIGN soslId)?
        (ORDER BY fieldOrderList)?
        limitClause?
        offsetClause?
        RPAREN)?
    ;

fieldList
    : soslId (COMMA fieldList)*
    ;

updateList
    : updateType (COMMA updateList)?
    ;

updateType
    : TRACKING | VIEWSTAT;

networkList
    : StringLiteral (COMMA networkList)?
    ;

soslId
    : id (DOT soslId)*;

// Identifiers

// Some keywords can be used as general identifiers, this is likely an over simplification of the actual
// rules but divining them from playing with Apex is very difficult. We could let any be used but that
// can significantly impact the parser performance by creating ambiguities.
id
    : Identifier
    | AFTER
    | BEFORE
    | GET
    | INHERITED
    | INSTANCEOF
    | SET
    | SHARING
    | SWITCH
    | TRANSIENT
    | TRIGGER
    | WHEN
    | WITH
    | WITHOUT
    // DML Keywords
    | USER
    | SYSTEM
    // SOQL Values
    | IntegralCurrencyLiteral
    // SOQL Specific Keywords
    | SELECT
    | COUNT
    | FROM
    | AS
    | USING
    | SCOPE
    | WHERE
    | ORDER
    | BY
    | LIMIT
    | SOQLAND
    | SOQLOR
    | NOT
    | AVG
    | COUNT_DISTINCT
    | MIN
    | MAX
    | SUM
    | TYPEOF
    | END
    | THEN
    | LIKE
    | IN
    | INCLUDES
    | EXCLUDES
    | ASC
    | DESC
    | NULLS
    | FIRST
    | LAST
    | GROUP
    | ALL
    | ROWS
    | VIEW
    | HAVING
    | ROLLUP
    | TOLABEL
    | OFFSET
    | DATA
    | CATEGORY
    | AT
    | ABOVE
    | BELOW
    | ABOVE_OR_BELOW
    | SECURITY_ENFORCED
    | USER_MODE
    | SYSTEM_MODE
    | REFERENCE
    | CUBE
    | FORMAT
    | TRACKING
    | VIEWSTAT
    | STANDARD
    | CUSTOM
    | DISTANCE
    | GEOLOCATION
    // SOQL date functions
    | CALENDAR_MONTH
    | CALENDAR_QUARTER
    | CALENDAR_YEAR
    | DAY_IN_MONTH
    | DAY_IN_WEEK
    | DAY_IN_YEAR
    | DAY_ONLY
    | FISCAL_MONTH
    | FISCAL_QUARTER
    | FISCAL_YEAR
    | HOUR_IN_DAY
    | WEEK_IN_MONTH
    | WEEK_IN_YEAR
    | CONVERT_TIMEZONE
    // SOQL date formulas
    | YESTERDAY
    | TODAY
    | TOMORROW
    | LAST_WEEK
    | THIS_WEEK
    | NEXT_WEEK
    | LAST_MONTH
    | THIS_MONTH
    | NEXT_MONTH
    | LAST_90_DAYS
    | NEXT_90_DAYS
    | LAST_N_DAYS_N
    | NEXT_N_DAYS_N
    | N_DAYS_AGO_N
    | NEXT_N_WEEKS_N
    | LAST_N_WEEKS_N
    | N_WEEKS_AGO_N
    | NEXT_N_MONTHS_N
    | LAST_N_MONTHS_N
    | N_MONTHS_AGO_N
    | THIS_QUARTER
    | LAST_QUARTER
    | NEXT_QUARTER
    | NEXT_N_QUARTERS_N
    | LAST_N_QUARTERS_N
    | N_QUARTERS_AGO_N
    | THIS_YEAR
    | LAST_YEAR
    | NEXT_YEAR
    | NEXT_N_YEARS_N
    | LAST_N_YEARS_N
    | N_YEARS_AGO_N
    | THIS_FISCAL_QUARTER
    | LAST_FISCAL_QUARTER
    | NEXT_FISCAL_QUARTER
    | NEXT_N_FISCAL_QUARTERS_N
    | LAST_N_FISCAL_QUARTERS_N
    | N_FISCAL_QUARTERS_AGO_N
    | THIS_FISCAL_YEAR
    | LAST_FISCAL_YEAR
    | NEXT_FISCAL_YEAR
    | NEXT_N_FISCAL_YEARS_N
    | LAST_N_FISCAL_YEARS_N
    | N_FISCAL_YEARS_AGO_N
    // SOSL Keywords
    | FIND
    | EMAIL
    | NAME
    | PHONE
    | SIDEBAR
    | FIELDS
    | METADATA
    | PRICEBOOKID
    | NETWORK
    | SNIPPET
    | TARGET_LENGTH
    | DIVISION
    | RETURNING
    | LISTVIEW
    ;

// In dot expressions we, can use a wider set of of identifiers, apparently any of them althogh I have excluding VOID
// in the interests of reducing ambiguity
anyId
    : Identifier
    // Apex Keywords
    | ABSTRACT
    | AFTER
    | BEFORE
    | BREAK
    | CATCH
    | CLASS
    | CONTINUE
    | DELETE
    | DO
    | ELSE
    | ENUM
    | EXTENDS
    | FINAL
    | FINALLY
    | FOR
    | GET
    | GLOBAL
    | IF
    | IMPLEMENTS
    | INHERITED
    | INSERT
    | INSTANCEOF
    | INTERFACE
    | LIST
    | MAP
    | MERGE
    | NEW
    | NULL
    | ON
    | OVERRIDE
    | PRIVATE
    | PROTECTED
    | PUBLIC
    | RETURN
    | SET
    | SHARING
    | STATIC
    | SUPER
    | SWITCH
    | TESTMETHOD
    | THIS
    | THROW
    | TRANSIENT
    | TRIGGER
    | TRY
    | UNDELETE
    | UPDATE
    | UPSERT
    | VIRTUAL
    | WEBSERVICE
    | WHEN
    | WHILE
    | WITH
    | WITHOUT
    // DML Keywords
    | USER
    | SYSTEM
    // SOQL Values
    | IntegralCurrencyLiteral
    // SOQL Specific Keywords
    | SELECT
    | COUNT
    | FROM
    | AS
    | USING
    | SCOPE
    | WHERE
    | ORDER
    | BY
    | LIMIT
    | SOQLAND
    | SOQLOR
    | NOT
    | AVG
    | COUNT_DISTINCT
    | MIN
    | MAX
    | SUM
    | TYPEOF
    | END
    | THEN
    | LIKE
    | IN
    | INCLUDES
    | EXCLUDES
    | ASC
    | DESC
    | NULLS
    | FIRST
    | LAST
    | GROUP
    | ALL
    | ROWS
    | VIEW
    | HAVING
    | ROLLUP
    | TOLABEL
    | OFFSET
    | DATA
    | CATEGORY
    | AT
    | ABOVE
    | BELOW
    | ABOVE_OR_BELOW
    | SECURITY_ENFORCED
    | SYSTEM_MODE
    | USER_MODE
    | REFERENCE
    | CUBE
    | FORMAT
    | TRACKING
    | VIEWSTAT
    | STANDARD
    | CUSTOM
    | DISTANCE
    | GEOLOCATION
    // SOQL date functions
    | CALENDAR_MONTH
    | CALENDAR_QUARTER
    | CALENDAR_YEAR
    | DAY_IN_MONTH
    | DAY_IN_WEEK
    | DAY_IN_YEAR
    | DAY_ONLY
    | FISCAL_MONTH
    | FISCAL_QUARTER
    | FISCAL_YEAR
    | HOUR_IN_DAY
    | WEEK_IN_MONTH
    | WEEK_IN_YEAR
    | CONVERT_TIMEZONE
    // SOQL date formulas
    | YESTERDAY
    | TODAY
    | TOMORROW
    | LAST_WEEK
    | THIS_WEEK
    | NEXT_WEEK
    | LAST_MONTH
    | THIS_MONTH
    | NEXT_MONTH
    | LAST_90_DAYS
    | NEXT_90_DAYS
    | LAST_N_DAYS_N
    | NEXT_N_DAYS_N
    | N_DAYS_AGO_N
    | NEXT_N_WEEKS_N
    | LAST_N_WEEKS_N
    | N_WEEKS_AGO_N
    | NEXT_N_MONTHS_N
    | LAST_N_MONTHS_N
    | N_MONTHS_AGO_N
    | THIS_QUARTER
    | LAST_QUARTER
    | NEXT_QUARTER
    | NEXT_N_QUARTERS_N
    | LAST_N_QUARTERS_N
    | N_QUARTERS_AGO_N
    | THIS_YEAR
    | LAST_YEAR
    | NEXT_YEAR
    | NEXT_N_YEARS_N
    | LAST_N_YEARS_N
    | N_YEARS_AGO_N
    | THIS_FISCAL_QUARTER
    | LAST_FISCAL_QUARTER
    | NEXT_FISCAL_QUARTER
    | NEXT_N_FISCAL_QUARTERS_N
    | LAST_N_FISCAL_QUARTERS_N
    | N_FISCAL_QUARTERS_AGO_N
    | THIS_FISCAL_YEAR
    | LAST_FISCAL_YEAR
    | NEXT_FISCAL_YEAR
    | NEXT_N_FISCAL_YEARS_N
    | LAST_N_FISCAL_YEARS_N
    | N_FISCAL_YEARS_AGO_N
    // SOSL Keywords
    | FIND
    | EMAIL
    | NAME
    | PHONE
    | SIDEBAR
    | FIELDS
    | METADATA
    | PRICEBOOKID
    | NETWORK
    | SNIPPET
    | TARGET_LENGTH
    | DIVISION
    | RETURNING
    | LISTVIEW
    ;
