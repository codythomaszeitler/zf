import {describe, expect} from '@jest/globals';
import { ApexLog } from "../apexLog";
import { genRandomId } from "./salesforceId.test";

describe('apex log', () => {
	it('should be able to create a view for a user', () => {
		const randomId = genRandomId('ApexLog');
		const startTime = new Date(Date.parse("2023-12-20T07:04:17+0000"));
		const apexLog = new ApexLog({
			id: randomId,
			application: 'Unknown',
			duration: 89,
			logLength: 2680,
			operation: 'Api',
			startTime: startTime,
			status: 'Success'
		});

		const expectedOutput = `[${randomId.toString()}] - [${startTime.toLocaleTimeString()}] - MB: [2680] - MiS: [89]`;
		expect(apexLog.getTreeViewString()).toBe(expectedOutput);
	});
});
