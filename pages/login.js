import {expect} from '@playwright/test'
import {test} from '@playwright/test'
exports.LoginPage =class LoginPage{
    constructor (page){
        this.page=page;
        this.username_field=page.getByRole('textbox', { name: 'Enter Pay ID' });
        this.password_field=page.getByRole('textbox', { name: 'Enter Your Password' });
        this.login_button=page.getByRole('button', { name: 'Login' });
        this.ExpetedUsergreeting='Hello Jhone';
        this.username='5205000244'
        this.password='Arimac@123';
        
    }
    ExpetedUsergreeting='John';
    username='5205000244';
    password='Arimac@123';
    bank="People's bank";
    
    async gotologin(){
        await this.page.goto('https://paymerchantuat.peoplesbank.lk/signin');
    }
    async login(){
        await this.username_field.fill(this.username);
        await this.password_field.fill(this.password);
        await this.login_button.click();
        
        
    }
    
}