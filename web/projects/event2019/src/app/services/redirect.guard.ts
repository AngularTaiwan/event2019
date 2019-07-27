import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  canActivate() {
    const today = new Date();
    return today >= new Date(2019, 11, 3)
      ? this.router.createUrlTree(['/agenda', 'day2'])
      : this.router.createUrlTree(['/agenda', 'day1']);
  }

  constructor(private router: Router) {}
}
