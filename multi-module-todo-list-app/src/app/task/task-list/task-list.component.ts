import {Component, OnInit} from '@angular/core';
import {Task} from "../../shared/models/task.model";
import {TasksService} from "../../services/tasks.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []; // Initialize the tasks property to an empty array

  constructor(private tasksService: TasksService, private router: Router) {}

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

  showTaskDetails(taskId: number) {
    this.router.navigate(['/tasks', taskId]); // Navigate to the task details page with the task ID as a parameter
  }

  onFilterApplied(filter: { priority: string | null; dueDate: string | null }) {
    const { priority, dueDate } = filter;

    // Get the filtered tasks from the service based on selected filters
    this.tasks = this.tasksService.getFilteredTasks(priority, dueDate);
  }
}
