/* eslint-disable @typescript-eslint/naming-convention */
export function getApexListLogNominalResponse() {
	return JSON.stringify(
		{
			"status": 0,
			"result": [
				{
					"attributes": {
						"type": "ApexLog",
						"url": "/services/data/v59.0/tooling/sobjects/ApexLog/07L7i00000MYv6qEAD"
					},
					"Id": "07L7i00000MYv6qEAD",
					"Application": "Unknown",
					"DurationMilliseconds": 89,
					"Location": "SystemLog",
					"LogLength": 2680,
					"LogUser": {
						"attributes": {
							"type": "Name",
							"url": "/services/data/v59.0/tooling/sobjects/User/0057i00000B9ITYAA3"
						},
						"Name": "User User"
					},
					"Operation": "Api",
					"Request": "Api",
					"StartTime": "2023-12-20T07:04:17+0000",
					"Status": "Success"
				},
				{
					"attributes": {
						"type": "ApexLog",
						"url": "/services/data/v59.0/tooling/sobjects/ApexLog/07L7i00000MYv54EAD"
					},
					"Id": "07L7i00000MYv54EAD",
					"Application": "Unknown",
					"DurationMilliseconds": 139,
					"Location": "SystemLog",
					"LogLength": 3493,
					"LogUser": {
						"attributes": {
							"type": "Name",
							"url": "/services/data/v59.0/tooling/sobjects/User/0057i00000B9ITYAA3"
						},
						"Name": "User User"
					},
					"Operation": "ApexTestHandler",
					"Request": "Api",
					"StartTime": "2023-12-20T06:08:27+0000",
					"Status": "Success"
				},
				{
					"attributes": {
						"type": "ApexLog",
						"url": "/services/data/v59.0/tooling/sobjects/ApexLog/07L7i00000MYv2PEAT"
					},
					"Id": "07L7i00000MYv2PEAT",
					"Application": "Unknown",
					"DurationMilliseconds": 240,
					"Location": "SystemLog",
					"LogLength": 3539,
					"LogUser": {
						"attributes": {
							"type": "Name",
							"url": "/services/data/v59.0/tooling/sobjects/User/0057i00000B9ITYAA3"
						},
						"Name": "User User"
					},
					"Operation": "ApexTestHandler",
					"Request": "Api",
					"StartTime": "2023-12-20T04:36:08+0000",
					"Status": "Success"
				}
			],
			"warnings": []
		}
	);
}