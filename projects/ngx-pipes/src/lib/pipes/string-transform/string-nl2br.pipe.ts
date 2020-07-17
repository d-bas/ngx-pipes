import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Inserts HTML line breaks before all newlines in a string and and sanitizing potentially dangerous values.
 *
 * @example
 * {{ 'Hello /n world' | stringNl2Br }}
 * <!-- Result: Hello<br />world -->
 */
@Pipe({
  name: 'stringNl2Br'
})
export class StringNl2brPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  /**
   * @param [value] The value to process.
   * @param [sanitizeBeforehand] Sanitizing potentially dangerous values (Default: true)
   *
   * @returns The processed value
   */
  transform(value: string, sanitizeBeforehand?): string {
    if (sanitizeBeforehand === undefined) sanitizeBeforehand = true;
    if (!value || typeof value !== 'string') return value;
    let result: any;
    const textParsed = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    if (sanitizeBeforehand) {
      result = this.sanitizer.sanitize(SecurityContext.HTML, textParsed);
    } else {
      result = textParsed;
    }

    return result;
  }
}
