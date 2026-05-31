import { test } from "../../fixtures/base-test";
import { UserPayload } from "../../payloads/user.payload";

const validUsers = UserPayload.validUsers()

test.describe('Inventory page', () => {

    validUsers.forEach((user) => {

        test(
            `Should display inventory items for ${user.testName}`, 
            async ({ inventoryPage, loginPage }) => {
            
                await loginPage.loginAs(user)

                await inventoryPage.assertInventoryIsVisible()

                await inventoryPage.assertInventoryItemsAreComplete()
            }
        )
    })
})