import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-team-rosters',
  templateUrl: './team-rosters.component.html',
  styleUrls: ['./team-rosters.component.scss'],
  animations: []
})
export class TeamRostersComponent implements OnInit {

  teams: Team[];
  apiUrl: string = "http://pingpongapi.hungthespiderman.com/api/";
  constructor(private httpService: HttpService) { 
  }

  ngOnInit() {
    this.httpService.getTeams().subscribe(teams => {
      this.teams = teams;
      console.log(teams);
    })
  }

}
