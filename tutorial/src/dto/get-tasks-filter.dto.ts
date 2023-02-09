import { TaskStatus } from '../tasks/tasks.model';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
