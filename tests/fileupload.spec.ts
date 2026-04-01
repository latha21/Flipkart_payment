import {test,expect} from '@playwright/test';
test('fileupload functionality', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //const filePath = 'C://Users//Hema Kumar//Desktop//Automation_Playwright//TestData//Swathi Resume.pdf';
    await page.setInputFiles("//input[@id='singleFileInput']", "C://Users//Hema Kumar//Desktop//Automation_Playwright//TestData//Swathi Resume.pdf");
    /*
    await page.setInputFiles("//input[@id='multipleFileInput']", [
        'C://Users//Hema Kumar//Desktop//Automation_Playwright//TestData//Swathi Resume.pdf',
        'C://Users//Hema Kumar//Desktop//Automation_Playwright//TestData//Swathi Resume.pdf'
    ]);
    */
   await page.setDefaultTimeout(10000);
   await page.locator("//button[contains(text(),'Upload Single File')]").click();
await page.setDefaultTimeout(50000);
await page.locator("//div/p[@id='singleFileStatus']").waitFor({ state: 'visible' });
const statusText = await page.locator("//div/p[@id='singleFileStatus']").textContent();
expect(statusText).toContain('Single file selected: Swathi Resume.pdf');
});