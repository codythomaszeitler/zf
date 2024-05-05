import { Position } from "./position";
import { NULL_SF_ID, SalesforceId } from "./salesforceId";

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

	public constructor (params: {
		testRunId: SalesforceId,
		tests: ApexTestResult[],
		testsRan: number,
		passing: number,
		failing: number
	}) {
		this.testRunId = params.testRunId;
		this.tests = params.tests;
		this.testsRan = params.testsRan;
		this.passing = params.passing;
		this.failing = params.failing;
	}

	public getTestRunId() {
		return this.testRunId;
	}

	public getApexTestResult(fullName: string) {
		return this.tests.find(test => test.getFullName() === fullName);
	}

	public getPercentageCompleted(): number {
		return ((this.passing + this.failing) / this.testsRan) * 100;
	}

	public getPassingTests() {
		return this.tests.filter(test => test.getOutcome() === 'Pass');
	}

	public getFailingTests() {
		return this.tests.filter(test => test.getOutcome() === 'Fail');
	}

	public hasFailingTests() {
		const failures = this.getFailingTests();
		return failures.length !== 0;
	}
}

export const PASS = "Pass";
export const FAIL = "Fail";
export const PENDING = "Pending";


export class ApexTestResult {

	private readonly outcome: "Pass" | "Fail" | "Pending";
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

export function parseStackTrace(stackTrace: string): { className: string; methodName: string, position: Position } {
	const classNameRegex = /^Class\.(.*)\.(.*): line (\d+), column (\d+)\n?.*/;

	const matches = stackTrace.match(classNameRegex);
	if (!matches) {
		throw new Error(`Could not parse stack trace apex test location string [${stackTrace}]`);
	}
	const line = Number.parseInt(matches[3]);
	const column = Number.parseInt(matches[4]);
	return {
		className: matches[1],
		methodName: matches[2],
		position: new Position(line - 1, column - 1)
	};
}