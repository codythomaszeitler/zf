export function getWhenDefaultOrgExists() {
    return JSON.stringify(
        {
            "status": 0,
            "result": [
                {
                    "name": "target-org",
                    "key": "target-org",
                    "value": "cso",
                    "path": "C:\\cygwin64\\home\\Cody\\dev\\salesforce-testing-area\\.sf\\config.json",
                    "success": true,
                    "location": "Local"
                }
            ],
            "warnings": []
        }
    );
}

export function getWhenDefaultOrgDoesNotExist() {
    return JSON.stringify({
        "status": 0,
        "result": [
            {
                "name": "target-org",
                "key": "target-org",
                "success": true
            }
        ],
        "warnings": []
    }
    );
}

export function getWhenResultArrayIsEmpty() {
    return JSON.stringify({
        "status": 0,
        "result": [],
        "warnings": []
    }
    );
}

export function getWhenResultArrayDoesNotExist() {
    return JSON.stringify({
        "status": 0,
        "warnings": []
    }
    );
}