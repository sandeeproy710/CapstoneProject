import { BasePage } from "../Base/BasePage";
import { test, expect, Page } from "@playwright/test";
import login from '../test-data/login.json';
import LoginPage from "../Pages/LoginPage";
import Dashboardpage from "../Pages/DashboardPage";
import AccountOverview from "../Pages/AccountOverview";
import CreateAccount from "../Pages/CreateAccountPage";
import TransferFundsPage from "../Pages/FundTranferPage";
import Assert from "../Utils/Assert";
test.describe('ParaBank transfer UI scenarios from manual QA', () => {
    let acc1: string;
    let acc2: string;
    let page: Page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        const basePage = new BasePage(page);
        const loginpage = new LoginPage(page);
        const dashboardpage = new Dashboardpage(page);
        const accountoverview = new AccountOverview(page);
        const createaccount = new CreateAccount(page);
        await basePage.navigate();
        await loginpage.login(
            login.username,
            login.password
        );
        await dashboardpage.accountOverview();
        acc1 = await accountoverview.extractAccount();
        await dashboardpage.registerAccount();
        await createaccount.newAccount(login.accType, acc1);
        acc2 = await createaccount.extractAccount();
        console.log(acc1, acc2);
    }, 60000);

    test.afterAll(async () => {
        await page.close();
    });

    test('Transfer Funds with Valid Accounts', async () => {
        const dashboardpage = new Dashboardpage(page);
        const transferPage = new TransferFundsPage(page);
        await dashboardpage.fundTransfer();
        await transferPage.transferFunds(
            login.validTransfer.amount,
            acc1,
            acc2
        );
        await transferPage.validateTransfer(
            login.validTransfer.amount,
            acc1,
            acc2
        );
    }
    );

    test('Transfer with Insufficient Balance', async () => {
        const dashboardpage = new Dashboardpage(page);
        const transferPage = new TransferFundsPage(page);
        await dashboardpage.fundTransfer();
        const assert: Assert = new Assert(page);
        await transferPage.transferFunds(
            login.insufficientBalance.amount,
            acc1,
            acc2
        );
        const loca = page.locator('#showResult h1').first();
        await assert.neagtiveAssert(loca);
    }
    );

    test('Mandatory Amount Validation', async () => {
        const dashboardpage = new Dashboardpage(page);
        const transferPage = new TransferFundsPage(page);
        await dashboardpage.fundTransfer();
        const assert: Assert = new Assert(page);
        await transferPage.transferFundsValidation(
            acc1,
            acc2
        );
        const loca = page.locator('#showError').first();
        await assert.errorAssert(loca);

    }
    );

    test('Same Account Transfer Validation', async () => {
        const dashboardpage = new Dashboardpage(page);
        const transferPage = new TransferFundsPage(page);
        await dashboardpage.fundTransfer();
        const assert: Assert = new Assert(page);
        await transferPage.transferFunds(
            login.sameAccountTransfer.amount,
            acc1,
            acc1
        );
        const loca = page.locator('#showResult h1').first();
        await assert.neagtiveAssert(loca);

    }
    );

    test('Negative Amount Validation', async () => {
        const dashboardpage = new Dashboardpage(page);
        const transferPage = new TransferFundsPage(page);
        await dashboardpage.fundTransfer();
        const assert: Assert = new Assert(page);
        await transferPage.transferFunds(
            login.negativeTransfer.amount,
            acc1,
            acc2
        );

        const loca = page.locator('#showResult h1').first();
        await assert.neagtiveAssert(loca);

    }
    );

    test('Success Message Validation', async () => {
        const dashboardpage = new Dashboardpage(page);
        const transferPage = new TransferFundsPage(page);
        await dashboardpage.fundTransfer();
        const assert: Assert = new Assert(page);
        await transferPage.transferFunds(
            login.validTransfer.amount,
            acc1,
            acc2
        );
        const loca = page.getByText('Transfer Complete!');
        await assert.successAssert(loca);

    }
    );

    test('Zero Amount Validation', async () => {
        const dashboardpage = new Dashboardpage(page);
        const transferPage = new TransferFundsPage(page);
        await dashboardpage.fundTransfer();
        const assert: Assert = new Assert(page);
        await transferPage.transferFunds(
            login.zeroTransfer.amount,
            acc1,
            acc2
        );
        const loca = page.locator('#showResult h1').first();
        await assert.neagtiveAssert(loca);

    }
    );

        test('Transfer with Large Balance', async () => {
        const dashboardpage = new Dashboardpage(page);
        const transferPage = new TransferFundsPage(page);
        await dashboardpage.fundTransfer();
        const assert: Assert = new Assert(page);
        await transferPage.transferFunds(
            login.largeTransfer.amount,
            acc1,
            acc2
        );
        const loca = page.locator('#showError').first();
        await assert.errorAssert(loca);
    }
    );
    
})
