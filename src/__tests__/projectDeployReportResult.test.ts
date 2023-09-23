import { describe, expect } from '@jest/globals';
import { ProjectDeployReportResult } from '../projectDeployReportResult';

describe('project deploy report result', () => {

    it('should report 0 if number components total is 0', () => {
        const testObject = new ProjectDeployReportResult({
            numberComponentErrors: 0,
            numberComponentsDeployed: 0,
            numberComponentsTotal: 0,
            componentFailures: []
        });

        expect(testObject.getPercentageComplete()).toBe(0);
    });

    it('should throw an exception if a negative number of component errors is given', () => {
        let caughtException : any = null;
        try {
            new ProjectDeployReportResult({
                numberComponentErrors: -1,
                numberComponentsDeployed: 0,
                numberComponentsTotal: 0,
                componentFailures: []
            });
        } catch (e: any) {
            caughtException = e;
        }
        
        if (!caughtException) {
            expect(true).toBe(false);
        } else {
            expect(caughtException.message).toBe('Cannot construct ProjectDeployReportResult with negative number of component errors [-1].');
        }
    });

    it('should throw an exception if a negative number of component deployed is given', () => {
        let caughtException : any = null;
        try {
            new ProjectDeployReportResult({
                numberComponentErrors: 0,
                numberComponentsDeployed: -1,
                numberComponentsTotal: 0,
                componentFailures: []
            });
        } catch (e: any) {
            caughtException = e;
        }
        
        if (!caughtException) {
            expect(true).toBe(false);
        } else {
            expect(caughtException.message).toBe('Cannot construct ProjectDeployReportResult with negative number of components deployed [-1].');
        }
    });

    it('should throw an exception if a negative number of component total is given', () => {
        let caughtException : any = null;
        try {
            new ProjectDeployReportResult({
                numberComponentErrors: 0,
                numberComponentsDeployed: 0,
                numberComponentsTotal: -1,
                componentFailures: []
            });
        } catch (e: any) {
            caughtException = e;
        }
        
        if (!caughtException) {
            expect(true).toBe(false);
        } else {
            expect(caughtException.message).toBe('Cannot construct ProjectDeployReportResult with negative number of components total [-1].');
        }
    });

    it('should throw an exception if a NaN number of component errors is given', () => {
        let caughtException : any = null;
        try {
            new ProjectDeployReportResult({
                numberComponentErrors: NaN,
                numberComponentsDeployed: 0,
                numberComponentsTotal: 0,
                componentFailures: []
            });
        } catch (e: any) {
            caughtException = e;
        }
        
        if (!caughtException) {
            expect(true).toBe(false);
        } else {
            expect(caughtException.message).toBe('Cannot construct ProjectDeployReportResult with NaN number of component errors.');
        }
    });

    it('should throw an exception if a NaN number of components deployed is given', () => {
        let caughtException : any = null;
        try {
            new ProjectDeployReportResult({
                numberComponentErrors: 0,
                numberComponentsDeployed: NaN,
                numberComponentsTotal: 0,
                componentFailures: []
            });
        } catch (e: any) {
            caughtException = e;
        }
        
        if (!caughtException) {
            expect(true).toBe(false);
        } else {
            expect(caughtException.message).toBe('Cannot construct ProjectDeployReportResult with NaN number of components deployed.');
        }
    });

    it('should throw an exception if a NaN number of components total is given', () => {
        let caughtException : any = null;
        try {
            new ProjectDeployReportResult({
                numberComponentErrors: 0,
                numberComponentsDeployed: 0,
                numberComponentsTotal: NaN,
                componentFailures: []
            });
        } catch (e: any) {
            caughtException = e;
        }
        
        if (!caughtException) {
            expect(true).toBe(false);
        } else {
            expect(caughtException.message).toBe('Cannot construct ProjectDeployReportResult with NaN number of components total.');
        }
    });
});