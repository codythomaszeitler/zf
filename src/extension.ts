import * as vscode from 'vscode';
import { openOrg } from './openOrg';
import { SfSalesforceCli } from "./sfSalesforceCli";
import { VsCode } from "./vscode";
import { projectDeploy } from './projectDeploy';
import { runCliCommand } from './executor';
import { generateFauxSObjects } from './genFauxSObjects';
import { runHighlightedApex } from './apexRun';
import { LogLevel, Logger } from './logger';

export function activate(context: vscode.ExtensionContext) {
	const ide = new VsCode();
	const logger = ide.generateLogger();
	logger.setLogLevel(LogLevel.info);
	Logger.setGlobalLogger(logger);

	const proxy = ide.getConfig("sf.zsi.vscode.proxy", {});
	const salesforceCli = new SfSalesforceCli(runCliCommand, proxy);

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
				salesforceCli
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
			await ide.withProgress(async (progressToken) => {
				try {
					await generateFauxSObjects({
						targetOrg: defaultOrg,
						salesforceCli,
						outputDir: '.sfdx//tools//sobjects//customObjects',
						progressToken
					});
				} catch (e: any) {
					ide.showErrorMessage(e.message);
				}
			}, {
				title: 'Generate SObjects'
			});
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

	context.subscriptions.push(vscode.commands.registerCommand("sf.zsi.projectDeploy", withDiagsProjectDeployStart));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.openOrg', runSfOrgOpen));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.generateFauxSObjects', generateFauxSObject));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.runHighlightedApex', runHighlightedApexCommand));
}

// this method is called when your extension is deactivated
export function deactivate() { }
