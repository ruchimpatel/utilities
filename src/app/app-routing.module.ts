import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './checkin/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {
    path: 'weather',
    loadChildren: () => import('./features/weather/weather.module').then(m => m.WeatherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
