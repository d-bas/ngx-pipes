import { NgModule } from '@angular/core';
import { DefaultValuePipe } from './utils/default-value.pipe';
import { IsEmptyPipe } from './utils/is-empty.pipe';
import { IsNotEmptyPipe } from './utils/is-not-empty.pipe';
import { ProgressPipe } from './utils/progress.pipe';
import { SafeHtmlPipe } from './utils/safe-html.pipe';
import { IsNullPipe } from './utils/is-null.pipe';
import { IsNotNullPipe } from './utils/is-not-null.pipe';
import { IsUndefinedPipe } from './utils/is-undefined.pipe';
import { IsNotUndefinedPipe } from './utils/is-not-undefined.pipe';

@NgModule({
  declarations: [
    DefaultValuePipe,
    IsEmptyPipe,
    IsNotEmptyPipe,
    ProgressPipe,
    SafeHtmlPipe,
    IsNullPipe,
    IsNotNullPipe,
    IsUndefinedPipe,
    IsNotUndefinedPipe
  ],
  exports: [
    DefaultValuePipe,
    IsEmptyPipe,
    IsNotEmptyPipe,
    ProgressPipe,
    SafeHtmlPipe,
    IsNullPipe,
    IsNotNullPipe,
    IsUndefinedPipe,
    IsNotUndefinedPipe
  ]
})
export class UtilsPipesModule {
}
