import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./homepage/homepage').then((m) => m.Homepage),
  },
  {
    path: 'documents',
    loadComponent: () =>
      import('./documents/documents').then((m) => m.Documents),
  },
  { path: '**', redirectTo: 'home' },
];
