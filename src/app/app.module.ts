import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

import { NgIconsModule } from '@ng-icons/core'
import { ionCallOutline,ionMailOutline,ionLogoFacebook,ionLogoInstagram,ionLogoYoutube } from '@ng-icons/ionicons';
import { WelcomeBoxComponent } from './pages/common/welcome-box/welcome-box.component';
import { RightImageInfoListComponent } from './pages/common/right-image-info-list/right-image-info-list.component';
import { HomePageComponent } from './pages/common/home-page/home-page.component';
import { LeftImageInfoListComponent } from './pages/common/left-image-info-list/left-image-info-list.component';
import { BannerBoxComponent } from './pages/common/banner-box/banner-box.component';
import { BannerItemComponent } from './pages/common/banner-item/banner-item.component';
import { HeroSectionComponent } from './pages/common/hero-section/hero-section.component';
import { LeftFormInfoListComponent } from './pages/common/left-form-info-list/left-form-info-list.component';
import { BannerExpertiseComponent } from './pages/common/banner-expertise/banner-expertise.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeBoxComponent,
    RightImageInfoListComponent,
    HomePageComponent,
    LeftImageInfoListComponent,
    BannerBoxComponent,
    BannerItemComponent,
    HeroSectionComponent,
    LeftFormInfoListComponent,
    BannerExpertiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgIconsModule.withIcons({ ionCallOutline ,ionMailOutline,ionLogoFacebook,ionLogoInstagram,ionLogoYoutube}),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
