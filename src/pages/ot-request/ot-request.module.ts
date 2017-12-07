import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OTRequestPage } from './ot-request';

@NgModule({
  declarations: [
    OTRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(OTRequestPage),
  ],
})
export class OTRequestPageModule {}
