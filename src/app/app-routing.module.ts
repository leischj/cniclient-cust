import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import {OverviewComponent} from './csr/overview/overview.component';

const routes: Routes = [
  { path: 'customer/:custNum', component: CustomerComponent },
  { path: 'csr/:username', component: OverviewComponent},
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
