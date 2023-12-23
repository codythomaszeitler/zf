import * as globToRegExp from 'glob-to-regexp';
import { Uri } from "../../integratedDevelopmentEnvironment";

export class MockFileSystem {

	private files: Uri[];

	constructor() {
		this.files = [];
	}

	create(params: {
		uri: Uri
	}) {
		this.files.push(params.uri);
	}

	async findFile(glob: string): Promise<Uri | null> {
		const re = globToRegExp(glob);

		let foundFile = null;
		for (const file of this.files) {
			if (re.test(file.getValue())) {
				if (foundFile) {
					throw new Error(`Found more than one file matching ${glob}.`);
				}
				foundFile = file;
			}
		}
		return foundFile;
	}
}