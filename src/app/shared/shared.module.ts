import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AvatarModule } from 'ngx-avatar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LayoutMainComponent } from './components/layouts/layout-main/layout-main.component';
import { ToolbarContainerComponent } from './components/toolbar/toolbar-container/toolbar-container.component';
import { ToolbarMenuUserComponent } from './components/toolbar/toolbar-menu-user/toolbar-menu-user.component';

@NgModule({
  declarations: [
    LayoutMainComponent,
    ToolbarContainerComponent,
    ToolbarMenuUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AvatarModule,
    NgxSpinnerModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    AvatarModule,
    NgxSpinnerModule,
    LayoutMainComponent,
  ]
})
export class SharedModule { }
