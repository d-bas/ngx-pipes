import { Pipe, PipeTransform } from '@angular/core';
import { IsEmptyOptions, isEmpty } from '../../helpers/is-empty';

/**
 * If the value is empty (undefined or null), use a default value instead.
 * Through the options can enable also check an empty string.
 *
 * @example
 * {{ null | defaultValue: 'Empty' }}
 * <!-- Result: Empty -->
 *
 * @example
 * {{ 'abc' | defaultValue: 'abc' }}
 * <!-- Result: abc -->
 */
@Pipe({
  name: 'defaultValue'
})
export class DefaultValuePipe implements PipeTransform {
  /**
   * @param [value] The value to check and replace to default value
   * @param [defaultValue] The default value
   * @param [options] Options. (Default: { checkEmptyString: false })
   *
   * @returns The input value if it is not empty, or the default value
   */
  transform(value: any, defaultValue: any, options?: IsEmptyOptions): any {
    return isEmpty(value, options) ? defaultValue : value;
  }
}
