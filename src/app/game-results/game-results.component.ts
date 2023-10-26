import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FixtureService } from '../services/fixture.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FixtureResponse } from '../interfaces/public-api';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {
  public id: string = ''
  public title: string = 'Game results'
  public backBtn: string = 'Back'
  public results$: Observable<FixtureResponse[]> = of()
  private readonly MAX_NO_RESULTS = 10
  public NoDataText: string = 'Error: No data. Please try again in a few minutes'
  constructor(private fixtureService: FixtureService, private route: ActivatedRoute, private location: Location) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.results$ = this.fixtureService.getFixtures(Number(this.id), this.MAX_NO_RESULTS)
  }

  back(): void {
    this.location.back()
  }

}
