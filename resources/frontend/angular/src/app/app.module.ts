import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SaleComponent } from './sale/sale.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { SalesComponent } from './sales/sales.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collections', component:CollectionsComponent },
  { path: 'sales', component:SalesComponent },
  { path: 'new', component:NewComponent },
  { path: 'detail/:id', component:DetailComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    SaleComponent,
    TopComponent,
    HomeComponent,
    CollectionsComponent,
    SalesComponent,
    NewComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
