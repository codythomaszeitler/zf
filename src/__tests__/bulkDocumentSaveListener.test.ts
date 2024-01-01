import { APEX_LANGUAGE_ID, OnSaveTextDocumentsListener, TextDocument, Uri } from "../integratedDevelopmentEnvironment";
import { describe, expect, test, jest } from '@jest/globals';
import * as path from 'path';
import { BulkDocumentSaveListener } from "../bulkDocumentSaveListener";

const defaultApexClassesDir = path.join('force-app', 'main', 'default', 'classes');

describe('integrated development environment', () => {

	it('should be able to properly emit a bulk save documents event when multiple documents are saved close together', () => {
		jest.useFakeTimers();

		let counter = 0;
		const listener: OnSaveTextDocumentsListener = () => {
			counter++;
		};
		const testObject = new BulkDocumentSaveListener();
		testObject.onBulkSaveListener(listener);

		const document1 = {
			languageId: APEX_LANGUAGE_ID,
			uri: Uri.get(path.join(defaultApexClassesDir, 'TestApexClass1.cls'))
		} as TextDocument;

		const document2 = {
			languageId: APEX_LANGUAGE_ID,
			uri: Uri.get(path.join(defaultApexClassesDir, 'TestApexClass2.cls'))
		} as TextDocument;

		const document3 = {
			languageId: APEX_LANGUAGE_ID,
			uri: Uri.get(path.join(defaultApexClassesDir, 'TestApexClass3.cls'))
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

		jest.advanceTimersByTime(100);
		expect(counter).toBe(1);
	});
});



