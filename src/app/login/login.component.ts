import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public custNum: number;
  public password: string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.custNum > 0) {
      this.router.navigate(['customer', this.custNum]);

    }
  }
}
