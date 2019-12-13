import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {  ActivatedRoute } from '@angular/router';
import { Team } from '../models/team';

@Component({
  selector: 'app-sign-up-result',
  templateUrl: './sign-up-result.component.html',
  styleUrls: ['./sign-up-result.component.scss']
})
export class SignUpResultComponent implements OnInit {

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  team: Team;
  imagePath: string;
  isLoading: boolean;
  ngOnInit() {    
      this.route.queryParams.subscribe(params => {
        let teamId = params['teamid'];
        if (teamId) {
          this.isLoading = true;
          this.httpService.getTeam(teamId).subscribe(team => {
            this.team = team;  

            // Check if the image exists. If not, use the default one.
            let imagePath = "assets/Paddle-" + team.name + ".png";
            this.httpService.getFile(imagePath).subscribe(
              file => {                
                this.imagePath = imagePath;
              },
              (error) => {
                this.imagePath = "assets/Paddle-Blue.png";
              },
              () => {
                this.isLoading = false;
              }
            )  
    
        });
      }      
    });
  }

  

}
