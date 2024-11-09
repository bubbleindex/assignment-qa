import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const users = [
    { email: 'test1@gmail.com', password: 'test1' },
    { email: 'test2@gmail.com', password: 'test2' }
];
test.use({
    headless: false,
    launchOptions: {
      slowMo: 300, 
    },
  });

test.describe('Login Page End-to-End Tests', () => {
    users.forEach(user => {
        test(`should login successfully with ${user.email} on multiple browsers`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigate();
            await loginPage.enterEmail(user.email);
            await loginPage.enterPassword(user.password);
            await loginPage.clickSignIn();
            await loginPage.handleDialog("Login success"); 
        });
    });
    test('should display error message with correct email but incorrect password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.enterEmail('test1@gmail.com');
        await loginPage.enterPassword('test2');
        await loginPage.clickSignIn();
        await loginPage.handleDialog("Login failed"); 
    });

    test('should display error message with incorrect email but correct password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.enterEmail('test3@gmail.com');
        await loginPage.enterPassword('test1');
        await loginPage.clickSignIn();
        await loginPage.handleDialog("Login failed");
    });
});