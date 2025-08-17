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
  {
    path: 'proposals',
    loadComponent: () =>
      import('./proposal/proposal-list/proposal-list').then(
        (m) => m.ProposalList
      ),
  },
  {
    path: 'proposals/new',
    loadComponent: () =>
      import('./proposal/proposal-new/proposal-new').then((m) => m.ProposalNew),
  },
  {
    path: 'proposal/:id',
    loadComponent: () =>
      import('./proposal/proposal-show/proposal-show').then(
        (m) => m.ProposalShow
      ),
  },
  { path: '**', redirectTo: 'home' },
];
