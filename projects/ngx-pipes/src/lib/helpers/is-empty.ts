export interface IsEmptyOptions {
  /**
   * Enable checking for an empty string.
   */
  checkEmptyString?: boolean;
}

/**
 * @ignore
 */
export const isEmpty = (value: any, options: IsEmptyOptions) => {
  if (typeof value === 'undefined' || value === null) return true;
  if (options?.checkEmptyString && value.toString() === '') return true;
  return false;
}
