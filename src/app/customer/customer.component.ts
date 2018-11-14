import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public custNum: number;
  public customer: Customer;

  constructor(public customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.custNum = +params['custNum'];
      this.customerService.getCustomer(this.custNum).subscribe(customer => {
        this.customer = customer;
        console.log(customer);
      });
      // In a real app: dispatch action to load the details here.
    });
  }

}
