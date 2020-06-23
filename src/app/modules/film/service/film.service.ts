import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Film } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private baseUrl: string = 'https://localhost:5001/api/Films';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/details`)
      .map((response) => response as Film)
      .catch((error) => Observable.throw(error));
  }

  getById(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/details/${id}`)
      .map((response) => response as Film)
      .catch((error) => Observable.throw(error));
  }
}
