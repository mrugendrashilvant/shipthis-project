import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./service/auth.service";
import {ClientRoutes} from "@core/client-routes";
import {MatSnackBar} from "@angular/material/snack-bar";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if(!authService.isUserLoggedIn()) {
    const router = inject(Router);
    const snackbar = inject(MatSnackBar)
    router.navigate(['/'+ClientRoutes.auth.login()]);
    snackbar.open("Unauthorized Action", undefined, {panelClass: "error-snackbar"});
  }
  return true;
};
