import { Pipe, PipeTransform } from '@angular/core';

/**
 * Truncates string if it's longer than the given maximum string length and without cutting words.
 * The last space symbol of the truncated string are replaced with the omission string which defaults to "...".
 *
 * @example
 * {{ 'Hello world. Welcome to New York City' | stringTruncateByWords }}
 * <!-- Result: Hello world. Welcome to New... -->
 *
 * @example
 * {{ 'Hello world. Welcome to New York City' | stringTruncateByWords:{ len: 10 } }}
 * <!-- Result: Hello... -->
 *
 * @example
 * {{ 'Hello world. Welcome to New York City' | stringTruncateByWords:{ len: 10, omission: '***' } }}
 * <!-- Result: Hello*** -->
 */
@Pipe({
  name: 'stringTruncateByWords'
})
export class StringTruncateByWordsPipe implements PipeTransform {
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
    const truncated = value.substr(0, o.len);
    const result = (value.charAt(o.len) === ' ') ? truncated : truncated.substr(0, truncated.lastIndexOf(' '));
    return result.length !== value.length ? `${result}${o.omission}` : `${result}`;
  }
}
