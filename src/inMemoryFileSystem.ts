import { Uri } from "./integratedDevelopmentEnvironment";


interface File {
    readonly uri: Uri;
    contents: string;
}


export class InMemoryFileSystem {

    private readonly files: File[];
    constructor () {
        this.files = [];
    }

    write(uri: Uri, contents: string) {
        const file = this.getFileWithUri(uri);
        if (file) {
            file.contents = contents;
        } else {
            this.files.push({
                contents,
                uri
            });
        }
    }

    read(uri: Uri) {
        const file = this.files.find(file => file.uri.equals(uri));
        return file.contents;
    }

    private getFileWithUri(uri: Uri) {
        return this.files.find(file => file.uri.equals(uri));
    }
}