import { Pipe, PipeTransform } from '@angular/core';

/**
 * Convert HTML entities to characters.
 *
 * @example
 * {{ 'Albert Einstein said: &#039;E=MC&sup2;&#039;' | stringUnescape }}
 * <!-- Result: Albert Einstein said: 'E=MC² -->
 */
@Pipe({
  name: 'stringUnescape'
})
export class StringUnescapePipe implements PipeTransform {
  /**
   * @param [value] The value to convert
   *
   * @returns Converted the value
   */
  transform(value: string): string {
    return new DOMParser().parseFromString(value, 'text/html')?.documentElement?.textContent;
  }
}
