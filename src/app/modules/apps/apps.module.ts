import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { AppsListComponent } from './apps-list/apps-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { AppsFormProfileComponent } from './forms/apps-form-profile/apps-form-profile.component';
import { AppsFormComponent } from './forms/apps-form/apps-form.component';
@NgModule({
  declarations: [
    AppsListComponent,
    AppsFormProfileComponent,
    AppsFormComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
