import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Implementation to bypass DomSanitizer stripping out content
 *
 * @example
 * <span innerHtml="{{'<b>123</b>' | safeHtml }}"></span>
 * <!-- Result: <span><b>123</b></span>
 *
 * @example
 * <span innerHtml="{{'<b>123</b>' }}"></span>
 * <!-- Result: <span></span>
 */
@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * @param [html] the html code for sanitizing
   * @returns Sanitized html
   */
  transform(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
