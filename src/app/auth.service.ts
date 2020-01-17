import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from './server.service';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;

  // isLoggedIn
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private server: ServerService) {
    // Check if User has a pervious auth token saved,
    // if so, login with that.
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.token = user.token;
      this.server.setLoggedIn(true, this.token); // tell the server we're logged in
      this.loggedIn.next(true); // tell the app we're logged in
    }
  }
  
  // Login 
  public login(user) {
    if (user.email !== '' && user.password !== '' ) {
      return this.server.request('POST', '/login', {
        email: user.email,
        password: user.password
      }).subscribe((response: any) => {
        if (response.auth === true && response.token !== undefined) {
          this.token = response.token;
          this.server.setLoggedIn(true, this.token); // tell the server we're logged in
          this.loggedIn.next(true); // tell the app we're logged in
          const userData = {
            token: this.token,
          };
          localStorage.setItem('user', JSON.stringify(userData)); // save auth token
          this.router.navigateByUrl('/'); // navigate home
        }
      });
    }
  }

  // Logout
  public logout() {
    this.server.setLoggedIn(false); // tell the server we logged out
    delete this.token; // delete auth token

    this.loggedIn.next(false); // tell the app we logged out
    localStorage.clear(); // delete auth token from storage
    this.router.navigateByUrl('/'); // navigate home
  }
}