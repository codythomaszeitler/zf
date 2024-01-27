import { describe, expect, beforeEach, jest } from '@jest/globals';
import { MockIDE } from './__mocks__/mockIntegratedDevelopmentEnvironment';
import { MockSalesforceCli } from './__mocks__/mockSalesforceCli';
import { SalesforceOrg } from '../salesforceOrg';
import { genOnDidSaveTextDocuments, projectDeploy } from '../projectDeploy';
import { APEX_LANGUAGE_ID, DiagnosticSeverity, Uri } from '../integratedDevelopmentEnvironment';

describe('project deploy', () => {

    let cli: MockSalesforceCli;
    let salesforceOrg: SalesforceOrg;
    let ide: MockIDE;

    beforeEach(() => {
        cli = new MockSalesforceCli();
        salesforceOrg = new SalesforceOrg({
            alias: 'test-org-alias',
            isActive: true
        });
        cli.add(salesforceOrg);

        ide = new MockIDE();

        ide.setCachedSfdxProject({
            packageDirectories: [
                {
                    default: true,
                    path: 'force-app'
                }
            ]
        });
    });

    it('should deploy successfully when report immediately states completion without failures', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            cli: cli,
            ide
        });

        await cli.projectDeployComplete();
        await projectDeployPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(false);
    });

    it('should put an error with the matching URI if the deployment fails', async () => {
        const mockFile = ide.generateUri("force-app", "main", "default", "classes", "TestFile.cls");

        ide.addFile(mockFile);

        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            cli: cli,
            ide
        });

        cli.projectDeployFailure(
            {
                columnNumber: 1,
                lineNumber: 1,
                fileName: 'classes/TestFile.cls',
                problem: 'This is an error!'
            }
        );

        await cli.projectDeployComplete();
        await projectDeployPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(true);
        expect(ide.didFocusProblemsTab()).toBe(true);
        expect(ide.didSetDiagnosticsFor(mockFile)).toBe(true);
        expect(cli.didResumeProjectDeployment()).toBe(true);
    });

    it('should report half status if deployment is not completed', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            cli: cli,
            ide
        });

        const progressToken = ide.getCurrentProgressToken();
        expect(progressToken).toBeTruthy();

        for (let i = 0; i < 10; i++) {
            await undefined; // let multiple progress checks go through
        }

        expect(progressToken?.progress).toBe(50);

        await cli.projectDeployComplete();
        await projectDeployPromise;
    });

    it('should report half status if deployment is not completed and there is a component failure', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            cli: cli,
            ide
        });

        const progressToken = ide.getCurrentProgressToken();
        expect(progressToken).toBeTruthy();

        const mockFile = ide.generateUri("force-app", "main", "default", "classes", "TestFile.cls");

        ide.addFile(mockFile);

        cli.projectDeployFailure(
            {
                columnNumber: 1,
                lineNumber: 1,
                fileName: 'classes/TestFile.cls',
                problem: 'This is an error!'
            }
        );

        let titleHalfwayDone = '';
        for (let i = 0; i < 10; i++) {
            await undefined; // let multiple progress checks go through
            if (i === 5) {
                // On the fifth iteration, check what the title of the deployment is
                if (progressToken) {
                    titleHalfwayDone = progressToken.title;
                }
            }
        }

        expect(progressToken?.progress).toBe(50);

        await cli.projectDeployComplete();
        await projectDeployPromise;

        const diagnostics = ide.getDiagnosticsFor(mockFile);
        expect(diagnostics).toHaveLength(1);
        const testFileFailure = diagnostics[0];

        expect(testFileFailure.getProblem()).toBe('This is an error!');
        expect(testFileFailure.getRange().getStart().getColumnNumber()).toBe(1);
        expect(testFileFailure.getRange().getStart().getLineNumber()).toBe(1);
        expect(testFileFailure.getSeverity()).toBe(DiagnosticSeverity.error);

        expect(ide.didFocusProblemsTab()).toBe(true);
        expect(titleHalfwayDone).toBe('Project Deploy Report (50/100)');
    });

    it('should be able to cancel successfully if project deploy report never got called', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            cli: cli,
            ide
        });

        const progressToken = ide.getCurrentProgressToken();
        if (progressToken) {
            progressToken.isCancellationRequested = true;
        }

        await projectDeployPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(false);
        expect(cli.wasDeploymentCancelled(cli.getDeploymentJobId())).toBe(true);
    });

    it('should be able to cancel successfully if project deploy report got called once', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            cli: cli,
            ide
        });

        await undefined;

        const progressToken = ide.getCurrentProgressToken();
        if (progressToken) {
            progressToken.isCancellationRequested = true;
        }

        await projectDeployPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(false);
        expect(cli.wasDeploymentCancelled(cli.getDeploymentJobId())).toBe(true);
    });

    it('should be able to cancel successfully if project deploy report got called twice', async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            cli: cli,
            ide
        });

        await 5;
        await 5;
        await 5;

        const progressToken = ide.getCurrentProgressToken();
        const progress = progressToken?.progress;

        if (progressToken) {
            progressToken.isCancellationRequested = true;
        }

        await projectDeployPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(false);
        expect(cli.wasDeploymentCancelled(cli.getDeploymentJobId())).toBe(true);
        expect(progress).toBe(50);
    });

    it("should cancel without issue if deployment is already completed", async () => {
        const projectDeployPromise = projectDeploy({
            targetOrg: salesforceOrg,
            cli: cli,
            ide
        });

        await cli.projectDeployComplete();

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
            cli: cli,
            ide
        });

        cli.toThrowOnProjectDeployCancel = new Error('Unexpected error!');

        const progressToken = ide.getCurrentProgressToken();
        if (progressToken) {
            progressToken.isCancellationRequested = true;
        }

        await projectDeployPromise;
        expect(ide.didShowWarningMessage(cli.toThrowOnProjectDeployCancel.message)).toBe(true);
    });

    it('should terminate immediately if there are no components to deploy', async () => {
        cli.setNoComponentsToDeploy(true);

        await projectDeploy({
            targetOrg: salesforceOrg,
            cli: cli,
            ide
        });

        const progressToken = ide.getCurrentProgressToken();
        expect(progressToken?.title.includes('Project Deploy Result')).toBe(false);
    });

    it('should run project deploy when save is done by user', async () => {
        const mockFile = ide.generateUri("force-app", "main", "default", "classes", "TestFile.cls");

        ide.addFile(mockFile);
        cli.projectDeployFailure(
            {
                columnNumber: 1,
                lineNumber: 1,
                fileName: 'classes/TestFile.cls',
                problem: 'This is an error!'
            }
        );
        cli.setDefaultOrg(salesforceOrg);

        const testFunction = genOnDidSaveTextDocuments({
            cli,
            ide
        });

        const testFunctionPromise = testFunction({
            textDocuments: [{
                languageId: APEX_LANGUAGE_ID,
                uri: mockFile
            }]
        });

        await cli.projectDeployComplete();
        await testFunctionPromise;
        expect(ide.didSetAnyDiagnostics()).toBe(true);
        expect(ide.didShowInformationMessage('Deployment successful!'));
    });

    it('should only run project deploy twice if 10 project deploys are queued', async () => {
        const mockFile = ide.generateUri("force-app", "main", "default", "classes", "TestFile.cls");

        ide.addFile(mockFile);
        cli.projectDeployFailure(
            {
                columnNumber: 1,
                lineNumber: 1,
                fileName: 'classes/TestFile.cls',
                problem: 'This is an error!'
            }
        );
        cli.setDefaultOrg(salesforceOrg);

        const savedProjectDeployStart = cli.projectDeployStart;

        let projectDeployCounter = 0;
        cli.projectDeployStart = function ({ targetOrg }: { targetOrg: SalesforceOrg }) {
            projectDeployCounter++;
            return savedProjectDeployStart.call(cli, ({ targetOrg }));
        };

        const testFunction = genOnDidSaveTextDocuments({
            cli,
            ide
        });

        const promises = [];
        for (let i = 0; i < 10; i++) {
            const promise = testFunction({
                textDocuments: [{
                    languageId: APEX_LANGUAGE_ID,
                    uri: mockFile
                }]
            });
            promises.push(promise);
        }

        await cli.projectDeployComplete();
        await Promise.all(promises);
        expect(ide.didSetAnyDiagnostics()).toBe(true);
        expect(projectDeployCounter).toBe(1);
    });

    it('should not do a project deploy if there sf.zsi.vscode.deployOnSave is false', async () => {
        ide.setConfig('sf.zsi.vscode.deployOnSave', false);

        const mockFile = Uri.from({
            scheme: 'file',
            fileSystemPath: '/dev/force-app/main/default/classes/TestFile.cls'
        });

        const testFunction = genOnDidSaveTextDocuments({
            cli, ide
        });

        await testFunction({
            textDocuments: [{
                languageId: APEX_LANGUAGE_ID,
                uri: mockFile
            }]
        });
        expect(ide.didSetAnyDiagnostics()).toBe(false);
    });
});