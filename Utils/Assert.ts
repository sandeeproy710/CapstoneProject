import { expect, Locator, Page } from "@playwright/test";

export default class Assert {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async textAssert(locator: Locator, expectedText: string) {
        await expect(locator).toBeVisible();
        await expect(locator).toContainText(expectedText);
    }
    async neagtiveAssert(loca: Locator) {
        await expect(loca).not.toContainText('Transfer');
    }
    async errorAssert(loca: Locator) {
        await expect(loca).toBeVisible();
    }

    async successAssert(loca: Locator) {
        await expect(loca).toContainText('Transfer Complete!');
    }
}