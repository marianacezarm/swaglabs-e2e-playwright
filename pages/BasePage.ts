import { Page } from '@playwright/test'; 

export class BasePage { 
    constructor(protected page: Page) {}

    async navigate(path:string = ''){
        const baseUrl = process.env.BASE_URL || 'https://www.saucedemo.com/';
        await this.page.goto(`${baseUrl}${path}`);
    }
}