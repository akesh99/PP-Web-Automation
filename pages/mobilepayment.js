export class Mobilepayment{
    constructor(page){
        this.page=page;
        this.account_no=page.getByText('Account No:311200190039470');
        this.mobile_button=page.getByRole('button', {name: 'btn_icon Mobile Payment' });
        this.amount_field=page.locator('div').filter({ hasText: /^Amount$/ }).locator('div').nth(3);     
        this.remark_field=page.getByRole('textbox', {  name: 'Remarks - Max 16 Charactors' } );
        this.pay_button=page.getByRole('button', { name: 'Pay', exact: true });
        this.confirm_button=page.getByRole('button', { name: 'Confirm' });
        this.mobile_payee=page.getByText('0768820439');
        this.amount='12';
        this.remark='Test Remark'
        //assert the data
        this.sender_name=page.locator('div').filter({ hasText: /^NameKAVINDA$/ }).first();
        this.payfrom_Account=page.locator('div').filter({ hasText: /^Account No311200190039470$/ }).first();
        this.bank_name=page.locator('div').filter({ hasText: /^BankPeople's Bank$/ }).first();
        this.mobile_no=page.locator('div').filter({ hasText: /^Mobile Number0768820439$/ }).first();
        this.service_provider=page.locator('div').filter({ hasText: /^Service ProviderDialog$/ }).first();
        this.bill_name=page.locator('div').filter({ hasText: /^NameAkesh$/ }).first();
        this.debit_amount=page.locator('div').filter({ hasText: /^Total Debit Amount \(LKR\)100\.00$/ }).first();
    }
    async domobilepayment(){
        await this.mobile_button.click();
        await this.page.locator('div').filter({ hasText: /^Pay FromSelect a pay from account from the list$/ }).first().click();
        await this.account_no.click();
        await this.page.getByRole('button', { name: 'search-icon Pay To Select a' }).click();
        await this.mobile_payee.click();
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
