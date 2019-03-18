import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { CollepsibleComponent } from './collepsible/collepsible.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressbarDefaultComponent } from './progressbar-default/progressbar-default.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivityPostComponent } from './activity-post/activity-post.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [ProgressbarDefaultComponent, ActivityPostComponent, AlertMessageComponent, CollepsibleComponent, AccordionComponent],
  exports: [ProgressbarDefaultComponent, ActivityPostComponent, AlertMessageComponent, CollepsibleComponent, AccordionComponent]
})
export class CommonElementsModule { }
