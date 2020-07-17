import { Pipe, PipeTransform } from '@angular/core';

/**
 * Checks whether string includes a substring.
 *
 * @example
 * <div *ngIf="'my test' | stringIncludes:'t'; else no">YES</div>
 * <ng-template #no>NO</ng-template>
 * <!--Result: YES-->
 *
 * @example
 * <div *ngIf="'my test' | stringIncludes:'a'; else no">YES</div>
 * <ng-template #no>NO</ng-template>
 * <!--Result: NO-->
 */
@Pipe({
  name: 'stringIncludes'
})
export class StringIncludesPipe implements PipeTransform {
  /**
   * @param [value] The string to inspect
   * @param [target] The string to search for
   * @param [position] The position to search (optional)
   *
   * @returns Returns true if string includes a substring, else false
   */
  transform(value: string, target: string, position?: number): boolean {
    if (typeof value !== 'string') return false;
    let pos = position === undefined ? length : +position;
    pos = Math.min((pos < 0 || isNaN(pos)) ? 0 : pos, value.length);
    return value.indexOf(target, pos) !== -1;
  }
}
