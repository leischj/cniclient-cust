import {Component, Input, OnInit} from '@angular/core';
import {CustomerStats} from '../../model/customer-stats';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  @Input() stats: CustomerStats;

  constructor() { }

  ngOnInit() {
  }

}
