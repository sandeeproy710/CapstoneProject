# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank.spec.ts >> ParaBank transfer UI scenarios from manual QA >> Transfer Funds with Valid Accounts
- Location: tests\parabank.spec.ts:38:9

# Error details

```
"beforeAll" hook timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Target page, context or browser has been closed
Call log:
  - waiting for locator('#newAccountId') to be visible
    35 × locator resolved to hidden <a href="" id="newAccountId"></a>

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome san Roy
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Error!" [level=1] [ref=e51]
        - paragraph [ref=e52]: An internal error has occurred and has been logged.
  - generic [ref=e54]:
    - list [ref=e55]:
      - listitem [ref=e56]:
        - link "Home" [ref=e57] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e58]:
        - link "About Us" [ref=e59] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "Services" [ref=e61] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e62]:
        - link "Products" [ref=e63] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e64]:
        - link "Locations" [ref=e65] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e66]:
        - link "Forum" [ref=e67] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e68]:
        - link "Site Map" [ref=e69] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e70]:
        - link "Contact Us" [ref=e71] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e72]: © Parasoft. All rights reserved.
    - list [ref=e73]:
      - listitem [ref=e74]: "Visit us at:"
      - listitem [ref=e75]:
        - link "www.parasoft.com" [ref=e76] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | import { BasePage } from "../Base/BasePage";
  3  | 
  4  | export default class CreateAccount {
  5  |     private page: Page;
  6  |     constructor(page: Page) {
  7  |         this.page = page;
  8  |     }
  9  |     async newAccount(check: string, acc: string) {
  10 |         const baspage: BasePage = new BasePage(this.page);
  11 |         await this.page.locator('//select[@class="input"]').first().selectOption(check);
  12 |         await this.page.locator('//select[@id="fromAccountId"]').selectOption(acc);
  13 |         await this.page.locator('//input[@value="Open New Account"]').click();
  14 | 
  15 | 
  16 |     }
  17 | 
  18 |     async extractAccount(): Promise<string> {
> 19 |         await this.page.waitForSelector('#newAccountId');
     |                         ^ Error: page.waitForSelector: Target page, context or browser has been closed
  20 |         return await this.page.locator('//a[@id="newAccountId"]').textContent() ?? "";
  21 |     }
  22 | }
```