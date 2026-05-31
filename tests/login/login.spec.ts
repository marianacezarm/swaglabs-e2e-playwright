import { test } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { UserPayload } from '../../payloads/user.payload';

test.describe('User login', () => {

    test.describe('Happy Path', () => {

        test('Login with standard user', async ({ page }) => {
            const loginPage = new LoginPage(page)
            const user = UserPayload.standardUser()

            await loginPage.goto()
            await loginPage.login(user.username, user.password)
            
            await loginPage.assertUserIsLoggedIn()

        })
    })
})

