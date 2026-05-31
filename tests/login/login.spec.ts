import { test } from '../../fixtures/base-test'
import { UserPayload } from '../../payloads/user.payload'
import { LoginErrors } from '../../constants/login-errors'

test.describe('User login', () => {
    test.describe('Happy Path', () => {
        const validUsers = UserPayload.validUsers()

        validUsers.forEach((user) => {
            test(`Should login with ${user.testName}`, async ({
                loginPage,
            }) => {
                await loginPage.goto()

                await loginPage.login(user.username, user.password)

                await loginPage.assertUserIsLoggedIn()
            })
        })
    })

    test.describe('Authentication failures', () => {
        const invalidUsers = UserPayload.invalidUsers()

        invalidUsers.forEach((user) => {
            test(`Should not login with ${user.testName}`, async ({
                loginPage,
            }) => {
                await loginPage.goto()

                await loginPage.login(user.username, user.password)

                await loginPage.assertErrorMessage(
                    LoginErrors.INVALID_CREDENTIALS
                )
            })
        })

        test('Should not login with locked out user', async ({ loginPage }) => {
            const user = UserPayload.lockedOutUser()

            await loginPage.goto()

            await loginPage.login(user.username, user.password)

            await loginPage.assertErrorMessage(LoginErrors.LOCKED_OUT)
        })
    })
})
