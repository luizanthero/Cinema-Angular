import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Exhibition } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class ExhibitionService {
  private baseUrl: string = `${environment.base_url}/Exhibitions`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/details`)
      .map((response) => response as Exhibition)
      .catch((error) => Observable.throw(error.error));
  }
}
