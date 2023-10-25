import { Component, Input, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  @Input() id: string = ''
  public tableHeader: string[] = ['', '', 'Name', 'Games', 'W', 'L', 'D', 'Goal Difference', 'Points']
  public standings$: Observable<any> = of()
  constructor(private footballService: FootballService) {
    
   }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.standings$ = this.footballService.getStandings(Number(this.id))
  }

}
