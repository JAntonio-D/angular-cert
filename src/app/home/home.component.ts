import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string = 'Football updates'
  public selectedCountry$: Observable<string>
  constructor(private route: ActivatedRoute) {
    this.selectedCountry$ = this.route.params.pipe(map((params) => {
      return params.id
    }))
   }

  ngOnInit(): void {
    
  }

}
