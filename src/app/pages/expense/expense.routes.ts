import { Routes } from '@angular/router';
import { UsersTabs } from './users/users-tabs/users-tabs'; // standalone component

export const EXPENSE_ROUTES: Routes = [
    {
        path: '',
        component: UsersTabs,
        children: [
            {
                path: 'user-dashboard',
                loadComponent: () =>
                    import('./users/user-dashboard/user-dashboard').then(
                        (m) => m.UserDashboard
                    ),
            },
            {
                path: 'expenses',
                loadComponent: () =>
                    import('./users/expenses/expenses').then((m) => m.Expenses),
            },
            {
                path: 'reports',
                loadComponent: () =>
                    import('./users/reports/reports').then((m) => m.Reports),
            },
            {
                path: 'profile',
                loadComponent: () =>
                    import('./users/profile/profile').then((m) => m.Profile),
            },
            {
                path: 'add-expense',
                loadComponent: () =>
                    import('./users/add-expense/add-expense').then((m) => m.AddExpense),
            },
            {
                path: 'add-income',
                loadComponent: () =>
                    import('./users/add-income/add-income').then((m) => m.AddIncome),
            },
            {
                path: '',
                redirectTo: 'user-dashboard',
                pathMatch: 'full',
            },
        ],
    },
];
