import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { LayoutBackgroundComponent } from 'src/app/shared/components/layouts/layout-background/layout-background.component';

const routes: Routes = [
  { path: 'oauth2', component: LayoutBackgroundComponent, children: [
    { path: 'authorize', component: LoginComponent },
    { path: 'recover', component: RecoverComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
