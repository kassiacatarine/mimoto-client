import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CompaniesListComponent],
  imports: [CommonModule, CoreModule, SharedModule, CompaniesRoutingModule]
})
export class CompaniesModule {}
