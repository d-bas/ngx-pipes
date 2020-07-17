import { Pipe, PipeTransform } from '@angular/core';

/**
 * Returns True if the variable is null.
 *
 * @example
 * <div *ngIf="null | isNull; else no">NULL</div>
 * <ng-template #no>NOT NULL</ng-template>
 * <!-- Result: NULL -->
 */
@Pipe({
  name: 'isNull'
})
export class IsNullPipe implements PipeTransform {
  /**
   * @param [value] The value to check
   *
   * @returns Check result TRUE/FALSE
   */
  transform(value: any ): boolean {
    return value === null;
  }
}
