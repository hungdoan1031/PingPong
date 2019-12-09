import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShirtSize } from './models/shirtSize';
import { Observable } from 'rxjs';
import { Team } from './models/team';


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
  
}
