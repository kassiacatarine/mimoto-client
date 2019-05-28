import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutMainComponent } from './shared/components/layouts/layout-main/layout-main.component';

const routes: Routes = [
  // { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '', component: LayoutMainComponent, pathMatch: 'full',  children: [
    {
      path: '', loadChildren: '../app/modules/users/users.module#UsersModule'
    }
  ]},
  // {
  //   path: '', loadChildren: '../app/modules/auth/auth.module#AuthModule',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
