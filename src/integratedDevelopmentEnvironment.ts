import { ProgressToken } from "./progressToken";
import { Range } from "./range";

export abstract class IntegratedDevelopmentEnvironment {
    abstract showQuickPick(items: string[]): Thenable<string>;
    abstract showErrorMessage(message: string): Promise<void>;
    abstract showWarningMessage(message: string): Promise<void>;
    abstract withProgress(toMonitor: (progressToken : ProgressToken) => Promise<void>, options: { title: string }): Promise<void>;
    abstract findFile(glob: string): Promise<Uri | null>;
    abstract getConfig<T>(property: string, defaultValue: T): T;
    abstract execute(command: Command): Promise<CommandExecuteResult>;
    abstract setDiagnostics(uri: Uri, diagnostics: Diagnostic[]): void;
    abstract clearDiagnostics() : void;
    abstract focusProblemsTab() : Promise<void>;
    abstract showOutput(params : {
        logs : string[];
        show : true;
    }) : Promise<void>;
    abstract getHighlightedText()  : Promise<string>;
}

export interface Command {
    commandName: string;
}

export interface CommandExecuteResult {

}

export class Uri {

    private readonly value: string;
    private constructor(value: string) {
        this.value = value;
    }

    public static get(value: string): Uri {
        return new Uri(value);
    }

    public getValue(): string {
        return this.value;
    }
}

export enum DiagnosticSeverity {
    error
}

export class Diagnostic {

    private readonly range: Range;
    private readonly problem: string;
    private readonly severity: DiagnosticSeverity;

    public constructor(range: Range, problem: string, severity: DiagnosticSeverity) {
        this.range = range;
        this.problem = problem;
        this.severity = severity;
    }

    public getRange(): Range {
        return this.range;
    }

    public getProblem(): string {
        return this.problem;
    }

    public getSeverity(): DiagnosticSeverity {
        return this.severity;
    }
}

