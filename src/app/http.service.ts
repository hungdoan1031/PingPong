import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShirtSize } from './models/shirtSize';
import { Observable } from 'rxjs';
import { Team } from './models/team';
import { TeamMember } from './models/teamMember';


@Injectable({
  providedIn: 'root'
})
export class HttpService {  
  apiUrl: string = "http://pingpongapi.hungthespiderman.com/api/";
  constructor(private httpClient: HttpClient) {}

  public getShirtSizes() : Observable<ShirtSize[]> {
    return this.httpClient.get<ShirtSize[]>(this.apiUrl + "shirtsizes");
  }

  public getTeams() : Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.apiUrl + "teams");
  }

  public getTeam(id:string) : Observable<Team> {
    return this.httpClient.get<Team>(this.apiUrl + "teams/" + id);
  }

  public createTeamMember(teamMember:TeamMember) {
    return this.httpClient.post<TeamMember>(this.apiUrl + "teammembers", teamMember);
  }
  
  public getFile(path:string) : Observable<any> {
    return this.httpClient.get(path, { responseType: "blob" });
  }
}
