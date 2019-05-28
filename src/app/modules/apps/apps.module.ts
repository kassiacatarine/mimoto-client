import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { AppsListComponent } from './apps-list/apps-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [AppsListComponent],
  imports: [CommonModule, CoreModule, SharedModule, AppsRoutingModule]
})
export class AppsModule {}
