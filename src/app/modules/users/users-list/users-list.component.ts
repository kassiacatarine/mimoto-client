import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  messages: string [] = [ 'Boots' , 'Clogs' , 'Loafers' , 'Mocassins' , 'Sapatilhas' ];
  constructor() { }

  ngOnInit() {
  }

}
