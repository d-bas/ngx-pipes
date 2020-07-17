import { Pipe, PipeTransform } from '@angular/core';
import { elapsedTime, ElapsedTimeArgument, ElapsedTimeOptions } from '../../helpers/elapsed-time';

/**
 * Get the elapsed time between two moments in the format [HH:]MM:SS[.msec]
 *
 * @example
 * <!-- startTime = '2020-01-01 10:00', endTime = '2020-01-01 10:30' -->
 * {{ startTime | elapsedTime:finishTime }} <!-- Result: 30:00 -->
 *
 * @example
 * <!-- startTime = '2020-01-01 10:00', endTime = '2020-01-01 11:30' -->
 * {{ startTime | elapsedTime:finishTime }} <!-- Result: 01:30:00 -->
 *
 * @example
 * <!-- startTime = '2020-01-01 10:00', endTime = '2020-01-01 11:30' -->
 * {{ startTime | elapsedTime:finishTime:{ withMs: true } }} <!-- Result: 01:30:00.00 -->
 */
@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {
  /**
   * @param [start] The start time
   * @param [finish] The end time (default: now)
   * @param [options] Options
   *
   * @returns Returns string in the format [HH:]MM:SS[.msec]
   */
  transform(start: ElapsedTimeArgument, finish: ElapsedTimeArgument, options?: ElapsedTimeOptions ): string {
    return elapsedTime(start, finish, options);
  }
}
