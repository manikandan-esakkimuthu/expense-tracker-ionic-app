import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/my-login/my-login').then((m) => m.MyLogin),
  },
  {
    path: 'expense',
    loadChildren: () =>
      import('./pages/expense/expense.routes').then((m) => m.EXPENSE_ROUTES),
  },


  // 🔁 Wildcard redirect
  {
    path: '**',
    redirectTo: 'login',
  },
];
