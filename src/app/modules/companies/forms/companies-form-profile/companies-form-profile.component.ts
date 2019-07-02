import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { tap, startWith, map, filter } from 'rxjs/operators';
import { CompaniesService } from '../../companies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies-form-profile',
  templateUrl: './companies-form-profile.component.html',
  styleUrls: ['./companies-form-profile.component.scss']
})
export class CompaniesFormProfileComponent implements OnInit {

  private formProfile: FormGroup;
  users$: Observable<Array<any>>;

  constructor(
    private formBuilder: FormBuilder,
    private companiesService: CompaniesService,
    private route: Router,
    private router: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initForm();
    this.users$ = this.companiesService.users;
  }

  private initForm(): void {
    this.formProfile = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      cnpj: [null, Validators.minLength(3)],
      responsibleId: [null, Validators.required]
    });
  }

  public onFormSubmit(): void {
    this.companiesService.postProfile(this.formProfile.value).pipe(
      tap(() => this._snackBar.open('Empresa criada com sucesso!', 'OK', {
        duration: 2000,
      })),
      tap(() => this.route.navigate(['../'], { relativeTo: this.router }))
    ).subscribe();
  }

}
