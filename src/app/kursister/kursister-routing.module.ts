import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KursisterComponent } from './kursister.component';

const routes: Routes = [{ path: '', component: KursisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KursisterRoutingModule { }
