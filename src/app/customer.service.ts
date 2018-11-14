import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient) { }

  getCustomer(id: number): Observable<Customer> {
    // TODO: Externalize API addresses
    const address = 'http://localhost:25598/api/Customers/' + id;
    return this.http.get(address).pipe(map((response: any) => response));
  }
}
