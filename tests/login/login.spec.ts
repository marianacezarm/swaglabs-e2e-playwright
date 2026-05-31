import { test } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { UserPayload } from '../../payloads/user.payload'

test.describe('User login', () => {
    test.describe('Happy Path', () => {
        test('Should login with standard user', async ({ page }) => {
            const loginPage = new LoginPage(page)
            const user = UserPayload.standardUser()

            await loginPage.goto()
            await loginPage.login(user.username, user.password)

            await loginPage.assertUserIsLoggedIn()
        })
    })

    test.describe('Negative scenarios', () => {
        const invalidUsers = UserPayload.invalidUsers()

        invalidUsers.forEach((user) => {
            test(`Should not login with ${user.testName}`, async ({ page }) => {
                const loginPage = new LoginPage(page)

                await loginPage.goto()

                await loginPage.login(user.username, user.password)

                await loginPage.assertInvalidCredentials()
            })
        })
    })
})
