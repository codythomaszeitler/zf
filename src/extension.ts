import * as vscode from 'vscode';
import { openOrg } from './openOrg';
import { SfSalesforceCli } from "./sfSalesforceCli";
import { VsCode } from "./vscode";
import { projectDeploy } from './projectDeploy';
import { SalesforceOrg } from './salesforceOrg';
import { runCliCommand } from './executor';

export function activate(context: vscode.ExtensionContext) {
	const ide = new VsCode();
	const salesforceCli = new SfSalesforceCli(runCliCommand);

	async function runSfOrgOpen() {
		try {
			await openOrg(ide, salesforceCli);
		} catch (e : any) {
			if (e) {
				ide.showWarningMessage(e.message);
			}
		}
	}
	
	async function withDiagsProjectDeployStart() {
		try {
			const org = new SalesforceOrg({
				alias: 'salesforcetestingarea',
				isActive: true
			});
			await projectDeploy({
				targetOrg: org,
				ide,
				salesforceCli
			});
		} catch (e : any) {
			if (e) {
				ide.showErrorMessage(e.message);
			}
		}
	}
	
	context.subscriptions.push(vscode.commands.registerCommand("sf.zsi.projectDeploy", withDiagsProjectDeployStart));
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.openOrg', runSfOrgOpen));
}

// this method is called when your extension is deactivated
export function deactivate() { }
