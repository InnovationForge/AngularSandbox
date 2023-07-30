import { Component, Input } from '@angular/core';
import { Task } from '../../shared/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task;
  // Add task item logic and properties here.
}
