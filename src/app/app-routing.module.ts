import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent }     from './current/current.component';
import { ServiceComponent }     from './service/service.component';
import { ContactComponent }     from './contact/contact.component';
import { DownloadComponent }    from './download/download.component';
import { YearComponent }        from './year/year.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ApiService }           from './api.service'

const service = new ApiService()

/*
  // Code Optimization for production build 
  // if path is fixed like calendar/
  // then the value :date can change to any valid string ['January', 'February', '2020']

  { path: 'calendar/:date',  component:CurrentComponent },
  { path: 'calendar/:date',  component:NextComponent    },
  { path: 'calendar/:date',  component:YearComponent    },

*/

export let routes: Routes = [
  { path: service.Month ,       component:CurrentComponent, data: {dato:service.yyyyMM} },
  { path: service.Month_plus_1, component:CurrentComponent, data: {dato:service.NextM}  }, 
  { path: service.Month_plus_2, component:CurrentComponent, data: {dato:service.NextMM}  }, 
  { path: service.CurrentYear,  component:YearComponent },
  { path: 'kursus/:id',    component:ProductInfoComponent },

  { path: 'service',    component:ServiceComponent },
  { path: 'contact',    component:ContactComponent },
  { path: 'download',   component:DownloadComponent },
  { path: 'private/members', 
    loadChildren: () => 
    import('./kursister/kursister.module').then(m => m.KursisterModule) 

  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
