import { APEX_TEST_QUEUE_ITEM_SOBJECT_NAME } from "../../../apexTestQueueItem";
import { ProjectDeployFile } from "../../../projectDeploy/projectDeployResult";
import { SalesforceId } from "../../../salesforceId";
import { SalesforceOrg } from "../../../salesforceOrg";
import { Uri } from "../../../uri";
import { genRandomId } from "../../salesforceId.test";

export function genProjectDeployStartCommandString({ targetOrg, uris, async }: { targetOrg: SalesforceOrg, uris?: Uri[], async: boolean; }) {
  const getSourceDirsArgsIfExist = () => {
    if (!uris || uris.length === 0) {
      return [];
    }
    return ['--source-dir', ...uris.map(uri => '"' + uri.getFileSystemPath() + '"')].join(" ") + ' ';
  };

  if (async) {
    return `sf project deploy start --target-org ${targetOrg.getAlias()} ${getSourceDirsArgsIfExist()}--ignore-conflicts --async --json`;
  } else {
    return `sf project deploy start --target-org ${targetOrg.getAlias()} ${getSourceDirsArgsIfExist()}--ignore-conflicts --json`;
  }
}

export function genProjectDeployStartResult(files: ProjectDeployFile[], async: boolean = false) {

  const randomId = genRandomId(APEX_TEST_QUEUE_ITEM_SOBJECT_NAME);
  if (async) {
    return {
      "status": 0,
      "result": {
        "id": randomId.toString(),
        "done": false,
        "status": "Queued",
        "files": []
      },
      "warnings": []
    };
  }
  return genProjectDeployReportResult(files, randomId);
}

export type ProjectDeployFileReport = ProjectDeployFile & { deployed?: boolean | undefined; };

export function genProjectDeployReportCommandString({ jobId }: { jobId: SalesforceId; }) {
  return `sf project deploy report --job-id ${jobId.toString()} --json`;
}

export function genProjectDeployResumeCommandString({ jobId }: { jobId: SalesforceId; }) {
  return `sf project deploy resume --job-id ${jobId.toString()} --json`;
}

export function genProjectDeployReportResult(files: ProjectDeployFileReport[], jobId: SalesforceId) {
  files.forEach(file => {
    if (file.deployed === undefined) {
      file.deployed = true;
    }
  });

  const numberComponentErrors = () => files.filter(file => file.state === 'Failed').filter(file => file.deployed).length;
  const numberComponentsDeployed = () => files.filter(file => file.state !== 'Failed').filter(file => file.deployed).length;
  const done = () => files.every(file => file.deployed);

  const isSuccess = () => files.every(file => file.state !== 'Failed') && done();
  const getStatusCode = () => isSuccess() ? 0 : 1;

  const getStatus = () => {
    if (!done()) {
      return 'InProgress';
    }

    if (isSuccess()) {
      return 'Succeeded';
    } else {
      return 'Failed';
    };
  };


  return {
    "status": getStatusCode(),
    "result": {
      "checkOnly": false,
      "completedDate": "2024-06-09T02:41:22.000Z",
      "createdBy": "005DS00000xNWfa",
      "createdByName": "User User",
      "createdDate": "2024-06-09T02:41:21.000Z",
      "done": done(),
      "id": jobId.toString(),
      "ignoreWarnings": false,
      "lastModifiedDate": "2024-06-09T02:41:22.000Z",
      "numberComponentErrors": numberComponentErrors(),
      "numberComponentsDeployed": numberComponentsDeployed(),
      "numberComponentsTotal": files.length,
      "numberTestErrors": 0,
      "numberTestsCompleted": 0,
      "numberTestsTotal": 0,
      "rollbackOnError": true,
      "runTestsEnabled": false,
      "startDate": "2024-06-09T02:41:21.000Z",
      "status": getStatus(),
      "success": isSuccess(),
      "files": files.filter(file => file.deployed)
    },
    "warnings": []
  };
}