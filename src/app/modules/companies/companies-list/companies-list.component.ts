import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  companies$: Observable<any>;
  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.companies$ = this.companies;
  }

  private get companies(): Observable<any> {
    return this.companiesService.companies;
  }
}
