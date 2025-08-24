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

DemoWebsites for Practice:
--------------------------
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
https://testautomationpractice.blogspot.com/
https://www.nopcommerce.com/en/register
https://demoblaze.com/
https://ui.vision/
https://the-internet.herokuapp.com/


Example of Structure of Tests of a website:
-------------------------------------------
20 pages -
pageObject - 20 "js" file - We will not use tag in this file
(in real time we will have 300-400 testcase.. So we need nested files)
test
 - Admin
   - Job
     - Jobtest01.spec.js 
        +test('')   //inside each test i can give the tags(@smoke, @sanity, @regression...), jira id , steps...
        +test('') 
     - Jobtest02.spec.js
   - user
 - Leaves
 - Dashboard


 ----------------------------
 when you have a site with 15 pages, playwright sugesst "to use POM(Page Object Model) style of writing
 - create a file called : "Class File" (will be under on of folder named: page object) ..ok what is inside this file?
   1: "page locators"  (inside this folder we will have 15 files , each for locators of a page)
   2: "page functions" (contain actual logic that is happening in a articular page.. such as login, click, ..inside this file .. crete functions that give the "locator' as input)
 - we also have that famous "test" foleder ...which contains all the test files:
   - loginTest.spec.js
   - omepageTest.spec.js
   - ....

------------------------------
Test Cases: Add a New Pet API
-----------------------------

1.Add Pet with Valid Data Input: Valid pet object (all required fields) Expected Result: Status code 200 OK, response contains the created pet object with matching data.

2.Add Pet with Missing Required Field (name) Input: Pet object missing the name field Expected Result: Status code 400 Bad Request or appropriate error, error message indicating missing name.

3.Add Pet with Invalid Data Type (id as string) Input: Pet object with id as "abc" (string) Expected Result: Status code 400 Bad Request or appropriate error, error message indicating invalid data type.

4.Add Pet with Empty photoUrls Array Input: Pet object with photoUrls: [] Expected Result: Status code 200 OK, response contains the created pet object with empty photoUrls.

5.Add Pet with Duplicate id Input: Pet object with an id that already exists Expected Result: Status code 409 Conflict or appropriate error, error message indicating duplicate ID.

6.Add Pet with Invalid status Value Input: Pet object with status: "unknown" Expected Result: Status code 400 Bad Request or appropriate error, error message indicating invalid status value.

7.Add Pet with Large Payload Input: Pet object with very large arrays for photoUrls and tags Expected Result: Status code 200 OK or 413 Payload Too Large if limits are exceeded.

8.Add Pet with Special Characters in Fields Input: Pet object with special characters in name, category.name, and tags.name Expected Result: Status code 200 OK, response contains the created pet object with special characters preserved.

9.Add Pet with Only Required Fields Input: Pet object with only required fields (id, name, photoUrls, status) Expected Result: Status code 200 OK, response contains the created pet object.

10.Add Pet with Null Values in Optional Fields Input: Pet object with category and tags set to null Expected Result: Status code 200 OK, response contains the created pet object with category and tags as null.









