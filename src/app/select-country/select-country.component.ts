import { Component, OnInit } from '@angular/core';
import { League } from '../interfaces/public-api';
import { Leagues } from '../../assets/data/public-api'

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss']
})
export class SelectCountryComponent implements OnInit {
  public leagues : League[]
  constructor() {
    this.leagues = Leagues.data
   }

  ngOnInit(): void {
  }

}
