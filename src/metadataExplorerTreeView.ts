import { XMLParser } from "fast-xml-parser";
import { IntegratedDevelopmentEnvironment, Uri } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";
import { Command } from "./command";
import { ProgressToken } from "./progressToken";
import { ProjectRetrieveStartCommand } from "./projectRetrieveStartCommand";

export class MetadataTreeView {
	public static readonly rootNodeType: number = 0;

	private readonly cli: SalesforceCli;
	private readonly ide: IntegratedDevelopmentEnvironment;
	private readonly metadataDir: Uri;

	public constructor ({
		cli, ide, metadataDir
	}: { cli: SalesforceCli, ide: IntegratedDevelopmentEnvironment, metadataDir: Uri }) {
		this.cli = cli;
		this.ide = ide;
		this.metadataDir = metadataDir;
	}

	public async getRootNode({ targetOrg }: { targetOrg: SalesforceOrg }): Promise<MetadataTreeNode> {
		const xml = await this.retrieveCompletePackageXml({ targetOrg });

		const rootNode: MetadataRootNode = {
			nodeType: 0,
			getTypeNodeFor(typeNodeName: string): MetadataTypeNode | undefined {
				return this.types.find(type => type.name === typeNodeName);
			},
			types: this.parseTypes(xml),
			name: targetOrg.getAlias()
		};
		return rootNode;
	}

	private async retrieveCompletePackageXml({ targetOrg }: { targetOrg: SalesforceOrg }) {
		const packageUri = Uri.join(this.metadataDir, 'package.xml');

		await this.cli.projectManifestGenerate({
			targetOrg,
			fileName: 'package.xml',
			outputDir: this.metadataDir
		});

		const xmlContents = await this.ide.readFile({
			uri: packageUri
		});

		return this.xmlStringIntoObject(xmlContents);
	}

	private xmlStringIntoObject(xmlString: string) {
		const parser = new XMLParser();
		try {
			const xml = parser.parse(xmlString, true);
			return xml;
		} catch (e: unknown) {
			if (e instanceof Error) {
				const error = new Error(`Could not parse xml because of [${e.message}].`);
				throw error;
			}
		}
	}

	private parseTypes(xml: any) {
		if (!xml.Package.types) {
			return [];
		}

		const types: MetadataTypeNode[] = xml.Package.types.map((type: any) => {
			let members: MetadataMemberNode[] = [];
			const metadataTypeNode: MetadataTypeNode = {
				nodeType: 1,
				members,
				name: type.name,
				getMemberNodeFor(memberNodeName: string) {
					return this.members.find(member => member.name === memberNodeName);
				}
			};

			if (Array.isArray(type.members)) {
				metadataTypeNode.members = type.members.map((memberName: any) => {
					const member: MetadataMemberNode = {
						nodeType: 2,
						name: memberName,
						parent: metadataTypeNode
					};
					return member;
				});
			} else {
				metadataTypeNode.members = [{
					nodeType: 2,
					name: type.members,
					parent: metadataTypeNode
				}];
			}

			return metadataTypeNode;
		});
		return types;
	}

}

export function genOnMetadataRetrieveAndShow({ cli, ide, metadataDir }: { cli: SalesforceCli, ide: IntegratedDevelopmentEnvironment, metadataDir?: Uri }) {
	return async function (metadataTreeNode: MetadataTreeNode) {
		try {
			const name = getMetadataString(metadataTreeNode);
			await ide.withProgress(async (progressToken: ProgressToken) => {
				const defaultOrg = await cli.getDefaultOrg();
				if (!defaultOrg) {
					return;
				}
				const command = new MetadataRetrieveAndShowCommand({
					ide,
					cli,
					progressToken
				});


				await command.execute({ targetOrg: defaultOrg, metadataDir, metadataTreeNode: metadataTreeNode });
			}, {
				title: `Showing metadata ${name}`
			});
		} catch (e: unknown) {
			if (e instanceof Error) {
				ide.showErrorMessage(e.message);
			}
		}
	};
}

function getMetadataString(metadataTreeNode: MetadataTreeNode) {
	if (metadataTreeNode.nodeType === 2) {
		return metadataTreeNode.parent.name + ':' + metadataTreeNode.name;
	} else {
		throw new Error('You cannot retrieve metadata against a non-member metadata node.');
	}
};

export class MetadataRetrieveAndShowCommand extends Command {
	public async execute({ targetOrg, metadataDir, metadataTreeNode }: { targetOrg: SalesforceOrg, metadataDir?: Uri, metadataTreeNode: MetadataTreeNode }) {

		const metadata = getMetadataString(metadataTreeNode);
		this.getProgressToken()?.report({ progress: 25, title: ` Project Retrieve Start` });

		const projectRetrieveStartCommand = new ProjectRetrieveStartCommand({
			cli: this.getCli(),
			ide: this.getIde(),
		});

		const result = await projectRetrieveStartCommand.execute({
			targetOrg, outputDir: metadataDir, metadata
		});

		if (metadataTreeNode.nodeType === 2) {
			const toOpen: Uri[] = result.result.files.map(file => {
				return Uri.from({
					scheme: 'file',
					fileSystemPath: file.filePath
				});
			});

			toOpen.forEach(uri => {
				this.getIde().showTextDocument(uri);
			});
		}
	}
}

export type MetadataTreeNode = MetadataRootNode | MetadataTypeNode | MetadataMemberNode;

interface MetadataRootNode {
	nodeType: 0;
	getTypeNodeFor: (typeNodeName: string) => MetadataTypeNode | undefined;
	types: MetadataTypeNode[];
	name: string;
}

interface MetadataTypeNode {
	nodeType: 1;
	members: MetadataMemberNode[];
	getMemberNodeFor: (memberNodeName: string) => MetadataMemberNode | undefined;
	name: string;
}

interface MetadataMemberNode {
	nodeType: 2;
	name: string;
	parent: MetadataTypeNode;
}
