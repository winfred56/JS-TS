import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';
import * as uuid from 'uuid/v1';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks(): Task[] {
    return this.tasks;
  }
}
