import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { AppsListComponent } from './apps-list/apps-list.component';

@NgModule({
  declarations: [AppsListComponent],
  imports: [
    CommonModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
