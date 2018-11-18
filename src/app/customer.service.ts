import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './model/customer';
import { of } from 'rxjs';
import {Transaction} from './model/transaction';
import { PaymentEntry } from './model/paymentEntry';
import {Service} from './model/service';
import {CustomerStats} from './model/customer-stats';
import {ServiceUsage} from './model/service-usage';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  protected address = 'http://localhost:25598/api/Customers/';

  constructor(public http: HttpClient) { }

  getCustomer(id: number): Observable<Customer> {
    const address = this.address + id;
    return this.http.get(address).pipe(map((response: any) => response));
  }

  getTransactions(custNum: number): Observable<Transaction[]> {
    const address = this.address + custNum + '/transactions';
    return this.http.get(address).pipe(map((response: any) => response));
  }

  getPayments(custNum: number): Observable<PaymentEntry[]> {
    const address = this.address + custNum + '/payments';
    return this.http.get(address).pipe(map((response: any) => response));
  }

  getServices(custNum: number): Observable<Service[]> {
    const address = this.address + custNum + '/services';
    return this.http.get(address).pipe(map((response: any) => response));
  }

  getCustomerStats(): Observable<CustomerStats> {
    const ret: CustomerStats = {
      total: 14074,
      active: 10000,
      withEmail: 7432,
      withBudgetPayments: 385,
      withBankDraft: 1769,
      paidInFull: 4888,
      pastDue: 1503,
      currentDue: 8873,
      totalPastDue: 191986.81999999977,
      averagePastDue: 127.73574184963391,
      errorPayments: 345
    };
    return of(ret);
    // const address = this.address + 'stats';
    // return this.http.get(address).pipe(map((response: any) => response));
  }

  getRoutes(): Observable<number[]> {
    const address = this.address + '/routes';
    return this.http.get(address).pipe(map((response: any) => response));
  }

  getBillingCycles(): Observable<number[]> {
    const address = this.address + '/routes';
    return this.http.get(address).pipe(map((response: any) => response));
  }

  getServiceUsage(): Observable<ServiceUsage[]> {
    const address = this.address + '/service-deposits';
    return this.http.get(address).pipe(map((response: any) => response));
  }
}
