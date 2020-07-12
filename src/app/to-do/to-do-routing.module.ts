import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: ToDoListComponent },
            { path: 'add-activity', component: AddActivityComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ToDoRoutingModule {}
