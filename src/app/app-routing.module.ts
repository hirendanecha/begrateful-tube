import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './auth-layout/pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'logout',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./main-layout/main-layout.module').then(m => m.MainLayoutModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth-layout/auth-layout.module').then(m => m.AuthLayoutModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
