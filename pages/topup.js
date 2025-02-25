import {expect} from '@playwright/test'
exports.Topuppage= class Topuppage{
    constructor(page){
        this.page=page;
        this.account_no=page.getByText('Account No:311200190039470');
        this.topup_button=page.getByRole('button', { name: 'btn_icon Top-up' });
        this.amount_field=page.locator('div').filter({ hasText: /^Amount$/ }).locator('div').nth(3);     
        this.remark_field=page.getByPlaceholder('Remarks - Max 16 Charactors')
        this.pay_button=page.getByRole('button', { name: 'Pay', exact: true });
        this.confirm_button=page.getByRole('button', { name: 'Confirm' });

        //Assert values
        this.payfrom_Account=page.locator('div').filter({ hasText: /^Card Number311200190039470$/ }).first();
        this.payto_card= page.locator('div').filter({ hasText: /^Card No537151xxxxxx3010$/ }).first();
        this.bank_name=page.locator('div').filter({ hasText: /^BankPeople's Bank$/ }).first();
        this.sender_name=page.locator('div').filter({ hasText: /^NameKAVINDA$/ }).first();
        this.reciver_name=page.locator('div').filter({ hasText: /^NameG KAVINDA$/ }).first();
        this.tr_amount=page.getByText('Amount (LKR)100');

        //defult values
        this.amount='100';
        this.remark='test remark';

    }
    //defualt values
    
   
   
    
    async dotopup(){
    
    
    await this.topup_button.click();
    await this.page.locator('div').filter({ hasText: /^Pay FromSelect a pay from account from the list$/ }).first().click();
    await this.account_no.click();
    await this.amount_field.click();
     await this.amount_field.type(this.amount);
    await this.remark_field.click();
    await this.remark_field.fill(this.remark);
    await this.pay_button.click();
    await this.confirm_button.click();
    
    

    }
    async home(){
        await this.page.getByRole('button', { name: 'Home', exact: true }).click();
    }
}