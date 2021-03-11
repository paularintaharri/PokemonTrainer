import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public isLoggedIn(): boolean {
    if (localStorage.getItem('username')) {
      return true;
    } else {
      return false;
    }
  }

  public login(username: string){
    localStorage.setItem('username', username)
  }

  public getUsername(){
    return localStorage.getItem('username');
  }
}
