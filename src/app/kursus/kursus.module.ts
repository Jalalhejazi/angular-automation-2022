import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KursusRoutingModule } from './kursus-routing.module';
import { KursusComponent } from './kursus.component';


@NgModule({
  declarations: [KursusComponent],
  imports: [
    CommonModule,
    KursusRoutingModule
  ]
})
export class KursusModule { }
