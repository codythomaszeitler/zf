import { TreeItem } from "vscode";
import { ApexGetLogResult } from "../../apexGetLogResult";
import { ApexListLogResult } from "../../apexLogTreeView/apexListLogResult";
import { ApexLogTreeItem, ApexLogTreeView, OrgTreeItem } from "../../apexLogTreeView/apexLogTreeView";
import { IntegratedDevelopmentEnvironment } from "../../integratedDevelopmentEnvironment";
import { SalesforceCli } from "../../salesforceCli";
import { SalesforceId } from "../../salesforceId";
import { GetDefaultOrg, SalesforceOrg } from "../../salesforceOrg";
import { OrgListResult } from "../../sfOrgListResult";
import { getLogFileUri } from "../../showApexLogCommand";
import { TreeItemCheckboxState } from "../../treeView/treeItemCheckboxState";
import { MockFileSystem } from "../__mocks__/mockFileSystem";
import { MockIDE } from "../__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "../__mocks__/mockSalesforceCli";
import { TreeItemCollapsibleState } from "../../treeView/treeItemCollapsibleState";

describe('apex log tree view', () => {

    let ide: IntegratedDevelopmentEnvironment;
    let cli: SalesforceCli;
    let fs: MockFileSystem;
    let salesforceOrg: SalesforceOrg;

    let testObject: ApexLogTreeView;

    let apexLogId: SalesforceId;

    beforeEach(async () => {
        fs = new MockFileSystem();
        ide = new MockIDE({
            filesystem: fs
        });
        cli = new MockSalesforceCli({
            filesystem: fs
        });

        cli.orgList = async function ({ skipConnectionStatus }) {
            const result: OrgListResult = {
                result: {
                    nonScratchOrgs: [],
                    scratchOrgs: [
                        {
                            alias: 'codysandbox',
                            username: 'codyzeitler12@somesandbox.com',
                            isDefaultUsername: true,
                            isExpired: false
                        }
                    ]
                }
            };
            return result;
        };

        apexLogId = SalesforceId.get("07LHu0000634t2JMAQ");

        cli.apexListLog = async function ({ targetOrg }) {
            const apexListLogResult: ApexListLogResult = {
                result: [
                    {
                        Application: 'application',
                        DurationMilliseconds: 1000,
                        Id: apexLogId.toString(),
                        LogLength: 5247,
                        Operation: "operation",
                        StartTime: "2024-12-01T19:48:00+0000",
                        Status: "Success"
                    }
                ]
            };
            return apexListLogResult;
        };

        cli.apexGetLog = async function ({ logDir, logId, targetOrg }) {
            const uri = getLogFileUri({
                logDir: logDir,
                targetOrg,
                logId: logId
            });

            fs.create({ uri });
            await fs.writeFile(uri, 'Test Log Contents');
            const apexGetLogResult: ApexGetLogResult = {
                result: [
                    apexLogId.toString()
                ],
                status: 0
            };
            return apexGetLogResult;
        };

        testObject = new ApexLogTreeView({
            ide, cli, logDir: ide.generateUri('testLogDir')
        });
        testObject.onRefreshListener = jest.fn();
        testObject.onDidChangeTreeDataListener = jest.fn();
        testObject.onDidChangeNumberOfLogs = jest.fn();

        await testObject.refresh();

        const getDefaultOrgCommand = new GetDefaultOrg({
            ide,
            cli
        });
        salesforceOrg = await getDefaultOrgCommand.execute({});
    });

    it('should have correct initial state on refresh - apex log tree item', async () => {
        await testObject.refresh(salesforceOrg);

        const apexLogTreeItem = testObject.getApexLogTreeItem(salesforceOrg, apexLogId);
        const { collapsibleState, label, contextValue } = apexLogTreeItem;

        expect(collapsibleState).toBe(TreeItemCollapsibleState.None);
        expect(contextValue).toBe('LOG_ENTRY');
        
        expect(label).toContain('[07LHu0000634t2JMAQ]');
        expect(label).toContain('MB: [5247] - MiS: [1000] - Status: [Success]');
        expect(getCheckboxState(apexLogTreeItem)).toBe(TreeItemCheckboxState.Unchecked);
    });

    it('should be able to show orgs on load', () => {
        const { orgTreeItems } = testObject;
        expect(orgTreeItems).toHaveLength(1);
        expect(testObject.onRefreshListener).toHaveBeenCalledTimes(1);

        const orgTreeItem = testObject.getOrgTreeItem(salesforceOrg);
        const { contextValue, collapsibleState, label } = orgTreeItem;
        expect(collapsibleState).toBe(TreeItemCollapsibleState.Expanded);
        expect(contextValue).toBe('LOG_ORG');
        expect(label).toBe(salesforceOrg.getTargetOrgName());
    });

    it('should be able to load apex logs when refresh is called with a target org', async () => {
        await testObject.refresh(salesforceOrg);

        const orgTreeItem = testObject.getOrgTreeItem(salesforceOrg);
        const { apexLogTreeItems } = orgTreeItem;
        expect(apexLogTreeItems).toHaveLength(1);

        expect(testObject.onRefreshListener).toHaveBeenCalledTimes(2);
    });

    it('the user should not be able to change checkbox state manually - starting in unchecked', async () => {
        await testObject.refresh(salesforceOrg);
        const apexLogTreeItem = testObject.getApexLogTreeItem(salesforceOrg, apexLogId);

        expect(getCheckboxState(apexLogTreeItem)).toBe(TreeItemCheckboxState.Unchecked);
        testObject.onCheckboxSelect(apexLogTreeItem, TreeItemCheckboxState.Checked);
        expect(getCheckboxState(apexLogTreeItem)).toBe(TreeItemCheckboxState.Unchecked);

        expect(testObject.onDidChangeTreeDataListener).toHaveBeenCalledTimes(1);
    });

    it('the user should not be able to change checkbox state manually - starting in checked', async () => {
        await testObject.refresh(salesforceOrg);

        const apexLogTreeItem = testObject.getApexLogTreeItem(salesforceOrg, apexLogId);
        await testObject.onSelect(apexLogTreeItem);

        expect(getCheckboxState(apexLogTreeItem)).toBe(TreeItemCheckboxState.Checked);
        testObject.onCheckboxSelect(apexLogTreeItem, TreeItemCheckboxState.Unchecked);
        expect(getCheckboxState(apexLogTreeItem)).toBe(TreeItemCheckboxState.Checked);

        expect(testObject.onDidChangeTreeDataListener).toHaveBeenCalledTimes(2);
    });

    it('should be able to handle if no logs are found with an org is refreshed', async () => {
        cli.apexListLog = async function ({ }) {
            const apexListLogResult: ApexListLogResult = {
                result: []
            };
            return apexListLogResult;
        };
        await testObject.refresh(salesforceOrg);

        const orgTreeItem = testObject.getOrgTreeItem(salesforceOrg);
        const { apexLogTreeItems } = orgTreeItem;
        expect(apexLogTreeItems).toHaveLength(0);
    });

    it('should be able to tell the number of unread logs', async () => {
        await testObject.refresh(salesforceOrg);

        expect(testObject.onDidChangeNumberOfLogs).toHaveBeenCalledWith({
            numLogs: 1, numUnreadLogs: 1
        });

        const apexLogTreeItem = testObject.getApexLogTreeItem(salesforceOrg, apexLogId);
        await testObject.onSelect(apexLogTreeItem);

        expect(testObject.onDidChangeNumberOfLogs).toHaveBeenCalledWith({
            numLogs: 1, numUnreadLogs: 0
        });
    });

    // But for some reason this is not saving the state of who has not been opened.
    it('should be able to call show debugs only against apex log tree view', async () => {
        await testObject.refresh(salesforceOrg);
        const apexLogTreeItem = testObject.getApexLogTreeItem(salesforceOrg, apexLogId);
        await testObject.onShowDebugsOnly(apexLogTreeItem);
        expect(getCheckboxState(apexLogTreeItem)).toBe(TreeItemCheckboxState.Checked);

        await testObject.refresh(salesforceOrg);
        const refreshed = testObject.getApexLogTreeItem(salesforceOrg, apexLogId);
        expect(getCheckboxState(refreshed)).toBe(TreeItemCheckboxState.Checked);
    });

    it('should not show any logs if apex list logs fails for some reason', async () => {
        cli.apexListLog = async function ({ }) {
            return undefined;
        };

        await testObject.refresh(salesforceOrg);
        expect(getNumLogs(testObject.getOrgTreeItem(salesforceOrg))).toEqual(0);
    });

    it('should preserve logs when refreshing org list', async () => {
        await testObject.refresh(salesforceOrg);
        expect(getNumLogs(testObject.getOrgTreeItem(salesforceOrg))).toEqual(1);

        await testObject.refresh();
        expect(getNumLogs(testObject.getOrgTreeItem(salesforceOrg))).toEqual(1);
    });

    function getNumLogs(orgTreeItem: OrgTreeItem) {
        const { apexLogTreeItems } = orgTreeItem;
        return apexLogTreeItems.length;
    }

    it('should show as checked if it has already been selected', async () => {
        await testObject.refresh(salesforceOrg);

        const apexLogTreeItem = testObject.getApexLogTreeItem(salesforceOrg, apexLogId);
        assertCheckedStatus(apexLogTreeItem, TreeItemCheckboxState.Unchecked);

        await testObject.onSelect(apexLogTreeItem);
        assertCheckedStatus(apexLogTreeItem, TreeItemCheckboxState.Checked);

        await testObject.refresh(salesforceOrg);
        const refreshed = testObject.getApexLogTreeItem(salesforceOrg, apexLogId);

        assertCheckedStatus(refreshed, TreeItemCheckboxState.Checked);

        expect(testObject.onDidChangeTreeDataListener).toHaveBeenCalledTimes(1);
    });

    function assertCheckedStatus(apexLogTreeItem: ApexLogTreeItem, state: TreeItemCheckboxState) {
        if (typeof apexLogTreeItem.checkboxState === 'object') {
            expect(apexLogTreeItem.checkboxState.state).toBe(state);
        } else {
            fail('Checkbox state did not have tooltip.');
        }
    }

    function getCheckboxState(apexLogTreeItem: ApexLogTreeItem): TreeItemCheckboxState {
        return ApexLogTreeItem.getCheckboxState(apexLogTreeItem);
    }
});