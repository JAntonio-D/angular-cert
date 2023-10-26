import { Fixture, FixtureGoal, FixtureTeam, League } from "./public-api";

export interface FixtureResponse {
    fixture: Fixture;
    league: League;
    teams: FixtureTeam;
    goals: FixtureGoal;
  }