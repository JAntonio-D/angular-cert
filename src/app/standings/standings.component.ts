import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  @Input() id: string = ''
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
  }

}
