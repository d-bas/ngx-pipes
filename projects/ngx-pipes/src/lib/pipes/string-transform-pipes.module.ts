import { NgModule } from '@angular/core';
import { StringUnescapePipe } from './string-transform/string-unescape.pipe';
import { StringTruncateByWordsPipe } from './string-transform/string-truncate-by-words.pipe';
import { StringTruncatePipe } from './string-transform/string-truncate.pipe';
import { StringFormatUnicornPipe } from './string-transform/string-format-unicorn.pipe';
import { StringNl2brPipe } from './string-transform/string-nl2br.pipe';

@NgModule({
  declarations: [
    StringUnescapePipe,
    StringTruncateByWordsPipe,
    StringTruncatePipe,
    StringFormatUnicornPipe,
    StringNl2brPipe
  ],
  exports: [
    StringUnescapePipe,
    StringTruncateByWordsPipe,
    StringTruncatePipe,
    StringFormatUnicornPipe,
    StringNl2brPipe
  ]
})
export class StringTransformPipesModule {
}
