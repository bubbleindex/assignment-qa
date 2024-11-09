import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput;
    readonly passwordInput;
    readonly signInButton;
    readonly successPopup;
    readonly failurePopup;
    readonly popupOkButton;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('input[placeholder="Enter your email"]');
        this.passwordInput = page.locator('input[id="password"]');
        this.signInButton = page.locator('button[id="btn-sign-in"]');
        this.successPopup = page.locator('text="Login success"');
        this.failurePopup = page.locator('text="Login failed"');
        this.popupOkButton = page.locator('button:has-text("OK")');
    }

    async navigate() {
        await this.page.goto('https://assignment-qa.vercel.app/');
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }

    async isLoginSuccessPopupVisible() {
        return await this.successPopup.isVisible();
    }

    async isLoginFailedPopupVisible() {
        return await this.failurePopup.isVisible();
    }

    async clickOkOnPopup() {
        await this.popupOkButton.click();
    }
    async handleDialog(expectedMessage: string) {
        this.page.once('dialog', async (dialog) => {
            const message = dialog.message();
            expect(message).toBe(expectedMessage);
            await dialog.accept(); 
        });
    }
}
