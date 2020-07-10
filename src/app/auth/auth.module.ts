import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from './login/login.module';
@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, AuthRoutingModule, SharedModule, LoginModule],
})
export class AuthModule {}
