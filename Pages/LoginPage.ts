import { Page } from "@playwright/test";
import { BasePage } from "../Base/BasePage";
import Assert from "../Utils/Assert";
import loginData from '../test-data/login.json'
export default class LoginPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async login(id: string, pass: string) {
        const basepage: BasePage = new BasePage(this.page);
        const assert:Assert = new Assert(this.page);
        let login = this.page.locator('input[name="username"]');
        await basepage.fill(login, id);
        login = this.page.locator('input[name="password"]');
        await basepage.fill(login, pass);
        login = this.page.getByRole('button', { name: 'Log In' });
        await basepage.click(login);
        const nameLoc = await this.page.locator('//p[@class="smallText"]');
        await assert.textAssert(nameLoc,loginData.name);

    }


}