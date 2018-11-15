import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../model/customer';

export interface KeyValue {
  key: string;
  value: any;
}

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  @Input() customer: Customer;
  displayedColumns: string[] = ['key', 'value'];
  ELEMENT_DATA: KeyValue[] = [];

  constructor() { }

  ngOnInit() {
    this.ELEMENT_DATA.push({key: 'Customer number', value: this.customer.custNum});
    this.ELEMENT_DATA.push({key: 'Rt/Acct-Sb', value: this.customer.route + '/' + this.customer.account + '-' + this.customer.sub});
    this.ELEMENT_DATA.push({key: 'Billing Cycle', value: this.customer.cycle});
    this.ELEMENT_DATA.push({key: 'Billing Status', value: this.customer.status});
    this.ELEMENT_DATA.push({key: 'Name', value: this.customer.firstName + ' ' + this.customer.lastName});
    this.ELEMENT_DATA.push({key: 'Billing Address', value: this.customer.billAddress1});
  }

}
