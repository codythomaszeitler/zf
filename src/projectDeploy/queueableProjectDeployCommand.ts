import { Command, CommandParams } from "../command";
import { SalesforceOrg } from "../salesforceOrg";
import { ProjectDeployCommand } from "./projectDeployCommand";
import { IntegratedDevelopmentEnvironment, TextDocument, Uri } from "./../integratedDevelopmentEnvironment";
import { SalesforceCli } from "./../salesforceCli";
import { Logger } from "../logger";

type ProjectDeployState = 'Not Running' | 'In Progress';

export class QueueableProjectDeployCommand extends Command {

	private targetOrg: SalesforceOrg | null;
	private state: ProjectDeployState = 'Not Running';
	private readonly toDeploy = new Map<string, Uri>();

	public constructor (params: CommandParams) {
		super(params);
		this.targetOrg = null;
	}

	public async execute({ uris }: { uris: Uri[] }): Promise<{ isComplete: boolean }> {
		if (this.state === 'Not Running') {
			this.state = 'In Progress';

			await this.queueProjectDeploy({
				uris
			});

			if (!this.targetOrg) {
				this.state = 'Not Running';
				return {
					isComplete: true
				};
			}

			if (this.toDeploy.size === 0) {
				this.state = 'Not Running';
				return {
					isComplete: true
				};
			}

			do {
				const sourceDir = this.getSourceDir();
				this.toDeploy.clear();

				await this.getIde().withProgress(async (progressToken) => {
					const projectDeployCommand = new ProjectDeployCommand({
						cli: this.getCli(),
						ide: this.getIde(),
						progressToken
					});

					if (this.targetOrg) {
						await projectDeployCommand.execute({
							targetOrg: this.targetOrg,
							uris: sourceDir
						});
					}

				}, {
					title: 'Project Deploy Start',
					isCancellable: true
				});
			} while (this.toDeploy.size !== 0);
			this.state = 'Not Running';
		} else {
			await this.queueProjectDeploy({
				uris
			});
		}

		return {
			isComplete: true
		};
	}

	private async queueProjectDeploy({ uris }: { uris: Uri[] }) {
		if (!this.targetOrg) {
			this.targetOrg = await this.getCli().getDefaultOrg();
		}

		const sfMetadataUris = await this.getIde().getSalesforceMetadataUris(uris);

		sfMetadataUris.forEach(sfMetadataUri => {
			this.toDeploy.set(sfMetadataUri.getFileSystemPath(), sfMetadataUri);
		});
	}

	private getSourceDir() {
		return [...this.toDeploy.values()];
	}
}

export function genOnDidSaveTextDocuments({ cli, ide }: {
	cli: SalesforceCli,
	ide: IntegratedDevelopmentEnvironment
}) {
	let projectDeployCommand: QueueableProjectDeployCommand | undefined = undefined;

	const getTitle = (uris: Uri[]) => {
		if (projectDeployCommand) {
			return `Checking/Adding files to deployment queue ${uris.map(uri => uri.getBaseName()).join(" ")}`;
		} else {
			return 'Starting Deployment Queue';
		}

	};

	return async function onDidSaveTextDocuments({ textDocuments }: {
		textDocuments: TextDocument[]
	}): Promise<void> {

		const shouldDeployOnSave = ide.getConfig("sf.zsi.vscode.deployOnSave", true);
		if (shouldDeployOnSave) {
			const uris = textDocuments.map(textDocument => textDocument.uri);
			await ide.withProgress(async progressToken => {
				if (!projectDeployCommand) {
					projectDeployCommand = new QueueableProjectDeployCommand({
						ide,
						cli
					});
				}
				await projectDeployCommand.execute({
					uris
				}).then(({ isComplete }) => {
					if (isComplete) {
						projectDeployCommand = undefined;
					}
				}).catch(e => {
					ide.showErrorMessage(e.message);
					projectDeployCommand = undefined;
				});
			}, {
				title: getTitle(uris),
				isCancellable: false
			});
		}
	};
}

