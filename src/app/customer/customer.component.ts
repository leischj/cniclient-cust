import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public custNum: number;
  public customer: Customer;
  public content = 'acct';

  constructor(public customerService: CustomerService,
              private route: ActivatedRoute,
              public router: Router) { }

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

  view(page: string) {
    this.content = page;
  }

  logout() {
    this.router.navigate(['login']);
  }
}
