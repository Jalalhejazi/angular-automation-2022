import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'about', component:AboutComponent
  },
  {
    path:'product', component:NavigationComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'booking', component:BookingComponent
  },
  
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'kursus', loadChildren: () => import('./kursus/kursus.module').then(m => m.KursusModule) },
  {path:"**", redirectTo:'about'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
