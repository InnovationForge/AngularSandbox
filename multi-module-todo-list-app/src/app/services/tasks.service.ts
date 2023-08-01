import {Injectable} from '@angular/core';
import {Task, TaskPriority} from '../shared/models/task.model';

@Injectable({
  providedIn: 'root', // Make the service available at the root level (singleton)
})
export class TasksService {
  private tasks: Task[] = [
    // Fixed array of initial tasks
    {
      id: 1,
      title: 'Task 1',
      description: 'This is Task 1',
      dueDate: new Date('2023-08-01'),
      priority: TaskPriority.High,
      completed: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'This is Task 2',
      dueDate: new Date('2023-08-10'),
      priority: TaskPriority.Medium,
      completed: false,
    },
    // Add more initial tasks as needed.
  ];

  // Method to get all tasks
  getTasks(): Task[] {
    return this.tasks.slice(); // Return a copy of the tasks array to prevent direct manipulation
  }

  // Method to get a task by ID
  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  // Method to create a new task
  createTask(task: Task): void {
    // Generate a new unique ID for the task
    const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map((t) => t.id)) + 1 : 1;
    task.id = newId;
    this.tasks.push(task);
  }

  // Method to update an existing task
  updateTask(task: Task): void {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  // Method to delete a task by ID
  deleteTask(id: number): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  // Method to get filtered tasks based on priority and dueDate
  getFilteredTasks(priority: string | null, dueDate: string | null): Task[] {
    return this.tasks.filter((task) => {
      const hasPriority = priority === 'All' || task.priority === priority;
      const hasDueDate = dueDate === null || (task.dueDate && dueDate === task.dueDate.toISOString().substr(0, 10));
      return hasPriority && hasDueDate;
    });
  }

// Method to get searched tasks based on the search query
  getSearchedTasks(searchQuery: string): Task[] {
    searchQuery = searchQuery.toLowerCase().trim();
    return this.tasks.filter((task) => {
      const taskDescription = task.description?.toLowerCase() || ''; // Use empty string if description is undefined
      return (
        task.title.toLowerCase().includes(searchQuery) ||
        taskDescription.includes(searchQuery)
      );
    });
  }
}
