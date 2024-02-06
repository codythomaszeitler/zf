import { SalesforceOrg } from "./salesforceOrg";
import { JobId } from "./jobId";
import { ProjectDeployStartResult } from "./projectDeployStartResult";
import { ProjectDeployReportResult } from "./projectDeployReportResult";
import { ProjectDeployCancelResult } from "./projectDeployCancelResult";
import { Executor, ExecutorCommand, ExecutorResult, intoCliCommandString } from "./executor";
import { ProjectDeployResumeResult } from "./projectDeployResumeResult";
import { SObjectListResult } from "./sObjectListResult";
import { SObjectDescribeResult } from "./sObjectDescribeResult";
import { SObjectApiName } from "./sObjectApiName";
import { ApexRunResult } from "./apexRunResult";
import { DataCreateRecordResult as DataUpsertRecordResult } from "./dataCreateRecordResult";
import { UpsertableSObject } from "./upsertableSObject";
import { OrgListUsersResult } from "./orgListUsersResult";
import { SoqlQuery } from "./soqlQuery";
import { DataQueryResult } from "./dataQueryResult";
import { ApexGetLogResult } from "./apexGetLogResult";
import { ApexListLogResult } from "./apexListLogResult";
import { SalesforceId } from "./salesforceId";
import { ApexTestGetResult, ApexTestRunResult } from "./apexTestRunResult";
import { Uri } from "./uri";

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

    abstract getOrgList(): Promise<SalesforceOrg[]>;
    abstract getDefaultOrg(): Promise<SalesforceOrg | null>;
    abstract openOrg(alias: string): Promise<void>;

    abstract projectDeployStart(params: { targetOrg: SalesforceOrg; sourceDir?: Uri[] }): Promise<ProjectDeployStartResult>;
    abstract projectDeployReport(params: { jobId: JobId }): Promise<ProjectDeployReportResult>;
    abstract projectDeployResume(params: { jobId: JobId }): Promise<ProjectDeployResumeResult>;
    abstract projectDeployCancel(params: { jobId: JobId }): Promise<ProjectDeployCancelResult>;

    abstract sobjectList(params: {
        targetOrg: SalesforceOrg
    }): Promise<SObjectListResult>;
    abstract sobjectDescribe(params: {
        targetOrg: SalesforceOrg,
        sObjectApiName: SObjectApiName
    }): Promise<SObjectDescribeResult>;

    abstract apexRun(params: {
        targetOrg: SalesforceOrg,
        apexCode: string;
    }): Promise<ApexRunResult>;

    abstract dataUpsertRecord(params: {
        targetOrg: SalesforceOrg,
        sObject: UpsertableSObject;
    }): Promise<DataUpsertRecordResult>;

    abstract dataQuery(params: { targetOrg: SalesforceOrg; query: SoqlQuery }): Promise<DataQueryResult>;

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