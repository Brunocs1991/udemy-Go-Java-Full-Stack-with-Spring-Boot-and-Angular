import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'brunocs';
  password: string = '1';
  erroMensage: string = 'Invalid Credencials';
  invalidLogin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogin() {
    if ('brunocs' === this.username && 'dummy' === this.password) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    }
    this.invalidLogin = true;
  }
}
