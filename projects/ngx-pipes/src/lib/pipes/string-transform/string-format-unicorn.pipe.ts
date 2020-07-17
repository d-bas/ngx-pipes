import { Pipe, PipeTransform } from '@angular/core';

/**
 * Subbing in values to simple string templates.
 *
 * @example
 * {{ 'Hello {name}. Welcome to {place}.' | stringFormatUnicorn: { name: 'Dima', place: 'New York City' } }}
 * <!-- Result: Hello Dima. Welcome to New York City-->
 *
 * @example
 * {{ 'Hello {0}. Welcome to {1}.' | stringFormatUnicorn: ['Dima', 'New York City'] }}
 * <!-- Result: Hello Dima. Welcome to New York City-->
 *
 * @example
 * {{ 'Hello {0}. Welcome to {1}.' | stringFormatUnicorn: 'Dima': 'New York City' }}
 * <!-- Result: Hello Dima. Welcome to New York City-->
 */
@Pipe({
  name: 'stringFormatUnicorn'
})
export class StringFormatUnicornPipe implements PipeTransform {
  /**
   * @param [value] The value to format
   * @param [args] Shortcodes and values for replacing. Can be a list of values, an array of values, or object with key and value.
   *
   * @returns The formated value
   */
  transform(value: string, ...args): any {
    if (value && args.length) {
      const params = ['string', 'number'].includes(typeof args[0]) ? Array.prototype.slice.call(args) : args[0];
      let result = value.toString();
      for (const param in params) result = result.replace(new RegExp(`\\{${param}\\}`, 'gi'), params[param]);
      return result;
    }
    return value;
  }
}
