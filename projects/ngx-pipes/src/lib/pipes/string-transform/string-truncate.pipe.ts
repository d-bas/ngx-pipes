import { Pipe, PipeTransform } from '@angular/core';

/**
 * Truncates string if it's longer than the given maximum string length. The last characters of
 * the truncated string are replaced with the omission string which defaults to "...".
 *
 * @example
 * {{ 'Hello world. Welcome to New York City' | stringTruncate }}
 * <!-- Result: Hello world. Welcome to New Yo... -->
 *
 * @example
 * {{ 'Hello world. Welcome to New York City' | stringTruncate:{ len: 10 } }}
 * <!-- Result: Hello worl... -->
 *
 * @example
 * {{ 'Hello world. Welcome to New York City' | stringTruncate:{ len: 10, omission: '***' } }}
 * <!-- Result: Hello worl*** -->
 */
@Pipe({
  name: 'stringTruncate'
})
export class StringTruncatePipe implements PipeTransform {
  /**
   * @param [value] The value to truncate
   * @param [options] Options
   *
   * @returns The truncated value
   */
  transform(value: string, options?: { len?: number, omission?: string }): string {
    const o = {
      len: 30,
      omission: '..',
      ... (options || {})
    };
    if (value.length <= o.len) return value;
    const result = value.substr(0, o.len);
    return result.length !== value.length ? `${result}${o.omission}` : `${result}`;
  }
}
