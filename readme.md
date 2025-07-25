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
