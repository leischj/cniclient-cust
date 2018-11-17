import {Component, Input, OnInit} from '@angular/core';
import {CustomerStats} from '../../model/customer-stats';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  @Input() stats: CustomerStats;

  constructor() { }

  ngOnInit() {
  }

}
