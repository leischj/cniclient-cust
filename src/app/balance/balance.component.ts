import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  @Input() customer: Customer;

  constructor() { }

  ngOnInit() {
  }

}
