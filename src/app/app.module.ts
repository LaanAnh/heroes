import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module.ts.module';
import { DetailComponent } from './detail/detail.component';
import { FlowerComponent } from './flower/flower.component';
import { ContactComponent } from './contact/contact.component';
import { NewComponent } from './new/new.component';
import { MessageService } from './message.service';
import { DataService } from './data.service';
import { HoatuoiComponent } from './hoatuoi/hoatuoi.component';
import { HoachauComponent } from './hoachau/hoachau.component';
import { SaleComponent } from './sale/sale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
    HeaderComponent,
    DetailComponent,
    FlowerComponent,
    ContactComponent,
    NewComponent,
    HoatuoiComponent,
    HoachauComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
 
  providers: [ MessageService, DataService ],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
