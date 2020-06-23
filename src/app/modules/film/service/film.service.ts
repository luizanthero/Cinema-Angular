import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private baseUrl: string = 'https://localhost:5001/api/Films';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/details`)
      .map((response) => response)
      .catch((error) => Observable.throw(error));
  }

  getById(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/details/${id}`)
      .map((response) => response)
      .catch((error) => Observable.throw(error));
  }
}
