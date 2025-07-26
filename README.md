## Tester Remarks
This project aims to simulate a realistic end-to-end user journey: from landing on the Beequip staging website, navigating through the marketplace, and validating lease information of filtered inventory listings. The automation approach follows modular design using Page Object Models (POM), data fixtures, and robust test selectors with Playwright. 
However, test navigates directly to the “subcategorie:schuifzeilen” listing page to ensure filters to skip page direction issue.

##E2E test - covered flow;
- Visit the staging environment of Beequip → https://staging.beequip.com/
  - The site is protected by Basic Authentication; credentials are defined in fixtures/login.json and used automatically in the test runner (tests/launchBeequip.spec.js)
- Navigate to the Marketplace
- Search for a Vrachtwagen with subtype Schuifzeilen, applying the following filters:
  - Bouwjaar between 2018–2023
    - Kilometerstand under 300,000 km
    - Vehicles with six cilinders
- Navigate into the ad for the matched vehicle
- Validate that a monthly lease rate is displayed for that vehicle

##E2E test - Not Covered (Due to staging environment redirect issues)

Unfortunately, the automated test couldn’t proceed further with the lease simulator workflow, due to a redirect issue in the staging environment that behaves differently than production. Therefore, the following steps are currently not automated:
<img width="2862" height="1504" alt="Screenshot 2025-07-26 at 14 55 46" src="https://github.com/user-attachments/assets/937d7d1a-f7ec-413e-8dac-4234b5bacd7a" />

Therefore, thing not covered;
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
1. .github         → GitHub Actions config (CI)
2. fixtures        → Test data (e.g., login credentials)
3. page-objects    → All page object files (modularized)
4. tests           → Playwright test files

Getting Started

- git clone https://github.com/ArunaMendis/BeeQuip-Assessment.git
- cd BeeQuip-Assessment/Aruna - Beequip -Assessment/
- Install dependencies:```yarn install```
  ```yarn playwright install```
- Run the tests via Playwright Test UI:
  ```yarn playwright test --ui```
- Run tests & generate HTML report:
  ```yarn playwright test```
  ```yarn playwright show-report```

Sample execution Report
<img width="2094" height="552" alt="Screenshot 2025-07-26 at 14 49 57" src="https://github.com/user-attachments/assets/b266ded8-71d5-4704-9473-fcdc6810004c" />
