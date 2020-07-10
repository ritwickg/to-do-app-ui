import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public loginFormGroup: FormGroup;
    constructor(private formBuilder: FormBuilder, public userService: UserService) {}

    ngOnInit(): void {
        this.loginFormGroup = this.generateFormGroup();
    }

    private generateFormGroup(): FormGroup {
        return this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }
}
