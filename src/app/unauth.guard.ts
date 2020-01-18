import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, 
         Router} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class UnAuthGuard implements CanActivate {
  private loggedIn: boolean;

  constructor(private auth: AuthService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      this.auth.isLoggedIn.subscribe((data: boolean) => {
        this.loggedIn = data;
      });

      // If we're logged in send us to home
      if (this.loggedIn) {
        this.router.navigateByUrl('/');
      }
      return !this.loggedIn;
  }
}