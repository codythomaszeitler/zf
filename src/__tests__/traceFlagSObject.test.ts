import { describe, expect } from '@jest/globals';
import { LogType, TraceFlagSObjectBuilder, intoKeyValueString, intoKeyValueStrings } from '../traceFlagSObject';
import { SalesforceLogLevel } from '../salesforceLogLevel';

describe('trace flag sobject builder', () => {
	it('should be able to create a trace flag sobject with all levels set', () => {

		const builder = new TraceFlagSObjectBuilder();
		builder.withApexCode(SalesforceLogLevel.debug);
		builder.withCallout(SalesforceLogLevel.debug);
		builder.withDatabase(SalesforceLogLevel.debug);
		builder.withSystem(SalesforceLogLevel.info);
		builder.withValidation(SalesforceLogLevel.debug);
		builder.withVisualforce(SalesforceLogLevel.debug);

		const testObject = builder.build();

		expect(testObject.apexCode).toBe(SalesforceLogLevel.debug);
		expect(testObject.callout).toBe(SalesforceLogLevel.debug);
		expect(testObject.database).toBe(SalesforceLogLevel.debug);
		expect(testObject.system).toBe(SalesforceLogLevel.info);
		expect(testObject.validation).toBe(SalesforceLogLevel.debug);
		expect(testObject.visualforce).toBe(SalesforceLogLevel.debug);
	});
});

describe('trace flag sobject values', () => {
	it('should be able to construct a string key value pair from sobject trace flag', () => {
		const builder = new TraceFlagSObjectBuilder();
		builder.withDebugLevelId('7dl170000008U36AAE');
		builder.withStartDate(new Date(Date.parse('2022-12-15T00:26:04.000+0000')));
		builder.withExpirationDate(new Date(Date.parse('2022-12-15T00:56:04.000+0000')));
		builder.withTracedEntityId('01p17000000R6bLAAS');
		builder.withLogType(LogType.classTracing);

		const testObject = builder.build();

		const keyValuePairs = intoKeyValueStrings(testObject);

		expect(keyValuePairs).toContain("DebugLevelId=7dl170000008U36AAE");
		expect(keyValuePairs).toContain("LogType=CLASS_TRACING");
		expect(keyValuePairs).toContain("TracedEntityId=01p17000000R6bLAAS");
		expect(keyValuePairs).toContain("StartDate=2022-12-15T00:26:04.000Z");
		expect(keyValuePairs).toContain("ExpirationDate=2022-12-15T00:56:04.000Z");

		expect(intoKeyValueString(testObject)).not.toHaveLength(0);
	});
});

