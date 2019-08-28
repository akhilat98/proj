import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AddCustomerComponent,
    AddAccountComponent,
    DeleteaccountComponent,
    DeletecustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
