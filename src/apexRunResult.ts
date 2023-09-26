export class ApexRunResult {

    private readonly compiled: boolean;
    private readonly success: boolean;
    private readonly logs: string;

    public constructor(params: {
        compiled: boolean;
        success: boolean;
        logs: string;
    }) {
        this.compiled = params.compiled;
        this.success = params.success;
        this.logs = params.logs;
    }

    public getCompiled() {
        return this.compiled;
    }

    public getSuccess() {
        return this.success;
    }

    public getLogs() : string[] {
        return this.logs.split('\n');
    }
}