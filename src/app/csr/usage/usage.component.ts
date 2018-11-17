import {Component, Input, OnInit} from '@angular/core';
import {CustomerStats} from '../../model/customer-stats';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {
  @Input() stats: CustomerStats;

  constructor() { }

  ngOnInit() {
  }

}
