export function genOnlyRunOnce(func, onNoRun?) {
	let isRunning = false;
	return async function (...args) {
		if (isRunning) {
			if (onNoRun) {
				await onNoRun();
			}
			return;
		}
		isRunning = true;
		const result = await func(...args);
		isRunning = false;
		return result;
	};
}