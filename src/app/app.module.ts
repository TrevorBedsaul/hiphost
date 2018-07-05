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

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppCoverComponent,
    AppCarouselComponent,
    AppFeaturettesComponent,
    AppSlideshowComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
