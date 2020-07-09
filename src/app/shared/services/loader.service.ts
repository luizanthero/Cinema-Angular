import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = new BehaviorSubject(false);

  constructor() {}

  changeState(state: boolean): void {
    this.isLoading.next(state);
  }
}
