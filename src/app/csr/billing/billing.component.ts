import {Component, Input, OnInit} from '@angular/core';
import {CustomerStats} from '../../model/customer-stats';
import {PieData} from '../customers/customers.component';
import {CustomerService} from '../../customer.service';
import {ServiceUsage} from '../../model/service-usage';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  @Input() stats: CustomerStats;
  serviceUsage: ServiceUsage[];
  paymentData: PieData[] = [];
  paymentsLast12: KeyValue<string, string>[];

  constructor(public customerService: CustomerService) { }

  ngOnInit() {
    this.paymentData.push({label: 'Paid in full', value: this.stats.paidInFull});
    this.paymentData.push({label: 'Current due', value: this.stats.currentDue});
    this.paymentData.push({label: 'Past due', value: this.stats.pastDue});

    this.customerService.getServiceUsage().subscribe((usage: ServiceUsage[]) => {
      this.serviceUsage = usage;
    });

    this.customerService.getPaymentsLast12().subscribe((payments: KeyValue<string, string>[]) => {
      this.paymentsLast12 = payments;
    });
  }

}
