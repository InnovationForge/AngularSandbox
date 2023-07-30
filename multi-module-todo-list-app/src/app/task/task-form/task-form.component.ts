import { Component } from '@angular/core';
import {Task, TaskPriority} from "../../shared/models/task.model";
import {TasksService} from "../../services/tasks.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    priority: TaskPriority.Low,
    completed: false,
  };

  // Define the priorities array
  priorities: TaskPriority[] = [TaskPriority.Low, TaskPriority.Medium, TaskPriority.High];

  constructor(private tasksService: TasksService, private router: Router) {}

  createTask() {
    // Call the createTask() method of TasksService to add the new task
    this.tasksService.createTask(this.newTask);

    // Navigate back to the task list after successful task creation
    this.router.navigate(['/tasks']);

    // Reset the form and the newTask object for the next task
    this.newTask = {
      id: 0,
      title: '',
      description: '',
      dueDate: new Date(),
      priority: TaskPriority.Low,
      completed: false,
    };
  }
}
