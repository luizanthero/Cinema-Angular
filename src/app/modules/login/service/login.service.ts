import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Authenticate, Register } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private base_url: string = `${environment.base_url}/Authentication`;

  constructor(private http: HttpClient) {}

  authenticate(auth: Authenticate): Observable<any> {
    return this.http
      .post(`${this.base_url}/authenticate`, auth)
      .map((response) => response as Authenticate)
      .catch((error) => Observable.throw(error.error));
  }

  register(user: Register): Observable<any> {
    return this.http
      .post(`${this.base_url}/register`, user)
      .map((response) => response as Register)
      .catch((error) => Observable.throw(error.error));
  }
}
