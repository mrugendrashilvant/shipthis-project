import { Routes } from '@angular/router';
import {ClientRoutes} from "@core/client-routes";

export const routes: Routes = [
  {
    path: "",
    redirectTo: ClientRoutes.auth.login(),
    pathMatch: 'full',
  },
  {
    path: ClientRoutes.auth.login(),
    loadComponent: () => import('@feature/auth/auth.component').then(c => c.AuthComponent)
  }
];
