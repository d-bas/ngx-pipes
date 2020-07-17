import { Pipe, PipeTransform } from '@angular/core';

/**
 * Returns True if the variable is undefined.
 *
 * @example
 * <div *ngIf="null | isUndefined; else empty">UNDEFINED</div>
 * <ng-template #empty>NOT UNDEFINED</ng-template>
 * <!-- Result: NOT UNDEFINED -->
 */
@Pipe({
  name: 'isUndefined'
})
export class IsUndefinedPipe implements PipeTransform {
  /**
   * @param [value] The value to check
   *
   * @returns Check result TRUE/FALSE
   */
  transform(value: any ): boolean {
    return value === undefined;
  }
}
