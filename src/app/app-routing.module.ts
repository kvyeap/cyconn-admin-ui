import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';

const routes: Routes = [
  // tslint:disable-next-line: max-line-length
  { path: '', redirectTo: 'public/main', pathMatch: 'full' },
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'home', component: LayoutComponent, loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'public/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
