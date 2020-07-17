import { NgModule } from '@angular/core';
import { StringEndsWithPipe } from './string-check/string-ends-with.pipe';
import { StringStartsWithPipe } from './string-check/string-starts-with.pipe';
import { StringIncludesPipe } from './string-check/string-includes.pipe';

@NgModule({
  declarations: [
    StringEndsWithPipe,
    StringStartsWithPipe,
    StringIncludesPipe
  ],
  exports: [
    StringEndsWithPipe,
    StringStartsWithPipe,
    StringIncludesPipe
  ]
})
export class StringCheckPipesModule {
}
