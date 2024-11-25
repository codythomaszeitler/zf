import * as globToRegExp from 'glob-to-regexp';
import { Uri } from "../../integratedDevelopmentEnvironment";
import G = require('glob');

interface File {
	readonly uri: Uri;
	contents: string;
}

export class MockFileSystem {

	private files: File[];

	constructor () {
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

	async findFile(glob: string, base?: Uri): Promise<Uri | null> {
		const found = await this.findFiles(glob, base);
		if (found.length > 1) {
			throw new Error(`Found more than one file matching ${glob}.`);
		}

		if (found.length === 1) {
			return found[0];
		} else {
			return null;
		}
	}

	async findFiles(glob: string, base?: Uri): Promise<Uri[]> {
		const getBaseFileSystemPath = () => {
			if (!base) {
				return '';
			}
			if (process.platform === 'win32') {
				return base.getFileSystemPath().replace(/\\/g, '/');
			} else {
				return base.getFileSystemPath();
			}
		};

		let startOfPath = getBaseFileSystemPath();
		if (!startOfPath.endsWith('/') && !glob.startsWith('/')) {
			startOfPath += '/';
		}
		glob = startOfPath + glob;

		const re = globToRegExp(glob, {
			extended: true
		});
		const found = [];

		for (const file of this.files) {
			const asPosixPath = file.uri.getFileSystemPath().replace(/\\/g, '/');

			if (re.test(asPosixPath)) {
				found.push(file.uri);
			}
		}
		return found;
	}

	public async readFile(uri: Uri): Promise<string> {
		const found = this.files.find(file => file.uri.getFileSystemPath() === uri.getFileSystemPath());
		if (!found) {
			throw new Error(`Could not find file with uri ${uri.getFileSystemPath()}`);
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
		const found = this.files.find(file => file.uri.getFileSystemPath() === uri.getFileSystemPath());
		if (!found) {
			this.files.push({
				uri,
				contents
			});
		} else {
			found.contents = contents;
		}
	}

	public async deleteFile(uri: Uri) {
		this.files = this.files.filter(file => file.uri.getFileSystemPath() !== uri.getFileSystemPath());
	}
}