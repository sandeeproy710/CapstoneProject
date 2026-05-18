# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank.spec.ts >> ParaBank transfer UI scenarios from manual QA >> Same Account Transfer Validation
- Location: tests\parabank.spec.ts:85:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//p[@class="smallText"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//p[@class="smallText"]')

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: 9fd8d57a091241e5 • 2026-05-18 06:34:03 UTC"
  - heading "You are being rate limited" [level=2]
- heading "What happened?" [level=2]
- paragraph: The owner of this website (parabank.parasoft.com) has banned you temporarily from accessing this website.
- paragraph:
  - text: Please see
  - link "https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/":
    - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/
  - text: for more details.
- text: Was this page helpful?
- button "Yes"
- button "No"
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: 9fd8d57a091241e5
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing
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
> 11 |         await expect(locator).toBeVisible();
     |                               ^ Error: expect(locator).toBeVisible() failed
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
  24 |         await expect(loca).toContainText('Transfer');
  25 |     }
  26 | }
```