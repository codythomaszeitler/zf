export interface ProgressToken {
    isCancellationRequested: boolean;
    report(params: { progress: number; title?: string }): void;

    onCancellationRequested(listener : OnCancellationRequestedListener) : void;
}

export type OnCancellationRequestedListener = () => Promise<void>;