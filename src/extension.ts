// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const util = require('util');
const exec = util.promisify(require('child_process').exec);

import * as vscode from 'vscode';
import { openOrg } from './openOrg';
import { SfSalesforceCli } from "./sfSalesforceCli";
import { VsCode } from "./vscode";
import { projectDeploy } from './projectDeploy';
import { SalesforceOrg } from './salesforceOrg';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const ide = new VsCode();
	const salesforceCli = new SfSalesforceCli(typeCastedExec(exec));

	async function runSfOrgOpen() {
		await openOrg(ide, salesforceCli);
	}
	context.subscriptions.push(vscode.commands.registerCommand('sf.zsi.openOrg', runSfOrgOpen));

	async function withDiagsProjectDeployStart() {
		const org = new SalesforceOrg({
			alias: 'salesforcetestingarea',
			isActive: true
		});
		await projectDeploy({
			targetOrg: org,
			ide,
			salesforceCli
		});
	}

	context.subscriptions.push(vscode.commands.registerCommand("sf.zsi.projectDeploy", withDiagsProjectDeployStart));
}

function typeCastedExec(exec: any) {
	return async function (command: string) {
		return await exec(command, { maxBuffer: 1024 * 500 });
	};
}

// this method is called when your extension is deactivated
export function deactivate() { }
