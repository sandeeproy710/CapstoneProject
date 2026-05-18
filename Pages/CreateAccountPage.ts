import { Page } from "@playwright/test";
import { BasePage } from "../Base/BasePage";

export default class CreateAccount {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async newAccount(check: string, acc: string) {
        const baspage: BasePage = new BasePage(this.page);
        await this.page.locator('//select[@class="input"]').first().selectOption(check);
        await this.page.locator('//select[@id="fromAccountId"]').selectOption(acc);
        await this.page.locator('//input[@value="Open New Account"]').click();


    }

    async extractAccount(): Promise<string> {
        await this.page.waitForSelector('#newAccountId');
        return await this.page.locator('//a[@id="newAccountId"]').textContent() ?? "";
    }
}