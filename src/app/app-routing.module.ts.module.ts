import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NewComponent } from './new/new.component';
import { HoatuoiComponent } from './hoatuoi/hoatuoi.component';
import { HoachauComponent } from './hoachau/hoachau.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'new', component: NewComponent},
  {path:'hoatuoi',component: HoatuoiComponent},
  {path: 'hoachau',component: HoachauComponent},
  {path: 'sale',component: SaleComponent}
 
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
