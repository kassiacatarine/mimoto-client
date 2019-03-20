import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AvatarModule } from 'ngx-avatar';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [],
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
    NgxSpinnerModule
  ]
})
export class SharedModule { }
