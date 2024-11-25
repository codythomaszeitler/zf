import * as vscode from 'vscode';
import { ImmediateCacheOrgListCommand, SelectAndOpenOrgCommand, SelectOrgCommand } from './openOrg';
import { VsCode, VscodeCliInputOutputTreeView, UriMapper, RangeMapper, VscodeMetadataTreeNode, VscodeMetadataTreeView, ApexLogTreeNode, VscodeZfSoqlScriptsTreeView, VscodeZoqlScriptTreeNode } from "./vscode";
import { ApexLogTreeView } from "./apexLogTreeView";
import { runCliCommand } from './executor';
import { GenerateFauxSObjectsCommand, PickAndGenerateFauxSObjectCommand } from './genFauxSObjects';
import { LogLevel, Logger } from './logger';
import { generateDebugTraceFlag } from './genDebugTraceFlag';
import { getRecentApexLogs } from './getRecentApexLogs';
import { ApexCleanLogsCommand } from './apexCleanLogsCommand';
import { RunApexTestRunRequest, TestRun as ZfTestRun } from './runTestUnderCursorCommand';
import { GenerateOfflineSymbolTableCommand } from './generateOfflineSymbolTableCommand';
import { genCacheSfdxProjectOnSave } from './readSfdxProjectCommand';
import { IntegratedDevelopmentEnvironment } from './integratedDevelopmentEnvironment';
import { TextDecoder } from 'util';
import { showCliOutput } from './showSalesforceCliInputOutput';
import { ApexParser } from './apexParser';
import { MetadataTreeView, genOnMetadataRetrieveAndShow } from './metadataExplorerTreeView';
import { genOnlyRunOnce } from './onlyOneCommandRun';
import { genOnDidSaveTextDocuments } from './projectDeploy/queueableProjectDeployCommand';
import { QuickDefaultOrgSfSalesforceCli } from './quickDefaultOrgSalesforceCli';
import { ProjectDeployCommand } from './projectDeploy/projectDeployCommand';
import { RunHighlightedAnonApex } from './runAnonApex/runAnonApex';
import { ShowApexLogDebugsOnlyCommand } from './showApexLogCommand';
import { ExecuteAndShowSoqlCommand } from './soql/executeAndShowSoqlCommand';
import { GenerateFauxSoqlCommand } from './soql/genFauxSoqlCommand';
import { Position } from './position';
import { DescribeSObject, ListSObjects, SoqlIntellisense } from './soql/intellisense';
import { genCachedListSObjects } from './soql/genListSObjects';
import { genCachedDescribeSObjects } from './soql/genDescribeSObjects';
import { GetSoqlUnderCursorCommand } from './soql/getSoqlUnderCursor';
import { SalesforceOrg } from './salesforceOrg';
import { CreateAndShowZoqlScriptCommand, OpenZoqlScriptCommand } from './soql/zoqlScriptDirectory';

function getZfOfflineSymbolTableDir(ide: IntegratedDevelopmentEnvironment) {
	return ide.generateUri('zf', 'offlineSymbolTable');
}

function getZfLogDir(ide: IntegratedDevelopmentEnvironment) {
	return ide.generateUri('zf', 'logs');
}

function getZfMetadataDir(ide: IntegratedDevelopmentEnvironment) {
	return ide.generateUri('zf', 'metadata');
}

function getZfZoqlDir(ide: IntegratedDevelopmentEnvironment) {
	return ide.generateUri('zf', 'zoqlScripts');
}

export function activate(context: vscode.ExtensionContext) {
	const ide = new VsCode();
	const logger = ide.generateLogger();
	logger.setLogLevel(LogLevel.info);
	Logger.setGlobalLogger(logger);

	const proxy = ide.getConfig("sf.zsi.vscode.proxy", {});
	const salesforceCli = new QuickDefaultOrgSfSalesforceCli(ide, runCliCommand, proxy);

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

	const provider = new VscodeZfSoqlScriptsTreeView({
		zoqlScriptsDir: getZfZoqlDir(ide)
	});
	vscode.window.createTreeView("zoql-scripts", {
		treeDataProvider: provider
	});
	provider.refresh(ide, salesforceCli);

	const orgListCommand = new ImmediateCacheOrgListCommand({
		cli: salesforceCli,
		ide
	});

	async function runSfOrgOpen() {
		try {
			const openOrgCommand = new SelectAndOpenOrgCommand({
				ide,
				cli: salesforceCli,
				orgListCommand
			});
			await openOrgCommand.execute();
		} catch (e: any) {
			if (e) {
				ide.showWarningMessage(e.message);
			}
		}
	}

	async function withDiagsProjectDeployStart() {
		try {
			await ide.withProgress(async (progressToken) => {
				const projectDeployCommand = new ProjectDeployCommand({
					cli: salesforceCli,
					ide: ide,
					progressToken
				});
				await projectDeployCommand.execute({});
			}, {
				title: 'Project Deploy Start',
				isCancellable: true
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

	async function generateFauxSObjectSelection() {
		const defaultOrg = await salesforceCli.getDefaultOrg();
		if (defaultOrg) {
			try {
				const generateFauxSObjectsCommand = new PickAndGenerateFauxSObjectCommand({
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
		const runAnonApexCommand = new RunHighlightedAnonApex({
			cli: salesforceCli, ide, anonApexOutputDir: ide.generateUri('zf', 'anonApex')
		});

		const defaultOrg = await salesforceCli.getDefaultOrg();
		if (defaultOrg) {
			try {
				await runAnonApexCommand.execute({
					targetOrg: defaultOrg
				});
			} catch (e) {
				if (e instanceof Error) {
					Logger.get().error(e);
					ide.showErrorMessage(e.message);
				}
			}
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

	async function runRefreshMetadataExplorer() {
		await ide.withProgress(async (progressToken) => {
			const metadataTreeViewNode = new MetadataTreeView({
				cli: salesforceCli, ide, metadataDir: getZfMetadataDir(ide)
			});

			const defaultOrg = await salesforceCli.getDefaultOrg();
			if (!defaultOrg) {
				ide.showWarningMessage('No default org found.');
				return;
			}

			const metadataTreeNode = await metadataTreeViewNode.getRootNode({
				targetOrg: defaultOrg
			});

			const rootNode = new VscodeMetadataTreeNode({
				metadataTreeNode
			});

			const metadataTreeViewProvider = new VscodeMetadataTreeView({
				rootNode
			});

			vscode.window.createTreeView("zeitlerforce-metadata-explorer", {
				treeDataProvider: metadataTreeViewProvider
			});
		}, {
			title: 'Refreshing Metadata Explorer',
			isCancellable: false
		});
	}

	async function runSoqlScriptExecute(targetOrg?: SalesforceOrg) {
		const executeSoqlCommand = new ExecuteAndShowSoqlCommand({
			cli: salesforceCli,
			ide
		});

		await ide.withProgress(async progressToken => {
			const outputDir = ide.generateUri('zf', 'soqlResults');
			await executeSoqlCommand.execute({
				outputDir,
				targetOrg
			});
		}, {
			title: 'Executing SOQL',
			isCancellable: false
		});
	}

	const metadataRetrieveAndShow = genOnMetadataRetrieveAndShow({ cli: salesforceCli, ide, metadataDir: getZfMetadataDir(ide) });
	const vscodeMetadataRetrieveAndShowCommand = vscode.commands.registerCommand("sf.zsi.metadataRetrieveAndShow", async (node: VscodeMetadataTreeNode) => {
		await metadataRetrieveAndShow(node.metadataTreeNode);
	});

	const metadataRetrieve = genOnMetadataRetrieveAndShow({
		cli: salesforceCli, ide
	});
	const vscodeMetadataRetrieve = vscode.commands.registerCommand("sf.zsi.metadataRetrieveIntoDirectory", async (node: VscodeMetadataTreeNode) => {
		await metadataRetrieve(node.metadataTreeNode);
	});

	ide.onDidSaveTextDocuments(genCacheSfdxProjectOnSave({
		cli: salesforceCli,
		ide
	}));

	ide.onDidSaveTextDocuments(genOnDidSaveTextDocuments({
		cli: salesforceCli,
		ide
	}));

	let isRunningTest: boolean = false;
	const controller = vscode.tests.createTestController('zf-test-controller', 'ZeitlerForce Apex Tests');
	controller.createRunProfile('Run', vscode.TestRunProfileKind.Run, async (testRunRequest) => {
		if (isRunningTest) {
			ide.showWarningMessage('A test is already running.');
			return;
		}
		isRunningTest = true;

		const testRun = controller.createTestRun(testRunRequest);
		const zfTestRun: ZfTestRun = {
			testItems: testRunRequest.include?.map(testItem => {
				return ide.generateTestItem(testItem, testRun);
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
		try {
			await runApexTestRunRequest.execute({
				testRun: zfTestRun,
				logDir: getZfLogDir(ide)
			});
		} finally {
			isRunningTest = false;
		}

		controller.invalidateTestResults();
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

	const cachedDescribeSObjects: DescribeSObject = genCachedDescribeSObjects({
		cli: salesforceCli,
		ide
	});

	const cachedListSObjects: ListSObjects = genCachedListSObjects({
		cli: salesforceCli,
		ide
	});

	vscode.languages.registerCompletionItemProvider({
		scheme: 'file', language: 'zoql'
	}, {
		async provideCompletionItems(document, position, token, context) {
			if (ide.getConfig("sf.zsi.enableSoqlIntellisensePrototype", true)) {
				const contents = document.getText();

				const zfPosition = new Position(position.line, position.character);
				const intellisense = new SoqlIntellisense({
					describeSObject: cachedDescribeSObjects,
					listSObjects: cachedListSObjects
				});

				const items = await intellisense.autocompleteSuggestionsAt(contents, zfPosition);
				return items.map(item => (new vscode.CompletionItem(item.item, vscode.CompletionItemKind.Field)));
			}
			else {
				return [];
			}
		}
	});

	vscode.languages.registerCompletionItemProvider({
		scheme: 'file', language: 'apex'
	}, {
		async provideCompletionItems(document, position, token, context) {
			if (!ide.getConfig("sf.zsi.enableSoqlIntellisensePrototype", true)) {
				return [];
			}

			const zfPosition = new Position(position.line, position.character);

			const getSoqlUnderCursorCommand = new GetSoqlUnderCursorCommand({
				cli: salesforceCli, ide
			});

			const result = await getSoqlUnderCursorCommand.execute({
				apexClass: document.getText(),
				position: zfPosition
			});

			if (result.isWithinSoql) {
				const intellisense = new SoqlIntellisense({
					describeSObject: cachedDescribeSObjects,
					listSObjects: cachedListSObjects
				});
				const items = await intellisense.autocompleteSuggestionsAt(result.soql, result.embeddedCursorPosition);
				return items.map(item => (new vscode.CompletionItem(item.item, vscode.CompletionItemKind.Field)));
			} else {
				return [];
			}
		},
	}, '.');

	context.subscriptions.push(vscodeMetadataRetrieve);
	context.subscriptions.push(vscode.commands.registerCommand("sf.zsi.refreshMetadataExplorer", genOnlyRunOnce(runRefreshMetadataExplorer, () => {
		ide.showWarningMessage('Command is already running.');
	})));
	context.subscriptions.push(vscodeMetadataRetrieveAndShowCommand);
	context.subscriptions.push(vscode.commands.registerCommand("sf.zsi.projectDeploy", withDiagsProjectDeployStart));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.openOrg', runSfOrgOpen));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.generateFauxSObjects', generateFauxSObject));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.generateFauxSObjectSelection', generateFauxSObjectSelection));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.runHighlightedApex', runHighlightedApexCommand));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.enableDebugLogForCurrentUser', runEnableDebugLogForCurrentUser));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.getRecentApexLogs', runGetRecentApexLogs));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.cleanLocalApexLogs', runCleanLocalApexLogs));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.refreshApexLogs', runRefreshApexLogs));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.generateOfflineSymbolTable', runGeneratorOfflineSymbolTable));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.generateFauxSoql', async () => {
		try {
			const destDir = ide.generateUri('.sfdx', 'tools');
			const generateFauxSoqlCommand = new GenerateFauxSoqlCommand({
				ide,
				cli: salesforceCli
			});

			await generateFauxSoqlCommand.execute({
				sfdxToolsDir: destDir
			});

		} catch (e) {
			if (e instanceof Error) {
				ide.showErrorMessage(e.message);
			}
		}
	}));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.showLogDebugsOnly', (logNode: ApexLogTreeNode) => {
		const apexLog = logNode.treeNode.value;

		const showApexLogDebugsOnlyCommand = new ShowApexLogDebugsOnlyCommand({
			cli: salesforceCli,
			ide
		});

		salesforceCli.getDefaultOrg().then(async defaultOrg => {
			await showApexLogDebugsOnlyCommand.execute({
				logDir: getZfLogDir(ide),
				logId: apexLog.getId(),
				targetOrg: defaultOrg
			});
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.createZoqlScript', async () => {
		const command = new CreateAndShowZoqlScriptCommand({
			ide, cli: salesforceCli
		});

		await command.execute({
			zoqlScriptsDir: getZfZoqlDir(ide)
		});

		await provider.refresh(ide, salesforceCli);
	}));

	context.subscriptions.push(vscode.commands.registerCommand("sf.zsi.runSoqlScript", async () => {
		await runSoqlScriptExecute();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.runSoqlScriptAgainstTargetOrg', async () => {
		const selectOrgCommand = new SelectOrgCommand({
			cli: salesforceCli,
			ide,
			orgListCommand
		});

		const userSelectedOrg = await selectOrgCommand.execute();
		await runSoqlScriptExecute(userSelectedOrg);
	}));

	context.subscriptions.push(vscode.commands.registerCommand("sf.zsi.openZoqlScript", async (e: VscodeZoqlScriptTreeNode) => {
		try {
			const openZoqlScriptCommand = new OpenZoqlScriptCommand({
				ide, cli: salesforceCli
			});
			await openZoqlScriptCommand.execute({
				treeNode: e.treeNode
			});
		} catch (e: unknown) {
			if (e instanceof Error) {
				ide.showErrorMessage(e.message);
			}
		}
	}));
}


export function deactivate() { }