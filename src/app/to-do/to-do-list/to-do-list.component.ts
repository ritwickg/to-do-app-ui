import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}
    redirectToAddActivity() {
        this.router.navigate(['/todo/add-activity']);
    }
}
