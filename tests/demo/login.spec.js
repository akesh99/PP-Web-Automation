import {test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/login'
//

test('TC01:successfull login', async ({ page }) => {
    const loginPage=new LoginPage(page);
    await loginPage.gotologin();
    await loginPage.login();
    await expect(page.locator('body')).toContainText('Hello');
    const currentURL = page.url();
    await expect(currentURL).toContain('/dashboard');
    await page.locator('text=Hello').waitFor();
    
  });

test('TC02:Unsuccessfull login', async ({ page }) => {
    const loginPage=new LoginPage(page);
    await loginPage.gotologin();
    await loginPage.login();
    await expect(page.getByText('Something went wrong!')).toBeVisible();
    
  });
 


