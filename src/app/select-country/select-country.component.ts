import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss']
})
export class SelectCountryComponent implements OnInit {
  public countriesList : string[]
  constructor() {
    this.countriesList = ['England', 'Spain', 'Germany', 'France', 'Italy']
   }

  ngOnInit(): void {
  }

  setCountry(country: string): void {
    //this.location.
  }

}
