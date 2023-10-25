import { All, Team } from "./public-api"

export interface Standing {
    rank: number
    team: Team
    points: number
    goalsDiff: number
    group: string
    form: string
    status: string
    description: string
    all: All
    home: All
    away: All
    update: string
  }