import { Pipe, PipeTransform } from '@angular/core';

/**
 * Returns False if the variable is null.
 *
 * @example
 * <div *ngIf="null | isNotNull; else empty">NOT NULL</div>
 * <ng-template #empty>NULL</ng-template>
 * <!-- Result: NULL -->
 */
@Pipe({
  name: 'isNotNull'
})
export class IsNotNullPipe implements PipeTransform {
  /**
   * @param [value] The value to check
   *
   * @returns Check result TRUE/FALSE
   */
  transform(value: any): boolean {
    return value !== null;
  }
}
