import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AvatarModule } from 'ngx-avatar';
import { LayoutMainComponent } from './components/layouts/layout-main/layout-main.component';
import { ToolbarContainerComponent } from './components/toolbar/toolbar-container/toolbar-container.component';
import { ToolbarMenuUserComponent } from './components/toolbar/toolbar-menu-user/toolbar-menu-user.component';
import { LayoutBackgroundComponent } from './components/layouts/layout-background/layout-background.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutCardComponent } from './components/layouts/layout-card/layout-card.component';
import { ErrorDialogComponent } from './components/errors/error-dialog/error-dialog.component';
import { ToolbarSearchComponent } from './components/toolbar/toolbar-search/toolbar-search.component';
import { UsersService } from '../modules/users/users.service';

@NgModule({
  declarations: [
    LayoutMainComponent,
    ToolbarContainerComponent,
    ToolbarMenuUserComponent,
    LayoutBackgroundComponent,
    LayoutCardComponent,
    ErrorDialogComponent,
    ToolbarSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    AvatarModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    AvatarModule,
    LayoutMainComponent,
    LayoutBackgroundComponent,
    LayoutCardComponent,
    ErrorDialogComponent
  ],
  entryComponents: [
    ErrorDialogComponent
  ]
})
export class SharedModule { }
