import { Pipe, PipeTransform } from '@angular/core';

/**
 * Creates and returns a new string by concatenating all of the elements in an array,
 * separated by commas and space or a specified separator string.
 * If the array has only one item, then that item will be returned without using the separator.
 *
 * @example
 * {{ [1,2,3,4] | arrayJoin }} <!--Result: 1, 2, 3, 4 -->
 *
 * @example
 * {{ [1,2,3,4] | arrayJoin:'--' }} <!--Result: 1--2--3--4 -->
 */
@Pipe({
  name: 'arrayJoin'
})
export class ArrayJoinPipe implements PipeTransform {
  /**
   * @param [value] The array to concatenation
   * @param [glue] The glue for concatenation (default: ', ')
   *
   * @returns Returns string by concatenating all of the elements in an array
   */
  transform(value: string[], glue?: string): string {
    if (glue === undefined) glue = ', ';
    return Array.isArray(value) ? value.join(glue) : '';
  }
}
