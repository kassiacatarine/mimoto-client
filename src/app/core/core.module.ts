import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ToolbarContainerComponent } from './toolbar/toolbar-container/toolbar-container.component';
import { ToolbarMenuUserComponent } from './toolbar/toolbar-menu-user/toolbar-menu-user.component';

@NgModule({
  declarations: [ToolbarContainerComponent, ToolbarMenuUserComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SharedModule,
    ToolbarContainerComponent
  ]
})
export class CoreModule { }
