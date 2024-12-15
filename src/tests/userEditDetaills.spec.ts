import {
  baseConfig,
  myAccountPageLocators,
  userDataConfig,
} from "../configs/config";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/logInPage";
import { test, expect } from "@playwright/test";
import { MyAccountPage } from "../pages/myAccountPage";
import { EditUserDetailsPage } from "../pages/editUserDetailsPage";

let homePage: HomePage;
let myAccountPage: MyAccountPage;
let editUserDetailsPage: EditUserDetailsPage;

test.beforeEach('log in' ,async ({page}) => {
  await page.goto(baseConfig.baseUrl);

  const logInPage = new LoginPage(page);
  await logInPage.login(userDataConfig.email, userDataConfig.password);
  
  homePage = new HomePage(page);
  myAccountPage = new MyAccountPage(page);
  editUserDetailsPage = new EditUserDetailsPage(page);
});

test("User Profile Update Nickname Automation Test", async ({ page }) => {
  await homePage.enterMenu();

  await homePage.openMyAccount();

  await myAccountPage.editUserDetails();

  await editUserDetailsPage.updateUserName(userDataConfig.newUsername);

  await editUserDetailsPage.updateRandomAvatar();

  await myAccountPage.enterMyProfilePage();

  expect(await page.locator(myAccountPageLocators.myProfileNickName).textContent()
  ).toBe(userDataConfig.newUsername);
});

test.afterEach('go back to lobby and print coins amount' ,async ({}) => {
   await myAccountPage.exitMyProfilePage();
   await myAccountPage.exitMyAccountPage();
 
   await homePage.amountUserCoinsBothTypes();
});
