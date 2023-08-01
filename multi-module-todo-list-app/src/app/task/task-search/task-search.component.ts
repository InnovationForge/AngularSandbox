import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css'],
})
export class TaskSearchComponent {
  searchTerm: string = '';

  @Output() searchPerformed = new EventEmitter<string>();

  onSearchChange() {
    this.searchPerformed.emit(this.searchTerm);
  }
}
