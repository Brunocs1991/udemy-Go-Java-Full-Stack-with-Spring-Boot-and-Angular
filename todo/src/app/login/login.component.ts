import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'in28minutes';
  password: string = '1';
  erroMensage: string = 'Invalid Credencials';
  invalidLogin: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    if ('in28minutes' === this.username && 'dummy' === this.password) {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}