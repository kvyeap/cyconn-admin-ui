import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './core/guards/auth.guard';
import {LayoutComponent} from './layouts/layout.component';
import {LoginComponent} from './public/login/login.component';
import {Page404Component} from './public/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {title: 'Home'},
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: '**',
    component: Page404Component,
    data: {title: 'Not Found'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
