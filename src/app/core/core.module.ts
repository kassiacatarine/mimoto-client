import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListAvatarComponent } from './components/lists/list-avatar/list-avatar.component';

@NgModule({
  declarations: [ListAvatarComponent],
  imports: [CommonModule, SharedModule],
  exports: [SharedModule, ListAvatarComponent]
})
export class CoreModule {}
