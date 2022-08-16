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
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { DetailComponent } from './detail/detail.component';
import { CrochetComponent } from './crochet/crochet.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collections', component:CollectionsComponent },
  { path: 'detail/:id', component:DetailComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    CollectionsComponent,
    DetailComponent,
    CrochetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      // In order to get anchor / fragment scrolling to work at all, we need to
      // enable it on the router.
      // anchorScrolling: "enabled",

      scrollOffset: [0, 0],
      // Once the above is enabled, the fragment link will only work on the
      // first click. This is because, by default, the Router ignores requests
      // to navigate to the SAME URL that is currently rendered. Unfortunately,
      // the fragment scrolling is powered by Navigation Events. As such, we
      // have to tell the Router to re-trigger the Navigation Events even if we
      // are navigating to the same URL.

      // onSameUrlNavigation: "reload",

      // Let's enable tracing so that we can see the aforementioned Navigation
      // Events when the fragment is clicked.

      // enableTracing: true,
      scrollPositionRestoration: 'top' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
