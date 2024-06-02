import * as path from 'path';

export class Uri {

	private constructor(private readonly scheme: string, private readonly fileSystemPath: string) {
		this.fileSystemPath = fileSystemPath;
		this.scheme = scheme;
	}

	public static from({ scheme, fileSystemPath }: { scheme: string, fileSystemPath: string }) {
		return new Uri(scheme, fileSystemPath);
	}

	public static dirname(uri: Uri): Uri {
		const parentDir = path.dirname(uri.getFileSystemPath());
		return this.from({
			scheme: uri.getScheme(),
			fileSystemPath: parentDir
		});
	}

	public static join(uri: Uri, ...paths: string[]): Uri {
		const joinedPath = path.join(uri.getFileSystemPath(), ...paths);
		return Uri.from({
			scheme: uri.getScheme(),
			fileSystemPath: joinedPath
		});
	}

	public static basename(filePath : string) {
		return path.basename(filePath);
	}

	public getFileSystemPath(): string {
		return this.fileSystemPath;
	}

	public getScheme(): string {
		return this.scheme;
	}

	public getBaseName(): string {
		return path.basename(this.fileSystemPath);
	}

	public isApexClass(): boolean {
		return this.fileSystemPath.endsWith('.cls');
	}

	public equals(uri : Uri) {
		return this.fileSystemPath === uri.fileSystemPath;
	}
}