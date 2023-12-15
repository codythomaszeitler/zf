import { describe, expect } from '@jest/globals';
import { SalesforceLogLevel } from '../salesforceLogLevel';
import { DebugLevelBuilder, intoKeyValueString, intoKeyValueStrings } from '../debugLevelSObject';

describe('debug flag sobject builder', () => {
	it('should be able to create a debug flag sobject with all levels set', () => {

		const builder = new DebugLevelBuilder({
			developerName: 'TestDeveloperName'
		});
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

describe('debug flag sobject values', () => {
	it('should be able to construct a string key value pair from sobject debug flag', () => {
		const testDeveloperName = 'TestDeveloperName';
		const builder = new DebugLevelBuilder({
			developerName: testDeveloperName
		});

		builder.withApexCode(SalesforceLogLevel.debug);

		const debugLevel = builder.build();
		const keyValuePairs = intoKeyValueStrings(debugLevel);
		expect(keyValuePairs).toContain(`DeveloperName=${debugLevel.developerName}`);
		expect(keyValuePairs).toContain(`MasterLabel=${debugLevel.developerName}`);
		expect(keyValuePairs).toContain(`ApexCode=${debugLevel.apexCode}`);
		expect(keyValuePairs).toContain(`Visualforce=${debugLevel.visualforce}`);
		expect(keyValuePairs).toContain(`System=${debugLevel.system}`);
		expect(keyValuePairs).toContain(`Database=${debugLevel.database}`);
		expect(keyValuePairs).toContain(`Callout=${debugLevel.callout}`);
		expect(keyValuePairs).toContain(`Validation=${debugLevel.validation}`);
		expect(keyValuePairs).toContain(`Workflow=${debugLevel.workflow}`);

		expect(intoKeyValueString(debugLevel)).not.toHaveLength(0);
	});
});

