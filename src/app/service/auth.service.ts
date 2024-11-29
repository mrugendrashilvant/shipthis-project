import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
  ) { }

  loginUser(email:string, password:string): Observable<any> {
    let promise = this.fireAuth.signInWithEmailAndPassword(email, password);
    return from(promise);
  }

  registerUser(email: string, password:string): Observable<any> {
    let promise = this.fireAuth.createUserWithEmailAndPassword(email, password);
    return from(promise);
  }

  logout() {
    this.fireAuth.signOut().then(() => {
      this.router.navigate(['/']);
    })
      .catch(() => {
        this.router.navigate(['/']);
      })
  }
}
