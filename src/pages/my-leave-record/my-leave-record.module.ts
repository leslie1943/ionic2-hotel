import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyLeaveRecordPage } from './my-leave-record';

@NgModule({
  declarations: [
    MyLeaveRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(MyLeaveRecordPage),
  ],
})
export class MyLeaveRecordPageModule {}
