import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { UsersService } from './users.service';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersFormComponent } from './forms/users-form/users-form.component';
import { UsersFormProfileComponent } from './forms/users-form-profile/users-form-profile.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersDetailComponent,
    UsersFormComponent,
    UsersFormProfileComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    UsersRoutingModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
