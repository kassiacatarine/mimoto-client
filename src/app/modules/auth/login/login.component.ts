import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  stepperKassiao = false;


  loginForm: FormGroup;
  subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();

  }

  private login(): void {
    let login = this.loginForm.controls.login.value;
    let password = this.loginForm.controls.password.value;

    this.loginService.login(login, password).subscribe((res) => {
      console.log(res);
      this.SetToken(res);

      this.router.navigate(['/']);

    });


    
  }

  private GetToken(): string {
    return JSON.parse(localStorage.getItem('token'));
  }

  private SetToken(token: string): void {
    localStorage.setItem("token", JSON.stringify(token))
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required, Validators.min(3)]],
      password: [null, [Validators.required]]
    });
  }

}
