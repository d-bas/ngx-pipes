import { NgModule } from '@angular/core';
import { BytesToMegabytesPipe } from './units/bytesToMegabytes.pipe';

@NgModule({
  declarations: [
    BytesToMegabytesPipe
  ],
  exports: [
    BytesToMegabytesPipe
  ]
})
export class UnitsPipesModule {
}
