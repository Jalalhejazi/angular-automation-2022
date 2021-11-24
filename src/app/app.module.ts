import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeadComponent } from './head/head.component';
import { CurrentComponent } from './current/current.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DownloadComponent } from './download/download.component';
import { DateAsISOPipe } from './pipes/date-as-iso.pipe';
import { ProductComponent } from './product/product.component';
import { ProductInfoComponent } from './product-info/product-info.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeadComponent,
    ServiceComponent,
    ContactComponent,
    FooterComponent,
    DownloadComponent,
    CurrentComponent,
    DateAsISOPipe,
    ProductComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
