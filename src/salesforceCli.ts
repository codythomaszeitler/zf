import { SalesforceOrg } from "./salesforceOrg";
import { JobId } from "./jobId";
import { Executor, ExecutorCommand, ExecutorResult, intoCliCommandString } from "./executor";
import { SObjectListResult, SObjectListResultDeprecated } from "./sObjectListResult";
import { SObjectDescribeResult, SObjectDescribeResultDeprecated } from "./sObjectDescribeResult";
import { SObjectApiName } from "./sObjectApiName";
import { DataCreateRecordResult as DataUpsertRecordResult } from "./dataCreateRecordResult";
import { UpsertableSObject } from "./upsertableSObject";
import { OrgListUsersResult } from "./orgListUsersResult";
import { SoqlQuery } from "./soqlQuery";
import { DataQueryResult } from "./dataQueryResult";
import { ApexGetLogResult } from "./apexGetLogResult";
import { SalesforceId } from "./salesforceId";
import { ApexTestGetResult, ApexTestRunResult } from "./apexTestRunResult";
import { Uri } from "./uri";
import { ProjectDeployCancelResult, ProjectDeployPreviewResult, ProjectDeployResult } from "./projectDeploy/projectDeployResult";
import { ApexRunResult } from "./runAnonApex/runAnonApex";
import { OrgListResult, OrgOpenResult } from "./sfOrgListResult";
import { ApexListLogResult } from "./apexLogTreeView/apexListLogResult";

export abstract class SalesforceCli {
    private readonly executor: Executor;
    private readonly env: Object;
    private readonly history: SalesforceCliHistory;

    constructor (executor: Executor, proxy?: {}) {
        this.executor = executor;

        this.env = {
            ...process.env,
            ...proxy
        };

        this.history = new SalesforceCliHistory();
    }

    abstract getDefaultOrg(): Promise<SalesforceOrg | null>;
    abstract openOrg(alias: string): Promise<void>;
    abstract orgList({ skipConnectionStatus }: { skipConnectionStatus: boolean }): Promise<OrgListResult>;
    abstract orgOpen({ targetOrg }: { targetOrg: SalesforceOrg }): Promise<OrgOpenResult>;

    abstract projectDeployStart(params: { targetOrg: SalesforceOrg; sourceDir?: Uri[], async: boolean }): Promise<ProjectDeployResult | undefined>;
    abstract projectDeployReport(params: { jobId: JobId; targetOrg: SalesforceOrg }): Promise<ProjectDeployResult | undefined>;
    abstract projectDeployResume(params: { jobId: JobId }): Promise<ProjectDeployResult | undefined>;
    abstract projectDeployCancel(params: { jobId?: JobId; targetOrg: SalesforceOrg }): Promise<ProjectDeployCancelResult | undefined>;

    abstract projectDeployPreview(params: { targetOrg: SalesforceOrg }): Promise<ProjectDeployPreviewResult | undefined>;

    abstract projectManifestGenerate(params: { targetOrg: SalesforceOrg, outputDir: Uri, fileName: string }): Promise<{}>;

    abstract projectRetrieveStart({ targetOrg, outputDir, metadata }: { targetOrg: SalesforceOrg, outputDir?: Uri, metadata: string }): Promise<ProjectRetrieveResult>;

    abstract sobjectListDeprecated(params: {
        targetOrg: SalesforceOrg
    }): Promise<SObjectListResultDeprecated>;
    abstract sobjectDescribeDeprecated(params: {
        targetOrg: SalesforceOrg,
        sObjectApiName: SObjectApiName
    }): Promise<SObjectDescribeResultDeprecated>;

    abstract sobjectList(params: {
        targetOrg: SalesforceOrg
    }): Promise<SObjectListResult>;

    abstract sobjectDescribe(params: {
        targetOrg: SalesforceOrg,
        sObjectApiName: string
    }): Promise<SObjectDescribeResult>;

    abstract apexRun(params: {
        targetOrg: SalesforceOrg,
        apexCode: string;
    }): Promise<ApexRunResult>;

    abstract dataUpsertRecord(params: {
        targetOrg: SalesforceOrg,
        sObject: UpsertableSObject;
    }): Promise<DataUpsertRecordResult>;

    abstract dataQuery(params: { targetOrg: SalesforceOrg; query: SoqlQuery; useToolingApi: boolean; resultFormat?: 'csv' | 'json' }): Promise<DataQueryResult | string>;

    abstract orgListUsers(params: {
        targetOrg: SalesforceOrg,
    }): Promise<OrgListUsersResult>;

    abstract apexGetLog(params: {
        targetOrg: SalesforceOrg,
        numLogs?: number,
        logId?: SalesforceId,
        logDir: Uri
    }): Promise<ApexGetLogResult>;

    abstract apexListLog(params: {
        targetOrg: SalesforceOrg
    }): Promise<ApexListLogResult>;

    abstract apexTestRun(params: {
        targetOrg: SalesforceOrg;
        tests: string[]
    }): Promise<ApexTestRunResult>;

    abstract apexTestGet(params: {
        targetOrg: SalesforceOrg; testRunId: SalesforceId
    }): Promise<ApexTestGetResult>;

    protected async exec(command: ExecutorCommand): Promise<{ stdout: any }> {
        command.env = this.env;
        if (command.shouldParseAsJson === undefined) {
            command.shouldParseAsJson = true;
        }

        const { stdout } = await this.executor(command);
        if (!stdout) {
            throw new Error(intoCliCommandString(command) + ' did not return any output.');
        }

        this.history.append(command, {
            stdout
        });

        return {
            stdout
        };
    }

    public getHistory(): SalesforceCliHistory {
        return this.history;
    }
}

export interface OnSalesforceCliRunEvent {
    cliInputOutput: SalesforceCliInputOutput;
}

export type OnSalesforceCliRunListener = (e: OnSalesforceCliRunEvent) => Promise<void>;

export class SalesforceCliHistory {

    private readonly cliInputOutputs: SalesforceCliInputOutput[] = [];
    private readonly listeners: OnSalesforceCliRunListener[];

    public constructor () {
        this.cliInputOutputs = [];
        this.listeners = [];
    }

    public get length() {
        return this.cliInputOutputs.length;
    }

    public get maxHistoryLength() {
        return 25;
    }

    public append(input: ExecutorCommand, output: ExecutorResult) {
        if (this.cliInputOutputs.length >= this.maxHistoryLength) {
            this.cliInputOutputs.pop();
        }

        const cliInputOutput = new SalesforceCliInputOutput({
            input,
            output
        });
        this.cliInputOutputs.unshift(cliInputOutput);

        this.listeners.forEach(listener => {
            listener({
                cliInputOutput
            });
        });
    }

    public registerOnSalesforceCliRunListener(listener: OnSalesforceCliRunListener) {
        this.listeners.push(listener);
    }

    public get(index: number): SalesforceCliInputOutput {
        if (index > this.cliInputOutputs.length) {
            throw new Error(`Index out of bounds ${index} was not within ${this.cliInputOutputs.length}.`);
        }
        return this.cliInputOutputs[index];
    }

    public map<T>(callback: (cliInputOutput: SalesforceCliInputOutput) => T) {
        return this.cliInputOutputs.map(cliInputOutput => {
            return callback(cliInputOutput);
        });
    }
}

export class SalesforceCliInputOutput {
    private readonly input: ExecutorCommand;
    private readonly output: ExecutorResult;
    private readonly date: Date;

    public constructor ({
        input, output
    }: { input: ExecutorCommand, output: ExecutorResult }) {
        this.input = input;
        this.output = output;
        this.date = new Date();
    }

    public getViewableCliInput() {
        return `${intoCliCommandString(this.input)} - ${this.date.toLocaleString()}`;
    }

    public getViewableOutput(prettyPrint: boolean = true) {
        if (prettyPrint) {
            return JSON.stringify(this.output.stdout, null, 2);
        } else {
            return JSON.stringify(this.output.stdout);
        }
    }

    public getDate() {
        return this.date;
    }
}

export interface ProjectRetrieveResult {
    status: number,
    result: {
        fileProperties: {
            type: string,
            fullName: string,
            fileName: string
        }[],
        files: {
            filePath: string
        }[]
    }
}