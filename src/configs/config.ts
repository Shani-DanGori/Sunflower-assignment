export const userDataConfig = {
    email: 'watchdogstest02+11@sunfltd.com',
    password: '123456',
    newUsername: 'nerwNickName',
  };

export const baseConfig = {
    baseUrl: 'https://app.dev.crowncoinscasino.com/'
};

export const logInPageLocators = {
  logInButton : '[data-testid="lobby-login-btn"]' , 
  emailField : '[data-testid="email-input"]', 
  passwordField : '[data-testid="password-input"]', 
  submitLogIn : '[data-testid="login-submit-btn"]'
}

export const homePageLocators = {
  menuButton : '[data-testid="menuButton"]',
  myAccountButton : 'My Account',
  coinsAmount : '[data-testid="lobby-balance-bar"]',
  switchModeButton : '[data-testid="coin-switcher"]'

}

export const myAccountPageLocators = {
  editUserDetailsButton : '[data-testid="editAvatar"]',
  myProfileButton : 'MY PROFILE',
  myProfileNickName : '[data-testid="my-profile-nickname"]',
  exitMyProfilePage : '[data-testid="profileInfoDialog"] >> [data-testid="closeButton"]',
  exitMyAccountPage : '[data-testid="accountDialog"] >> [data-testid="closeButton"]'
}

export const editUserDetailsPageLocators = {
  nicknameInput :'[data-testid="nicknameInput"]',
  validNickName : '[class="_validity_nil5y_33"]',
  applyButton : 'Apply'
}