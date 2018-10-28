import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DevicesComponent } from './devices/devices.component';
import { AppsComponent } from './apps/apps.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: 'devices',
    component: DevicesComponent
  }, {
    path: 'profiles',
    component: ProfilesComponent
  }, {
    path: 'themes',
    component: ThemesComponent
  }, {
    path: 'apps',
    component: AppsComponent
  }]
}, {
  path: 'login',
  component: LoginPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
