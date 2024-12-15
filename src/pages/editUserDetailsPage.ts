import { expect, Page } from '@playwright/test';
import { editUserDetailsPageLocators } from '../configs/config';

export class EditUserDetailsPage {
  constructor(private page: Page) {
  }
  
   randomUserName(): string {
   const newUserName =  `newUser${Math.floor(Math.random()*100)}`
   return newUserName
}
  
  async updateUserName(newNickName : string): Promise<void> {
    await this.page.locator(editUserDetailsPageLocators.nicknameInput).fill(newNickName);
    expect(this.page.locator(editUserDetailsPageLocators.validNickName)).toBeVisible(); 
 }

 async updateRandomAvatar(): Promise<void> {
    const number =  Math.floor(Math.random()*20)
    await this.page.locator(`[data-testid="avatar-image-${number}"]`).click(); 
    await this.page.getByRole('button', {name : editUserDetailsPageLocators.applyButton}).click(); 
 }
}