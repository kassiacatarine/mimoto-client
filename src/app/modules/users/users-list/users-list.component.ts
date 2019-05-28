import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users$: Observable<any>;
  messages: string[] = ['Boots', 'Clogs', 'Loafers', 'Mocassins', 'Sapatilhas'];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users$ = this.users;
  }

  private get users(): Observable<any> {
    return this.usersService.users;
  }
}
