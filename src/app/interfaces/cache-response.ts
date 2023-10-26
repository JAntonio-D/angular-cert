import { FixtureResponse, Standing } from "./public-api";

export interface CacheResponse {
    data: Standing[] | FixtureResponse[]
    cacheDate: Date
}