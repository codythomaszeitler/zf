import { APEX_TEST_QUEUE_ITEM_SOBJECT_NAME, ApexTestQueueItemBuilder, ApexTestQueueStatus } from "../apexTestQueueItem";
import { SalesforceCli } from "../salesforceCli";
import { SalesforceId } from "../salesforceId";
import { SalesforceOrg } from "../salesforceOrg";
import { genRandomId } from "./salesforceId.test";

export async function genApexQueueItem(params: {
	status: ApexTestQueueStatus,
	parentJobId: SalesforceId,
	cli: SalesforceCli,
	targetOrg: SalesforceOrg
}) {
	const randomId = genRandomId(APEX_TEST_QUEUE_ITEM_SOBJECT_NAME);
	const builder = new ApexTestQueueItemBuilder({
		id: randomId
	});
	const apexTestQueueItem = builder.withStatus(params.status).withParentJobId(params.parentJobId).build();

	return params.cli.dataUpsertRecord({
		targetOrg: params.targetOrg,
		sObject: apexTestQueueItem
	});
}