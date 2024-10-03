import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleriaModule } from 'primeng/galleria';

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
import { SectionOneComponent } from './components/about/section-one/section-one.component';
import { SectionTwoComponent } from './components/about/section-two/section-two.component';
import { SectionThreeComponent } from './components/about/section-three/section-three.component';
import { SectionFourComponent } from './components/about/section-four/section-four.component';
import { SidebarComponent } from './components/common/header/sidebar/sidebar.component';

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
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GalleriaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
