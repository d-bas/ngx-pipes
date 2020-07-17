import { Pipe, PipeTransform } from '@angular/core';

/**
 * Checks if string ends with the given target string.
 *
 * @example
 * <div *ngIf="'my test' | stringEndsWith:'t'; else no">YES</div>
 * <ng-template #no>NO</ng-template>
 * <!--Result: YES-->
 *
 * @example
 * <div *ngIf="'my test' | stringEndsWith:'a'; else no">YES</div>
 * <ng-template #no>NO</ng-template>
 * <!--Result: NO-->
 *
 * @example
 * <div *ngIf="'my test' | stringEndsWith:'y':2; else no">YES</div>
 * <ng-template #no>NO</ng-template>
 * <!--Result: YES-->
 */
@Pipe({
  name: 'stringEndsWith'
})
export class StringEndsWithPipe implements PipeTransform {
  /**
   *
   * @param [value] The string to inspect
   * @param [target] The string to search for
   * @param [position] The position to search up to (optional)
   *
   * @returns Returns true if string ends with target, else false
   */
  transform(value: string, target: string, position?: number): boolean {
    if (typeof value !== 'string') return false;
    let pos = position === undefined ? length : +position;
    pos = Math.min((pos < 0 || isNaN(pos)) ? 0 : pos, value.length);
    const end = pos;
    pos -= target.length;
    return pos >= 0 && value.slice(pos, end) === target;
  }
}
