import { Page } from '@playwright/test';
import { homePageLocators } from '../configs/config';

export class HomePage {
  constructor(private page: Page) {
  }
  async enterMenu(): Promise<void> {
    await this.page.locator(homePageLocators.menuButton).click(); 
  }

  async openMyAccount(): Promise<void> {
    await this.page.getByRole('button', {name : homePageLocators.myAccountButton}).click(); 
  }

  async amountUserCoinsBothTypes(): Promise<void> {
    const firstModeUserCoins = await this.page.locator(homePageLocators.coinsAmount).textContent(); 
    await this.page.locator(homePageLocators.switchModeButton).click();
    let secondModeUserCoinsPrev = await this.page.locator(homePageLocators.coinsAmount).textContent();
    let secondModeUserCoinsCurrent = await this.page.locator(homePageLocators.coinsAmount).textContent();

    while (secondModeUserCoinsPrev !== secondModeUserCoinsCurrent) {
      await this.page.waitForTimeout(500);
      secondModeUserCoinsPrev=secondModeUserCoinsCurrent;
      secondModeUserCoinsCurrent = await this.page.locator(homePageLocators.coinsAmount).textContent();
    } 
    
    console.log(`first mode user coins amount is ${firstModeUserCoins} `);
    console.log(`second mode user coins amount is ${secondModeUserCoinsCurrent}`);
    await this.page.locator(homePageLocators.switchModeButton).click(); 
   }
}