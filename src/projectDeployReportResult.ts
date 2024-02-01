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
        this.validateNumberComponentErrors(params.numberComponentErrors);
        this.validateNumberComponentsDeployed(params.numberComponentsDeployed);
        this.validateNumberComponentsTotal(params.numberComponentsTotal);

        this.numberComponentErrors = params.numberComponentErrors;
        this.numberComponentsDeployed = params.numberComponentsDeployed;
        this.numberComponentsTotal = params.numberComponentsTotal;
        this.componentFailures = params.componentFailures;
    }

    private validateNumberComponentErrors(numberComponentErrors: number) {
        if (numberComponentErrors < 0) {
            const errorMessage = `Cannot construct ProjectDeployReportResult with negative number of component errors [${numberComponentErrors}].`;
            throw new Error(errorMessage);
        }

        if (isNaN(numberComponentErrors)) {
            const errorMessage = 'Cannot construct ProjectDeployReportResult with NaN number of component errors.';
            throw new Error(errorMessage);
        }
    }

    private validateNumberComponentsDeployed(numberComponentsDeployed: number) {
        if (numberComponentsDeployed < 0) {
            const errorMessage = `Cannot construct ProjectDeployReportResult with negative number of components deployed [${numberComponentsDeployed}].`;
            throw new Error(errorMessage);
        }

        if (isNaN(numberComponentsDeployed)) {
            const errorMessage = 'Cannot construct ProjectDeployReportResult with NaN number of components deployed.';
            throw new Error(errorMessage);
        }
    }

    private validateNumberComponentsTotal(numberComponentsTotal: number) {
        if (numberComponentsTotal < 0) {
            const errorMessage = `Cannot construct ProjectDeployReportResult with negative number of components total [${numberComponentsTotal}].`;
            throw new Error(errorMessage);
        }

        if (isNaN(numberComponentsTotal)) {
            const errorMessage = 'Cannot construct ProjectDeployReportResult with NaN number of components total.';
            throw new Error(errorMessage);
        }
    }

    public getTotalDeployedAsString() {
        const numberComponentErrors = this.numberComponentErrors;
        const numberComponentsDeployed = this.numberComponentsDeployed;
        const numberTotalDeployed = numberComponentErrors + numberComponentsDeployed;
        const numberComponentsTotal = this.numberComponentsTotal;
        return '(' + numberTotalDeployed + '/' + numberComponentsTotal + ')';
    }

    public getPercentageComplete(): number {
        const numberComponentErrors = this.numberComponentErrors;
        const numberComponentsDeployed = this.numberComponentsDeployed;
        const numberComponentsTotal = this.numberComponentsTotal;
        if (this.numberComponentsTotal === 0) {
            return 0;
        }

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
