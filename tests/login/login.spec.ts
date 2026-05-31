import { test } from '../../fixtures/base-test'
import { LoginPage } from '../../pages/LoginPage'
import { UserPayload } from '../../payloads/user.payload'
import { LoginErrors } from '../../constants/login-errors'

test.describe('User login', () => {
    test.describe('Happy Path', () => {
        test('Should login with standard user', async ({ loginPage }) => {
            const user = UserPayload.standardUser()

            await loginPage.goto()
            await loginPage.login(user.username, user.password)

            await loginPage.assertUserIsLoggedIn()
        })
    })

    test.describe('Negative scenarios', () => {
        const invalidUsers = UserPayload.invalidUsers()

        invalidUsers.forEach((user) => {
            test(`Should not login with ${user.testName}`, async ({ loginPage }) => {

                await loginPage.goto()

                await loginPage.login(user.username, user.password)

                await loginPage.assertErrorMessage(LoginErrors.INVALID_CREDENTIALS)
            })
        })
    })
})
