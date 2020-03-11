import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getAll() {
    const urlApi = environment.dht11UrlApi;
    return this.http.get<Dht11ItemsResponse>(urlApi)
      .pipe(
        map((response: Dht11ItemsResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

export interface Dht11ItemsResponse {
  dht11Items: Dht11Item[];
}

export interface Dht11Item {
  macDeviceId: string;
  temperature: string;
  humidityRel: string;
  date: string;
}
