import { NgModule } from '@angular/core';
import { ArrayJoinPipe } from './array-transform/array-join.pipe';

@NgModule({
  declarations: [
    ArrayJoinPipe
  ],
  exports: [
    ArrayJoinPipe
  ]
})
export class ArrayTransformPipesModule {
}
