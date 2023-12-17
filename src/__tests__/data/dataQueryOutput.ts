/* eslint-disable @typescript-eslint/naming-convention */
export function getDebugLevelWithDeveloperName() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "DebugLevel",
							"url": "/services/data/v59.0/tooling/sobjects/DebugLevel/7dl8N0000004lHRQAY"
						},
						"Id": "7dl8N0000004lHRQAY",
						"DeveloperName": "SFDC_DevConsole"
					},
					{
						"attributes": {
							"type": "DebugLevel",
							"url": "/services/data/v59.0/tooling/sobjects/DebugLevel/7dl8N0000004lHgQAI"
						},
						"Id": "7dl8N0000004lHgQAI",
						"DeveloperName": "ZFDebugTraceFlag1"
					},
					{
						"attributes": {
							"type": "DebugLevel",
							"url": "/services/data/v59.0/tooling/sobjects/DebugLevel/7dl8N0000004lHqQAI"
						},
						"Id": "7dl8N0000004lHqQAI",
						"DeveloperName": "ZFDebugTraceFlag"
					},
					{
						"attributes": {
							"type": "DebugLevel",
							"url": "/services/data/v59.0/tooling/sobjects/DebugLevel/7dl8N0000004lKzQAI"
						},
						"Id": "7dl8N0000004lKzQAI",
						"DeveloperName": "SfZsiDebugLogLevel"
					}
				],
				"totalSize": 4,
				"done": true
			},
			"warnings": []
		}
	);
}

export function getDebugLogWithDeveloperNameFilter() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "DebugLevel",
							"url": "/services/data/v59.0/tooling/sobjects/DebugLevel/7dl8N0000004lHqQAI"
						},
						"Id": "7dl8N0000004lHqQAI",
						"DeveloperName": "ZFDebugTraceFlag"

					}
				],
				"totalSize": 1,
				"done": true
			},
			"warnings": []
		}
	);
}

export function getNoRecordsFound() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [],
				"totalSize": 0,
				"done": true
			},
			"warnings": []
		}
	);
}

export function getNoRecordsVariableFound() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"totalSize": 0,
				"done": true
			},
			"warnings": []
		}
	);
}