import { test, expect } from '@playwright/test';
import { SlidingCurtainTruck } from '../page-objects/matching-equipment-ad.js';
import loginData from '../fixtures/login.json';
import { FindTruckPage } from '../page-objects/findTruckPage';

test.describe('I can navigate to the Website', () => {
  test.beforeEach(async ({ page, context }) => {
    // use Basic authentication
    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${btoa(`${loginData.username}:${loginData.password}`)}`
    })
    await page.goto('/marktplaats/vrachtwagen/subcategorie:schuifzeilen/');
  });

test("Find the Truck by filtering", async ({ page }) => {
    const findTruckPage = new FindTruckPage(page);
    await findTruckPage.setYearOfConstruction('2018', '2023');
    await findTruckPage.setUsageInKilometersTo('300000');
    await findTruckPage.setNumberOfCylinders('6');
    await findTruckPage.selectFirstResult();

    const slidingCurtainTruck = new SlidingCurtainTruck(page);
    await slidingCurtainTruck.navigateToTruck();
  });

});
