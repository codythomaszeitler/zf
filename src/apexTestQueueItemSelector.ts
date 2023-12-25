import { APEX_TEST_QUEUE_ITEM_SOBJECT_NAME, ApexTestQueueItem, ApexTestQueueItemBuilder, ApexTestQueueStatus } from "./apexTestQueueItem";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";
import { Selector } from "./selector";

export class ApexTestQueueItemSelector extends Selector {

	public async queryByParentJobId(params: { targetOrg: SalesforceOrg; parentJobId: SalesforceId; }) {
		const dataQueryResult = await this.getCli().dataQuery({
			query: {
				from: APEX_TEST_QUEUE_ITEM_SOBJECT_NAME,
				fields: ['Status'],
				where: `ParentJobId = '${params.parentJobId}'`
			},
			targetOrg: params.targetOrg
		});
		const sObjects = dataQueryResult.getSObjects();
		const apexTestQueueItems: ApexTestQueueItem[] = sObjects.map(sObject => {
			const builder = new ApexTestQueueItemBuilder({
				id: SalesforceId.get(sObject["Id"])
			});
			const status = sObject["Status"] as ApexTestQueueStatus;
			return builder.withStatus(status).build();
		});

		return apexTestQueueItems;
	}
}