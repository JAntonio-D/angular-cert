import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/standing-response';
import { FixtureResponse } from '../interfaces/public-api';
import { CacheService } from './cache.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private http: HttpClient, private cache: CacheService) { }

  private getParams(teamId: number, last: number): HttpParams {
    const date = new Date().getFullYear()
    let params = new HttpParams()
    params = params.append('team', teamId)
    params = params.append('last', last)
    params = params.append('season', date)

    return params
  }

  public getFixtures(teamId: number, last: number) {
    const fixtures = this.cache.getCacheFixtures(teamId, last)
    if (fixtures) {
      return of(fixtures)
    } 
    return this.getAPIFixtures(teamId, last)
  }

  private getAPIFixtures(teamId: number, last: number) {
    const params = this.getParams(teamId, last)
    return this.http.get<ApiResponse<FixtureResponse[]>>(`${environment.config.security.apiUrl}fixtures`, {params})
    .pipe(
      map((data) => {
        console.log(data);
        const fixtures = data.response
        if (fixtures) {
          this.cache.setCacheFixtures(teamId, last, fixtures)
        }
        return fixtures
      })
    )
  }

}
