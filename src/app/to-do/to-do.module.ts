import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToDoComponentComponent } from './to-do-component.component';
import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddActivityComponent } from './add-activity/add-activity.component';

@NgModule({
    declarations: [ToDoComponentComponent, ToDoListComponent, AddActivityComponent],
    imports: [CommonModule, ToDoRoutingModule, SharedModule],
})
export class ToDoModule {}
