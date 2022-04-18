import { AddEditCityComponent } from './components/add-edit-city/add-edit-city.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingPageComponent } from './containers/setting-page/setting-page.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { ViewCityDetailsComponent } from './components/view-city-details/view-city-details.component';


@NgModule({
  declarations: [
    SettingPageComponent,
    DeleteConfirmationComponent,
    CityListComponent,
    AddEditCityComponent,
    ViewCityDetailsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
  ]
})
export class SettingsModule { }
