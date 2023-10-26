import { Injectable } from '@angular/core';
import { Standing } from '../interfaces/standing';
import { CacheResponse, FixtureResponse } from '../interfaces/public-api';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private season = new Date().getFullYear()
  constructor() { }

  private getCacheStandingsKey(leagueId: number): string {
    const cacheKey = `season=${this.season}&league=${leagueId}`
    return cacheKey
  }

  private getCacheFixturesKey(teamId: number, last: number): string {
    const cacheKey = `team=${teamId}&last=${last}&season=${this.season}`
    return cacheKey
  }

  private getItemCache(cacheKey: string) {
    return localStorage.getItem(cacheKey)
  }

  public getCacheStandings(leagueId: number): Standing[] {
    const date = new Date()
    const cacheKey = this.getCacheStandingsKey(leagueId)
    const cache = this.getItemCache(cacheKey)
    if (cache) {
      const { data, cacheDate } = JSON.parse(cache) as CacheResponse
      
      const diff = date.getTime() - (new Date(cacheDate)).getTime()
      const hoursDiff = diff / (3600 * 1000)

      if (hoursDiff > 2) {
        return [] as Standing[]
      }

      return data as Standing[]
    }
    return [] as Standing[]
  }

  public getCacheFixtures(teamId: number, last: number): FixtureResponse[] | null {
    const date = new Date()
    const cacheKey = this.getCacheFixturesKey(teamId, last)
    const cache = this.getItemCache(cacheKey)
    if (cache) {
      const { data, cacheDate } = JSON.parse(cache) as CacheResponse
      
      const diff = date.getTime() - (new Date(cacheDate)).getTime()
      const hoursDiff = diff / (3600 * 1000)
      if (hoursDiff > 2) {
        return null
      }

      return data as FixtureResponse[]
    }
    return null
  }

  public setCacheStandings(leagueId: number, standings: Standing[]): void {
    const cacheKey = this.getCacheStandingsKey(leagueId)
    const cacheDate = new Date()
    const cache = {
      data: standings,
      cacheDate
    }
    const cacheValue = JSON.stringify(cache)
    localStorage.setItem(cacheKey, cacheValue)
  }

  public setCacheFixtures(teamId: number, last: number, fixtures: FixtureResponse[]): void {
    const cacheKey = this.getCacheFixturesKey(teamId, last)
    const cacheDate = new Date()
    const cache = {
      data: fixtures,
      cacheDate
    }
    const cacheValue = JSON.stringify(cache)
    localStorage.setItem(cacheKey, cacheValue)
  }
}
