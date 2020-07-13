import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoaderService } from '../services';
import { Store } from '@ngrx/store';
import { ChangeLoader } from '../reducers';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptorService {
  private loading$: Observable<any>;

  private requests: HttpRequest<any>[] = [];

  constructor(
    private loaderService: LoaderService,
    private store: Store<{ loader: boolean }>
  ) {
    this.loading$ = this.store.select('loader');
  }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.changeState(this.requests.length > 0);
    this.store.dispatch(ChangeLoader({ payload: this.requests.length > 0 }));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requests.push(req);

    this.loaderService.changeState(true);
    this.store.dispatch(ChangeLoader({ payload: true }));
    return Observable.create((observer) => {
      const subscription = next.handle(req).subscribe(
        (event) => {
          if (event instanceof HttpResponse) {
            this.removeRequest(req);
            observer.next(event);
          }
        },
        (err) => {
          this.removeRequest(req);
          observer.error(err);
        },
        () => {
          this.removeRequest(req);
          observer.complete();
        }
      );
      // remove request from queue when cancelled
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }
}
