import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppCoverComponent } from './app-cover/app-cover.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppCarouselComponent } from './app-carousel/app-carousel.component';
import { AppFeaturettesComponent } from './app-featurettes/app-featurettes.component';
import { AppSlideshowComponent } from './app-slideshow/app-slideshow.component';
import { AppCarouselUpdatedComponent } from './app-carousel-updated/app-carousel-updated.component';
import { AppTilesComponent } from './app-tiles/app-tiles.component';
import { AppContactUsComponent } from './app-contact-us/app-contact-us.component';
import { AppNavbarUpdatedComponent } from './app-navbar-updated/app-navbar-updated.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppCoverComponent,
    AppCarouselComponent,
    AppFeaturettesComponent,
    AppSlideshowComponent,
    AppCarouselUpdatedComponent,
    AppTilesComponent,
    AppContactUsComponent,
    AppNavbarUpdatedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
