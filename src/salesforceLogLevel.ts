export class SalesforceLogLevel {

	public static readonly none: SalesforceLogLevel = new SalesforceLogLevel(0, "NONE");
	public static readonly fine: SalesforceLogLevel = new SalesforceLogLevel(1, "FINER");
	public static readonly finer: SalesforceLogLevel = new SalesforceLogLevel(2, "FINE");
	public static readonly info: SalesforceLogLevel = new SalesforceLogLevel(3, "INFO");
	public static readonly debug: SalesforceLogLevel = new SalesforceLogLevel(4, "DEBUG");
	public static readonly warn: SalesforceLogLevel = new SalesforceLogLevel(5, "WARN");
	public static readonly error: SalesforceLogLevel = new SalesforceLogLevel(6, "ERROR");

	private readonly ordering: number;
	private readonly raw: string;

	private constructor(ordering: number, raw: string) {
		this.ordering = ordering;
		this.raw = raw;
	}

	public encompasses(level: SalesforceLogLevel): boolean {
		return this.ordering <= level.ordering;
	}

	public toString() {
		return this.raw;
	}
}