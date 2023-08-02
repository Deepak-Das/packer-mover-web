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
import { ListImageInfoComponent } from './pages/common/list-image-info/list-image-info.component';
import { HomePageComponent } from './pages/common/home-page/home-page.component';
import { LeftImageInfoComponent } from './pages/common/left-image-info/left-image-info.component';
import { BannerBoxComponent } from './pages/common/banner-box/banner-box.component';
import { BannerItemComponent } from './pages/common/banner-item/banner-item.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeBoxComponent,
    ListImageInfoComponent,
    HomePageComponent,
    LeftImageInfoComponent,
    BannerBoxComponent,
    BannerItemComponent
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
