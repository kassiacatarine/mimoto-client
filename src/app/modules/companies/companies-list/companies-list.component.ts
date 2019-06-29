import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ListAvatar } from 'src/app/core/components/lists/list-avatar/list-avatar';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  companies$: Observable<any>;

  listAvatar: ListAvatar = {
    attributes: [{ 1: 'name' }, { 2: 'email' }],
    iconSize: 40
  };

  constructor(
    private companiesService: CompaniesService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.companies$ = this.companies;
  }

  private get companies(): Observable<any> {
    return this.companiesService.companies;
  }

  public itemDetail(itemId: string): void {
    this.route.navigate([itemId], { relativeTo: this.router });
  }
}
