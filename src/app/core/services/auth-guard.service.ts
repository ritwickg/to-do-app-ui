import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(private userService: UserService, private router: Router) {}
    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ):
        | boolean
        | import('@angular/router').UrlTree
        | import('rxjs').Observable<boolean | import('@angular/router').UrlTree>
        | Promise<boolean | import('@angular/router').UrlTree> {
        if (this.userService.signedInUser && this.userService.signedInUser.getSignInUserSession()) {
            return true;
        } else {
            this.router.navigate(['/dashboard']);
        }
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ):
        | boolean
        | import('@angular/router').UrlTree
        | import('rxjs').Observable<boolean | import('@angular/router').UrlTree>
        | Promise<boolean | import('@angular/router').UrlTree> {
        if (this.userService.signedInUser && this.userService.signedInUser.getSignInUserSession()) {
            return true;
        } else {
            this.router.navigate(['/dashboard']);
        }
    }
}
