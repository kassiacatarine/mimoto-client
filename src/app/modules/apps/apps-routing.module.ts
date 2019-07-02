import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsListComponent } from './apps-list/apps-list.component';
import { AppsFormComponent } from './forms/apps-form/apps-form.component';

const routes: Routes = [
  { path: '', component: AppsListComponent },
  { path: 'new', component: AppsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
