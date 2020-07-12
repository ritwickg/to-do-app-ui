import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, AuthRoutingModule, SharedModule, LoginModule, SignUpModule],
})
export class AuthModule {}
