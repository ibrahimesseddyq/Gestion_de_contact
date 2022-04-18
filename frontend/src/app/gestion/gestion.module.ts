import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutes } from './gestion-routing.module';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(GestionRoutes)
  ]
})
export class GestionModule { }
