import { SalesforceCli } from "./salesforceCli";

export class Selector {

	private readonly cli: SalesforceCli;

	public constructor(params: {
		cli: SalesforceCli
	}) {
		this.cli = params.cli;
	}

	public getCli() {
		return this.cli;
	}
}