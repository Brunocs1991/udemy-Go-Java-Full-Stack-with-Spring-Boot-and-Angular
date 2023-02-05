import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(user: string, password: string): boolean {
    if ('brunocs' === user && 'dummy' === password) {
      sessionStorage.setItem('authenticaterUser', user);
      return true;
    }
    return false;
  }
  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
}
