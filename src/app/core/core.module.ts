import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListAvatarComponent } from './components/lists/list-avatar/list-avatar.component';
import { ListLinkComponent } from './components/lists/list-link/list-link.component';

@NgModule({
  declarations: [
    ListAvatarComponent,
    ListLinkComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
    ListAvatarComponent,
    ListLinkComponent
  ]
})
export class CoreModule { }
