export class Fundtransfer{
    constructor(page){
        this.page=page;
        this.account_no=page.getByText('Account No:311200190039470');
        this.tr_button=page.getByRole('button', { name: 'btn_icon Transfer' });
        this.amount_field=page.locator('div').filter({ hasText: /^Amount$/ }).locator('div').nth(3);     
        this.remark_field=page.getByPlaceholder('Remarks - Max 16 Charactors');
        this.pay_button=page.getByRole('button', { name: 'Pay', exact: true });
        this.confirm_button=page.getByRole('button', { name: 'Confirm' });
        this.fundtransfer_account=page.getByRole('option', { name: 'Nickname : H CHATHURANGA Bank : People\'s Bank Account No : 153200100013979' });
        this.amount='12';
        this.remark='Test Remark'

        //assert the data
        this.sender_name=page.locator('div').filter({ hasText: /^NameKAVINDA$/ }).first();
        this.payfrom_Account=page.locator('div').filter({ hasText: /^Account No311200190039470$/ }).first();
        this.bank_name=page.locator('div').filter({ hasText: /^BankPeople's Bank$/ }).first();
        this.tr_amount=page.getByText('Amount (LKR)12', { exact: true });
        this.debit_amount=page.locator('div').filter({ hasText: /^Total Debit Amount \(LKR\)12$/ }).first(); 
        this.reciver_name=page.locator('div').filter({ hasText: /^NameH CHATHURANGA$/ }).first();
        this.reciver_accountno=page.locator('div').filter({ hasText: /^Account Number153200100013979$/ }).first(); 


    }
    async dotransfer(){
        await this.tr_button.click();
        await this.page.locator('div').filter({ hasText: /^Pay FromSelect a pay from account from the list$/ }).first().click();
        await this.account_no.click();
        await this.page.getByRole('button', { name: 'search-icon Pay To Select a' }).click();
        await this.fundtransfer_account.click();
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