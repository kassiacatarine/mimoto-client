import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutBackgroundComponent } from 'src/app/shared/components/layouts/layout-background/layout-background.component';

const routes: Routes = [
  { path: '', redirectTo: 'oauth2/authorize', pathMatch: 'full' },
  { path: 'oauth2', component: LayoutBackgroundComponent, children: [
    { path: 'authorize', component: LoginComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
