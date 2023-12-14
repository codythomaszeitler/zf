import { describe, expect } from '@jest/globals';
import { TraceFlagSObjectBuilder } from '../traceFlagSObject';
import { SalesforceLogLevel } from '../salesforceLogLevel';

describe('trace flag sobject', () => {
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

