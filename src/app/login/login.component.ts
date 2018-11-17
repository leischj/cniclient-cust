import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public custNum: number;
  public username: string;
  public password: string;
  public placeholder = 'Customer ID';
  public mode = 'customer'; // or csr
  public switchButton = 'Switch to CSR Portal';

  constructor(public router: Router) { }

  ngOnInit() {
  }

  login() {
      this.performLogin();
  }

  performLogin() {
    if (this.mode === 'csr') {
      if (this.username) {
        this.router.navigate(['csr', this.username]);
      }
    } else {
      if (this.custNum > 0) {
        this.router.navigate(['customer', this.custNum]);
      }
    }
  }
  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
      this.performLogin();
    }
  }


  switchLogin() {
    this.mode = this.mode === 'csr' ? 'customer' : 'csr';
    if (this.mode === 'csr') {
      this.custNum = null;
      this.switchButton = 'Switch to Customer Portal';
      this.placeholder = 'Username';
    } else {
      this.username = null;
      this.switchButton = 'Switch to CSR Portal';
      this.placeholder = 'Customer ID';
    }
  }
}
