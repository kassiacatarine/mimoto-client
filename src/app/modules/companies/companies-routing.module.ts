import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesFormComponent } from './forms/companies-form/companies-form.component';

const routes: Routes = [
  { path: '', component: CompaniesListComponent },
  { path: 'new', component: CompaniesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
