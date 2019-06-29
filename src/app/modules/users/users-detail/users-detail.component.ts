import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {
  public user$: Observable<any>;

  constructor(private route: ActivatedRoute, private service: UsersService) {}

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.value(params.get('id')))
    );
  }

  public value(id: string): Observable<any> {
    console.log(id);
    return this.service.user(id);
  }
}
