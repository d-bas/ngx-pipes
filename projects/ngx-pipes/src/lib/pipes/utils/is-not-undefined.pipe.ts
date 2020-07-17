import { Pipe, PipeTransform } from '@angular/core';

/**
 * Returns False if the variable is undefined.
 *
 * @example
 * <div *ngIf="null | isNotUndefined; else empty">NOT UNDEFINED</div>
 * <ng-template #empty>UNDEFINED</ng-template>
 * <!-- Result: NOT UNDEFINED -->
 */
@Pipe({
  name: 'isNotUndefined'
})
export class IsNotUndefinedPipe implements PipeTransform {
  /**
   * @param [value] The value to check
   *
   * @returns Check result TRUE/FALSE
   */
  transform(value: any ): boolean {
    return value !== undefined;
  }
}
