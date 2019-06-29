import { Avatar } from './../../../core/components/lists/list-avatar/avatar';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { ListAvatar } from 'src/app/core/components/lists/list-avatar/list-avatar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users$: Observable<any>;

  listAvatar: ListAvatar = {
    attributes: [{ 1: 'name' }, { 2: 'email' }],
    iconSize: 40
  };
  constructor(
    private usersService: UsersService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.users$ = this.users;
  }

  private get users(): Observable<any> {
    return this.usersService.users;
  }

  public itemDetail(itemId: string): void {
    this.route.navigate([itemId], { relativeTo: this.router });
  }
}
