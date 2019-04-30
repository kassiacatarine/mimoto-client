import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword = true;


  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required, Validators.min(3)]],
      password: [null, [Validators.required]]
    });
  }

}
