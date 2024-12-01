import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ClientRoutes} from "@core/client-routes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required])
  });
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) return;
    this.loading = true;
    let formData = this.registerForm.getRawValue();
    this.authService.registerUser(formData?.email, formData?.password)
      .then(() => {
          this.snackBar.open("Welcome to FletNix!", undefined, {panelClass: "success-snackbar"});
          this.router.navigate([`/${ClientRoutes.dashboard.base()}`]);
          this.authService.saveUserInfo(true)
        },
        (err) => {
          this.loading = false;
          if(err?.message?.includes("auth/email-already-in-use")) {
            this.router.navigate([`/${ClientRoutes.auth.login()}`]);
            this.snackBar.open("Account exits already. Please login", undefined, {panelClass: "error-snackbar"});
          }
          else {
            this.snackBar.open(err, undefined, {panelClass: "error-snackbar"});
          }
          this.authService.saveUserInfo(false);
        }
      )
  }
}
