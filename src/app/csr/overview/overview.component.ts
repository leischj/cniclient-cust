import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerStats} from '../../model/customer-stats';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public username: number;
  public stats: CustomerStats;
  public content = 'customers'; // billing, usage

  constructor(public customerService: CustomerService,
              private route: ActivatedRoute,
              public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.customerService.getCustomerStats().subscribe(stats => {
        this.stats = stats;
      });
    });
  }

  view(page: string) {
    this.content = page;
  }

  logout() {
    this.router.navigate(['login']);
  }

}
