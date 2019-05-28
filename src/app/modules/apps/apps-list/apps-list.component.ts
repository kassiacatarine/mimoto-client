import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.scss']
})
export class AppsListComponent implements OnInit {
  apps$: Observable<any>;
  constructor(private appsService: AppsService) {}

  ngOnInit() {
    this.apps$ = this.apps;
  }

  private get apps(): Observable<any> {
    return this.appsService.apps;
  }
}
