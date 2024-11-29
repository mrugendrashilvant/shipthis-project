import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  loginUser(email:string, password:string) {
    return (this.fireAuth.signInWithEmailAndPassword(email, password));
  }

  registerUser(email: string, password:string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.fireAuth.signOut().then(() => {
      this.snackBar.open("Logged out successfully!", undefined, {panelClass: "success-snackbar"})
      this.router.navigate(['/']);
    })
      .catch(() => {
        this.router.navigate(['/']);
      })
  }
}
