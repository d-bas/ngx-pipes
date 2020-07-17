import { Pipe, PipeTransform } from '@angular/core';

/**
 * Checks if string starts with the given target string.
 *
 * @example
 * <div *ngIf="'my test' | stringStartsWith:'m'; else no">YES</div>
 * <ng-template #no>NO</ng-template>
 * <!--Result: YES-->
 *
 * <div *ngIf="'my test' | stringStartsWith:'a'; else no">YES</div>
 * <ng-template #no>NO</ng-template>
 * <!--Result: NO-->
 *
 * <div *ngIf="'my test' | stringStartsWith:'t':3; else no">YES</div>
 * <ng-template #no>NO</ng-template>
 * <!--Result: YES-->
 */
@Pipe({
  name: 'stringStartsWith'
})
export class StringStartsWithPipe implements PipeTransform {
  /**
   * @param [value] The string to inspect
   * @param [target] The string to search for
   * @param [position] The position to search from (optional)
   *
   * @returns Returns true if string starts with target, else false
   */
  transform(value: string, target: string, position?: number): boolean {
    if (typeof value !== 'string') return false;
    const pos = Math.min(position === null || position < 0 ? 0 : position, value.length);
    return value.slice(pos, pos + target.toString().length) === target.toString();
  }
}
