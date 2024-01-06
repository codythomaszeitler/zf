import { APEX_LANGUAGE_ID, OnSaveTextDocumentsEvent, OnSaveTextDocumentsListener, TextDocument, Uri } from "../integratedDevelopmentEnvironment";
import { describe, expect, jest } from '@jest/globals';
import * as path from 'path';
import { BulkDocumentSaveListener } from "../bulkDocumentSaveListener";

const defaultApexClassesDir = path.join('force-app', 'main', 'default', 'classes');

describe('integrated development environment', () => {

	const defaultProjectDir = Uri.from({
		scheme: 'file',
		fileSystemPath: '/testProjectDir'
	});

	it('should be able to properly emit a bulk save documents event when multiple documents are saved close together', () => {
		jest.useFakeTimers();

		let counter = 0;
		const listener: OnSaveTextDocumentsListener = (e: OnSaveTextDocumentsEvent) => {
			if (counter === 0) {
				expect(e.textDocuments).toHaveLength(3);
			} else if (counter === 1) {
				expect(e.textDocuments).toHaveLength(1);
			}
			counter++;
		};
		const testObject = new BulkDocumentSaveListener();
		testObject.onBulkSaveListener(listener);

		const document1 = {
			languageId: APEX_LANGUAGE_ID,
			uri: Uri.from({
				scheme: 'file',
				fileSystemPath: Uri.join(defaultProjectDir, defaultApexClassesDir, 'TestApexClass1.cls').getFileSystemPath()
			})
		} as TextDocument;

		const document2 = {
			languageId: APEX_LANGUAGE_ID,
			uri: Uri.from({
				scheme: 'file',
				fileSystemPath: Uri.join(defaultProjectDir, defaultApexClassesDir, 'TestApexClass2.cls').getFileSystemPath()
			})
		} as TextDocument;

		const document3 = {
			languageId: APEX_LANGUAGE_ID,
			uri: Uri.from({
				scheme: 'file',
				fileSystemPath: Uri.join(defaultProjectDir, defaultApexClassesDir, 'TestApexClass3.cls').getFileSystemPath()
			})
		} as TextDocument;

		testObject.save({
			document: document1
		});

		jest.advanceTimersByTime(2);

		testObject.save({
			document: document2
		});

		jest.advanceTimersByTime(2);

		testObject.save({
			document: document3
		});

		jest.advanceTimersByTime(250);
		expect(counter).toBe(1);

		testObject.save({
			document: document1
		});
		jest.advanceTimersByTime(5);
		expect(counter).toBe(1);

		jest.advanceTimersByTime(245);
		expect(counter).toBe(2);
	});
});



