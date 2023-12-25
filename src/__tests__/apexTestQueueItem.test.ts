import { describe, expect, test } from '@jest/globals';
import { APEX_TEST_QUEUE_ITEM_SOBJECT_NAME, ApexTestQueueItemBuilder, ApexTestQueueStatus, intoKeyValueStrings } from "../apexTestQueueItem";
import { genRandomId } from "./salesforceId.test";

describe('apex test queue item', () => {

	it('should be able to create apex test queue item', () => {
		const randomId = genRandomId(APEX_TEST_QUEUE_ITEM_SOBJECT_NAME);
		const builder = new ApexTestQueueItemBuilder({
			id: randomId
		});

		const status: ApexTestQueueStatus = 'Queued';
		const parentJobId = genRandomId('AsyncApexJob');

		builder.withStatus(status).withParentJobId(parentJobId);

		const apexTestQueueItem = builder.build();
		expect(apexTestQueueItem.status).toBe(status);

		const keyValueStrings = intoKeyValueStrings(apexTestQueueItem);
		expect(keyValueStrings).toContain(`Status=${apexTestQueueItem.status}`);
		expect(keyValueStrings).toContain(`Id=${apexTestQueueItem.id.toString()}`);
		expect(keyValueStrings).toContain(`ParentJobId=${parentJobId.toString()}`);

		expect(apexTestQueueItem.intoKeyValueString()).not.toHaveLength(0);
	});

	it('should not put status into keyValuePairs if never set', () => {
		const randomId = genRandomId(APEX_TEST_QUEUE_ITEM_SOBJECT_NAME);
		const builder = new ApexTestQueueItemBuilder({
			id: randomId
		});

		const status: ApexTestQueueStatus = '';
		builder.withStatus(status);

		const apexTestQueueItem = builder.build();
		expect(apexTestQueueItem.status).toBe(status);

		const keyValueStrings = intoKeyValueStrings(apexTestQueueItem);
		expect(keyValueStrings).not.toContain(`Status=${apexTestQueueItem.status}`);
		expect(keyValueStrings).toContain(`Id=${apexTestQueueItem.id.toString()}`);
	});

	it('should throw exception if invalid status given', () => {
		const randomId = genRandomId(APEX_TEST_QUEUE_ITEM_SOBJECT_NAME);
		const builder = new ApexTestQueueItemBuilder({
			id: randomId
		});

		const invalidStatus = 'INVALID-STATUS';

		let caughtException = null;
		try {
			builder.withStatus(invalidStatus as ApexTestQueueStatus);
		} catch (error: any) {
			caughtException = error;
		}

		expect(caughtException.message).toBe(`Invalid queue status found: ${invalidStatus}.`);
	});
});