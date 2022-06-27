import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URLHelperService {

  constructor() { }

  private REST_API_SERVER = 'https://localhost:44344/api/';

  public getSummary = this.REST_API_SERVER + 'Information/GetSummary';
  public getSummaryById = this.REST_API_SERVER + 'Information/GetSummaryById?id=';
}