import { ApexLog } from "./apexLog";
import { Command } from "./command";
import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";
import { TreeNode } from "./treeNode";

export class ServerSideApexLogTreeGenerateCommand extends Command {

	public constructor(params: {
		cli: SalesforceCli,
		ide: IntegratedDevelopmentEnvironment
	}) {
		super(params);
	}

	public async execute(params: { targetOrg: SalesforceOrg }): Promise<TreeNode<ApexLog>> {
		const apexListLogResult = await this.getCli().apexListLog({
			targetOrg: params.targetOrg
		});

		const asTreeNodes: TreeNode<ApexLog>[] = apexListLogResult.getLogs().map((apexLog: ApexLog) => {
			return {
				label: apexLog.getTreeViewString(),
				children: [],
				value: apexLog
			};
		});

		const root: TreeNode<ApexLog> = {
			label: params.targetOrg.getAlias(),
			children: asTreeNodes,
			value: undefined
		};
		return root;
	}
} 