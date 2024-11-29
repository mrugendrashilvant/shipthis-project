import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ClientRoutes} from "@core/client-routes";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid) return;
    let formData = this.loginForm.getRawValue();
    this.authService.loginUser(formData?.email, formData?.password)
      .then(() => {
        this.snackBar.open("Welcome to FletNix!", undefined, {panelClass: "success-snackbar"});
        this.router.navigate([`/${ClientRoutes.dashboard.base()}`])
      },
        err => {
          this.router.navigate([`/${ClientRoutes.auth.register()}`])
          this.snackBar.open("Account not found. Please register first", undefined, {panelClass: "error-snackbar"});
        }
      )
  }

}
