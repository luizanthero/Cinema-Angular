import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Exhibition } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class ExhibitionService {
  private baseUrl: string = 'https://localhost:5001/api/Exhibitions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http
      .get(this.baseUrl)
      .map((response) => response as Exhibition)
      .catch((error) => Observable.throw(error.error));
  }
}
