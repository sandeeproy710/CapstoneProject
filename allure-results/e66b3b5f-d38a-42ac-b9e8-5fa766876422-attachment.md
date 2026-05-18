# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank.spec.ts >> ParaBank transfer UI scenarios from manual QA >> Negative Amount Validation
- Location: tests\parabank.spec.ts:101:9

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
- heading "Transfer Complete!" [level=1]
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
> 17 |         await expect(loca).not.toContainText('Transfer');
     |                                ^ Error: expect(locator).not.toContainText(expected) failed
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