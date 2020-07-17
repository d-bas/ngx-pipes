import { Pipe, PipeTransform } from '@angular/core';
import { progress, ProgressOptions } from '../../helpers/progress';

/**
 * Calculation of the value of progress for the interval between 0 and maxValue
 *
 * @example
 * {{ 500 | progress: 1000  }}
 * <!-- Result: 50 -->
 *
 * @example
 * {{ 500 | progress: 1000: { decimalPartLength: 2 }  }}
 * <!-- Result: 50.00 -->
 *
 * @example
 * {{ 1 | progress: 1000: { lessOneValueDecimalPartLength: 2 }  }}
 * <!-- Result: 0.10 -->
 *
 * @example
 * {{ 0 | progress: 1000: { zeroValueDecimalPartLength: 2 }  }}
 * <!-- Result: 0.00 -->
 */
@Pipe({
  name: 'progress'
})
export class ProgressPipe implements PipeTransform {
  /**
   * @param [value] The current value for interval between 0 and maxValue
   * @param [maxValue] The maximum value of interval
   * @param [options] Options (Default: { decimalPartLength: 0, lessOneValueDecimalPartLength: 0, zeroValueDecimalPartLength: 0 })
   */
  transform(value: number, maxValue: number, options?: ProgressOptions): string {
    return progress(value, maxValue, options);
  }
}
