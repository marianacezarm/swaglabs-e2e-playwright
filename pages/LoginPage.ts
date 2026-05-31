import { expect, Page } from '@playwright/test'; 
import { BasePage } from './BasePage';

export class LoginPage extends BasePage { 

    private get usernameInput() {
        return this.page.getByTestId('username')
    }

    private get passwordInput() {
        return this.page.getByTestId('password')
    }

    private get loginButton() {
        return this.page.getByTestId('login-button')
    }

    goto() {
        this.navigate()
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();    
    }

    async assertUserIsLoggedIn() {
        await expect(this.page).toHaveURL(/inventory/)
    }

}