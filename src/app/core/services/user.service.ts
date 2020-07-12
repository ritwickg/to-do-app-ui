import { Injectable } from '@angular/core';
import { CognitoUser, ISignUpResult } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { Auth } from 'aws-amplify';
@Injectable({
    providedIn: 'root',
})
export class UserService {
    public isUserLoggedIn: boolean;
    public signedInUser: CognitoUser;
    private readonly awsAuth = {
        aws_project_region: environment.aws_project_region,
        aws_cognito_region: environment.aws_cognito_region,
        aws_user_pools_id: environment.aws_user_pools_id,
        aws_user_pools_web_client_id: environment.aws_user_pools_web_client_id,
        aws_appsync_region: environment.aws_appsync_region,
        aws_appsync_authenticationType: environment.aws_appsync_authenticationType,
    };

    constructor() {
        Auth.configure(this.awsAuth);
    }

    public userSignUp(userEmail: string, userPassword: string): Promise<ISignUpResult | any> {
        return Auth.signUp({
            username: userEmail,
            password: userPassword,
            attributes: {
                email: userEmail,
            },
        });
    }
    public confirmUserSignUp(userEmail: string, otp: string): Promise<any> {
        return Auth.confirmSignUp(userEmail, otp);
    }
    public userSignIn(userEmail: string, userPassword: string): Promise<CognitoUser | any> {
        return Auth.signIn(userEmail, userPassword);
    }
    public logout() {
        return Auth.signOut();
    }
}
