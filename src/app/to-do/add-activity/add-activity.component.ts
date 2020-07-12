import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IActivity } from '../../models/activity';
import { ToDoService } from '../to-do.service';
import { UserService } from 'src/app/core/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-add-activity',
    templateUrl: './add-activity.component.html',
    styleUrls: ['./add-activity.component.css'],
})
export class AddActivityComponent implements OnInit {
    addActivityFormGroup: FormGroup;
    public readonly activityList: any = [
        {
            displayName: 'Pending',
            value: 'pending',
        },
    ];
    constructor(
        private _formBuilder: FormBuilder,
        private _toDoService: ToDoService,
        private _userService: UserService,
        private _snackbar: MatSnackBar,
    ) {}

    ngOnInit(): void {
        this.addActivityFormGroup = this.generateAddFormGroup();
    }
    generateAddFormGroup(): FormGroup {
        return this._formBuilder.group({
            createdDate: ['', [Validators.required]],
            activityDate: ['', [Validators.required]],
            status: ['', [Validators.required]],
        });
    }
    addActivity() {
        const activity: IActivity = this.addActivityFormGroup.value;
        activity.createdBy = this._userService.signedInUser.getUsername();
        this._toDoService.addActivity(activity).subscribe((response) => {
            this._snackbar.open(response.result, 'Close', {
                duration: 2000,
            });
        });
    }
}
