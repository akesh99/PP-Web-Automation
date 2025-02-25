
exports.Sendmoney= class Sendmoney {
    constructor(page) {
        this.page=page;
        this.account_no=page.getByText('Account No:311200190039470');
        this.sendmoney_button=page.getByRole('button', { name: 'btn_icon Send money' });
        this.amount_field=page.locator('div').filter({ hasText: /^Amount$/ }).locator('div').nth(3);     
        this.remark_field=page.getByPlaceholder('Remarks - Max 16 Charactors');
        this.pay_button=page.getByRole('button', { name: 'Pay', exact: true });
        this.confirm_button=page.getByRole('button', { name: 'Confirm' });
        this.pay_id_field=page.getByRole('textbox', { name: 'Enter Wallet ID' });
        this.amount='12';
        this.remark='Test Remark'
        this.pay_id='5205000100'
        //assert values
        this.reciver_name=page.locator('div').filter({ hasText: /^NameMR GAMAGE KANDULA$/ }).first();
        this.reciver_walletid=page.locator('div').filter({ hasText: /^Wallet ID5205000100$/ }).first();
        this.sender_name=page.locator('div').filter({ hasText: /^NameKAVINDA$/ }).first();
        this.payfrom_Account=page.locator('div').filter({ hasText: /^Account Number311200190039470$/ }).first();
        this.bank_name=page.locator('div').filter({ hasText: /^BankPeople's Bank$/ }).first();
        this.debit_amount=page.locator('div').filter({ hasText: /^Total Debit Amount100\.00$/ }).first();   //this need to be corrected once the bug fixed
        this.tr_amount=page.getByText('Amount (LKR)12');
        


    }
    async dosendmoney(){
        await this.sendmoney_button.click();
        await this.page.locator('div').filter({ hasText: /^Pay FromSelect a pay from account from the list$/ }).first().click();
        await this.account_no.click();
        await this.pay_id_field.click();
        await this.pay_id_field.fill('5205000100');
        await this.amount_field.click();
        await this.amount_field.type(this.amount);
        await this.remark_field.click();
        await this.remark_field.fill(this.remark);
        await this.pay_button.click();
        await this.confirm_button.waitFor({ state: 'visible', timeout: 5000 });
        await this.confirm_button.click({ force: true });

       
        
    }
    async home(){
        await this.page.getByRole('button', { name: 'Home', exact: true }).click();
    }

}