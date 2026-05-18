import { Page } from "@playwright/test";

export default class AccountOverview{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    
    async extractAccount(): Promise<string> {
    const text = await this.page.locator('//table[@id="accountTable"]/tbody/tr/td').first().textContent();
    return text ?? '';

}
}