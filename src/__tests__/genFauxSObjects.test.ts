import { describe, expect, test } from '@jest/globals';
import { GenerateFauxSObjectsCommand, } from '../genFauxSObjects';
import { MockIDE } from './__mocks__/mockIntegratedDevelopmentEnvironment';
import { MockFileSystem } from './__mocks__/mockFileSystem';
import { SfSalesforceCli } from '../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './__mocks__/mockShell';
import { SalesforceOrg } from '../salesforceOrg';
import { getSObjectList, } from './data/sobjectListOutputs';
import { Uri } from '../integratedDevelopmentEnvironment';
import { getNewSObjectAccountDescribe } from './data/sobjectDescribeOutput';

describe('gen faux sobjects with command like object', () => {

    let cli: SfSalesforceCli;
    let ide: MockIDE;
    let fs: MockFileSystem;
    let org: SalesforceOrg;

    let cliInputOutput: any = {};

    const genSfSObjectListCommandString = () => {
        return `sf sobject list --target-org ${org.getAlias()} --json`;
    };

    const genSfSObjectDescribeCommandString = (sObjectType: string) => {
        return `sf sobject describe --sobject ${sObjectType} --target-org ${org.getAlias()} --json`;
    };

    beforeEach(() => {
        org = new SalesforceOrg({
            alias: 'testOrg',
            isActive: true
        });

        fs = new MockFileSystem();
        ide = new MockIDE({ filesystem: fs });

        cliInputOutput = genCommandToStdOutput();
        cli = new SfSalesforceCli(genMockExecutor(cliInputOutput));

        cliInputOutput[genSfSObjectListCommandString()] = getSObjectList(['Account']);
        cliInputOutput[genSfSObjectDescribeCommandString('Account')] = getNewSObjectAccountDescribe();
    });

    it('should be able to generate Account faux sobject into file', async () => {
        const destDir = ide.generateUri('.sfdx', 'sobjects', 'customObjects');
        const testObject = new GenerateFauxSObjectsCommand({
            cli,
            ide
        });

        await testObject.execute({
            targetOrg: org,
            destDir
        });

        const accountFauxSobjectUri = Uri.join(destDir, "Account.cls");
        const content = await ide.readFile({
            uri: accountFauxSobjectUri
        });

        const expected = getFauxAccountSObjectClassString();
        expect(content).toBe(expected);
    });
});


function getFauxAccountSObjectClassString() {
    return `global class Account {
	global Id Id;
	global Boolean IsDeleted;
	global Id MasterRecordId;
	global Account MasterRecord;
	global String Name;
	global String Type;
	global Id ParentId;
	global Account Parent;
	global String BillingStreet;
	global String BillingCity;
	global String BillingState;
	global String BillingPostalCode;
	global String BillingCountry;
	global Double BillingLatitude;
	global Double BillingLongitude;
	global String BillingGeocodeAccuracy;
	global String ShippingStreet;
	global String ShippingCity;
	global String ShippingState;
	global String ShippingPostalCode;
	global String ShippingCountry;
	global Double ShippingLatitude;
	global Double ShippingLongitude;
	global String ShippingGeocodeAccuracy;
	global String Phone;
	global String Fax;
	global String AccountNumber;
	global String Website;
	global String PhotoUrl;
	global String Sic;
	global String Industry;
	global Double AnnualRevenue;
	global String Ownership;
	global String TickerSymbol;
	global String Description;
	global String Rating;
	global String Site;
	global Id OwnerId;
	global User Owner;
	global Datetime CreatedDate;
	global Id CreatedById;
	global User CreatedBy;
	global Datetime LastModifiedDate;
	global Id LastModifiedById;
	global User LastModifiedBy;
	global Datetime SystemModstamp;
	global Date LastActivityDate;
	global Datetime LastViewedDate;
	global Datetime LastReferencedDate;
	global String Jigsaw;
	global String JigsawCompanyId;
	global String CleanStatus;
	global String AccountSource;
	global String DunsNumber;
	global String Tradestyle;
	global String NaicsCode;
	global String NaicsDesc;
	global String YearStarted;
	global String SicDesc;
	global Id DandbCompanyId;
	global DandBCompany DandbCompany;
	global Id OperatingHoursId;
	global OperatingHours OperatingHours;
	global List<Account> ChildAccounts;
	global List<AccountCleanInfo> AccountCleanInfos;
	global List<AccountContactRole> AccountContactRoles;
	global List<AccountFeed> Feeds;
	global List<AccountHistory> Histories;
	global List<AccountPartner> AccountPartnersFrom;
	global List<AccountPartner> AccountPartnersTo;
	global List<AccountShare> Shares;
	global List<ActivityHistory> ActivityHistories;
	global List<AlternativePaymentMethod> AlternativePaymentMethods;
	global List<Asset> Assets;
	global List<Asset> ProvidedAssets;
	global List<Asset> ServicedAssets;
	global List<AssociatedLocation> AssociatedLocations;
	global List<AttachedContentDocument> AttachedContentDocuments;
	global List<Attachment> Attachments;
	global List<AuthorizationFormConsent> AuthorizationFormConsents;
	global List<AuthorizationFormConsent> RelatedAuthorizationFormConsents;
	global List<CardPaymentMethod> CardPaymentMethods;
	global List<Case> Cases;
	global List<CollaborationGroupRecord> RecordAssociatedGroups;
	global List<CombinedAttachment> CombinedAttachments;
	global List<CommSubscriptionConsent> CommSubscriptionConsents;
	global List<Contact> Contacts;
	global List<ContactPointAddress> ContactPointAddresses;
	global List<ContactPointEmail> ContactPointEmails;
	global List<ContactPointPhone> ContactPointPhones;
	global List<ContactRequest> ContactRequests;
	global List<ContentDocumentLink> ContentDocumentLinks;
	global List<Contract> Contracts;
	global List<CreditMemo> CreditMemos;
	global List<DigitalWallet> DigitalWallets;
	global List<DuplicateRecordItem> DuplicateRecordItems;
	global List<EmailMessage> Emails;
	global List<Entitlement> Entitlements;
	global List<EntitySubscription> FeedSubscriptionsForEntity;
	global List<Event> Events;
	global List<Expense> Expenses;
	global List<FinanceBalanceSnapshot> FinanceBalanceSnapshots;
	global List<FinanceTransaction> FinanceTransactions;
	global List<FlowOrchestrationWorkItem> FlowOrchestrationWorkItems;
	global List<Invoice> Invoices;
	global List<MaintenancePlan> MaintenancePlans;
	global List<MessagingEndUser> MessagingEndUsers;
	global List<MessagingSession> MessagingSessions;
	global List<Note> Notes;
	global List<NoteAndAttachment> NotesAndAttachments;
	global List<OpenActivity> OpenActivities;
	global List<Opportunity> Opportunities;
	global List<OpportunityPartner> OpportunityPartnersTo;
	global List<Order> Orders;
	global List<Partner> PartnersFrom;
	global List<Partner> PartnersTo;
	global List<Payment> Payments;
	global List<PaymentAuthAdjustment> PaymentAuthAdjustments;
	global List<PaymentAuthorization> PaymentAuthorizations;
	global List<PaymentLineInvoice> PaymentLinesInvoice;
	global List<ProcessInstance> ProcessInstances;
	global List<ProcessInstanceHistory> ProcessSteps;
	global List<ProductRequest> ProductRequests;
	global List<ProductRequestLineItem> ProductRequestLineItems;
	global List<RecordAction> RecordActions;
	global List<RecordActionHistory> RecordActionHistories;
	global List<Refund> Refunds;
	global List<RefundLinePayment> RefundLinePayments;
	global List<ResourcePreference> ResourcePreferences;
	global List<ReturnOrder> ReturnOrders;
	global List<ScorecardAssociation> ScorecardAssociations;
	global List<ServiceAppointment> ServiceAppointmentAccount;
	global List<ServiceAppointment> ServiceAppointments;
	global List<ServiceContract> ServiceContracts;
	global List<ServiceResource> ServiceResources;
	global List<Swarm> Swarms;
	global List<SwarmMember> SwarmMembers;
	global List<Task> Tasks;
	global List<TopicAssignment> TopicAssignments;
	global List<User> Users;
	global List<WorkOrder> WorkOrders;
	global List<WorkPlanSelectionRule> WorkPlanSelectionRules;
}`;
}