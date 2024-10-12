import { DescribeSObject, ListSObjects } from "../../soql/intellisense";
import { getAccountSObjectDescribeResult } from "./data/accountSObjectDescribeResult";
import { getContactSObjectDescribeResult } from "./data/contactSObjectDescribeResult";
import { getLeadSObjectDescribeResult } from "./data/leadSObjectDescribeResult";
import { getListSObjectsResult } from "./data/listSObjectResult";

export const describeSObject: DescribeSObject = async function ({ sObjectName }) {
    if (sObjectName === 'Account') {
        return getAccountSObjectDescribeResult();
    }

    if (sObjectName === 'Contact') {
        return getContactSObjectDescribeResult();
    }

    if (sObjectName === 'Lead') {
        return getLeadSObjectDescribeResult();
    }

    throw new Error(`Could not find sobject for [${sObjectName}]`);
};

export const listSObjects: ListSObjects = async function ({ }) {
    return getListSObjectsResult();
};