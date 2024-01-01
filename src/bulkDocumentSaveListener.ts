import { OnSaveTextDocumentsListener, TextDocument } from "./integratedDevelopmentEnvironment";

export class BulkDocumentSaveListener {

	private timerId: any | undefined;
	private listeners: OnSaveTextDocumentsListener[];
	private documents: TextDocument[];

	constructor() {
		this.timerId = undefined;
		this.listeners = [];
		this.documents = [];
	}

	public onBulkSaveListener(listener: OnSaveTextDocumentsListener) {
		this.listeners.push(listener);
	}

	public save({ document }: { document: TextDocument }) {
		this.documents.push(document);
		if (this.timerId) {
			clearTimeout(this.timerId);
		}

		this.timerId = setTimeout(() => {
			this.listeners.forEach(listener => {
				listener({
					textDocuments: [...this.documents]
				});
			});
			this.documents = [];
		}, 10);
	}
}