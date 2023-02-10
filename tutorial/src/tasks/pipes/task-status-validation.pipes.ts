import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../tasks.model';

export class TaskStatusValidationPipes implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];
  transform(value: any): any {
    value.toUpperCase();
    console.log('value', value);
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not a valid status`);
    }
    return value;
  }
  private isStatusValid(status: any): boolean {
    const indx = this.allowedStatuses.indexOf(status);
    return indx !== -1;
  }
}
