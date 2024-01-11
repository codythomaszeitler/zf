import { Command, CommandParams } from "./command";
import { projectDeploy } from "./projectDeploy";
import { SalesforceOrg } from "./salesforceOrg";
import { Uri } from "./uri";

type ProjectDeployState = 'In Progress' | 'Not Running';

export class ProjectDeployCommand extends Command {

	private targetOrg: SalesforceOrg | null;
	private state: ProjectDeployState = 'Not Running';
	private readonly toDeploy = new Map<string, Uri>();

	public constructor(params: CommandParams) {
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
				return {
					isComplete: true
				};
			}

			do {
				const sourceDir = this.getSourceDir();
				this.toDeploy.clear();
				await projectDeploy({
					ide: this.getIde(),
					cli: this.getCli(),
					sourceDir,
					targetOrg: this.targetOrg
				});
			} while (this.toDeploy.size !== 0);
			this.state = 'Not Running';
		} else {
			await this.queueProjectDeploy({
				uris
			});
		}

		return {
			isComplete: this.state === 'Not Running'
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
		if (!this.targetOrg) {
			return undefined;
		}
		const sourceDir = !this.targetOrg.getIsScratchOrg() ? [...this.toDeploy.values()] : undefined;
		return sourceDir;
	}
}