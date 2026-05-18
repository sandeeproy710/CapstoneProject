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

Locator: locator('//p[@class="smallText"]')
Expected substring: "san"
Received string:    "Welcome John Smith"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('//p[@class="smallText"]')
    13 × locator resolved to <p class="smallText">…</p>
       - unexpected value "Welcome John Smith"

```

```yaml
- paragraph: Welcome John Smith
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
> 13 |         await expect(locator).toContainText(expectedText);
     |                               ^ Error: expect(locator).toContainText(expected) failed
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