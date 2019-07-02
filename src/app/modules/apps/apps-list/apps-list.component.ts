import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppsService } from '../apps.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListAvatar } from 'src/app/core/components/lists/list-avatar/list-avatar';

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.scss']
})
export class AppsListComponent implements OnInit {
  apps$: Observable<any>;

  listAvatar: ListAvatar = {
    attributes: [{ 1: 'name' }, { 2: 'email' }],
    iconSize: 40
  };

  constructor(
    private appsService: AppsService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.apps$ = this.apps;
  }

  private get apps(): Observable<any> {
    console.log("textinhu" + this.appsService.apps)
    return this.appsService.apps;
  }

  public itemDetail(itemId: string): void {
    this.route.navigate([itemId], { relativeTo: this.router });
  }
}
