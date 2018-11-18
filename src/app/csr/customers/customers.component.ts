import { Component, Input, OnInit} from '@angular/core';
import {CustomerStats} from '../../model/customer-stats';

export interface PieData {
  label: string;
  value: number;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  private customersTotalData: PieData[] = [];
  private  byRoute: PieData[] = [];
  private byBillingCycle: PieData[] = [];
  private withEmail: PieData[] = [];
  private withBudgetPayments: PieData[] = [];
  private withActiveBankDrafts: PieData[] = [];

  @Input() stats: CustomerStats;

  constructor() { }

  ngOnInit() {
    this.customersTotalData.push({label: 'Active', value: this.stats.active});
    this.customersTotalData.push({label: 'Inactive', value: this.stats.total - this.stats.active});

    this.withEmail.push({label: 'Yes', value: this.stats.withEmail});
    this.withEmail.push({label: 'No', value: this.stats.total - this.stats.withEmail});

    this.withBudgetPayments.push({label: 'Yes', value: this.stats.withBudgetPayments});
    this.withBudgetPayments.push({label: 'No', value: this.stats.total - this.stats.withBudgetPayments});

    this.withActiveBankDrafts.push({label: 'Yes', value: this.stats.withBankDraft});
    this.withActiveBankDrafts.push({label: 'No', value: this.stats.total - this.stats.withBankDraft});

  }

}
