export abstract class Logger {

	private static singleton : Logger;

	static get() : Logger {
		if (!this.singleton) {
			this.singleton = new StdOutLogger();
		}

		return this.singleton;
	}

	static setGlobalLogger(singleton : Logger) : void {
		Logger.singleton = singleton;
	}

	warn(message : string) : void {
		const now = Date.now();
		const formatted = `[${now}] [WARN] - ${message}`;
		this.write(formatted);
	}

	abstract write(message : string) : void;
}

export class StdOutLogger extends Logger {
	write(message: string): void {
		console.log(message);
	}
}

