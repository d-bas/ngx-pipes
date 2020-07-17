/**
 * @ignore
 */
import { NgModule } from '@angular/core';
import { ArrayTransformPipesModule } from './array-transform-pipes.module';
import { DatetimePipesModule } from './datetime-pipes.module';
import { StringCheckPipesModule } from './string-check-pipes.module';
import { StringTransformPipesModule } from './string-transform-pipes.module';
import { UnitsPipesModule } from './units-pipes.module';
import { UtilsPipesModule } from './utils-pipes.module';

@NgModule({
  imports: [
    ArrayTransformPipesModule,
    DatetimePipesModule,
    StringCheckPipesModule,
    StringTransformPipesModule,
    UnitsPipesModule,
    UtilsPipesModule
  ]
})
export class PipesModule {
}
