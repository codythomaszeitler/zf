import { ApexLog } from "./apexLog";
import { IntegratedDevelopmentEnvironment, Uri } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";
import { ApexLogTreeGenerateCommand } from "./apexLogTreeGenerateCommand";
import { ShowApexLogCommand } from "./showApexLogCommand";
import { TreeNode } from "./treeNode";
import { RefreshListener, TreeView } from "./treeView";

export const APEX_LOG_TREE_API_NAME = 'server-side-apex-logs';

export class ApexLogTreeView implements TreeView<ApexLog> {

	uniqueName: string;

	private readonly cli: SalesforceCli;
	private readonly ide: IntegratedDevelopmentEnvironment;
	private readonly logDir: Uri;

	private listeners: RefreshListener<TreeNode<ApexLog>>[];

	public constructor(params: {
		cli: SalesforceCli,
		ide: IntegratedDevelopmentEnvironment,
		logDir: Uri
	}) {
		this.uniqueName = APEX_LOG_TREE_API_NAME;
		this.cli = params.cli;
		this.ide = params.ide;
		this.listeners = [];
		this.logDir = params.logDir;
	}

	public async getRootNode(params: { targetOrg: SalesforceOrg; }): Promise<TreeNode<ApexLog>> {
		const apexLogTreeGenerateCommand = new ApexLogTreeGenerateCommand({
			cli: this.cli,
			ide: this.ide
		});

		const treeNode = await apexLogTreeGenerateCommand.execute({
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
		const defaultOrg = await this.ide.withProgress(async (progressToken) => {
			return await this.cli.getDefaultOrg();
		}, {
			title: 'Opening log file'
		});
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
			await this.ide.showWarningMessage('No default org set, cannot refresh apex logs.');
		}
	}

	public async registerOnRefreshListener<T extends TreeNode<ApexLog>>(listener: RefreshListener<T>): Promise<void> {
		this.listeners.push(listener);
	}

	public async unregisterOnRefreshListener<T extends TreeNode<ApexLog>>(listener: RefreshListener<T>): Promise<void> {
		this.listeners = this.listeners.filter(_listener => _listener !== listener);
	}
}