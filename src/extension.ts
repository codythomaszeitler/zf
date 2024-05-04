import * as vscode from 'vscode';
import { openOrg } from './openOrg';
import { SfSalesforceCli } from "./sfSalesforceCli";
import { VsCode, VscodeCliInputOutputTreeView, UriMapper, RangeMapper } from "./vscode";
import { ApexLogTreeView } from "./apexLogTreeView";
import { genOnDidSaveTextDocuments, projectDeploy } from './projectDeploy';
import { runCliCommand } from './executor';
import { GenerateFauxSObjectsCommand } from './genFauxSObjects';
import { runHighlightedApex } from './apexRun';
import { LogLevel, Logger } from './logger';
import { generateDebugTraceFlag } from './genDebugTraceFlag';
import { getRecentApexLogs } from './getRecentApexLogs';
import { ApexCleanLogsCommand } from './apexCleanLogsCommand';
import { RunApexTestRunRequest, RunTestUnderCursorCommand, TestItem as ZfTestItem, TestRun as ZfTestRun } from './runTestUnderCursorCommand';
import { GenerateOfflineSymbolTableCommand } from './generateOfflineSymbolTableCommand';
import { genCacheSfdxProjectOnSave } from './readSfdxProjectCommand';
import { IntegratedDevelopmentEnvironment } from './integratedDevelopmentEnvironment';
import path = require('path');
import { TextDecoder } from 'util';
import { showCliOutput } from './showSalesforceCliInputOutput';
import { ApexParser } from './apexParser';
import { ApexTestResult } from './apexTestRunResult';

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

	const controller = vscode.tests.createTestController('zf-test-controller', 'ZeitlerForce Apex Tests');
	controller.createRunProfile('Run', vscode.TestRunProfileKind.Run, async (testRunRequest) => {
		const testRun = controller.createTestRun(testRunRequest);
		const zfTestRun: ZfTestRun = {
			testItems: testRunRequest.include?.map(testItem => {
				return generateTestItem(testItem);
			}) || [],
			appendOutput(contents: string) {
				testRun.appendOutput(contents);
			},
			end() {
				testRun.end();
			}
		};

		const runApexTestRunRequest = new RunApexTestRunRequest({
			cli: salesforceCli,
			ide: ide
		});
		await runApexTestRunRequest.execute({
			testRun: zfTestRun,
			logDir: getZfLogDir(ide)
		});

		controller.invalidateTestResults();

		function generateTestItem(child: vscode.TestItem) {
			const zfTestItem: ZfTestItem = {
				get identifier() {
					return child.id;
				},
				get busy() {
					return child.busy;
				},
				set busy(_busy) {
					child.busy = _busy;
				},
				start: function (): string {
					child.busy = true;
					testRun.started(child);
					return child.id;
				},
				passed: function (): void {
					child.busy = false;
					testRun.passed(child);
				},
				failed: function (failure: ApexTestResult | undefined): void {
					child.busy = false;
					if (failure) {
						testRun.failed(child, new vscode.TestMessage(failure.getFailureMessage()));
					}
				},
				get parent() {
					return child.parent && generateTestItem(child.parent);
				},
				get children() {
					const _children: ZfTestItem[] = [];
					child.children.forEach(childTestItem => {
						_children.push(generateTestItem(childTestItem));
					});
					return _children;
				}
			};

			return zfTestItem;
		}
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