import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeBoxComponent } from './pages/common/welcome-box/welcome-box.component';
import { HomePageComponent } from './pages/common/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
