import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {

    private get inventoryList(){
        return this.page.locator('.inventory_list')
    }

    private get inventoryItems() {
        return this.inventoryList.locator('.inventory_item')
    }

    goto() {
        this.navigate()
    }

    async assertInventoryIsVisible() {

        await expect(this.inventoryList)
            .toBeVisible()
    }

    async assertInventoryItemsAreComplete() {

        const count = await this.inventoryItems.count()

        for (let i = 0; i < count; i++) {

            const item = this.inventoryItems.nth(i)

            await expect(
                item.locator('.inventory_item_name')
            ).not.toBeEmpty()

            await expect(
                item.locator('.inventory_item_desc')
            ).not.toBeEmpty()

            await expect(
                item.locator('.inventory_item_price')
            ).not.toBeEmpty()

            await expect(
                item.locator('img')
            ).toBeVisible()

        }
    }
}