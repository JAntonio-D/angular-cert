import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LeagueResponse, Standing, StandingResponse } from '../interfaces/public-api';
import { CacheService } from './cache.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient, private cache: CacheService) { }

  private getParams(leagueId: number): HttpParams {
    const date = new Date().getFullYear()
    let params = new HttpParams()
    params = params.append('season', date)
    params = params.append('league', leagueId)

    return params
  }

  public getStandings(leagueId: number): Observable<Standing[]> {
    const standings = this.cache.getCacheStandings(leagueId)
      if (standings.length > 0) {
        return of(standings)
      }
      return this.getAPIStandings(leagueId)
  }

  private getAPIStandings(leagueId: number): Observable<Standing[]> {
    const params = this.getParams(leagueId)
    return this.http.get<StandingResponse<LeagueResponse[]>>(`${environment.config.security.apiUrl}standings`, {params})
    .pipe(
      map((data) => {
        console.log(data);
        const standings = this.getStandingsFromResponse(data)
        if(standings.length > 0) {
          this.cache.setCacheStandings(leagueId, standings)  
        }
        return standings
      })
    )
  }

  private getStandingsFromResponse(data: StandingResponse<LeagueResponse[]>): Standing[] {
    const standings = data.response[0].league?.standings
    const result = standings ? standings[0] : []
    return result
  }
}
