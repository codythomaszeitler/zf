import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";
import { getErrorMessage } from "./errorUtils";
import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";

export async function openOrg(ide: IntegratedDevelopmentEnvironment, salesforceCli: SalesforceCli) {
    try {
        const orgList = await salesforceCli.getOrgList();
        if (orgList.length === 0) {
            const errorMessage = 'Could not find any orgs.';
            await ide.showErrorMessage(errorMessage);
            return;
        }

        const isEnabledOrgAliases: string[] = orgList.filter((org: SalesforceOrg) => org.getIsActive()).map((org: SalesforceOrg) => org.getAlias());
        const selectedOrgAlias = await ide.showQuickPick(isEnabledOrgAliases);

        await ide.withProgress(async () => {
            if (selectedOrgAlias) {
                await salesforceCli.openOrg(selectedOrgAlias);
            }

        }, {
            title: `Opening Org ${selectedOrgAlias}...`
        });
    } catch (e) {
        const errorMessage = getErrorMessage(e);
        await ide.showErrorMessage(errorMessage);
    }
}