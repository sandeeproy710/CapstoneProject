import { Page } from "@playwright/test";
import { BasePage } from "../Base/BasePage";
export default class Dashboardpage {
    private page : Page;
    constructor(page:Page){
        this.page=page;
    }

    async registerAccount(){
        const basepage: BasePage = new BasePage(this.page);
        let loca=  this.page.getByRole('link', { name: 'Open New Account' });
        await basepage.click(loca);
    }
    async accountOverview(){
        const basepage: BasePage = new BasePage(this.page);
        let loca=  this.page.getByRole('link', { name: 'Accounts Overview' });
        await basepage.click(loca);
    }
    async fundTransfer(){
        const basepage: BasePage = new BasePage(this.page);
        let loca=  this.page.getByRole('link', { name: 'Transfer Funds' });
        await basepage.click(loca);
    }
}