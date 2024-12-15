import { Page } from '@playwright/test';
import { myAccountPageLocators } from '../configs/config';

export class MyAccountPage {
  constructor(private page: Page) {
  }

  async editUserDetails(): Promise<void> {
    await this.page.locator(myAccountPageLocators.editUserDetailsButton).click();
  }

  async enterMyProfilePage(): Promise<void> {
    await this.page.getByRole('button', {name : myAccountPageLocators.myProfileButton}).click(); 
}

async exitMyProfilePage(): Promise<void> {
    await this.page.locator(myAccountPageLocators.exitMyProfilePage).click();
}

async exitMyAccountPage(): Promise<void> {
    await this.page.locator(myAccountPageLocators.exitMyAccountPage).click({force:true});
}

}