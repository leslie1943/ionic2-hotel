import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamLeavePage } from './team-leave';

@NgModule({
  declarations: [
    TeamLeavePage,
  ],
  imports: [
    IonicPageModule.forChild(TeamLeavePage),
  ],
})
export class TeamLeavePageModule {}
