import { SalesforceOrg } from "../../salesforceOrg";

export function get() {
  return JSON.stringify({
    "status": 0,
    "result": {
      "nonScratchOrgs": [
        {
          "username": "codeyzeitler@gmail.com",
          "orgId": "00D5f000006OpfaEAC",
          "accessToken": "00D5f000006Opfa!ARIAQEiu3d0V1kX.CWvAaK_dkKzqK2X89dyhD_Do.mE3lAPqneBfLaSY3FTEBHW04Y79xOAp2Sex9oBfCaETw0cfWlBKTHtH",
          "instanceUrl": "https://americanexpress-8e-dev-ed.my.salesforce.com",
          "loginUrl": "https://login.salesforce.com",
          "clientId": "PlatformCLI",
          "isDevHub": true,
          "instanceApiVersion": "58.0",
          "instanceApiVersionLastRetrieved": "9/6/2023, 9:33:22 PM",
          "isDefaultDevHubUsername": false,
          "isDefaultUsername": false,
          "lastUsed": "2023-09-08T05:04:55.532Z",
          "connectedStatus": "Connected"
        },
        {
          "username": "codyzeitler12@creative-wolf-l2cqgv.com",
          "name": "Northrop Grumman",
          "instanceName": "NA163",
          "namespacePrefix": null,
          "isSandbox": false,
          "isScratch": false,
          "trailExpirationDate": null,
          "tracksSource": false,
          "instanceApiVersion": "42.0",
          "instanceApiVersionLastRetrieved": "8/14/2023, 7:03:28 PM",
          "isDefaultDevHubUsername": false,
          "isDefaultUsername": false,
          "lastUsed": "2023-09-08T05:04:55.532Z",
          "connectedStatus": "Only absolute URLs are supported"
        },
        {
          "username": "codyzeitler12@cunning-raccoon-bz3els.com",
          "orgId": "00D5e000001AcqNEAS",
          "accessToken": "00D5e000001AcqN!AR8AQLrN4__aPWQ4smytgtIa9pvubnjA78bHb.vsbfC1EFv5TxtW1Vj59H816bIr_vUBX1Hy99Glm.XiLcaI.7zsjsi9U3yk",
          "instanceUrl": "https://cunning-raccoon-bz3els-dev-ed.my.salesforce.com",
          "loginUrl": "https://login.salesforce.com",
          "clientId": "PlatformCLI",
          "isDevHub": true,
          "instanceApiVersion": "58.0",
          "instanceApiVersionLastRetrieved": "9/6/2023, 9:33:22 PM",
          "name": "Northrop Grumman",
          "instanceName": "NA162",
          "namespacePrefix": null,
          "isSandbox": false,
          "isScratch": false,
          "trailExpirationDate": null,
          "tracksSource": false,
          "isDefaultDevHubUsername": true,
          "isDefaultUsername": false,
          "lastUsed": "2023-09-08T05:04:55.532Z",
          "connectedStatus": "Connected",
          "defaultMarker": "(D)"
        },
        {
          "username": "test-hh00p4hndtps@example.com",
          "orgId": "00D1D000000avOkUAI",
          "accessToken": "00D1D000000avOk!AQUAQLSYXdRqKZv95drZRk_OekOXxH0I6LDvQnsyqwjyGlnqWWok0_l.1.HjYM4RVeVvGT.JcZQB4PPindgt9Rh5uDhV8LN0",
          "instanceUrl": "https://innovation-ruby-6277-dev-ed.cs68.my.salesforce.com",
          "loginUrl": "https://CS68.salesforce.com",
          "clientId": "PlatformCLI",
          "createdOrgInstance": "CS68",
          "created": "1637817090449",
          "devHubUsername": "codyzeitler12@creative-wolf-l2cqgv.com",
          "instanceApiVersion": "53.0",
          "instanceApiVersionLastRetrieved": "11/24/2021, 10:13:04 PM",
          "isDevHub": false,
          "isDefaultDevHubUsername": false,
          "isDefaultUsername": false,
          "lastUsed": "2023-09-08T05:04:55.532Z"
        }
      ],
      "scratchOrgs": [
        {
          "accessToken": "00D7g000000edb9!ARIAQKObjgwalwFgh1edY.WaIaQIsnMkKg90IJO.HK6t39OY.B4DfHeB9tPH4GjugXzemKagikX2bMw.yw4ntbcsR53_5aqX",
          "instanceUrl": "https://platform-page-5867-dev-ed.scratch.my.salesforce.com",
          "orgId": "00D7g000000edb9EAA",
          "username": "test-5fmtxzm8v0zj@example.com",
          "loginUrl": "https://CS200.salesforce.com",
          "clientId": "PlatformCLI",
          "isDevHub": false,
          "devHubUsername": "codeyzeitler@gmail.com",
          "created": "1693675263000",
          "expirationDate": "2023-10-02",
          "createdOrgInstance": "CS200",
          "instanceApiVersion": "58.0",
          "instanceApiVersionLastRetrieved": "9/4/2023, 9:57:04 PM",
          "tracksSource": true,
          "alias": "salesforcetestingarea",
          "isDefaultDevHubUsername": false,
          "isDefaultUsername": false,
          "lastUsed": "2023-09-08T05:04:55.532Z",
          "signupUsername": "test-5fmtxzm8v0zj@example.com",
          "createdBy": "codeyzeitler@gmail.com",
          "createdDate": "2023-09-02T17:21:03.000+0000",
          "devHubOrgId": "00D5f000006OpfaEAC",
          "devHubId": "00D5f000006OpfaEAC",
          "attributes": {
            "type": "ScratchOrgInfo",
            "url": "/services/data/v58.0/sobjects/ScratchOrgInfo/2SR5f0000010ySlGAI"
          },
          "orgName": "Cody company",
          "edition": "Developer",
          "status": "Active",
          "isExpired": false,
          "namespace": null
        }
      ]
    },
    "warnings": []
  });
};

export function getSfOrgListWithSkipConnectionNominalResponse({ targetOrg }: {
  targetOrg: SalesforceOrg
}) {

  return JSON.stringify(
    {
      "status": 0,
      "result": {
        "nonScratchOrgs": [],
        "scratchOrgs": [
          {
            "accessToken": "00D6s000000tHFx!ARsAQLsMfoNj70tgexjTcnJ7URZL_lInZpp2j0BINEWCgKu0RFZwOzNCHAyw9wXVsTUO9YJh8NsWhLkPL.jYskdeozO.zMrB",
            "instanceUrl": "https://drive-dream-2620-dev-ed.scratch.my.salesforce.com",
            "orgId": "00D6s000000tHFxEAM",
            "username": "test-4h5tpd1qb1jn@example.com",
            "loginUrl": "https://CS165.salesforce.com",
            "clientId": "PlatformCLI",
            "isDevHub": false,
            "devHubUsername": "codyzeitler12@cunning-raccoon-bz3els.com",
            "created": "1704576233000",
            "expirationDate": "2024-01-13",
            "createdOrgInstance": "CS165",
            "instanceApiVersion": "59.0",
            "instanceApiVersionLastRetrieved": "1/9/2024, 11:29:09 PM",
            "tracksSource": true,
            "alias": targetOrg.getAlias(),
            "isDefaultDevHubUsername": false,
            "isDefaultUsername": true,
            "lastUsed": "2024-01-10T06:29:16.142Z",
            "signupUsername": "test-4h5tpd1qb1jn@example.com",
            "createdBy": "codyzeitler12@cunning-raccoon-bz3els.com",
            "createdDate": "2024-01-06T21:23:53.000+0000",
            "devHubOrgId": "00D5e000001AcqNEAS",
            "devHubId": "00D5e000001AcqNEAS",
            "attributes": {
              "type": "ScratchOrgInfo",
              "url": "/services/data/v59.0/sobjects/ScratchOrgInfo/2SR5e00000119vRGAQ"
            },
            "orgName": "Cody company",
            "edition": "Developer",
            "status": "Active",
            "isExpired": false,
            "namespace": null,
            "defaultMarker": "(U)"
          }
        ]
      },
      "warnings": []
    }
  );
}

export function getSfOrgListWithSkipConnectionNominalResponseSandbox({ targetOrg }: { targetOrg: SalesforceOrg }) {
  return JSON.stringify(
    {
      "status": 0,
      "result": {
        "scratchOrgs": [],
        "nonScratchOrgs": [
          {
            "accessToken": "00D6s000000tHFx!ARsAQLsMfoNj70tgexjTcnJ7URZL_lInZpp2j0BINEWCgKu0RFZwOzNCHAyw9wXVsTUO9YJh8NsWhLkPL.jYskdeozO.zMrB",
            "instanceUrl": "https://drive-dream-2620-dev-ed.scratch.my.salesforce.com",
            "orgId": "00D6s000000tHFxEAM",
            "username": targetOrg.getAlias(), // TODO Why does this have to match alias?
            "loginUrl": "https://CS165.salesforce.com",
            "clientId": "PlatformCLI",
            "isDevHub": false,
            "devHubUsername": "codyzeitler12@cunning-raccoon-bz3els.com",
            "created": "1704576233000",
            "expirationDate": "2024-01-13",
            "createdOrgInstance": "CS165",
            "instanceApiVersion": "59.0",
            "instanceApiVersionLastRetrieved": "1/9/2024, 11:29:09 PM",
            "tracksSource": true,
            "alias": targetOrg.getAlias(),
            "isDefaultDevHubUsername": false,
            "isDefaultUsername": true,
            "lastUsed": "2024-01-10T06:29:16.142Z",
            "signupUsername": "test-4h5tpd1qb1jn@example.com",
            "createdBy": "codyzeitler12@cunning-raccoon-bz3els.com",
            "createdDate": "2024-01-06T21:23:53.000+0000",
            "devHubOrgId": "00D5e000001AcqNEAS",
            "devHubId": "00D5e000001AcqNEAS",
            "attributes": {
              "type": "ScratchOrgInfo",
              "url": "/services/data/v59.0/sobjects/ScratchOrgInfo/2SR5e00000119vRGAQ"
            },
            "orgName": "Cody company",
            "edition": "Developer",
            "status": "Active",
            "isExpired": false,
            "namespace": null,
            "defaultMarker": "(U)"
          }
        ]
      },
      "warnings": []
    }
  );
}

export function getNoSandboxesAndNoScratches() {
  return JSON.stringify({
    "status": 0,
    "result": {
      "nonScratchOrgs": [],
      "scratchOrgs": []
    },
    "warnings": []
  });
}

export function getScratchOrgMissingIsExpiredProperty() {
  return JSON.stringify({
    "status": 0,
    "result": {
      "nonScratchOrgs": [],
      "scratchOrgs": [
        {
          "accessToken": "00D7g000000edb9!ARIAQKObjgwalwFgh1edY.WaIaQIsnMkKg90IJO.HK6t39OY.B4DfHeB9tPH4GjugXzemKagikX2bMw.yw4ntbcsR53_5aqX",
          "instanceUrl": "https://platform-page-5867-dev-ed.scratch.my.salesforce.com",
          "orgId": "00D7g000000edb9EAA",
          "username": "test-5fmtxzm8v0zj@example.com",
          "loginUrl": "https://CS200.salesforce.com",
          "clientId": "PlatformCLI",
          "isDevHub": false,
          "devHubUsername": "codeyzeitler@gmail.com",
          "created": "1693675263000",
          "expirationDate": "2023-10-02",
          "createdOrgInstance": "CS200",
          "instanceApiVersion": "58.0",
          "instanceApiVersionLastRetrieved": "9/4/2023, 9:57:04 PM",
          "tracksSource": true,
          "alias": "salesforcetestingarea",
          "isDefaultDevHubUsername": false,
          "isDefaultUsername": false,
          "lastUsed": "2023-09-08T05:04:55.532Z",
          "signupUsername": "test-5fmtxzm8v0zj@example.com",
          "createdBy": "codeyzeitler@gmail.com",
          "createdDate": "2023-09-02T17:21:03.000+0000",
          "devHubOrgId": "00D5f000006OpfaEAC",
          "devHubId": "00D5f000006OpfaEAC",
          "attributes": {
            "type": "ScratchOrgInfo",
            "url": "/services/data/v58.0/sobjects/ScratchOrgInfo/2SR5f0000010ySlGAI"
          },
          "orgName": "Cody company",
          "edition": "Developer",
          "status": "Active",
          "namespace": null
        }
      ]
    },
    "warnings": []
  });
};

export function getScratchOrgMissingAliasProperty() {
  return JSON.stringify({
    "status": 0,
    "result": {
      "nonScratchOrgs": [],
      "scratchOrgs": [
        {
          "accessToken": "00D7g000000edb9!ARIAQKObjgwalwFgh1edY.WaIaQIsnMkKg90IJO.HK6t39OY.B4DfHeB9tPH4GjugXzemKagikX2bMw.yw4ntbcsR53_5aqX",
          "instanceUrl": "https://platform-page-5867-dev-ed.scratch.my.salesforce.com",
          "orgId": "00D7g000000edb9EAA",
          "username": "test-5fmtxzm8v0zj@example.com",
          "loginUrl": "https://CS200.salesforce.com",
          "clientId": "PlatformCLI",
          "isDevHub": false,
          "devHubUsername": "codeyzeitler@gmail.com",
          "created": "1693675263000",
          "expirationDate": "2023-10-02",
          "createdOrgInstance": "CS200",
          "instanceApiVersion": "58.0",
          "instanceApiVersionLastRetrieved": "9/4/2023, 9:57:04 PM",
          "tracksSource": true,
          "isDefaultDevHubUsername": false,
          "isDefaultUsername": false,
          "lastUsed": "2023-09-08T05:04:55.532Z",
          "signupUsername": "test-5fmtxzm8v0zj@example.com",
          "createdBy": "codeyzeitler@gmail.com",
          "createdDate": "2023-09-02T17:21:03.000+0000",
          "devHubOrgId": "00D5f000006OpfaEAC",
          "devHubId": "00D5f000006OpfaEAC",
          "attributes": {
            "type": "ScratchOrgInfo",
            "url": "/services/data/v58.0/sobjects/ScratchOrgInfo/2SR5f0000010ySlGAI"
          },
          "orgName": "Cody company",
          "edition": "Developer",
          "isExpired": false,
          "status": "Active",
          "namespace": null
        }
      ]
    },
    "warnings": []
  });
};

export function getMissingScratchOrgsProperty() {
  return JSON.stringify({
    "status": 0,
    "result": {
      "nonScratchOrgs": [],
      "scratchOrgs": []
    },
    "warnings": []
  });
}

export function getMissingSandboxesProperty() {
  return JSON.stringify({
    "status": 0,
    "result": {
      "scratchOrgs": []
    },
    "warnings": []
  });
}

export function getMissingResultProperty() {
  return JSON.stringify({
    "status": 0,
    "warnings": []
  });
}

export function getOrgListUsersNominalResponse(params: {
  orgAlias: SalesforceOrg
}) {
  return JSON.stringify({
    "status": 0,
    "result": [
      {
        "defaultMarker": "(A)",
        "alias": `${params.orgAlias.getAlias()}`,
        "username": "test-7yrotqw6z1en@example.com",
        "profileName": "System Administrator",
        "orgId": "00DDC000000rVVl2AM",
        "accessToken": "a3f4c20798c68dca9a1fb4e8f1c118e84b6dd6b1fca19158ef0dd05eb5418da122c08272ae060a3157561f9fa9a82675965f0960fb19cc4b55affc4a772ea14d4450439997c430951f5cfda177e5eaef956b268422eebd0275d369443f3bcfb8eaf9ad75df621e2ede660d02f1fa87004f327a33be2c:25d9b1a30211b0bf8b96158f2d30452e",
        "instanceUrl": "https://momentum-platform-58622-dev-ed.scratch.my.salesforce.com",
        "loginUrl": "https://CS236.salesforce.com",
        "userId": "005DC000004mxEMYAY"
      }
    ],
    "warnings": []
  });
}

export function getOrgListUsersWithoutEmptyDefaultMarker() {
  return JSON.stringify({
    "status": 0,
    "result": [
      {
        "defaultMarker": "",
        "alias": "test-org",
        "username": "test-7yrotqw6z1en@example.com",
        "profileName": "System Administrator",
        "orgId": "00DDC000000rVVl2AM",
        "accessToken": "a3f4c20798c68dca9a1fb4e8f1c118e84b6dd6b1fca19158ef0dd05eb5418da122c08272ae060a3157561f9fa9a82675965f0960fb19cc4b55affc4a772ea14d4450439997c430951f5cfda177e5eaef956b268422eebd0275d369443f3bcfb8eaf9ad75df621e2ede660d02f1fa87004f327a33be2c:25d9b1a30211b0bf8b96158f2d30452e",
        "instanceUrl": "https://momentum-platform-58622-dev-ed.scratch.my.salesforce.com",
        "loginUrl": "https://CS236.salesforce.com",
        "userId": "005DC000004mxEMYAY"
      }
    ],
    "warnings": []
  });
}
