import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { CompaniesFormComponent } from './forms/companies-form/companies-form.component';
import { CompaniesFormProfileComponent } from './forms/companies-form-profile/companies-form-profile.component';

@NgModule({
  declarations: [
    CompaniesListComponent,
    CompaniesFormComponent,
    CompaniesFormProfileComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
