import { Command } from "./command";
import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";

export class RunTestCommand extends Command {


	private readonly listeners: OnTestFinishedListener[];

	public constructor ({
		ide, cli
	}: {
		ide: IntegratedDevelopmentEnvironment,
		cli: SalesforceCli
	}) {
		super({ide, cli});
		this.listeners = [];
	}

	public execute({
		tests
	}: {
		tests: Test[]
	}) {
		// You probably need to do some sort of check to assert that 
		console.log(tests);

		const testsToRun = tests.map(test => {


		});
	}

	public registerOnTestFinishedListener(listener: OnTestFinishedListener) {
		this.listeners.push(listener);
	}
}

export type OnTestFinishedListener = () => {}

export type Test = TestMethod | TestClass;

export interface TestMethod {
	type: "method";
	className: string;
	methodName: string;
}

export interface TestClass {
	type: "class";
	className: string;
}


export interface RunTestResult {
	test : Test;
	status : "Pass" | "Fail"
}