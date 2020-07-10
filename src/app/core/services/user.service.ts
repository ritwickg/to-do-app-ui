import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public isUserLoggedIn: boolean;
    constructor() {}
}
