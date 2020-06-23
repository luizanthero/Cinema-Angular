import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FilmOmdb } from '../models';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  private baseUrl: string = 'http://www.omdbapi.com/?apikey=f2396906';

  constructor(private http: HttpClient) {}

  getFilmByImdbId(id: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}&i=${id}`)
      .map((response) => response as FilmOmdb)
      .catch((error) => Observable.throw(error));
  }
}
