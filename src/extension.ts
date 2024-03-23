import * as vscode from 'vscode';
import { openOrg } from './openOrg';
import { SfSalesforceCli } from "./sfSalesforceCli";
import { VsCode, VscodeCliInputOutputTreeView, UriMapper, PositionMapper, RangeMapper } from "./vscode";
import { ApexLogTreeView } from "./apexLogTreeView";
import { genOnDidSaveTextDocuments, projectDeploy } from './projectDeploy';
import { runCliCommand } from './executor';
import { GenerateFauxSObjectsCommand } from './genFauxSObjects';
import { runHighlightedApex } from './apexRun';
import { LogLevel, Logger } from './logger';
import { generateDebugTraceFlag } from './genDebugTraceFlag';
import { getRecentApexLogs } from './getRecentApexLogs';
import { ApexCleanLogsCommand } from './apexCleanLogsCommand';
import { RunApexTestClass as RunApexTestCommand, RunTestUnderCursorCommand } from './runTestUnderCursorCommand';
import { GenerateOfflineSymbolTableCommand } from './generateOfflineSymbolTableCommand';
import { genCacheSfdxProjectOnSave } from './readSfdxProjectCommand';
import { IntegratedDevelopmentEnvironment } from './integratedDevelopmentEnvironment';
import path = require('path');
import { TextEncoder, TextDecoder } from 'util';
import { showCliOutput } from './showSalesforceCliInputOutput';
import { ApexParser } from './apexParser';
import { ApexTestGetResult } from './apexTestRunResult';
import { NULL_SF_ID, SalesforceId } from './salesforceId';
import { getLogFileUri } from './showApexLogCommand';

function getZfOfflineSymbolTableDir(ide: IntegratedDevelopmentEnvironment) {
	return ide.generateUri('.zf', 'offlineSymbolTable');
}

function getZfLogDir(ide: IntegratedDevelopmentEnvironment) {
	return ide.generateUri('.zf', 'logs');
}

export function activate(context: vscode.ExtensionContext) {
	const ide = new VsCode();
	const logger = ide.generateLogger();
	logger.setLogLevel(LogLevel.info);
	Logger.setGlobalLogger(logger);

	const proxy = ide.getConfig("sf.zsi.vscode.proxy", {});
	const salesforceCli = new SfSalesforceCli(runCliCommand, proxy);

	const cliInputOutputTreeViewProvider = new VscodeCliInputOutputTreeView({
		history: salesforceCli.getHistory()
	});
	const treeView = vscode.window.createTreeView('salesforce-cli-input-output', {
		treeDataProvider: cliInputOutputTreeViewProvider
	});
	treeView.onDidChangeSelection(async (e) => {
		e.selection.forEach(cliInputOutput => {
			showCliOutput(ide, cliInputOutput.cliInputOutput);
		});
	});

	async function runSfOrgOpen() {
		try {
			await openOrg(ide, salesforceCli);
		} catch (e: any) {
			if (e) {
				ide.showWarningMessage(e.message);
			}
		}
	}

	async function withDiagsProjectDeployStart() {
		try {
			await projectDeploy({
				ide,
				cli: salesforceCli
			});
		} catch (e: any) {
			if (e) {
				ide.showErrorMessage(e.message);
			}
		}
	}

	async function generateFauxSObject() {
		const defaultOrg = await salesforceCli.getDefaultOrg();
		if (defaultOrg) {
			try {
				const generateFauxSObjectsCommand = new GenerateFauxSObjectsCommand({
					cli: salesforceCli,
					ide
				});
				await generateFauxSObjectsCommand.execute({
					targetOrg: defaultOrg,
					destDir: ide.generateUri('.sfdx', 'tools', 'sobjects', 'customObjects')
				});
			} catch (e: any) {
				ide.showErrorMessage(e.message);
			}
		}
	}

	async function runHighlightedApexCommand() {
		const defaultOrg = await salesforceCli.getDefaultOrg();
		if (defaultOrg) {
			await runHighlightedApex({
				ide,
				salesforceCli,
				targetOrg: defaultOrg
			});
		}
	}

	async function runEnableDebugLogForCurrentUser() {
		await ide.withProgress(async (progressToken) => {
			try {
				const defaultOrg = await salesforceCli.getDefaultOrg();
				if (defaultOrg) {
					await generateDebugTraceFlag({
						targetOrg: defaultOrg,
						salesforceCli,
						debugLogLevelApiName: 'SFDC_DevConsole',
						progressToken,
						ide: ide,
					});
				}
			} catch (e: any) {
				ide.showErrorMessage(e.message);
			}
		}, {
			title: 'Enable Debug Logging'
		});
	}

	const zfLogDir = getZfLogDir(ide);

	async function runGetRecentApexLogs() {
		await ide.withProgress(async (progressToken) => {
			try {
				const defaultOrg = await salesforceCli.getDefaultOrg();
				if (defaultOrg) {
					await getRecentApexLogs({
						targetOrg: defaultOrg,
						numLogs: 25,
						logDir: zfLogDir,
						cli: salesforceCli
					});
				}
			} catch (e: any) {
				ide.showErrorMessage(e.message);
			}
		}, {
			title: 'Get Recent Apex Logs'
		});
	}

	async function runCleanLocalApexLogs() {
		try {
			const apexCleanLogsCommand = new ApexCleanLogsCommand({
				cli: salesforceCli,
				ide: ide,
			});

			await apexCleanLogsCommand.execute({
				logDir: zfLogDir
			});
		} catch (e: any) {
			ide.showErrorMessage(e.message);
		}
	}

	const apexLogTreeView = new ApexLogTreeView({
		cli: salesforceCli,
		ide: ide,
		logDir: zfLogDir
	});

	salesforceCli.getDefaultOrg().then((defaultOrg) => {
		ide.registerTreeView({
			treeView: apexLogTreeView,
			targetOrg: defaultOrg ?? undefined
		});
	});


	async function runRefreshApexLogs() {
		await ide.withProgress(async (progress) => {
			try {
				const defaultOrg = await salesforceCli.getDefaultOrg();
				if (defaultOrg) {
					await apexLogTreeView.refresh({
						targetOrg: defaultOrg
					});
				} else {
					ide.showWarningMessage('No default org set. Cannot refresh apex logs.');
				}
			} catch (e: any) {
				ide.showErrorMessage(e.message);
			}
		}, {
			title: 'Refresh Apex Logs'
		});
	}

	async function runTestUnderCursor() {
		try {
			const defaultOrg = await salesforceCli.getDefaultOrg();
			if (defaultOrg) {
				const runTestUnderCursorCommand = new RunTestUnderCursorCommand({
					ide: ide,
					cli: salesforceCli
				});

				await runTestUnderCursorCommand.execute({
					targetOrg: defaultOrg
				});
			} else {
				ide.showWarningMessage('No default org set. Cannot refresh apex logs.');
			}
		} catch (e: any) {
			ide.showErrorMessage(e.message);
		}
	}

	const zfOfflineSymbolTableDir = getZfOfflineSymbolTableDir(ide);
	async function runGeneratorOfflineSymbolTable() {
		ide.withProgress(async (progressToken) => {
			try {
				const generateOfflineSymbolTableCommand = new GenerateOfflineSymbolTableCommand({
					ide,
					cli: salesforceCli
				});
				await generateOfflineSymbolTableCommand.execute({
					outputDir: zfOfflineSymbolTableDir,
				});
			} catch (e: any) {
				ide.showErrorMessage(e.message);
			}
		}, {
			title: 'Generating offline symbol table'
		});
	}

	ide.onDidSaveTextDocuments(genCacheSfdxProjectOnSave({
		cli: salesforceCli,
		ide
	}));

	ide.onDidSaveTextDocuments(genOnDidSaveTextDocuments({
		cli: salesforceCli,
		ide
	}));

	const controller = vscode.tests.createTestController('zf-test-controller', 'ZF Apex Tests');
	controller.createRunProfile('Run', vscode.TestRunProfileKind.Run, (testRunRequest) => {
		const testRun = controller.createTestRun(testRunRequest);

		salesforceCli.getDefaultOrg().then(async (defaultOrg) => {
			if (!defaultOrg) {
				return;
			}
			const testsToRun = testRunRequest.include?.map(testItem => {
				return testItem.id;
			}).join(" ");


			controller.invalidateTestResults(testRunRequest.include);

			if (testsToRun) {
				const runApexTestCommand = new RunApexTestCommand({
					cli: salesforceCli,
					ide: ide
				});

				const result = await runApexTestCommand.execute({
					targetOrg: defaultOrg,
					testName: testsToRun
				});


				const records = await salesforceCli.dataQuery({
					targetOrg: defaultOrg,
					query: {
						from: "ApexTestResult",
						fields: ["ApexLogId"],
						where: `ApexTestRunResultId IN (SELECT Id from ApexTestRunResult where AsyncApexJobId = '${result.getTestRunId()}')`
					}
				});

				const logId = SalesforceId.get(records.getSObjects()[0]["ApexLogId"]);
				if (logId === NULL_SF_ID) {
					ide.showWarningMessage('There was no debug log found... there is most likely no trace flag running.');
					testRun.end();
					return;
				}

				await salesforceCli.apexGetLog({
					targetOrg: defaultOrg,
					logDir: getZfLogDir(ide),
					logId,
					numLogs: undefined
				});

				const logFileUri = getLogFileUri({
					targetOrg: defaultOrg,
					logDir: getZfLogDir(ide),
					logId
				});

				let contents = await ide.readFile({
					uri: logFileUri
				});

				contents = contents.replace(/\n/g, '\r\n');
				testRun.appendOutput(contents);

				testRunRequest.include?.forEach(testItem => {
					if (!result.hasFailingTests()) {
						testRun.passed(testItem);
					} else {
						// So what I really want here... is I want someway to see the entire debug log of what happened during the test run.
						// But the test explorer makes that somewhat complicated.
						// But in salesforce land this is a little more weird.
						// You are really interested in the debug log more than you are interested in the 
						// Okay... this gets slightly more complicated.

						// So there are three layers here
						// ZF Apex Tests
						//		AnotherTestClass
						//			methodName
						// What should happen when you click on each one of these in the hierarchy?
						// If you click on AnotherTestClass, you should see log file that was 
						// associated to the test class.

						// If you click on th test method...
						// What gets interesting here... is if you should not run this log thing 
						// until the testRun item gets clicked

						// So at this point, you know that you a failing log...
						// But this isn't just for successes..
						if (testItem.id.includes('.')) {
							result.getFailingTests().forEach(failingTest => {
								const parent = controller.items.get(failingTest.getClassName());
								if (parent) {
									const child = parent.children.get(failingTest.getFullName());
									if (child) {
										// Okay... so this is interesting... 
										// The test run takes in a list of test items and attaches a message to them...
										// What is interesting here... 
										// Is that 
										// You can also have a list of test messages associated to them? 
										// The child has a list of messages that is associated to it...
										testRun.failed(child, new vscode.TestMessage(failingTest.getFailureMessage() + '\n' + failingTest.getStackTrace()));
									}
								}
							});
						} else {
							const errorMessage = result.getFailingTests().map(failingTest => {
								return failingTest.getFullName() + ' ' + failingTest.getStackTrace();
							}).join("\n");

							testRun.failed(testItem, new vscode.TestMessage('Test Failures: \n' + errorMessage));
						}
					}
					// So at this point... we really need to 
				});
			}
			testRun.end();
		});

	});

	const alignTestMethods = (vscodeUri: vscode.Uri) => {
		const uriMapper = new UriMapper();
		const uri = uriMapper.intoDomainRepresentation(vscodeUri);

		if (uri.isApexClass()) {
			const apexClassName = uri.getBaseName().replace('.cls', '');

			vscode.workspace.fs.readFile(vscodeUri).then(file => {
				const testItem = controller.createTestItem(apexClassName, apexClassName);
				const textDecoding = new TextDecoder();
				const apexClassString = textDecoding.decode(file.buffer);

				const apexParser = new ApexParser();
				const apexClass = apexParser.parse(apexClassString);

				if (apexClass.getIsTestClass()) {
					apexClass.getTestMethods().forEach(apexMethod => {
						const apexMethodTestItem = controller.createTestItem(`${apexClassName}.${apexMethod.name}`, `${apexMethod.name}`, vscodeUri);

						const rangeMapper = new RangeMapper();
						apexMethodTestItem.range = rangeMapper.intoVsCodeRepresentation(apexMethod.range);

						testItem.children.add(apexMethodTestItem);
					});
					controller.items.add(testItem);
				}
			});
		}
	};

	vscode.workspace.textDocuments.forEach(textDocument => {
		alignTestMethods(textDocument.uri);
	});

	vscode.workspace.onDidOpenTextDocument((e) => {
		alignTestMethods(e.uri);
	});

	vscode.workspace.onDidChangeTextDocument((e) => {
		alignTestMethods(e.document.uri);
	});

	vscode.workspace.onDidCloseTextDocument((e) => {
		const uriMapper = new UriMapper();
		const uri = uriMapper.intoDomainRepresentation(e.uri);
		const apexClassName = uri.getBaseName().replace('.cls', '');

		if (uri.isApexClass()) {
			controller.items.delete(apexClassName);
		}
	});

	context.subscriptions.push(vscode.commands.registerCommand("sf.zsi.projectDeploy", withDiagsProjectDeployStart));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.openOrg', runSfOrgOpen));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.generateFauxSObjects', generateFauxSObject));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.runHighlightedApex', runHighlightedApexCommand));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.enableDebugLogForCurrentUser', runEnableDebugLogForCurrentUser));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.getRecentApexLogs', runGetRecentApexLogs));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.cleanLocalApexLogs', runCleanLocalApexLogs));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.refreshApexLogs', runRefreshApexLogs));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.runTestUnderCursor', runTestUnderCursor));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.generateOfflineSymbolTable', runGeneratorOfflineSymbolTable));
}

// this method is called when your extension is deactivated
export function deactivate() { }