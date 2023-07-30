import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import {TaskItemComponent} from "./task-item/task-item.component";
import {TaskFormComponent} from "./task-form/task-form.component";
// Import other task-related components here.

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskItemComponent },
  { path: 'tasks/new', component: TaskFormComponent },
  { path: 'tasks/:id/edit', component: TaskFormComponent },
  // Add other routes for task-related components as needed.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
