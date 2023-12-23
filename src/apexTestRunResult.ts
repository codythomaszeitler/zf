import { SalesforceId } from "./salesforceId";

export class ApexTestRunResult {

	private readonly testRunId: SalesforceId;

	public constructor(params: {
		testRunId: SalesforceId
	}) {
		this.testRunId = params.testRunId;
	}

	public getTestRunId() {
		return this.testRunId;
	}
}

export class ApexTestGetResult {

	private readonly tests: ApexTestResult[];
	private readonly testsRan: number;
	private readonly passing: number;
	private readonly failing: number;

	public constructor(params: {
		tests: ApexTestResult[],
		testsRan: number,
		passing: number,
		failing: number
	}) {
		this.tests = params.tests;
		this.testsRan = params.testsRan;
		this.passing = params.passing;
		this.failing = params.failing;
	}

	public getPercentageCompleted(): number {
		return ((this.passing + this.failing) / this.testsRan) * 100;
	}
}

export class ApexTestResult {

	private readonly outcome: "Pass" | "Fail" | "Pending";
	private readonly fullName: string;

	public constructor(params: {
		outcome: "Pass" | "Fail" | "Pending",
		fullName: string
	}) {
		this.outcome = params.outcome;
		this.fullName = params.fullName;
	}

	public getOutcome() {
		return this.outcome;
	}

	public getFullName() {
		return this.fullName;
	}
}