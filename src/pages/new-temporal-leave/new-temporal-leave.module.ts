import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTemporalLeavePage } from './new-temporal-leave';

@NgModule({
  declarations: [
    NewTemporalLeavePage,
  ],
  imports: [
    IonicPageModule.forChild(NewTemporalLeavePage),
  ],
})
export class NewTemporalLeavePageModule {}
