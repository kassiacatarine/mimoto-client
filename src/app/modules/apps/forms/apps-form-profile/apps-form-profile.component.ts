import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { tap } from 'rxjs/operators';
import { AppsService } from '../../apps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apps-form-profile',
  templateUrl: './apps-form-profile.component.html',
  styleUrls: ['./apps-form-profile.component.scss']
})
export class AppsFormProfileComponent implements OnInit {

  users$: Observable<Array<any>>;
  companies$: Observable<Array<any>>;
  private formProfile: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private appsService: AppsService,
    private route: Router,
    private router: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initForm();
    this.users$ = this.appsService.users;
    this.companies$ = this.appsService.companies;
  }

  private initForm(): void {
    this.formProfile = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      domain: [null, [Validators.required, Validators.minLength(3)]],
      companyId: [null, Validators.required],
      responsibleId: [null, Validators.required],
    });
  }

  public onFormSubmit(): void {
    this.appsService.postProfile(this.formProfile.value).pipe(
      tap(() => this._snackBar.open('Aplicativo criadp com sucesso!', 'OK', {
        duration: 2000,
      })),
      tap(() => this.route.navigate(['../'], { relativeTo: this.router }))
    ).subscribe();
  }
}
