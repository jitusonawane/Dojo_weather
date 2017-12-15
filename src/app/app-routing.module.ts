import{WeatherService} from './weather.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DcComponent } from './dc/dc.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'sanjose', pathMatch: 'full', component: SanjoseComponent},
  {path: 'chicago', pathMatch: 'full', component: ChicagoComponent},
  {path: 'seattle', pathMatch: 'full', component: SeattleComponent},
  {path: 'dallas', pathMatch: 'full', component: DallasComponent},
  {path: 'dc', pathMatch: 'full', component: DcComponent},
  {path: 'burbank', pathMatch: 'full', component: BurbankComponent},
  // {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
