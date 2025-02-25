export class Billpayment{
    constructor(page){
        this.page=page;
        this.account_no=page.getByText('Account No:311200190039470');
        this.bill_button=page.getByRole('button', {name: 'btn_icon Bill Payments' });
        this.amount_field=page.locator('div').filter({ hasText: /^Amount$/ }).locator('div').nth(3);     
        this.remark_field=page.getByRole('textbox', { name: 'Remarks - Max 16 Characters' });
        this.pay_button=page.getByRole('button', { name: 'Pay', exact: true });
        this.confirm_button=page.getByRole('button', { name: 'Confirm' });
        this.bill_account=page.getByRole('option', { name: 'Nickname : Akesh Bank : Telecommunication Mobile No : 6267272998 Account No :' });
        this.amount='12';
        this.remark='Test Remark'

        //Assert the data
        this.sender_name=page.locator('div').filter({ hasText: /^NameKAVINDA$/ }).first();
        this.payfrom_Account=page.locator('div').filter({ hasText: /^Account No311200190039470$/ }).first();
        this.bank_name=page.locator('div').filter({ hasText: /^BankPeople's Bank$/ }).first();
        this.bill_category=page.locator('div').filter({ hasText: /^Bill CategoryTelecommunication$/ }).first();
        this.bill_provider=page.locator('div').filter({ hasText: /^Bill ProviderSri Lanka Telecom PLC \(SLT\)$/ }).first();
        this.reference= page.locator('div').filter({ hasText: /^Reference6267272998$/ }).first();
        this.debit_amount=page.locator('div').filter({ hasText: /^Total Debit Amount \(LKR\)12$/ }).first();
    }
    async dobillpayment(){
        await this.bill_button.click();
        await this.page.locator('div').filter({ hasText: /^Pay FromSelect a pay from account from the list$/ }).first().click();
        await this.account_no.click();
        await this.page.getByRole('button', { name: 'search-icon Pay To' }).click();
        await this.bill_account.click();
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