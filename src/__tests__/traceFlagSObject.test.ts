import { describe, expect } from '@jest/globals';
import { LogType, TraceFlagSObjectBuilder, intoKeyValueString, intoKeyValueStrings } from '../traceFlagSObject';

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

