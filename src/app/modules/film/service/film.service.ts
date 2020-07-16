import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Film } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private baseUrl: string = `${environment.base_url}/Films`;
  private headers: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${sessionStorage['token']}`
    );
  }

  getAll(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}`, { headers: this.headers })
      .map((response) => response as Film)
      .catch((error) => Observable.throw(error));
  }

  getDetailsById(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/details/${id}`)
      .map((response) => response as Film)
      .catch((error) => Observable.throw(error));
  }

  getById(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${id}`)
      .map((response) => response as Film)
      .catch((error) => Observable.throw(error));
  }

  create(entity: Film): Observable<any> {
    return this.http
      .post(`${this.baseUrl}`, entity, { headers: this.headers })
      .map((response) => response as Film)
      .catch((error) => Observable.throw(error));
  }

  isExist(films: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/isExist`, films, {
        headers: this.headers,
      })
      .map((response) => response)
      .catch((error) => Observable.throw(error));
  }
}
