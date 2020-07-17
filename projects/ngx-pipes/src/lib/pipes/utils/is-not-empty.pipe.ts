import { Pipe, PipeTransform } from '@angular/core';
import { IsEmptyOptions, isEmpty } from '../../helpers/is-empty';

/**
 * Returns False if the variable is undefined or is null.
 * Through the options can enable also check an empty string.
 *
 * @example
 * <div *ngIf="null | isNotEmpty; else empty">NOT EMPTY</div>
 * <ng-template #empty>EMPTY</ng-template>
 * <!-- Result: EMPTY -->
 */
@Pipe({
  name: 'isNotEmpty'
})
export class IsNotEmptyPipe implements PipeTransform {
  /**
   * @param [value] The value to check
   * @param [options] Options. (Default: { checkEmptyString: false })
   *
   * @returns Check result TRUE/FALSE
   */
  transform(value: any, options?: IsEmptyOptions ): boolean {
    return !isEmpty(value, options);
  }
}
