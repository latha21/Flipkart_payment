import { test,expect } from '@playwright/test';

test('assertions playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await expect(page).toHaveTitle('Google');
    //await expect(page).toHaveURL('https://www.google.com/');
    //await expect(page.locator("//div/p[contains(.,'Forgot your password')]")).toContainText('your password',{ ignoreCase: true });
    //await expect(page.locator("//div/p[contains(.,'Forgot your password')]")).toBeEnabled();
    //await page.locator('#news').getByRole('heading', { name: 'Write a java program to print' }).click();
  /*
   const value = { prop: 1 };
   expect(value).toBe(value);
   expect(value).not.toBe({});
   expect(value.prop).toBe(1);
   const value2 = await page.locator("//div/p[contains(.,'Forgot your password')]").inputValue();
    expect(value2).toBe(value); 
    expect(value2).not.toBe(value);
    
   //await expect(page.locator("//input[@name='username']")).toHaveAttribute("name");
   await expect(page.locator("//input[@name='username']")).toHaveCSS("color","rgba(0, 0, 0, 1)");
   await expect(page.locator("//input[@name='username']")).toBeChecked   

await page.locator("//input[@id='sunday']").check();
await expect(page.locator("//input[@id='sunday']")).toBeChecked();
 

await expect(page.locator("//input[@id='sunday']")).toBeDisabled();
*/
await expect(page.locator("//input[@id='sunday']")).toBeEditable();
await expect(page.locator("//input[@id='sunday']")).toBeFocused();
await expect(page.locator("//input[@id='sunday']")).toBeHidden();
await expect(page.locator("//input[@id='sunday']")).toBeVisible();
await expect(page.locator("//input[@id='sunday']")).toHaveValues(["on","off"]);
    
});