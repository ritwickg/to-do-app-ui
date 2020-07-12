import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
    },
    {
        path: 'todo',
        loadChildren: () => import('./to-do/to-do.module').then((x) => x.ToDoModule),
        canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
