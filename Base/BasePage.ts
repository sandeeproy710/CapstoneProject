import { Page, Locator } from "@playwright/test";
export class BasePage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async getText(locator: string) {
        return await this.page.textContent(locator);
    }

    async waitForElement(locator: string) {
        await this.page.waitForSelector(locator);
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com');
    }
}

