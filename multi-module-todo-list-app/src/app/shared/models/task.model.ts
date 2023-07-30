export interface Task {
  id: number; // Unique identifier for the task
  title: string; // Task title
  description?: string; // Optional task description
  dueDate?: Date; // Optional due date for the task
  priority: TaskPriority; // Task priority (enum defined below)
  completed: boolean; // Indicates whether the task is completed or not
}

export enum TaskPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}
