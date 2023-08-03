import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';

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
    path:'**',
    component:PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
