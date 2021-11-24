import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KursisterRoutingModule } from './kursister-routing.module';
import { KursisterComponent } from './kursister.component';


@NgModule({
  declarations: [KursisterComponent],
  imports: [
    CommonModule,
    KursisterRoutingModule
  ]
})
export class KursisterModule { }
