export interface ProgressToken {
    isCancellationRequested : boolean;
    report(params : {progress : number}) : void;
}