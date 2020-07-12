import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private userService: UserService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let httpHeaders: HttpHeaders = new HttpHeaders();
        if (req.url.includes('/addTodoActivity')) {
            httpHeaders = httpHeaders.append(
                'Authorization',
                'Bearer ' + this.userService.signedInUser.getSignInUserSession().getIdToken().getJwtToken(),
            );
        }
        //httpHeaders = httpHeaders.append('Access-Control-Allow-Origin', '*');
        return next.handle(req.clone({ headers: httpHeaders }));
    }
}
