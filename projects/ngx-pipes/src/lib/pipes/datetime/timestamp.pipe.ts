import { Pipe, PipeTransform } from '@angular/core';
import { isMoment, Moment } from 'moment';
import * as moment from 'moment';

/**
 * Convert date to timestamp. Date can be in the following formats: string, Moment, Date
 *
 * @example
 * <!-- date = '2020-01-01 01:01:00' -->
 * {{ date | timestamp }} <!-- Result: 1577833260000 -->
 */
@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {
  /**
   * @param [value] The value to convert
   *
   * @returns Returns Unix Timestamp (milliseconds)
   */
  transform(value: string | Moment | Date): number {
    return !isMoment(value) ? moment(value).valueOf() : value.valueOf();
  }
}
