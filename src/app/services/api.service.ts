import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(
        private httpClient: HttpClient, private router: Router) { }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders().set('Content-Type', 'application/json');
    }

    get(url: string): Observable<any> {
        let headers: HttpHeaders;
        headers = this.getHeaders();

        return this.httpClient.get(url, { headers: headers });
    }

}