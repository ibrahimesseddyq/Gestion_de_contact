import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { AuthGuardGuard } from './auth/services/auth-guard.guard';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuardGuard],
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {path:'settings',loadChildren:()=>import('./settings/settings.module').then(m => m.SettingsModule)},
      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'gestion',
        loadChildren: () => import('./gestion/gestion.module').then(m => m.GestionModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  },

  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren:
          () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },

  /** 
  {
    path: 'login',
    component: LoginPageComponent,
  }
  */
];

