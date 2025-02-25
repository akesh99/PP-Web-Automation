import {test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/login'
import { Topuppage } from '../../pages/topup'
import { Sendmoney } from '../../pages/sendmoney'
import { Fundtransfer } from '../../pages/fundtransfer';
import { Billpayment } from '../../pages/billpayment';
import { Mobilepayment } from '../../pages/mobilepayment';
import { Cardpayment } from '../../pages/cardpayment';
import { Addpayee } from '../../pages/addpayee';
 


// test('TC03:Succesfull top up transaction recipt', async ({ page }) => {
//   test.setTimeout(60000);
//   const loginPage=new LoginPage(page);
//   const topuppage=new Topuppage(page);
  
//   await loginPage.gotologin();
//   await loginPage.login();
// await page.locator('text=Hello').waitFor();
// const currentURL = page.url();
// await expect(currentURL).toContain('/dashboard');
// await topuppage.dotopup();
// // await page.pause();
// await page.locator('text=Your payment has been successfully Completed').waitFor({ timeout:10000 });
// //assert the data
// await expect(topuppage.payfrom_Account).toBeVisible();
// await expect(topuppage.payto_card).toBeVisible();
// await expect(topuppage.bank_name).toBeVisible();
// await expect(topuppage.sender_name).toBeVisible();
// await expect(topuppage.reciver_name).toBeVisible();
// await expect(topuppage.tr_amount).toBeVisible();
// await expect(topuppage.remark_field).toBeVisible();

// await topuppage.home();
 
       
//    });

  // test('TC04:Succesfull send money transaction recipt', async ({ page }) => {
  //   test.setTimeout(60000);
  //   const loginPage=new LoginPage(page);
  //   const sendmoney=new Sendmoney(page);
    
  //   await loginPage.gotologin();
  //   await loginPage.login();
  //   await page.locator('text=Hello').waitFor();
  //   const currentURL = page.url();
  //   await expect(currentURL).toContain('/dashboard');

  //   await sendmoney.dosendmoney();
  //   await page.pause();
  //   await page.locator('text=Your payment has been successfully Completed').waitFor({ timeout:10000 });
  //   //assert the data
  //   await expect(sendmoney.payfrom_Account).toBeVisible();
  //   await expect(sendmoney.reciver_walletid).toBeVisible();
  //   await expect(sendmoney.bank_name).toBeVisible();
  //   await expect(sendmoney.sender_name).toBeVisible();
  //   await expect(sendmoney.reciver_name).toBeVisible();
  //   await expect(sendmoney.tr_amount).toBeVisible();
  //   await expect(sendmoney.remark_field).toBeVisible(sendmoney.remark);
  //   await expect(sendmoney.debit_amount).toBeVisible();
  //   await sendmoney.home();
    
 

    
  // });

  // test('TC05:Succesfull fund transaction recipt', async ({ page }) => {
  //   test.setTimeout(60000);
  //   const loginPage=new LoginPage(page);
    
  //   const fundtransfer=new Fundtransfer(page);
  //   await loginPage.gotologin();
  //   await loginPage.login();
  //   await page.locator('text=Hello').waitFor();
  //   const currentURL = page.url();
  //   await expect(currentURL).toContain('/dashboard');

  //   await fundtransfer.dotransfer();
  //   await page.pause();
  //   await page.locator('text=Your payment has been successfully Completed').waitFor({ timeout:10000 });
  //   //asserting recipt data
  //   async function softAssert(expectation, message) {
  //     try {
  //         await expectation;
  //     } catch (error) {
  //         console.error(`Assertion failed: ${message} - ${error.message}`);
  //     }
  // }
    
  //   await softAssert(expect(fundtransfer.payfrom_Account).toBeVisible(),"payfrom_Account not visible");
  //   await softAssert(expect(fundtransfer.bank_name).toBeVisible(),"bank_name not visible");
  //   await softAssert(expect(fundtransfer.sender_name).toBeVisible(),"sender name is not visible");
  //   await softAssert(expect(fundtransfer.reciver_name).toBeVisible(),"reciver name is not visible");
  //   //await expect(fundtransfer.tr_amount).toBeVisible();
  //   await softAssert(expect(fundtransfer.remark_field).toBeVisible(fundtransfer.remark),"remark is field is not visible");
  //   await softAssert(expect(fundtransfer.debit_amount).toBeVisible(),"debit amount is not visble");
  //   await softAssert(expect(fundtransfer.reciver_accountno).toBeVisible(),"reciver account is not visible");

  //   await fundtransfer.home();
    
     
  // });
  
  // test('TC06:Succesfull bill payment recipt', async ({ page }) => {
  //   test.setTimeout(60000);
  //   const loginPage=new LoginPage(page);
  //   const billpayment=new Billpayment(page);
    
  //   await loginPage.gotologin();
  //   await loginPage.login();
  //   await page.locator('text=Hello').waitFor();
  //   const currentURL = page.url();
  //   await expect(currentURL).toContain('/dashboard');

  //   await billpayment.dobillpayment();
  //   await page.pause();
  //   await page.locator('text=Your payment has been successfully Completed').waitFor({ timeout:10000 });
  //  // assert the data
  //     async function softAssert(expectation, message) {
  //     try {
  //         await expectation;
  //     } catch (error) {
  //         console.error(`Assertion failed: ${message} - ${error.message}`);
  //     }
  // }
  //   await softAssert(expect(billpayment.payfrom_Account).toBeVisible(),"payfrom_Account not visible");
  //   await softAssert(expect(billpayment.bank_name).toBeVisible(),"bank name is not visible");
  //   await softAssert(expect(billpayment.sender_name).toBeVisible(),"Sender name is not visible");
  //   await softAssert(expect(billpayment.bill_category).toBeVisible(),"bill category is not visible");
  //   await softAssert(expect(billpayment.bill_provider).toBeVisible(),"bill provider is not visible");
  //   await softAssert(expect(billpayment.reference).toBeVisible(),"reference is not visible");
  //   await softAssert(expect(billpayment.debit_amount).toBeVisible(),"Debit amount");
  //   await billpayment.home();
    
  

    
  // });

  // test('TC07:Succesfull card payment recipt', async ({ page }) => {
  //   test.setTimeout(60000);
  //   const loginPage=new LoginPage(page);
  //   const cardpayment=new Cardpayment(page);
    
  //   await loginPage.gotologin();
  //   await loginPage.login();
  //   await page.locator('text=Hello').waitFor();
  //   const currentURL = page.url();
  //   await expect(currentURL).toContain('/dashboard');

  //   await cardpayment.docardpayment();
  //   await page.pause();
  //   await page.locator('text=Your payment has been successfully Completed').waitFor({ timeout:10000 });
  //   //assert the data
  //     async function softAssert(expectation, message) {
  //     try {
  //         await expectation;
  //     } catch (error) {
  //         console.error(`Assertion failed: ${message} - ${error.message}`);
  //     }
  // }
  //   await softAssert(expect(cardpayment.payfrom_Account).toBeVisible(),"pay from account is not visible");
  //   await softAssert(expect(cardpayment.bank_name).toBeVisible(),"bank name is not visible");
  //   await softAssert(expect(cardpayment.sender_name).toBeVisible(),"Sender name is not visible");
  //   await softAssert(expect(cardpayment.card_holdername).toBeVisible(),"card holer name is not visible");
  //   await softAssert(expect(cardpayment.cardBank_name).toBeVisible(),"card bank name is not visible");
  //   await softAssert(expect(cardpayment.category).toBeVisible(),"category is not visible");
  //   await softAssert(expect(cardpayment.card_no).toBeVisible(),"card number is not visible");
  //   await softAssert(expect(cardpayment.totaldebit_amounte).toBeVisible(),"total debit amount is not visible");
    
    
  //   await cardpayment.home();
    
  // });

  // test('TC08:Succesfull mobile payment recipt', async ({ page }) => {
  //   test.setTimeout(60000);
  //   const loginPage=new LoginPage(page);
  //   const mobilepayment=new Mobilepayment(page);
    
  //   await loginPage.gotologin();
  //   await loginPage.login();
  //   await page.locator('text=Hello').waitFor();
  //   const currentURL = page.url();
  //   await expect(currentURL).toContain('/dashboard');

  //   await mobilepayment.domobilepayment();
  //   await page.pause();
  //  // await page.locator('text=Your payment has been successfully Completed').waitFor({ timeout:10000 });
  //   //assert the data
  //   async function softAssert(expectation, message) {
  //         try {
  //             await expectation;
  //         } catch (error) {
  //             console.error(`Assertion failed: ${message} - ${error.message}`);
  //         }
  //     }
  //   await softAssert(expect(mobilepayment.payfrom_Account).toBeVisible(),"pay from account is not visible");
  //   await softAssert(expect(mobilepayment.bank_name).toBeVisible(),"bank name is not visible");
  //   await softAssert(expect(mobilepayment.sender_name).toBeVisible(),"Sender name is not visible");
  //   await softAssert(expect(mobilepayment.mobile_no).toBeVisible(),"mobile number is not visible");
  //   await softAssert(expect(mobilepayment.service_provider).toBeVisible(),"service provider is not visible");
  //   await softAssert(expect(mobilepayment.bill_name).toBeVisible(),"bill name is not visible");
    
  //   await mobilepayment.home();
    
  //   await page.pause();

    
  // });


  //   test('TC09: Add Account payee', async ({ page }) => {
  //   test.setTimeout(60000);
  //   const loginPage=new LoginPage(page);
  //   const accountpayee=new Addpayee(page);
    
  //   await loginPage.gotologin();
  //   await loginPage.login();
  //   await page.locator('text=Hello').waitFor();
  //   const currentURL = page.url();
  //   await expect(currentURL).toContain('/dashboard');

  //   await accountpayee.add_account();
  //   await expect(page.getByLabel('Your request is successfully')).toContainText('Account payee added successfully');
  //   await accountpayee.ok();
  //   await accountpayee.home();
  //   // await page.pause();

    
  // });

    test('TC10: Add Mobile payee', async ({ page }) => {
    test.setTimeout(60000);
    const loginPage=new LoginPage(page);
    const accountpayee=new Addpayee(page);
    
    await loginPage.gotologin();
    await loginPage.login();
    await page.locator('text=Hello').waitFor();
    const currentURL = page.url();
    await expect(currentURL).toContain('/dashboard');

    await accountpayee.add_mobilepayee();
    await expect(page.getByLabel('Your request is successfully')).toContainText("Mobile Payee successfully added");
    await accountpayee.ok();
    await accountpayee.home();
    // await page.pause();

    
  });

