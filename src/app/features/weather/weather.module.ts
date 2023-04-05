import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherLandingComponent } from './weather-landing/weather-landing.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {path: 'landing', component: WeatherLandingComponent}
]



@NgModule({
  declarations: [
    WeatherLandingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class WeatherModule { }
