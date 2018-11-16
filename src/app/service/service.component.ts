import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {Transaction} from '../model/transaction';
import {CustomerService} from '../customer.service';
import {Service} from '../model/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  @Input() customer: Customer;
  services: Service[];
  displayedColumns: string[] = ['description', 'status', 'deposit-date', 'deposit-amount'];

  constructor(public customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getServices(this.customer.custNum).subscribe((services: Service[]) => {
      this.services = services;
    });
  }

  print() {
    alert('This feature is coming soon!');
  }

}
