Instalation and Setup
---------------------

Pre-requisite - 
  - VS Code - Visual Studio Code
    - http://code.visualstudio.com/download

  - nodeJS - Node Package Manager
    - https://nodejs.org/en/download

  - Microsoft Policy Issue - Open powersell in admin mode, Run this command:
    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Inrestricted -Force


Default commands from Playwright Installation:
----------------------------------------------

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright show-report
    To open last HTML report

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.



Other Editor
------------
 - Eclipse, PvCharm, IntelliJ, Cursor

Usefull material
----------------
 
 - spec files are called test case

 - Account on github.com
 - Install - git from git-scm website 
 - To check the Git Version - In terminal - git -v
 - Basic GIT Commands - https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html
        git config --global user.name "Sam Smith" git config --global user.email sam@example.com
        git config --global user.name "ishatesting7" git config --global user.email ishatesting7@gmail.com

Locators -
----------
Locators are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment.

from :  https://playwright.dev/docs/locators  :

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content. 
page.getByLabel() to locate a form control by associated label's text. 
page.getByPlaceholder() to locate an input by placeholder. 
page.getByAltText() to locate an element, usually image, by its text alternative. 
page.getByTitle() to locate an element by its title attribute. 
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

page.locator('CSS'):
HTML -
------
Tags - input/div/a/th/td/li/html/body/table/ 
Attributes - type, name, value, placeholder, id, class 
Values - text, email, E-Mail Address,

CSS
---
1- If you are aware about classname in the html structure then the css selector would be => .classname - (In case if there is space in the name of class please replace with '.')
2- If you are aware about id in the html structure then the css selector would be => #id = #input-email
3- If you are aware about attribute and value => [attribute='value'] = [id="input-email"]
4- If you are aware about tag, attribute and value => tag[attribute='value'] =input[id="input-email"]