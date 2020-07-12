import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public loginFormGroup: FormGroup;
    constructor(private formBuilder: FormBuilder, public userService: UserService, private router: Router) {}

    ngOnInit(): void {
        this.loginFormGroup = this.generateFormGroup();
    }

    private generateFormGroup(): FormGroup {
        return this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }
    get emailFormControl(): FormControl {
        return this.loginFormGroup.get('email') as FormControl;
    }
    get passwordFormControl(): FormControl {
        return this.loginFormGroup.get('password') as FormControl;
    }
    async signInUser() {
        this.userService.signedInUser = await this.userService.userSignIn(this.emailFormControl.value, this.passwordFormControl.value);
        console.log(this.userService.signedInUser);
        this.userService.isUserLoggedIn = true;
        this.router.navigate(['/todo']);
    }
}
