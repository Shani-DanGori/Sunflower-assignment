import { Page } from '@playwright/test';
import { logInPageLocators } from '../configs/config';

export class LoginPage {
  constructor(private page: Page) {}

  async login(email: string, password: string): Promise<void> {
    await this.page.locator(logInPageLocators.logInButton).click();

    await this.page.locator(logInPageLocators.emailField).fill(email);
    await this.page.locator(logInPageLocators.passwordField).fill(password);
    await this.page.locator(logInPageLocators.submitLogIn).click();
  }
}