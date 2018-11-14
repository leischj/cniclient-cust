import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
