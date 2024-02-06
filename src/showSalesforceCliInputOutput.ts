import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { SalesforceCliInputOutput } from "./salesforceCli";
export async function showCliOutput(ide: IntegratedDevelopmentEnvironment, cliInputOutput: SalesforceCliInputOutput) {
	const uri = ide.generateUri('.zf', 'cli', `${cliInputOutput.getDate().getTime()}.json`);
	await ide.writeFile({
		uri,
		contents: cliInputOutput.getViewableOutput()
	}).then(() => {
		ide.showTextDocument(uri);
	}).catch((e: any) => {
		ide.showErrorMessage(e.message);
	});
}