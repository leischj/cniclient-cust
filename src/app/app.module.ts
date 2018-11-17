import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './core/material.module';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { BalanceComponent } from './balance/balance.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PaymentsComponent } from './payments/payments.component';
import { ServiceComponent } from './service/service.component';
import { OverviewComponent } from './csr/overview/overview.component';
import { CustomersComponent } from './csr/customers/customers.component';
import { BillingComponent } from './csr/billing/billing.component';
import { UsageComponent } from './csr/usage/usage.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent,
    AccountOverviewComponent,
    AccountDetailsComponent,
    BalanceComponent,
    TransactionsComponent,
    PaymentsComponent,
    ServiceComponent,
    OverviewComponent,
    CustomersComponent,
    BillingComponent,
    UsageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
