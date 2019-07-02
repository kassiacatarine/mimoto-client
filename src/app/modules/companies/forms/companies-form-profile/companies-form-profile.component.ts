import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { tap } from 'rxjs/operators';
import { CompaniesService } from '../../companies.service';

@Component({
  selector: 'app-companies-form-profile',
  templateUrl: './companies-form-profile.component.html',
  styleUrls: ['./companies-form-profile.component.scss']
})
export class CompaniesFormProfileComponent implements OnInit {

  private formProfile: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private companiesService: CompaniesService,
    private route: Router,
    private router: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.formProfile = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      cnpj: [null, Validators.minLength(3)],
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
