import { UpsertableSObject } from "./upsertableSObject";
import { SalesforceId } from "./salesforceId";

export const APEX_TEST_QUEUE_ITEM_SOBJECT_NAME = 'ApexTestQueueItem';

const statuses = ["Holding", "Queued", "Preparing", "Processing", "Aborted", "Completed", "Failed", ""] as const;
export type ApexTestQueueStatus = typeof statuses[number];

export interface ApexTestQueueItem extends UpsertableSObject {
	status: ApexTestQueueStatus;
}

export class ApexTestQueueItemBuilder {

	private id: SalesforceId;
	private status: ApexTestQueueStatus;

	public constructor(params: {
		id: SalesforceId
	}) {
		this.id = params.id;
		this.status = "";
	}

	public withStatus(status: ApexTestQueueStatus) {
		if (!statuses.includes(status)) {
			throw new Error(`Invalid queue status found: ${status}.`);
		}
		this.status = status;
	}

	public build(): ApexTestQueueItem {
		return {
			id: this.id,
			status: this.status || "",
			getSObjectName() {
				return APEX_TEST_QUEUE_ITEM_SOBJECT_NAME;
			},
			intoKeyValueString() {
				return intoKeyValueStrings(this).join(" ");
			},
		};
	};
}

export function intoKeyValueStrings(apexTestQueueItem: ApexTestQueueItem): string[] {
	const keyValueStrings: string[] = [];
	if (apexTestQueueItem.status) {
		keyValueStrings.push(`Status=${apexTestQueueItem.status}`);
	}
	keyValueStrings.push(`Id=${apexTestQueueItem.id.toString()}`);
	return keyValueStrings;
}