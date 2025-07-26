## Tester Remarks
E2E test covered upto;
 - Visit the **test** website of Beequip (https://staging.beequip.com/)
    - This website is protected by Basic authentication, in the `tests/example.spec.js` credentials are provided to run the Playwright tests
    - You can use the same credentials to navigate the page on your own browser
  - Navigate from the website to the Marketplace
  - Find a _Vrachtwagen_ with _Schuifzeilen_ that fits the following requirements:
    - With a _bouwjaar_ between 2018 and 2023
    - With a _kilometerstand_ less than 300.000 kilometers
    - With six _cilinders_
  - Navigate to the ad of the found equipment
  - It will validate the monthly rate for the lease amount

    Unfortunately, I couldnt extend the automation to rest of the steps with staging URL, the workflow is different than production url, and I'm directing to different URL.
<img width="2862" height="1504" alt="Screenshot 2025-07-26 at 14 55 46" src="https://github.com/user-attachments/assets/937d7d1a-f7ec-413e-8dac-4234b5bacd7a" />

Therefore, not convered section;
  - Calculate a monthly price using the lease calculator
    - Search for Beequip as the company (_KVK-nummer:_ 63204258)
    - Use the `@example.com` or `@mailinator.com` domein
    - **Caution:** Don't calculate for other companies, to prevent burdening our sales team
  - Increase the _aanbetaling_ and _looptijd_ to reduce the monthly price
  - Request a quote
  - **Stretch goal:** Add assertions for the email contents
  - **Stretch goal:** Add data-driving tests for the _aanbetaling_ and _looptijd_ 

## Execute the Project with below commands;

Folder Structure:
1. GitHub Actions
2. Fixture (only contains login.json) 
3. Page-Objects - Contains all page objects
4. Tests - Contains all test cases. 

Getting Started

Make sure you have NodeJS installed.
* git clone https://github.com/ArunaMendis/BeeQuip-Assessment.git
* cd Aruna - Beequip -Assessment
* ‘yarn install’ or ‘yarn playwright install’
* To run the project with - Playwright Runner - yarn playwright test —ui
* To directly run and generate report
    * yarn playwright test
    * yarn playwright show-report

Sample execution Report
<img width="2094" height="552" alt="Screenshot 2025-07-26 at 14 49 57" src="https://github.com/user-attachments/assets/b266ded8-71d5-4704-9473-fcdc6810004c" />
