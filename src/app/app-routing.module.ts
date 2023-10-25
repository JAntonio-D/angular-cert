import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameResultsComponent } from './game-results/game-results.component';

const routes: Routes = [
  { path: 'standings/:id', component: HomeComponent},
  { path: 'results/:id', component: GameResultsComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
