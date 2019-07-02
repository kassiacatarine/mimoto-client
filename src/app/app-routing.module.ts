import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutMainComponent } from './shared/components/layouts/layout-main/layout-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'oauth2/authorize', pathMatch: 'full' },
  {
    path: '', component: LayoutMainComponent, children: [
      {
        path: 'apps', loadChildren: '../app/modules/apps/apps.module#AppsModule'
      },
      {
        path: 'companies', loadChildren: '../app/modules/companies/companies.module#CompaniesModule'
      },
      {
        path: 'users', loadChildren: '../app/modules/users/users.module#UsersModule'
      },
    ]
  },
  {
    path: '', loadChildren: '../app/modules/auth/auth.module#AuthModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
