import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './model/customer';
import { of } from 'rxjs';
import {Transaction} from './model/transaction';
import { PaymentEntry } from './model/paymentEntry';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public mockCust: Customer = {
    custNum: 11,
    firstName: 'Joe',
    lastName: 'Smith',
    billAddress1: '101 Main St',
    billAddress2: 'Apt 2A',
    billCity: 'El Paso',
    billState: 'TX',
    billZip: '40353',
    email: 'smith.joe.99999@gmail.com',
    pastDue: 30.20,
    currentDue: 0,
    totalDue: 30.20,
    lateDate: new Date(),
    route: 2,
    account: 950,
    sub: 0,
    cycle: 1,
    status: 'A',
    serviceAddress: '1212 Superior St.'
  };
  constructor(public http: HttpClient) { }

  getCustomer(id: number): Observable<Customer> {
    // TODO: Externalize API addresses
    // return of(this.mockCust);
    const address = 'http://localhost:25598/api/Customers/' + id;
    return this.http.get(address).pipe(map((response: any) => response));
  }

  getTransactions(custNum: number): Observable<Transaction[]> {
    const trans: Transaction[] = [{
      histId: 5, custNum: 11,
      amount: -37.50, isBudget: false, resultBalance: 12.50,
      postDate: new Date(), tranCount: 2, tranDesc: 'Payment - thank you',
      tranSource: 'CC', resultBudget: 0
    }, {
      histId: 4, custNum: 11,
      amount: 50, isBudget: false, resultBalance: 50,
      postDate: new Date(), tranCount: 2, tranDesc: 'Bill',
      tranSource: 'PP', resultBudget: 0
    }];
    // return of(trans);
    const address = 'http://localhost:25598/api/Customers/' + custNum + '/transactions';
    return this.http.get(address).pipe(map((response: any) => response));
  }

  getPayments(custNum: number): Observable<PaymentEntry[]> {
    const address = 'http://localhost:25598/api/Customers/' + custNum + '/payments';
    return this.http.get(address).pipe(map((response: any) => response));
  }
}
