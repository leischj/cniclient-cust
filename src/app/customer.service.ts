import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './model/customer';
import { of } from 'rxjs';

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
    pastDue: 0,
    currentDue: 0,
    totalDue: 0,
    lateDate: new Date()
  };
  constructor(public http: HttpClient) { }

  getCustomer(id: number): Observable<Customer> {
    // TODO: Externalize API addresses
    // return of(this.mockCust);
    const address = 'http://localhost:25598/api/Customers/' + id;
    return this.http.get(address).pipe(map((response: any) => response));
  }
}
