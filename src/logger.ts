export abstract class Logger {

	private static singleton: Logger;

	static get(): Logger {
		if (!this.singleton) {
			this.singleton = new StdOutLogger();
		}

		return this.singleton;
	}

	static setGlobalLogger(singleton: Logger): void {
		Logger.singleton = singleton;
	}

	private level: LogLevel;

	public constructor() {
		this.level = LogLevel.warn;
	}

	public setLogLevel(level: LogLevel): void {
		this.level = level;
	}

	public warn(message: string): void {
		this.writeWithLogLevelCheck(LogLevel.warn, message);
	}

	public info(message: string): void {
		this.writeWithLogLevelCheck(LogLevel.info, message);
	}

	private writeWithLogLevelCheck(level: LogLevel, message: string): void {
		if (this.level.encompasses(level)) {
			this.write(this.formatString(level, message));
		}
	}

	abstract write(message: string): void;

	private formatString(level: LogLevel, message: string) {
		const now = Date.now();
		const formatted = `[${now}] [${level}] - ${message}`;
		return formatted;
	}
}

export class LogLevel {

	public static readonly fine: LogLevel = new LogLevel(0, "FINE");
	public static readonly info: LogLevel = new LogLevel(1, "INFO");
	public static readonly warn: LogLevel = new LogLevel(2, "WARN");

	private readonly ordering: number;
	private readonly raw: string;

	private constructor(ordering: number, raw: string) {
		this.ordering = ordering;
		this.raw = raw;
	}

	public encompasses(level: LogLevel): boolean {
		return this.ordering <= level.ordering;
	}

	public toString() {
		return this.raw;
	}
}

export class StdOutLogger extends Logger {
	write(message: string): void {
		console.log(message);
	}
}