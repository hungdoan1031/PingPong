export enum LogLevel {
  Info = 0,
  Warn = 1,
  Error = 2  
}

export class LogEntry {
    public id: string;
    public entryDate: Date;
    public message: string;
    public logLevel: LogLevel
}