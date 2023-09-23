export class ProjectDeployReportResult {
    private readonly numberComponentErrors: number;
    private readonly numberComponentsDeployed: number;
    private readonly numberComponentsTotal: number;
    private readonly componentFailures: ComponentFailure[];

    public constructor(params: {
        numberComponentErrors: number;
        numberComponentsDeployed: number;
        numberComponentsTotal: number;
        componentFailures: ComponentFailure[]
    }) {
        this.numberComponentErrors = params.numberComponentErrors;
        this.numberComponentsDeployed = params.numberComponentsDeployed;
        this.numberComponentsTotal = params.numberComponentsTotal;
        this.componentFailures = params.componentFailures;
    }

    public getPercentageComplete(): number {
        const numberComponentErrors = this.numberComponentErrors;
        const numberComponentsDeployed = this.numberComponentsDeployed;
        const numberComponentsTotal = this.numberComponentsTotal;
        return ((numberComponentErrors + numberComponentsDeployed) / numberComponentsTotal) * 100;
    }

    public isDeploymentComplete(): boolean {
        return this.getPercentageComplete() >= 100;
    }

    public getFailureFiles(): Set<string> {
        const maybeHasDuplicateFileNames = this.componentFailures.map(componentFailure => componentFailure.fileName);
        const distinctFilesNames = new Set<string>(maybeHasDuplicateFileNames);
        return distinctFilesNames;
    }

    public getFailuresForFileName(fileName: string): ComponentFailure[] {
        return this.componentFailures.filter(componentFailure => componentFailure.fileName === fileName);
    }
}

export interface ComponentFailure {
    columnNumber: number;
    lineNumber: number;
    problem: string;
    fileName: string;
}