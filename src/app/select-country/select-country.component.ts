import { Component, OnInit } from '@angular/core';
import { League } from '../interfaces/public-api';
import { Leagues } from '../../assets/data/public-api'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss']
})
export class SelectCountryComponent implements OnInit {
  public leagues : League[]
  constructor(private route: ActivatedRoute, private router: Router) {
    this.leagues = Leagues.data
   }

  ngOnInit(): void {
    const params = this.route.snapshot.params['id']
    if (!params) {
      this.router.navigate(['/standings/' + this.leagues[0].id])
    }
  }

}
