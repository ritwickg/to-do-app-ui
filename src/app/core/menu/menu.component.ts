import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
    constructor(public userService: UserService, private router: Router) {}

    ngOnInit(): void {}
    navigateForAuthentication() {
        this.router.navigate(['/auth']);
    }
    logout() {
        this.userService.logout();
    }
}
