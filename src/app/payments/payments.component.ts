import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {Transaction} from '../model/transaction';
import {CustomerService} from '../customer.service';
import {PaymentEntry} from '../model/paymentEntry';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  @Input() customer: Customer;
  payments: PaymentEntry[];
  displayedColumns: string[] = ['id', 'date', 'time', 'payment-type', 'status', 'amount'];

  constructor(public customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getPayments(this.customer.custNum).subscribe((payments: PaymentEntry[]) => {
      this.payments = payments;
    });
  }

  getStatus(status: number): string {
    if (status === 1) {
      return 'Confirmed';
    } else if (status === 3) {
      return 'Exported';
    } else if (status === 99) {
      return 'Error';
    }
    return '';
  }
  print() {
    alert('This feature is coming soon!');
  }
}
