import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ToolbarContainerComponent } from './toolbar/toolbar-container/toolbar-container.component';

@NgModule({
  declarations: [ToolbarContainerComponent],
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
