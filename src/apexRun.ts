import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";

export async function runHighlightedApex(params: {
    targetOrg?: SalesforceOrg;
    salesforceCli: SalesforceCli;
    ide: IntegratedDevelopmentEnvironment;
}) {
    const getTargetOrg = async () => {
        if (params.targetOrg) {
            return params.targetOrg;
        } else {
            const defaultOrg = await params.salesforceCli.getDefaultOrg();
            return defaultOrg;
        }
    };

    try {
        const targetOrg = await getTargetOrg();
        if (targetOrg) {
            const highlighted = await params.ide.getHighlightedText();

            const result = await params.salesforceCli.apexRun({
                targetOrg,
                apexCode: highlighted
            });

            await params.ide.showOutput({
                logs: result.getLogs(),
                show: true
            });
        }
    } catch (e: any) {
        params.ide.showErrorMessage(e.message);
    }
}