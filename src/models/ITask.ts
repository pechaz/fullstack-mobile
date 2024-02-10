export enum TaskStatus {
  IN_PROGRESS,
  DONE,
}

export interface ITask {
  title: string;
  description: string;
  dueDate: string;
  status: TaskStatus;
  id: string;
}
