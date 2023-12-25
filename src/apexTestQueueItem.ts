import { UpsertableSObject } from "./upsertableSObject";
import { NULL_SF_ID, SalesforceId } from "./salesforceId";

export const APEX_TEST_QUEUE_ITEM_SOBJECT_NAME = 'ApexTestQueueItem';

const statuses = ["Holding", "Queued", "Preparing", "Processing", "Aborted", "Completed", "Failed", ""] as const;
export type ApexTestQueueStatus = typeof statuses[number];

export interface ApexTestQueueItem extends UpsertableSObject {
	status: ApexTestQueueStatus;
	parentJobId: SalesforceId;
}

export class ApexTestQueueItemBuilder {

	private id: SalesforceId;
	private status: ApexTestQueueStatus;
	private parentJobId: SalesforceId;

	public constructor(params: {
		id: SalesforceId
	}) {
		this.id = params.id;
		this.parentJobId = NULL_SF_ID;
		this.status = "";
	}

	public withStatus(status: ApexTestQueueStatus) {
		if (!statuses.includes(status)) {
			throw new Error(`Invalid queue status found: ${status}.`);
		}
		this.status = status;
		return this;
	}

	public withParentJobId(parentJobId: SalesforceId) {
		this.parentJobId = parentJobId;
		return this;
	}

	public build(): ApexTestQueueItem {
		return {
			id: this.id,
			status: this.status || "",
			parentJobId: this.parentJobId,
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
	keyValueStrings.push(`ParentJobId=${apexTestQueueItem.parentJobId.toString()}`);
	return keyValueStrings;
}