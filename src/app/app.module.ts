import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './pages/common/navbar/navbar.component';
import { FooterComponent } from './pages/common/footer/footer.component';

import { NgIconsModule } from '@ng-icons/core'
import { ionCallOutline,ionMailOutline,ionLogoFacebook,ionLogoInstagram,ionLogoYoutube,ionInformationCircle,ionWarning,ionLogInOutline,ionStarHalf,ionStar,ionStarOutline } from '@ng-icons/ionicons';
import { WelcomeBoxComponent } from './pages/common/welcome-box/welcome-box.component';
import { RightImageInfoListComponent } from './pages/common/right-image-info-list/right-image-info-list.component';
import { LeftImageInfoListComponent } from './pages/common/left-image-info-list/left-image-info-list.component';
import { BannerBoxComponent } from './pages/common/banner-box/banner-box.component';
import { BannerItemComponent } from './pages/common/banner-item/banner-item.component';
import { HeroSectionComponent } from './pages/common/hero-section/hero-section.component';
import { LeftFormInfoListComponent } from './pages/common/left-form-info-list/left-form-info-list.component';
import { BannerExpertiseComponent } from './pages/common/banner-expertise/banner-expertise.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactFormComponent } from './pages/common/contact-form/contact-form.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { QuickCallToActionComponent } from './pages/common/quick-call-to-action/quick-call-to-action.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './pages/common/table/table.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FeedbackFormComponent } from './pages/components/feedback-form/feedback-form.component';
import { BarRatingModule } from 'ngx-bar-rating';




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
    BannerExpertiseComponent,
    AboutComponent,
    PageNotFoundComponent,
    ContactPageComponent,
    ContactFormComponent,
    ServicePageComponent,
    QuickCallToActionComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    FeedbackComponent,
    FeedbackFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgIconsModule.withIcons({ ionCallOutline ,ionMailOutline,ionLogoFacebook,ionLogoInstagram,ionLogoYoutube,ionInformationCircle,ionWarning,ionLogInOutline,ionStarHalf,ionStar,ionStarOutline}),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BarRatingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
