import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LotsComponent } from './pages/lots/lots.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommunityComponent } from './pages/community/community.component';
import { SlidesComponent } from './components/photos/slides/slides.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LotsComponent,
    PhotosComponent,
    ContactComponent,
    CommunityComponent,
    SlidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
