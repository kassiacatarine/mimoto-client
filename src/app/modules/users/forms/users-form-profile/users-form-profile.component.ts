import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form-profile',
  templateUrl: './users-form-profile.component.html',
  styleUrls: ['./users-form-profile.component.scss']
})
export class UsersFormProfileComponent implements OnInit {

  private formProfile: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.formProfile = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.email, Validators.required]],
      location: [null]
    });
  }

  public onFormSubmit(): void {
    this.usersService.postProfile(this.formProfile.value);
  }

}
