import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-team-rosters',
  templateUrl: './team-rosters.component.html',
  styleUrls: ['./team-rosters.component.scss']
})
export class TeamRostersComponent implements OnInit {

  teams: Team[];
  apiUrl: string = "http://pingpongapi.hungthespiderman.com/api/";
  constructor(private httpService: HttpService) { 
  }

  ngOnInit() {
    this.httpService.getTeams().subscribe(teams => {
      this.teams = teams;

      // find the largest team member number
      let largestNum = 0;
      this.teams.forEach(function(team, index) {
        if (largestNum < team.teamMembers.length) {
          largestNum = team.teamMembers.length;
        }
      });

      // Fill up empty spaces
      this.teams.forEach(function(team, index) {
        if (team.teamMembers.length < largestNum) {
          for (let i = largestNum - team.teamMembers.length; i > 0; i--) {            
            team.teamMembers.push({
              id : '',
              name: '',
              email: '',
              teamId :'',
              shirtSize: null,
              shirtSizeId:''              
            });
          }
        }
      });

    })
  }

}
