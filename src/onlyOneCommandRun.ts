export function genOnlyRunOnce(func : any, onNoRun?: any) {
	let isRunning = false;
	return async function (...args : any) {
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