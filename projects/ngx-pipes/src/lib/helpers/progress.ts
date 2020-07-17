export interface ProgressOptions {
  /**
   *  Default decimal length of the result (e.q. "0" for 10, "1" for 10.1, "2" for 10.12)
   */
  decimalPartLength?: number;
  /**
   *  Decimal length of the result if the result less than 1 (e.g. "2" for 0.12, "1" for 0.1)
   */
  lessOneValueDecimalPartLength?: number;
  /**
   *  Decimal length of the result if the result is zero (e.g. "2" for 0.00, "1" for 0.0)
   */
  zeroValueDecimalPartLength?: number;
}

/**
 * @ignore
 */
export const progress = (value: number, maxValue: number, options?: ProgressOptions): string => {
  const o: ProgressOptions = {
    decimalPartLength: 0,
    lessOneValueDecimalPartLength: 0,
    zeroValueDecimalPartLength: 0,
    ... (options || {})
  };
  const result = (!value || !maxValue) ? 0 : (value / maxValue) * 100;
  if (result === 0) {
    return result.toFixed(o.zeroValueDecimalPartLength);
  } else if (result < 1) {
    return result.toFixed(o.lessOneValueDecimalPartLength);
  }
  return result.toFixed(o.decimalPartLength);
}
