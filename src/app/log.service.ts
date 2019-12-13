import { Injectable } from '@angular/core';
import { LogLevel, LogEntry } from './models/LogEntry';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  apiUrl: string;
  constructor(private httpClient: HttpClient, private config: ConfigService) { 
    this.apiUrl = this.config.baseUrl;
  }
  
  public info(msg: any) {
    this.createLog(new Date(), msg, LogLevel.Info);
  }

  public warn(msg: any) {
    this.createLog(new Date(), msg, LogLevel.Warn);
  }

  public error(msg: any) {
    this.createLog(new Date(), msg, LogLevel.Error);
  }

  private createLog(entryDate: Date, message: any, level: LogLevel) {
    let id = this.getLogId(entryDate);
    let logEntry:LogEntry = { 
      id: id, 
      entryDate: entryDate, 
      message : message, 
      logLevel :level 
    };

    this.httpClient.post(this.apiUrl + "logentries", logEntry, { responseType: "blob" }).subscribe(
      resp => {
      },
      error => {
        console.error(error);
      }
    );
  }

  private getLogId(date: Date): string {
    return date.getFullYear() + "" + date.getMonth() +  "" + date.getDate() + ""  + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  }
}
