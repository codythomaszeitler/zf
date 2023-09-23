import { JobId } from "./jobId";

export class ProjectDeployStartResult {

    private jobId: JobId;

    public constructor(params: { jobId: JobId }) {
        this.jobId = params.jobId;
    }

    public getJobId(): JobId {
        return this.jobId;
    }
}