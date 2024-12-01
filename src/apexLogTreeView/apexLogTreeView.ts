import { IntegratedDevelopmentEnvironment, Uri } from "../integratedDevelopmentEnvironment";
import { SalesforceCli } from "../salesforceCli";
import { SalesforceOrg } from "../salesforceOrg";
import { ShowApexLogCommand, ShowApexLogDebugsOnlyCommand } from "../showApexLogCommand";
import { GetActiveOrgListCommand } from "../openOrg";
import { ApexLogResult } from "./apexListLogResult";
import path = require("path");
import { TreeItem } from "../treeView/treeItem";
import { TreeItemCollapsibleState } from "../treeView/treeItemCollapsibleState";
import { inverse, TreeItemCheckboxState } from "../treeView/treeItemCheckboxState";
import { ApexListLogCommand, ApexLog } from "../apexLog";
import { SalesforceId } from "../salesforceId";

export const APEX_LOG_TREE_API_NAME = 'server-side-apex-logs';

export class OrgTreeItem extends TreeItem {

    private _apexLogTreeItems: ApexLogTreeItem[];

    private _org: OrgWithLogs;

    constructor ({ org }: { org: OrgWithLogs }) {
        super(org.org.getTargetOrgName());
        this.label = org.org.getTargetOrgName();
        this.collapsibleState = TreeItemCollapsibleState.Expanded;
        this._org = org;
        this.contextValue = 'LOG_ORG';
        this.iconPath = {
            light: path.join(__filename, '..', '..', '..', 'resources', 'light', 'folder.svg'),
            dark: path.join(__filename, '..', '..', '..', 'resources', 'dark', 'folder.svg')
        };
        this._apexLogTreeItems = [];
    }

    get apexLogTreeItems() {
        return [...this._apexLogTreeItems];
    }

    set apexLogTreeItems(_apexLogTreeItems) {
        this._apexLogTreeItems = [..._apexLogTreeItems];
    }

    get targetOrg(): SalesforceOrg {
        return this._org.org;
    }
}

export class ApexLogTreeItem extends TreeItem {
    private readonly _parent: OrgTreeItem;

    private readonly _apexLog: ApexLog;

    constructor ({ apexLog, parent, alreadyViewed }: { apexLog: ApexLog; parent: OrgTreeItem; alreadyViewed: boolean }) {
        super(apexLog.getId().toString());
        this.label = getTreeViewString(apexLog);
        this.collapsibleState = TreeItemCollapsibleState.None;
        this._apexLog = apexLog;
        this._parent = parent;
        this.contextValue = 'LOG_ENTRY';
        this.iconPath = {
            light: path.join(__filename, '..', '..', '..', 'resources', 'logfile.svg'),
            dark: path.join(__filename, '..', '..', '..', 'resources', 'logfile.svg')
        };
        this.checkboxState = {
            state: alreadyViewed ? TreeItemCheckboxState.Checked : TreeItemCheckboxState.Unchecked,
            tooltip: 'Viewed'
        };
    }

    get targetOrg(): SalesforceOrg {
        return this._parent.targetOrg;
    }

    get parent() {
        return this._parent;
    }

    get logId() {
        return this._apexLog.getId();
    }

    static getCheckboxState(apexLogTreeItem: ApexLogTreeItem) {
        if (typeof apexLogTreeItem.checkboxState === 'object') {
            return apexLogTreeItem.checkboxState.state;
        } else {
            return apexLogTreeItem.checkboxState;
        }
    }
}

function getTreeViewString(apexLog: ApexLog): string {
    return `[${apexLog.getId().toString()}] - [${apexLog.getStartTime().toLocaleTimeString()}] - MB: [${apexLog.getLogLength()}] - MiS: [${apexLog.getDuration()}] - Status: [${apexLog.getStatus()}]`;
}

export type OnDidChangeNumberOfLogsListener = ({ numLogs, numUnreadLogs }: { numUnreadLogs: number; numLogs: number }) => void;

export class ApexLogTreeView {

    private orgs: OrgTreeItem[];

    private readonly cli: SalesforceCli;
    private readonly ide: IntegratedDevelopmentEnvironment;
    private readonly logDir: Uri;

    private alreadyViewedLogIds: Set<string>;

    public constructor ({ cli, ide, logDir
    }: {
        cli: SalesforceCli,
        ide: IntegratedDevelopmentEnvironment,
        logDir: Uri
    }) {
        this.cli = cli;
        this.ide = ide;
        this.logDir = logDir;
        this.orgs = [];
        this.alreadyViewedLogIds = new Set<string>();
    }

    onDidChangeNumberOfLogs?: OnDidChangeNumberOfLogsListener;
    onDidChangeTreeDataListener?: (treeItem?: OrgTreeItem | ApexLogTreeItem) => void;
    onRefreshListener?: (targetOrg?: SalesforceOrg) => void;

    get orgTreeItems() {
        return [...this.orgs];
    }

    getOrgTreeItem(targetOrg: SalesforceOrg) {
        return this.orgs.find(org => org.targetOrg.getTargetOrgName() === targetOrg.getTargetOrgName());
    }

    getApexLogTreeItem(targetOrg: SalesforceOrg, apexLogId: SalesforceId) {
        const orgTreeItem = this.getOrgTreeItem(targetOrg);
        return orgTreeItem.apexLogTreeItems.find(apexLogTreeItem => apexLogTreeItem.id === apexLogId.toString());
    }

    onCheckboxSelect(treeItem: ApexLogTreeItem, newValue: TreeItemCheckboxState) {
        treeItem.checkboxState = {
            state: inverse(newValue),
            tooltip: 'Viewed'
        };
        this.fireOnDidChangeTreeDataListener(treeItem);
    }

    async onShowDebugsOnly(treeItem: ApexLogTreeItem) {
        const showDebugsOnlyCommand = new ShowApexLogDebugsOnlyCommand({
            cli: this.cli,
            ide: this.ide
        });

        const { logId, targetOrg } = treeItem;
        await showDebugsOnlyCommand.execute({
            logDir: this.logDir,
            logId,
            targetOrg
        });
        this.selectApexLogTreeItem(treeItem);
    }

    async onSelect(treeItem: ApexLogTreeItem): Promise<void> {
        const showApexLogCommand = new ShowApexLogCommand({
            cli: this.cli,
            ide: this.ide
        });
        const { logId, targetOrg } = treeItem;
        await showApexLogCommand.execute({
            targetOrg,
            logId: logId,
            logDir: this.logDir
        });
        this.selectApexLogTreeItem(treeItem);
    }

    private selectApexLogTreeItem(treeItem: ApexLogTreeItem) {
        treeItem.checkboxState = {
            state: TreeItemCheckboxState.Checked,
            tooltip: 'Viewed'
        };
        this.alreadyViewedLogIds.add(treeItem.logId.toString());
        this.fireOnDidChangeTreeDataListener(treeItem);
        this.fireOnDidChangeNumberOfLogs();
    }


    private fireOnDidChangeTreeDataListener(treeItem: ApexLogTreeItem | OrgTreeItem) {
        this.onDidChangeTreeDataListener && this.onDidChangeTreeDataListener(treeItem);
    }

    private fireOnDidChangeNumberOfLogs() {
        const numUnreadLogs = this.numUnreadLogs;
        const numLogs = this.numLogs;
        this.onDidChangeNumberOfLogs && this.onDidChangeNumberOfLogs({
            numLogs, numUnreadLogs
        });
    }

    private get numUnreadLogs() {
        const apexLogTreeItems = this.orgTreeItems.flatMap(orgTreeItem => orgTreeItem.apexLogTreeItems);
        const unreadLogs = apexLogTreeItems.filter(apexLogTreeItem => ApexLogTreeItem.getCheckboxState(apexLogTreeItem) === TreeItemCheckboxState.Unchecked);
        return unreadLogs.length;
    }

    private get numLogs() {
        const apexLogTreeItems = this.orgTreeItems.flatMap(orgTreeItem => orgTreeItem.apexLogTreeItems);
        return apexLogTreeItems.length;
    }

    async refresh(targetOrg?: SalesforceOrg): Promise<void> {
        if (targetOrg) {
            await this.refreshApexLogTreeItems(targetOrg);
        } else {
            await this.refreshOrgTreeItems();
        }
        await this.fireOnRefreshListener(targetOrg);
        await this.fireOnDidChangeNumberOfLogs();
    }

    private async refreshOrgTreeItems() {
        const orgListCommand = new GetActiveOrgListCommand({
            cli: this.cli,
            ide: this.ide
        });

        const orgListResult = await orgListCommand.execute({
            skipConnectionStatus: false
        });

        const alreadyExistingOrgs = this.orgs.map(org => org.targetOrg.getTargetOrgName());
        const newOrgs = orgListResult.filter(org => !alreadyExistingOrgs.includes(org.getTargetOrgName())).map(org => {
            const treeItem = new OrgTreeItem({
                org: {
                    org,
                    logs: []
                }
            });
            return treeItem;
        });

        this.orgs.push(...newOrgs);
    }

    private async refreshApexLogTreeItems(targetOrg: SalesforceOrg) {
        const apexListLogCommand = new ApexListLogCommand({
            ide: this.ide,
            cli: this.cli
        });

        const apexLogs = await apexListLogCommand.execute({
            targetOrg
        });

        const org = this.getOrgTreeItem(targetOrg);
        org.apexLogTreeItems = apexLogs.map(apexLog => {
            return new ApexLogTreeItem({
                apexLog,
                parent: org,
                alreadyViewed: this.alreadyViewedLogIds.has(apexLog.getId().toString())
            });
        });
    }

    private async fireOnRefreshListener(targetOrg?: SalesforceOrg) {
        this.onRefreshListener && await this.onRefreshListener(targetOrg);
    }
}

interface OrgWithLogs {
    org: SalesforceOrg;

    logs: ApexLogResult[]
}

