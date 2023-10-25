import { Standing } from "./public-api"

export interface League {
  id: number
  name: string
  country: string
  flag: string
  season?: number
  standings?: Standing[][]
}