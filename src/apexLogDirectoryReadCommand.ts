import { Command } from "./command";
import { IntegratedDevelopmentEnvironment, Uri } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";

export class ApexLogDirectoryReadCommand extends Command {
	public constructor(params: {
		cli: SalesforceCli,
		ide: IntegratedDevelopmentEnvironment
	}) {
		super(params);
	}

	public async execute(params: {
		logDir: string
	}) {
		const getCodeUnitCommandString = async (uri: Uri) => {
			const textLine = await this.getIde().readLineAt({
				uri,
				line: 3
			});
			return {
				uri: uri,
				name: textLine.getText()
			};
		};

		const uris = await this.getIde().findFiles(`**\\${params.logDir}\\*`);
		const promises = uris.map(uri => {
			return getCodeUnitCommandString(uri);
		});

		return Promise.all(promises);;
	}
}

export interface InFileApexLog {
	uri: Uri;
	name: string;
}