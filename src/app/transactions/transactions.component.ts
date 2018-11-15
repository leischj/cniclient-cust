import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {Transaction} from '../model/transaction';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  @Input() customer: Customer;
  transactions: Transaction[];
  displayedColumns: string[] = ['postDate', 'description', 'amount', 'balance'];

  constructor(public customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getTransactions(this.customer.custNum).subscribe((transactions: Transaction[]) => {
      this.transactions = transactions;
      console.log(this.transactions);
    });
  }

  print() {
    alert('This feature is coming soon!');
  }
}
