# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank.spec.ts >> ParaBank transfer UI scenarios from manual QA >> Zero Amount Validation
- Location: tests\parabank.spec.ts:134:9

# Error details

```
Error: expect(locator).not.toContainText(expected) failed

Locator: locator('#showResult h1').first()
Expected substring: not "Transfer"
Received string: "Transfer Complete!"
Timeout: 5000ms

Call log:
  - Expect "not toContainText" with timeout 5000ms
  - waiting for locator('#showResult h1').first()
    13 × locator resolved to <h1 class="title">Transfer Complete!</h1>
       - unexpected value "Transfer Complete!"

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome san Roy
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Error!" [level=1]
- paragraph: An internal error has occurred and has been logged.
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | 
  3  | export default class Assert {
  4  |     private page: Page;
  5  |     constructor(page: Page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     async textAssert(locator: Locator, expectedText: string) {
  10 |         await expect(locator).toBeVisible();
  11 |         await expect(locator).toContainText(expectedText);
  12 |     }
  13 |     async neagtiveAssert(loca: Locator) {
> 14 |         await expect(loca).not.toContainText('Transfer');
     |                                ^ Error: expect(locator).not.toContainText(expected) failed
  15 |     }
  16 |     async errorAssert(loca: Locator) {
  17 |         await expect(loca).toBeVisible();
  18 |     }
  19 | 
  20 |     async successAssert(loca: Locator) {
  21 |         await expect(loca).toContainText('Transfer Complete!');
  22 |     }
  23 | 
  24 |     async balanceAssert(beforeBalance: number, transferAmount: number, updatedBalance: number) {
  25 |         expect(updatedBalance).toBe(beforeBalance - transferAmount);
  26 |     }
  27 | }
```