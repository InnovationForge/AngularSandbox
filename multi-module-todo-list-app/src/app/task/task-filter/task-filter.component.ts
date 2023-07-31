import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css'],
})
export class TaskFilterComponent {
  selectedPriority: string | null = null;
  selectedDueDate: string | null = null;

  @Output() filterApplied = new EventEmitter<{ priority: string | null; dueDate: string | null }>();

  priorities: string[] = ['All', 'Low', 'Medium', 'High'];

  applyFilters() {
    this.filterApplied.emit({
      priority: this.selectedPriority,
      dueDate: this.selectedDueDate,
    });
  }
}
