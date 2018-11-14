import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(public customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomer(11).subscribe(customer => {
      console.log(customer);
    });
  }

}
