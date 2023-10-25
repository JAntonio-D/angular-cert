import { Fixture, Goal, League, Team } from "./public-api";

export interface FixtureResponse {
    fixture: Fixture;
    league: League;
    teams: Team;
    goals: Goal;
  }