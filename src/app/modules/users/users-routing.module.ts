import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersFormComponent } from './forms/users-form/users-form.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'new', component: UsersFormComponent },
  { path: ':id', component: UsersDetailComponent },
  { path: 'edit/:id ', component: UsersFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
