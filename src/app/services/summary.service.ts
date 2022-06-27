import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SummaryModel } from '../models/SummaryModel';
import { ApiService } from './api.service';
import { URLHelperService } from './urlhelper.service';

@Injectable({
    providedIn: 'root'
})
export class SummaryService {

    constructor(private apiService: ApiService, private urlHelperSerivce: URLHelperService) { }

    getSummary(): Observable<SummaryModel[]> {
        return this.apiService.get(this.urlHelperSerivce.getSummary);
    }
    getSummaryById(id: string): Observable<SummaryModel> {
        return this.apiService.get(this.urlHelperSerivce.getSummaryById + id);
    }

}