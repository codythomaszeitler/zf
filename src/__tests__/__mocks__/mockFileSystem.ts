import * as globToRegExp from 'glob-to-regexp';
import { Uri } from "../../integratedDevelopmentEnvironment";

interface File {
	readonly uri: Uri;
	contents: string;
}

export class MockFileSystem {

	private files: File[];

	constructor() {
		this.files = [];
	}

	create(params: {
		uri: Uri
	}) {
		this.files.push({
			uri: params.uri,
			contents: ''
		});
	}

	async findFile(glob: string): Promise<Uri | null> {
		const re = globToRegExp(glob);

		const found = await this.findFiles(glob);
		if (found.length > 1) {
			throw new Error(`Found more than one file matching ${glob}.`);
		}

		if (found.length === 1) {
			return found[0];
		} else {
			return null;
		}
	}

	async findFiles(glob: string): Promise<Uri[]> {
		const re = globToRegExp(glob);
		const found = [];

		for (const file of this.files) {
			if (re.test(file.uri.getValue())) {
				found.push(file.uri);
			}
		}
		return found;
	}

	public async readFile(uri: Uri): Promise<string> {
		const found = this.files.find(file => file.uri.getValue() === uri.getValue());
		if (!found) {
			throw new Error(`Could not find file with uri ${uri.getValue()}`);
		}
		return found.contents;
	}

	public async hasFile(uri: Uri): Promise<boolean> {
		try {
			await this.readFile(uri);
			return true;
		} catch (e: any) {
			return false;
		}
	}

	public async writeFile(uri: Uri, contents: string): Promise<void> {
		const found = this.files.find(file => file.uri.getValue() === uri.getValue());
		if (!found) {
			this.files.push({
				uri,
				contents
			});
		} else {
			found.contents = contents;
		}
	}
}