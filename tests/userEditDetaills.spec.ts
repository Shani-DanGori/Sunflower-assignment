import { test, expect } from '@playwright/test';
import { randomUUID } from 'crypto';
import {BaseConfig, userDataConfig} from '../config/config'


test('User Profile Update Automation Test', async ({ page }) => {
  await page.goto(BaseConfig.baseUrl);

  // Step 2: Log in
  await page.locator('[data-testid="lobby-login-btn"]').click();

  await page.fill('input[name="email"]', userDataConfig.email);
  await page.fill('input[name="password"]', userDataConfig.password);
  await page.locator('[class="button button--main _logInButton_77srx_17"]').click(); 
  // // Step 3: Click on the Menu button
  // await page.click('button#menu'); // Adjust the selector as necessary

  // Step 4: Click on 'My Account'
  await page.locator('[class="crown-wrapper"]').click; // Adjust the selector as necessary
  await page.locator('[class="button button--light"]').click();
  await page.locator('[class="_pen_a31cg_31"]').click();

  expect( page.locator('[data-testid="nicknameInput"]')).toBeEditable();

  // // Step 5: In the profile dialog, click the Edit (pencil) button
  // await page.click('button.edit-profile'); // Adjust the selector as necessary

  // // Step 6: Update the username with a random string
  // const randomUsername = 'user_' + randomUUID().slice(0, 8);
  // await page.fill('input[name="username"]', randomUsername); // Adjust selector as necessary

  // // Step 7: Choose a random avatar (You can select a random image if possible)
  // await page.click('button.avatar-selector'); // Adjust the selector as necessary
  // await page.click('div.avatar-option:nth-child(2)'); // Adjust the selector as necessary

  // // Step 8: Click Apply
  // await page.click('button.apply-changes'); // Adjust the selector as necessary

  // // Step 9: Validation - Open 'My Profile' and verify that the username has changed
  // await page.click('text=My Profile');
  // const usernameText = await page.textContent('span.username'); // Adjust selector as necessary
  // expect(usernameText).toContain(randomUsername);

  // // Step 10: Return to the Lobby
  // await page.click('button.return-to-lobby'); // Adjust the selector as necessary

  // // Step 11: Print the user’s coin amount for both coin types
  // await page.click('button.coin-switcher'); // Assuming a coin switcher button
  // const coinAmount1 = await page.textContent('span.coin-type1'); // Adjust selector as necessary
  // console.log('Coin Amount Type 1:', coinAmount1);

  // await page.click('button.coin-switcher'); // Switch coin type
  // const coinAmount2 = await page.textContent('span.coin-type2'); // Adjust selector as necessary
  // console.log('Coin Amount Type 2:', coinAmount2);
});