import { APIRequestContext, expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../Base/BasePage";
export default class TransferFundsPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }


    async transferFunds(
        amount: string,
        fromAccount: string,
        toAccount: string
    ) {
        const basepage: BasePage = new BasePage(this.page);
        await this.page.locator('#amount').fill(amount);
        await this.page.locator('#fromAccountId').selectOption(fromAccount);
        await this.page.locator('#toAccountId').selectOption(toAccount);
        await this.page.locator('input[value="Transfer"]').click();
    }


    async transferFundsValidation(
        fromAccount: string,
        toAccount: string
    ) {
        const basepage: BasePage = new BasePage(this.page);
        await this.page.locator('#fromAccountId').selectOption(fromAccount);
        await this.page.locator('#toAccountId').selectOption(toAccount);
        await this.page.locator('input[value="Transfer"]').click();
    }


    async validateTransfer(
        amount: string,
        fromAccount: string,
        toAccount: string
    ) {
        await expect(this.page.locator('//h1[@class="title"]').first()).toContainText('Transfer');
        await expect(this.page.locator('#amountResult')).toContainText(`$${amount}.00`);
        await expect(this.page.locator('#fromAccountIdResult')).toContainText(fromAccount);
        await expect(this.page.locator('#toAccountIdResult')).toContainText(toAccount);
    }

}
