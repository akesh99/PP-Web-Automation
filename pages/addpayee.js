import { test, expect } from '@playwright/test';
export class Addpayee{
    constructor(page){
        this.page=page;
        this.fav_button=page.getByRole('button', { name: 'btn_icon Favorites' });
        this.account_payee=page.getByRole('button', { name: 'btn_icon Account Payee' });

    }
    //defult values
    nick_name='Automate';
    login_password='Arimac@123';
    //bank account number genarator
    generateRandomAccountNumber() {
        return Math.floor(1000000000 + Math.random() * 9000000000).toString();
    }
    //mobile number genarator
    generateRandomMobileNumber() {
        const prefixes = ["076", "078", "070", "071", "074", "072"];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]; // Select a random prefix
        const randomDigits = Math.floor(1000000 + Math.random() * 9000000); // Generate 7 random digits
        return prefix + randomDigits.toString(); // Concatenate prefix with random digits
    }
    
    
    
    
    
    async add_account(){
        const accountNumber = this.generateRandomAccountNumber();
        await this.fav_button.click();
        await this.account_payee.click();
        await this.page.getByRole('button', { name: '+ Add Account' }).click(); 
        await this.page.getByRole('button', { name: 'Banks' }).click();
        await this.page.getByLabel('Commercial Bank PLC', { exact: true }).getByText('Commercial Bank PLC').click();
        await this.page.getByRole('textbox', { name: 'Enter Account' }).click();
        await this.page.getByRole('textbox', { name: 'Enter Account' }).fill(accountNumber);
        await this.page.getByRole('textbox', { name: 'Enter Nick Name' }).click();
        await this.page.getByRole('textbox', { name: 'Enter Nick Name' }).fill(this.nick_name);
        await this.page.getByRole('textbox', { name: 'Enter Name' }).click();
        await this.page.getByRole('textbox', { name: 'Enter Name' }).fill(this.nick_name);
        await this.page.getByRole('button', { name: 'Confirm' }).click();
        await this.page.getByRole('textbox', { name: 'Enter Login Password' }).click();
        await this.page.getByRole('textbox', { name: 'Enter Login Password' }).fill(this.login_password);
        await this.page.getByRole('button', { name: 'Confirm' }).click();
        
    }
    async ok(){
        await this.page.getByRole('button', { name: 'OK' }).click();
    }
    async home(){
        await this.page.getByRole('button', { name: 'btn_icon Home' }).click();
    }

    async add_mobilepayee(){
        const mobileNumber=this.generateRandomMobileNumber();
    await  this.page.getByRole('button', { name: 'btn_icon Favorites' }).click();
    await this.page.getByRole('button', { name: 'btn_icon Mobile Payee' }).click();
    await this.page.getByRole('button', { name: '+ Add Account' }).click();
    await this.page.getByRole('button', { name: 'Service Providers' }).click();
    await this.page.getByRole('option', { name: 'Dialog', exact: true }).locator('div').nth(1).click();
    await this.page.getByRole('textbox').first().click();
    await this.page.getByRole('textbox').first().fill(mobileNumber);
    await this.page.getByRole('textbox', { name: 'Enter Name' }).click();
    await this.page.getByRole('textbox', { name: 'Enter Name' }).fill(this.nick_name);
    await this.page.getByRole('textbox', { name: 'Enter Nick Name' }).click();
    await this.page.getByRole('textbox', { name: 'Enter Nick Name' }).fill(this.nick_name);
    await this.page.getByRole('button', { name: 'Confirm' }).click();
    await this.page.getByRole('textbox', { name: 'Enter Login Password' }).click();
    await this.page.getByRole('textbox', { name: 'Enter Login Password' }).fill(this.login_password);
    await this.page.getByRole('button', { name: 'Confirm' }).click();
    
        }
    async add_biller(){
    const billNumber=this.generateRandomMobileNumber();
    await this.page.getByRole('button', { name: 'btn_icon Favorites' }).click();
    await this.page.getByRole('button', { name: 'btn_icon Billers' }).click();
    await this.page.getByRole('button', { name: 'Add Biller' }).click();
    await this.page.getByRole('tab', { name: 'Telecommunication' }).click();
    await this.page.getByRole('button', { name: 'Select' }).click();
    await this.page.getByRole('textbox', { name: 'Enter Account Number' }).click();
    await this.page.getByRole('textbox', { name: 'Enter Account Number' }).fill(billNumber);
    await this.page.getByRole('textbox', { name: 'Name', exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Name', exact: true }).fill(this.nick_name);
    await this.page.getByRole('textbox', { name: 'Nickname' }).click();
    await this.page.getByRole('textbox', { name: 'Nickname' }).fill(this.nick_name);
    await this.page.getByRole('switch', { name: 'Payment Reminder' }).check();
    await this.page.getByRole('button', { name: 'Next' }).click();
    await this.page.getByRole('textbox', { name: 'Enter Login Password' }).click();
    await this.page.getByRole('textbox', { name: 'Enter Login Password' }).fill(this.login_password);
    await this.page.getByRole('button', { name: 'Confirm' }).click();
    }

}
