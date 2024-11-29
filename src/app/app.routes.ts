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
  },
  {
    path: ClientRoutes.auth.register(),
    loadComponent: () => import('@feature/auth/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: ClientRoutes.dashboard.base(),
    loadComponent: () => import('@feature/shows/shows.component').then(c => c.ShowsComponent)
  }
];
