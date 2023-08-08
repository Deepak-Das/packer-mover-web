import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './authentication/auth.guard';

const routes: Routes = [

  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'home',
    redirectTo:''
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'service',
    component:ServicePageComponent
  },
  {
    path:'contact',
    component:ContactPageComponent
  },
  {
    path:'cLogin',
    component:LoginComponent
  },
  {
    path:'dashboard',
    canActivate:[authGuard],
    component:DashboardComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
