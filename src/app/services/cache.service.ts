import { Injectable } from '@angular/core';
import { Standing } from '../interfaces/standing';
import { CacheResponse } from '../interfaces/public-api';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  private getCacheStandingsKey(leagueId: number): string {
    const season = new Date().getFullYear()
    const cacheKey = `season=${season}&league=${leagueId}`
    return cacheKey
  }

  public getCacheStandings(leagueId: number): Standing[] {
    const date = new Date()
    const cacheKey = this.getCacheStandingsKey(leagueId)
    const cache = localStorage.getItem(cacheKey)
    if (cache) {
      const { standings, cacheDate } = JSON.parse(cache) as CacheResponse
      
      const diff = date.getTime() - (new Date(cacheDate)).getTime()
      const hoursDiff = diff / (3600 * 1000)

      console.log(hoursDiff);
      console.log(standings);

      if (hoursDiff > 2) {
        return [] as Standing[]
      }

      return standings
    }
    return [] as Standing[]
  }

  public setCacheStandings(leagueId: number, standings: Standing[]): void {
    const cacheKey = this.getCacheStandingsKey(leagueId)
    const cacheDate = new Date()
    const cache = {
      standings,
      cacheDate
    }
    const cacheValue = JSON.stringify(cache)
    localStorage.setItem(cacheKey, cacheValue)
  }
}
