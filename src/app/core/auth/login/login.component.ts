import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private authService: AuthService,  private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }

  get f() { return this.loginForm.controls; }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.f[controlName].hasError(errorName);
  }

  login() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email);
    }
  }

}
