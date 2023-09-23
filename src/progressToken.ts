export interface ProgressToken {
    isCancellationRequested: boolean;
    report(params: { progress: number; title?: string }): void;
}