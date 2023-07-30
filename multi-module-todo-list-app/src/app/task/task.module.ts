import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { TaskNotificationComponent } from './task-notification/task-notification.component';
import {TaskRoutingModule} from "./task-routing.module";



@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent,
    TaskFilterComponent,
    TaskSearchComponent,
    TaskNotificationComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
