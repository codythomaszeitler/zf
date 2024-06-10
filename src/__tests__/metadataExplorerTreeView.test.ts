import { describe } from '@jest/globals';
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { SfSalesforceCli } from '../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './__mocks__/mockShell';
import { xmlPackageContents } from './data/metadataPackageXml';
import { Uri } from '../uri';
import { MetadataTreeView, genOnMetadataRetrieveAndShow } from '../metadataExplorerTreeView';

describe('metadata tree view', () => {

	let fs: MockFileSystem;
	let cli: SfSalesforceCli;
	let ide: MockIDE;

	let org: SalesforceOrg;

	let xmlContents = xmlPackageContents;

	let metadataDir: Uri;

	let aClassUri : Uri;

	beforeEach(() => {
		org = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});

		fs = new MockFileSystem();
		ide = new MockIDE({
			filesystem: fs
		});

		const inputOutput = genCommandToStdOutput({
			defaultOrg: org
		});

		metadataDir = ide.generateUri('.zf', 'metadata');

		const mockExecutor = genMockExecutor(inputOutput);
		ide = new MockIDE({
			filesystem: fs
		});
		aClassUri = ide.generateUri('.zf', 'metadata', 'classes', 'AClass.cls');
		cli = new SfSalesforceCli(mockExecutor);

		setupProjectManifestGenerate(cli, fs, inputOutput, org, metadataDir);
		setupProjectRetrieveStart(cli, fs, aClassUri, inputOutput, org, metadataDir);

		function setupProjectRetrieveStart(cli: SfSalesforceCli, fs: MockFileSystem, aClassUri: Uri, inputOutput: any, org: SalesforceOrg, metadataDir: Uri) {
			const savedProjectRetrieveStart = cli.projectRetrieveStart;
			cli.projectRetrieveStart = async function ({ targetOrg, outputDir, metadata }) {
				fs.create({
					uri: aClassUri
				});

				const xmlUri = Uri.from({
					scheme: 'file',
					fileSystemPath: aClassUri.getFileSystemPath() + '-meta.xml'
				});
				fs.writeFile(aClassUri, 'public class AClass {}');
				fs.writeFile(xmlUri, '<a></a>');
				return savedProjectRetrieveStart.call(this, { targetOrg, outputDir, metadata });
			};

			inputOutput[genProjectRetrieveStartCommandString({
				targetOrg: org, metadata: 'ApexClass:AClass', outputDir: metadataDir
			})] = genSuccessfulProjectRetrieveGenerateResult({ fileName: 'classes/AClass.cls', uri: aClassUri });
		}

		function setupProjectManifestGenerate(cli: SfSalesforceCli, fs: MockFileSystem, inputOutput: any, org: SalesforceOrg, metadataDir: Uri) {
			const savedProjectManifestGenerate = cli.projectManifestGenerate;
			cli.projectManifestGenerate = async function ({ targetOrg, outputDir, fileName }) {
				await savedProjectManifestGenerate.call(cli, {
					targetOrg, outputDir, fileName
				});
				const packageXmlUri = Uri.join(outputDir, 'package.xml');
				fs.writeFile(packageXmlUri, xmlContents);
				return {};
			};

			inputOutput[genProjectManifestGenerateCommandString({
				targetOrg: org,
				outputDir: metadataDir
			})] = genSuccessfulProjectManifestGenerateResult({
				packageDest: metadataDir
			});
		}
	});

	it('should be able to parse from a nominal xml file', async () => {

		const testObject = new MetadataTreeView({
			cli, ide, metadataDir
		});

		const node = await testObject.getRootNode({
			targetOrg: org
		});

		expect(node.nodeType).toBe(MetadataTreeView.rootNodeType);
		if (node.nodeType === 0) {
			expect(node.types).toHaveLength(52);
			const apexClassTypeNode = node.getTypeNodeFor('ApexClass');
			expect(apexClassTypeNode?.members).toHaveLength(13);

			const apexClassMemberNode = apexClassTypeNode?.getMemberNodeFor('AClass');

			const testFunction = genOnMetadataRetrieveAndShow({
				cli, ide, metadataDir
			});

			if (apexClassMemberNode) {
				await testFunction(apexClassMemberNode);
			} else {
				expect(true).toBe(false);
			}

			expect(ide.toHaveShownTextDocument(aClassUri)).toBe(true);
		}
	});

	it('should be able to handle if no types comes back in package.xml', async () => {
		xmlContents = `<?xml version="1.0" encoding="UTF-8"?>\n<Package xmlns="http://soap.sforce.com/2006/04/metadata">\n    <version>51.0</version>\n</Package>\n`;

		const testObject = new MetadataTreeView({
			cli, ide, metadataDir
		});

		const node = await testObject.getRootNode({
			targetOrg: org
		});

		expect(node.nodeType).toBe(MetadataTreeView.rootNodeType);
		if (node.nodeType === 0) {
			expect(node.types).toHaveLength(0);
		}
	});

	it('should be able to handle if package.xml is literally empty (no xml)', async () => {
		xmlContents = ``;

		const testObject = new MetadataTreeView({
			cli, ide, metadataDir
		});

		try {
			await testObject.getRootNode({
				targetOrg: org
			});
			fail();
		} catch (e: unknown) {
			if (e instanceof Error) {
				const regex = /Could not parse xml because of \[.*\]/;
				expect(e.message).toMatch(regex);
			} else {
				fail();
			}
		}
	});
});

function genProjectManifestGenerateCommandString({ targetOrg, outputDir }: { targetOrg: SalesforceOrg, outputDir: Uri }) {
	return `sf project manifest generate --from-org ${targetOrg.getAlias()} --output-dir ${outputDir.getFileSystemPath()} --json`;
}

function genSuccessfulProjectManifestGenerateResult({ packageDest }: { packageDest: Uri }) {
	return JSON.stringify({
		"status": 0,
		"result": {
			"path": packageDest.getFileSystemPath(),
			"name": packageDest.getBaseName()
		},
		"warnings": []
	});
}

function genProjectRetrieveStartCommandString({ targetOrg, metadata, outputDir }: { targetOrg: SalesforceOrg, metadata: string, outputDir: Uri }) {
	return `sf project retrieve start --metadata "${metadata}" --target-org ${targetOrg.getAlias()} --output-dir ${outputDir.getFileSystemPath()} --json`;
}

function genSuccessfulProjectRetrieveGenerateResult({ fileName: filePath, uri }: { fileName: string, uri: Uri }) {
	return JSON.stringify({
		"status": 0,
		"result": {
			"done": true,
			"fileProperties": [
				{
					"createdById": "0055e000002p0JRAAY",
					"createdByName": "Cody Zeitler",
					"createdDate": "2024-02-04T05:52:46.000Z",
					"fileName": `unpackaged/${filePath}`,
					"fullName": "AClass",
					"id": "01p5e00000bd3FJAAY",
					"lastModifiedById": "0055e000002p0JRAAY",
					"lastModifiedByName": "Cody Zeitler",
					"lastModifiedDate": "2024-05-08T05:23:50.000Z",
					"manageableState": "unmanaged",
					"type": "ApexClass"
				},
				{
					"createdById": "0055e000002p0JRAAY",
					"createdByName": "Cody Zeitler",
					"createdDate": "2024-05-29T06:32:44.926Z",
					"fileName": "unpackaged/package.xml",
					"fullName": "unpackaged/package.xml",
					"id": "",
					"lastModifiedById": "0055e000002p0JRAAY",
					"lastModifiedByName": "Cody Zeitler",
					"lastModifiedDate": "2024-05-29T06:32:44.926Z",
					"manageableState": "unmanaged",
					"type": "Package"
				}
			],
			"id": "09S5e00000GzLwSEAV",
			"status": "Succeeded",
			"success": true,
			"messages": [],
			"files": [
				{
					"fullName": "AClass",
					"type": "ApexClass",
					"state": "Created",
					"filePath": uri.getFileSystemPath()
				},
				{
					"fullName": "AClass",
					"type": "ApexClass",
					"state": "Created",
					"filePath": uri.getFileSystemPath() + '-meta.xml'
				}
			]
		},
		"warnings": []
	});
}
