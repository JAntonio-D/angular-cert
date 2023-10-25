import { LeagueResponse, Standing } from "./public-api";

export interface CacheResponse {
    standings: Standing[]
    cacheDate: Date
}