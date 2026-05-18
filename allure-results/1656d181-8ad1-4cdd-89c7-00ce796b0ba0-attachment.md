# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> E2E API UI Validation >> Validate Balance After Transfer
- Location: tests\e2e.spec.ts:43:9

# Error details

```
TypeError: assert.textAssert is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Error!" [level=1] [ref=e45]
        - paragraph [ref=e46]: The username and password could not be verified.
  - generic [ref=e48]:
    - list [ref=e49]:
      - listitem [ref=e50]:
        - link "Home" [ref=e51]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e52]:
        - link "About Us" [ref=e53]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e54]:
        - link "Services" [ref=e55]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e56]:
        - link "Products" [ref=e57]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e58]:
        - link "Locations" [ref=e59]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e60]:
        - link "Forum" [ref=e61]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e62]:
        - link "Site Map" [ref=e63]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "Contact Us" [ref=e65]:
          - /url: contact.htm
    - paragraph [ref=e66]: © Parasoft. All rights reserved.
    - list [ref=e67]:
      - listitem [ref=e68]: "Visit us at:"
      - listitem [ref=e69]:
        - link "www.parasoft.com" [ref=e70]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | import { BasePage } from "../Base/BasePage";
  3  | import Assert from "../Utils/Assert";
  4  | import loginData from '../test-data/login.json'
  5  | export default class LoginPage {
  6  |     private page: Page;
  7  |     constructor(page: Page) {
  8  |         this.page = page;
  9  |     }
  10 |     async login(id: string, pass: string) {
  11 |         const basepage: BasePage = new BasePage(this.page);
  12 |         const assert:Assert = new Assert(this.page);
  13 |         let login = this.page.locator('input[name="username"]');
  14 |         await basepage.fill(login, id);
  15 |         login = this.page.locator('input[name="password"]');
  16 |         await basepage.fill(login, pass);
  17 |         login = this.page.getByRole('button', { name: 'Log In' });
  18 |         await basepage.click(login);
  19 |         const nameLoc = await this.page.locator('//p[@class="smallText"]');
> 20 |         await assert.textAssert(nameLoc,loginData.name);
     |                      ^ TypeError: assert.textAssert is not a function
  21 | 
  22 |     }
  23 | 
  24 | 
  25 | }
```