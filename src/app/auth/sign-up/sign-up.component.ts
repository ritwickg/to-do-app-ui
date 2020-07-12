import { Component, OnInit } from '@angular/core';
import { ISignUpResult, CognitoUser } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
    signUpFormGroup: FormGroup;
    otpConfirmationForm: FormGroup;
    successUserSignUp = false;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

    ngOnInit(): void {
        this.signUpFormGroup = this.generateSignUpForm();
        this.otpConfirmationForm = this.generateOtpForm();
    }
    private generateOtpForm(): FormGroup {
        return this.formBuilder.group({
            otp: ['', [Validators.required]],
        });
    }
    private generateSignUpForm(): FormGroup {
        return this.formBuilder.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    get emailFormControl(): FormControl {
        return this.signUpFormGroup.get('email') as FormControl;
    }
    get passwordFormControl(): FormControl {
        return this.signUpFormGroup.get('password') as FormControl;
    }
    get otpFormControl(): FormControl {
        return this.otpConfirmationForm.get('otp') as FormControl;
    }
    async signUp() {
        await this.userService.userSignUp(this.emailFormControl.value, this.passwordFormControl.value);
        this.successUserSignUp = true;
    }
    async confirmUser() {
        const otpSuccess: string = await this.userService.confirmUserSignUp(this.emailFormControl.value, this.otpFormControl.value);
        if (otpSuccess.toUpperCase() === 'SUCCESS') {
            this.userService.signedInUser = await this.userService.userSignIn(this.emailFormControl.value, this.passwordFormControl.value);
            this.userService.isUserLoggedIn = true;
            this.router.navigate(['/todo']);
        }
    }
}
