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

  constructor() { }

  ngOnInit() {
  }

  edit() {
    alert('This feature is coming soon!');
  }

  print() {
    alert('This feature is coming soon!');
  }
}
