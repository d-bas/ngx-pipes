import { Pipe, PipeTransform } from '@angular/core';
import { IsEmptyOptions, isEmpty } from '../../helpers/is-empty';

/**
 * Returns True if the variable is undefined or is null.
 * Through the options can enable also check an empty string.
 *
 * @example
 * <div *ngIf="null | isEmpty; else no">EMPTY</div>
 * <ng-template #no>NOT EMPTY</ng-template>
 * <!-- Result: EMPTY -->
 */
@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {
  /**
   * @param [value] The value to check
   * @param [options] Options. (Default: { checkEmptyString: false })
   *
   * @returns Check result TRUE/FALSE
   */
  transform(value: any, options?: IsEmptyOptions ): boolean {
    return isEmpty(value, options);
  }
}
