import { Position } from "./position";
import { NULL_SF_ID, SalesforceId } from "./salesforceId";
export { parseStackTrace } from "./stackTrace";

export class ApexTestRunResult {

	private readonly testRunId: SalesforceId;

	public constructor (params: {
		testRunId: SalesforceId
	}) {
		this.testRunId = params.testRunId;
	}

	public wasSkipped() {
		return this.testRunId === NULL_SF_ID;
	}

	public getTestRunId() {
		return this.testRunId;
	}
}

export class ApexTestGetResult {

	private readonly testRunId: SalesforceId;
	private readonly tests: ApexTestResult[];
	private readonly testsRan: number;
	private readonly passing: number;
	private readonly failing: number;
	private readonly skipped: number;

	public constructor (params: {
		testRunId: SalesforceId,
		tests: ApexTestResult[],
		testsRan: number,
		passing: number,
		failing: number,
		skipped: number
	}) {
		this.testRunId = params.testRunId;
		this.tests = params.tests;
		this.testsRan = params.testsRan;
		this.passing = params.passing;
		this.failing = params.failing;
		this.skipped = params.skipped;
	}

	public getTestRunId() {
		return this.testRunId;
	}

	public getApexTestResult(fullName: string) {
		return this.tests.find(test => test.getFullName() === fullName);
	}

	public getPercentageCompleted(): number {
		return ((this.passing + this.failing + this.skipped) / this.testsRan) * 100;
	}

	public getPassingTests() {
		return this.tests.filter(test => test.getOutcome() === PASS);
	}

	public getFailingTests() {
		return this.tests.filter(test => test.getOutcome() === FAIL);
	}

	public getSkippedTests() {
		return this.tests.filter(test => test.getOutcome() === SKIPPED);
	}

	public hasFailingTests() {
		const failures = this.getFailingTests();
		return failures.length !== 0;
	}
}

export const PASS = "Pass";
export const FAIL = "Fail";
export const SKIPPED = "Skip";
export const PENDING = "Pending";


export class ApexTestResult {

	private readonly outcome: "Pass" | "Fail" | "Pending" | "Skip";
	private readonly fullName: string;
	private readonly message: string;
	private readonly stackTrace: string;
	private readonly location: {
		position: Position,
		className: string,
		methodName: string
	} | undefined;

	public constructor (params: {
		outcome: "Pass" | "Fail" | "Pending",
		fullName: string,
		message: string,
		stackTrace: string,
		location: {
			position: Position,
			className: string,
			methodName: string
		} | undefined
	}) {
		this.message = params.message;
		this.outcome = params.outcome;
		this.fullName = params.fullName;
		this.stackTrace = params.stackTrace;
		this.location = params.location;
	}

	public getOutcome() {
		return this.outcome;
	}

	public getFullName() {
		return this.fullName;
	}

	public getLocation() {
		return this.location;
	}

	public getFailureMessage() {
		return this.message;
	}

	public getTestId() {
		return this.getFullName();
	}

	public getClassName() {
		if (!this.location) {
			return this.fullName.split('.')[0];
		}

		return this.location?.className ?? "";
	}

	public getMethodName() {
		if (!this.location) {
			return this.fullName.split('.')[1];
		}

		return this.location?.methodName ?? "";
	}

	public getStackTrace() {
		return this.stackTrace;
	}
}
