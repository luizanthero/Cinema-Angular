import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoaderService } from '../../services';

@Component({
  selector: 'cine-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  loading: boolean;
  loading$: Observable<any>;

  constructor(
    private loader: LoaderService,
    private store: Store<{ loader: boolean }>
  ) {
    this.loader.isLoading.subscribe((response) => {
      this.loading = response;
    });

    this.loading$ = this.store.select('loader');
  }

  ngOnInit(): void {}
}
