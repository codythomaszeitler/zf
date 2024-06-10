import { genOnlyRunOnce } from "../onlyOneCommandRun";

describe('only one function can be run', () => {

	it('should only run the given function once if it has not completed yet', async () => {
		let capturedResolve: (() => void) | null = () => undefined;
		const promise = new Promise<void>((resolve: () => void) => {
			capturedResolve = resolve;
		});


		let callCount = 0;
		const testFunction = async () => {
			callCount++;
			await promise;
		};

		const onlyRunOnce = genOnlyRunOnce(testFunction);

		const waitForMe = onlyRunOnce();
		onlyRunOnce();
		onlyRunOnce();

		expect(callCount).toBe(1);

		if (capturedResolve) {
			capturedResolve();
		}
		await waitForMe;

		onlyRunOnce();
		expect(callCount).toBe(2);
	});

	it('should only run the given function once if it has not completed yet', async () => {
		let capturedResolve: (() => void) | null = () => undefined;
		const promise = new Promise<void>(resolve => {
			capturedResolve = resolve;
		});


		let callCount = 0;
		// Essentially, I only want test function to be ran once because the promise is never going to resolve.
		// Okay so the function is now running.
		const testFunction = async () => {
			callCount++;
			await promise;
		};

		let didRunNoRun = false;
		const onlyRunOnce = genOnlyRunOnce(testFunction, async () => {
			didRunNoRun = true;
		});

		onlyRunOnce();
		onlyRunOnce();

		expect(didRunNoRun).toBe(true);

		if(capturedResolve) {
			capturedResolve();
		}
	});
});