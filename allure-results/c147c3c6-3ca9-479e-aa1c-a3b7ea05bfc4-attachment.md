# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank.spec.ts >> ParaBank transfer UI scenarios from manual QA >> Success Message Validation
- Location: tests\parabank.spec.ts:118:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#amount')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - heading "Error 1015" [level=1] [ref=e5]
    - generic [ref=e6]: "Ray ID: 9fd9397618c2bb92 •"
    - generic [ref=e7]: 2026-05-18 07:42:18 UTC
    - heading "You are being rate limited" [level=2] [ref=e8]
  - generic [ref=e10]:
    - heading "What happened?" [level=2] [ref=e11]
    - paragraph [ref=e12]: The owner of this website (parabank.parasoft.com) has banned you temporarily from accessing this website.
    - paragraph [ref=e13]:
      - text: Please see
      - link "https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/" [ref=e14] [cursor=pointer]:
        - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/
      - text: for more details.
  - generic [ref=e16]:
    - text: Was this page helpful?
    - button "Yes" [ref=e17] [cursor=pointer]
    - button "No" [ref=e18] [cursor=pointer]
  - paragraph [ref=e20]:
    - generic [ref=e21]:
      - text: "Cloudflare Ray ID:"
      - strong [ref=e22]: 9fd9397618c2bb92
    - text: •
    - generic [ref=e23]:
      - text: "Your IP:"
      - button "Click to reveal" [ref=e24] [cursor=pointer]
      - text: •
    - generic [ref=e25]:
      - text: Performance & security by
      - link "Cloudflare" [ref=e26] [cursor=pointer]:
        - /url: https://www.cloudflare.com/5xx-error-landing
```

# Test source

```ts
  1  | import { APIRequestContext, expect, Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "../Base/BasePage";
  3  | export default class TransferFundsPage {
  4  |     private page: Page;
  5  |     constructor(page: Page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  | 
  10 |     async transferFunds(
  11 |         amount: string,
  12 |         fromAccount: string,
  13 |         toAccount: string
  14 |     ) {
  15 |         const basepage: BasePage = new BasePage(this.page);
> 16 |         await this.page.locator('#amount').fill(amount);
     |                                            ^ Error: locator.fill: Target page, context or browser has been closed
  17 |         await this.page.locator('#fromAccountId').selectOption(fromAccount);
  18 |         await this.page.locator('#toAccountId').selectOption(toAccount);
  19 |         await this.page.locator('input[value="Transfer"]').click();
  20 |     }
  21 | 
  22 | 
  23 |     async transferFundsValidation(
  24 |         fromAccount: string,
  25 |         toAccount: string
  26 |     ) {
  27 |         const basepage: BasePage = new BasePage(this.page);
  28 |         await this.page.locator('#fromAccountId').selectOption(fromAccount);
  29 |         await this.page.locator('#toAccountId').selectOption(toAccount);
  30 |         await this.page.locator('input[value="Transfer"]').click();
  31 |     }
  32 | 
  33 | 
  34 |     async validateTransfer(
  35 |         amount: string,
  36 |         fromAccount: string,
  37 |         toAccount: string
  38 |     ) {
  39 |         await expect(this.page.locator('//h1[@class="title"]').first()).toContainText('Transfer');
  40 |         await expect(this.page.locator('#amountResult')).toContainText(`$${amount}.00`);
  41 |         await expect(this.page.locator('#fromAccountIdResult')).toContainText(fromAccount);
  42 |         await expect(this.page.locator('#toAccountIdResult')).toContainText(toAccount);
  43 |     }
  44 | 
  45 |     //     // Extract Success Message
  46 |     //     async getSuccessMessage(): Promise<string> {
  47 | 
  48 |     //         return await this.successMessage
  49 |     //             .textContent() ?? "";
  50 | 
  51 |     //     }
  52 | 
  53 |     // }
  54 | 
  55 |     async extractBalance(apiContext: APIRequestContext, accountId: string): Promise<number> {
  56 |         const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`);
  57 |         const xml = await response.text();
  58 |         const match = xml.match(/<balance>(.*?)<\/balance>/);
  59 |         if (!match || !match[1]) {
  60 |             throw new Error(
  61 |                 'Balance not found in XML response'
  62 |             );
  63 |         }
  64 |         return parseFloat(match[1]);
  65 | 
  66 |     }
  67 | }
  68 | 
```