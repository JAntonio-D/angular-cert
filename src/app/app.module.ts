import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public-api';
import { SelectCountryComponent } from './select-country/select-country.component';
import { StandingsComponent } from './standings/standings.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { GameResultsComponent } from './game-results/game-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectCountryComponent,
    StandingsComponent,
    GameResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
