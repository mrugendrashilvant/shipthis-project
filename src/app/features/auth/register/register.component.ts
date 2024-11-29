import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  })

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) {
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();
    if(this.registerForm.invalid) return;

    let formData = this.registerForm.getRawValue();
    this.authService.registerUser(formData?.email, formData?.password)
      .then(() => {
        this.snackBar.open("Welcome to FletNix!", undefined, {panelClass: "success-snackbar"});
      },
        err => {
          this.snackBar.open(err.error.message, undefined, {panelClass: "error-snackbar"});
        }
        )
  }
}
