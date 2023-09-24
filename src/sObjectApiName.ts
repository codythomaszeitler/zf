export class SObjectApiName {

    private readonly raw: string;

    private constructor(raw: string) {
        this.raw = raw;
    }

    static get(raw: string) {
        return new SObjectApiName(raw);
    }
}