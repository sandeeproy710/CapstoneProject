# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank.spec.ts >> ParaBank transfer UI scenarios from manual QA >> Success Message Validation
- Location: tests\parabank.spec.ts:118:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.title h1').first()
Expected substring: "Transfer"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.title h1').first()

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
- heading "Transfer Complete!" [level=1]
- paragraph: "$100.00 has been transferred from account #16119 to account #18783."
- paragraph: See Account Activity for more details.
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
  4  |     private page:Page;
  5  |     constructor(page:Page){
  6  |         this.page=page;
  7  |     }
  8  | 
  9  |     async textAssert(locator: Locator, expectedText: string) {
  10 | 
  11 |         await expect(locator).toBeVisible();
  12 | 
  13 |         await expect(locator).toContainText(expectedText);
  14 | 
  15 |     }
  16 |     async neagtiveAssert(loca:Locator){
  17 |         await expect(loca).not.toContainText('Transfer');
  18 |     }
  19 |     async errorAssert(loca:Locator){
  20 |         await expect(loca).toBeVisible();
  21 |     }
  22 | 
  23 |     async successAssert(loca:Locator){
> 24 |         await expect(loca).toContainText('Transfer');
     |                            ^ Error: expect(locator).toContainText(expected) failed
  25 |     }
  26 | }
```