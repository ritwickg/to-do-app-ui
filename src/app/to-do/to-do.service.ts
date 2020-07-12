import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IActivity } from '../models/activity';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ToDoService {
    private baseUrl: string;
    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiDomain;
    }

    addActivity(activity: IActivity): Observable<any> {
        return this.http.post(this.baseUrl + '/addTodoActivity', activity);
    }
}
