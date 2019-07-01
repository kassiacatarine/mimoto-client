import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsersService } from '../../users.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  public id$: Observable<string>;
  private _id: string;

  constructor(
    private route: ActivatedRoute,
    private service: UsersService
  ) { }

  ngOnInit() {
    this._id = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('id'))
    );
  }

  public get id(): string {
    return this._id;
  }

}
