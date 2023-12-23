import { ApexLog } from "./apexLog";
import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";
import { ServerSideApexLogTreeGenerateCommand } from "./serverSideApexLogTreeGenerateCommand";
import { ShowApexLogCommand } from "./showApexLogCommand";
import { TreeNode } from "./treeNode";
import { RefreshListener, TreeView } from "./treeView";

export const APEX_LOG_TREE_API_NAME = 'server-side-apex-logs';

export class ApexLogTreeView implements TreeView<ApexLog> {

	uniqueName: string;

	private readonly cli: SalesforceCli;
	private readonly ide: IntegratedDevelopmentEnvironment;
	private readonly logDir: string;

	private listeners: RefreshListener<TreeNode<ApexLog>>[];

	public constructor(params: {
		cli: SalesforceCli,
		ide: IntegratedDevelopmentEnvironment,
		logDir: string
	}) {
		this.uniqueName = APEX_LOG_TREE_API_NAME;
		this.cli = params.cli;
		this.ide = params.ide;
		this.listeners = [];
		this.logDir = params.logDir;
	}

	public async getRootNode(params: { targetOrg: SalesforceOrg; }): Promise<TreeNode<ApexLog>> {
		const serverSideApexLogTreeGenerateCommand = new ServerSideApexLogTreeGenerateCommand({
			cli: this.cli,
			ide: this.ide
		});

		const treeNode = await serverSideApexLogTreeGenerateCommand.execute({
			targetOrg: params.targetOrg
		});
		return treeNode;
	}

	public async refresh(params: { targetOrg: SalesforceOrg }): Promise<void> {
		const rootNode = await this.getRootNode({
			targetOrg: params.targetOrg
		});

		this.listeners.forEach(listener => {
			if (rootNode) {
				listener.onTreeViewRefresh({
					root: rootNode
				});
			}
		});
	}

	public async onSelect<T extends ApexLog>(e: { value: T }): Promise<void> {
		const defaultOrg = await this.cli.getDefaultOrg();
		const logId = e.value.getId();

		const showApexLogCommand = new ShowApexLogCommand({
			cli: this.cli,
			ide: this.ide
		});

		if (defaultOrg) {
			await showApexLogCommand.execute({
				targetOrg: defaultOrg,
				logId,
				logDir: this.logDir
			});
		} else {
			this.ide.showWarningMessage('No default org set, cannot show apex log.');
		}
	}

	public async registerOnRefreshListener<T extends TreeNode<ApexLog>>(listener: RefreshListener<T>): Promise<void> {
		this.listeners.push(listener);
	}

	public async unregisterOnRefreshListener<T extends TreeNode<ApexLog>>(listener: RefreshListener<T>): Promise<void> {
		this.listeners = this.listeners.filter(_listener => _listener !== listener);
	}
}