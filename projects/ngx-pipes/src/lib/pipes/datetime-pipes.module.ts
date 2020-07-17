import { NgModule } from '@angular/core';
import { ElapsedTimePipe } from './datetime/elapsed-time.pipe';
import { TimestampPipe } from './datetime/timestamp.pipe';

@NgModule({
  declarations: [
    ElapsedTimePipe,
    TimestampPipe
  ],
  exports: [
    ElapsedTimePipe,
    TimestampPipe
  ]
})
export class DatetimePipesModule {
}
