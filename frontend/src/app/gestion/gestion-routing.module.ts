import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const GestionRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent,
        data: {
          title: 'Classic Dashboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Classic Dashboard' }
          ]
        }
      },
    ]
  }
];
