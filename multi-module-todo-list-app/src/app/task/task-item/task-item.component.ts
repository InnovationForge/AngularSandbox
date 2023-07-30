import { Component, Input } from '@angular/core';
import { Task } from '../../shared/models/task.model';
import {TasksService} from "../../services/tasks.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  // @Input() task: Task;
  // Add task item logic and properties here.
  task: Task | undefined;

  constructor(private route: ActivatedRoute, private tasksService: TasksService) {}

  ngOnInit() {
    // Get the task ID from the URL parameter
    const taskId = this.route.snapshot.paramMap.get('id');

    if (taskId !== null) {
      // Convert the task ID to a number (assuming it's a numeric ID)
      const id = +taskId;

      // Get the task details based on the task ID
      this.task = this.tasksService.getTaskById(id);
    }
  }
}
