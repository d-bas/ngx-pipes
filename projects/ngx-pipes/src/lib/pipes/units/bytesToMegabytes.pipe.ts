import { Pipe, PipeTransform } from '@angular/core';

/**
 * Convert value with the amount of bytes to megabytes.
 *
 * @example
 * {{ 1234567890 | bytesToMegabytes }}Mb
 * <!-- Result: 1234.6Mb -->
 *
 * @example
 * {{ 1234567890 | bytesToMegabytes: 2 }}Mb
 * <!-- Result: 1234.57Mb -->
 */
@Pipe({
  name: 'bytesToMegabytes'
})
export class BytesToMegabytesPipe implements PipeTransform {
  /**
   * @param [size] Input value with the amount of bytes
   * @param [digits] Decimal length of the result (Default: 1)
   *
   * @returns Converted value
   */
  transform(size: number, digits?: number): string {
    if (digits === undefined) digits = 1;
    const mb = size ? size / 1000000 : 0;
    return `${mb.toFixed(digits)}`;
  }
}
