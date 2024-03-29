import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Auth} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return Auth.currentAuthenticatedUser().then(() => true)
      .catch(() => {
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } }).then(() => { });
        return false;
      });
  }

}
