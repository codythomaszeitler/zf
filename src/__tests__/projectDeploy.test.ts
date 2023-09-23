import { describe, expect, test, beforeEach } from '@jest/globals';
import { MockIDE } from './__mocks__/mockIntegratedDevelopmentEnvironment';
import { MockSalesforceCli } from './__mocks__/mockSalesforceCli';
import { SalesforceOrg } from '../salesforceOrg';
import { projectDeploy } from '../projectDeploy';
import { DiagnosticSeverity, Uri } from '../integratedDevelopmentEnvironment';


describe('project deploy', () => {

    let salesforceCli: MockSalesforceCli;
    let salesforceOrg: SalesforceOrg;
    let ide: MockIDE;

    beforeEach(() => {
        salesforceCli = new MockSalesforceCli();
        salesforceOrg = new SalesforceOrg({
            alias: 'test-org-alias',
            isActive: true
        });
        salesforceCli.add(salesforceOrg);

        ide = new MockIDE();
    });

    it('should deploy successfully when report immediately states completion without failures', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            salesforceCli: salesforceCli,
            ide
        });

        await salesforceCli.projectDeployComplete();
        await projectDeployPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(false);
    });

    it('should put an error with the matching URI if the deployment fails', async () => {
        const mockFile = Uri.get('file:/dev/force-app/main/default/classes/TestFile.cls');
        ide.addFile(mockFile);

        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            salesforceCli: salesforceCli,
            ide
        });

        salesforceCli.projectDeployFailure(
            {
                columnNumber: 1,
                lineNumber: 1,
                fileName: 'classes/TestFile.cls',
                problem: 'This is an error!'
            }
        );

        await salesforceCli.projectDeployComplete();
        await projectDeployPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(true);
        expect(ide.didFocusProblemsTab()).toBe(true);
        expect(ide.didSetDiagnosticsFor(mockFile)).toBe(true);
    });

    it('should report half status if deployment is not completed', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            salesforceCli: salesforceCli,
            ide
        });

        const progressToken = ide.getCurrentProgressToken();
        expect(progressToken).toBeTruthy();

        for (let i = 0; i < 10; i++) {
            await undefined; // let multiple progress checks go through
        }

        expect(progressToken?.progress).toBe(50);

        await salesforceCli.projectDeployComplete();
        await projectDeployPromise;
    });

    it('should report half status if deployment is not completed and there is a component failure', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            salesforceCli: salesforceCli,
            ide
        });

        const progressToken = ide.getCurrentProgressToken();
        expect(progressToken).toBeTruthy();

        const mockFile = Uri.get('file:/dev/force-app/main/default/classes/TestFile.cls');
        ide.addFile(mockFile);

        salesforceCli.projectDeployFailure(
            {
                columnNumber: 1,
                lineNumber: 1,
                fileName: 'classes/TestFile.cls',
                problem: 'This is an error!'
            }
        );

        for (let i = 0; i < 10; i++) {
            await undefined; // let multiple progress checks go through
        }

        expect(progressToken?.progress).toBe(50);

        await salesforceCli.projectDeployComplete();
        await projectDeployPromise;

        const diagnostics = ide.getDiagnosticsFor(mockFile);
        expect(diagnostics).toHaveLength(1);
        const testFileFailure = diagnostics[0];

        expect(testFileFailure.getProblem()).toBe('This is an error!');
        expect(testFileFailure.getRange().getStart().getColumnNumber()).toBe(1);
        expect(testFileFailure.getRange().getStart().getLineNumber()).toBe(1);
        expect(testFileFailure.getSeverity()).toBe(DiagnosticSeverity.error);

        expect(ide.didFocusProblemsTab()).toBe(true);
    });

    it('should be able to cancel successfully if project deploy report never got called', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            salesforceCli: salesforceCli,
            ide
        });

        const progressToken = ide.getCurrentProgressToken();
        if (progressToken) {
            progressToken.isCancellationRequested = true;
        }

        await projectDeployPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(false);
        expect(salesforceCli.wasDeploymentCancelled(salesforceCli.getDeploymentJobId())).toBe(true);
    });

    it('should be able to cancel successfully if project deploy report got called once', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            salesforceCli: salesforceCli,
            ide
        });

        await undefined;

        const progressToken = ide.getCurrentProgressToken();
        if (progressToken) {
            progressToken.isCancellationRequested = true;
        }

        await projectDeployPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(false);
        expect(salesforceCli.wasDeploymentCancelled(salesforceCli.getDeploymentJobId())).toBe(true);
    });

    it('should be able to cancel successfully if project deploy report got called twice', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            salesforceCli: salesforceCli,
            ide
        });

        await undefined;
        await undefined;

        const progressToken = ide.getCurrentProgressToken();
        expect(progressToken?.progress).toBe(50);

        if (progressToken) {
            progressToken.isCancellationRequested = true;
        }

        await projectDeployPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(false);
        expect(salesforceCli.wasDeploymentCancelled(salesforceCli.getDeploymentJobId())).toBe(true);
    });

    it("should cancel without issue if deployment is already completed", async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            salesforceCli: salesforceCli,
            ide
        });

        await salesforceCli.projectDeployComplete();

        const progressToken = ide.getCurrentProgressToken();
        if (progressToken) {
            progressToken.isCancellationRequested = true;
        }


        await projectDeployPromise;

        expect(ide.didShowAnyWarningMessage()).toBe(false);
    });

    it("should show warning message if project deploy cancels with non-completed exception", async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            salesforceCli: salesforceCli,
            ide
        });

        salesforceCli.toThrowOnProjectDeployCancel = new Error('Unexpected error!');

        const progressToken = ide.getCurrentProgressToken();
        if (progressToken) {
            progressToken.isCancellationRequested = true;
        }

        await projectDeployPromise;
        expect(ide.didShowWarningMessage(salesforceCli.toThrowOnProjectDeployCancel.message)).toBe(true);
    });
});
