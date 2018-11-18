import {Component, Input, OnInit} from '@angular/core';
import {CustomerStats} from '../../model/customer-stats';
import {PieData} from '../customers/customers.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  @Input() stats: CustomerStats;

  paymentData: PieData[] = [];

  constructor() { }

  ngOnInit() {
    this.paymentData.push({label: 'Paid in full', value: this.stats.paidInFull});
    this.paymentData.push({label: 'Current due', value: this.stats.currentDue});
    this.paymentData.push({label: 'Past due', value: this.stats.pastDue});
  }

}
