import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  loggedIn = false;

  constructor() { }

  public isLoggedIn(): boolean {
    if (!localStorage.getItem('username')) {
      this.loggedIn = false
      return this.loggedIn;
    } else {
      this.loggedIn = true;
      return this.loggedIn;;
    }
  }

  public login(username: string) {
    localStorage.setItem('username', username);
    this.loggedIn = true;
  }

  public getUsername() {
    return localStorage.getItem('username');
  }

  public logout() {
    localStorage.clear();
    this.loggedIn = false;
  }
}
