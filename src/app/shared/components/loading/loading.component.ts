import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'cine-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  loading: boolean;
  loading$: Observable<any>;

  constructor(private store: Store<{ loader: boolean }>) {
    this.loading$ = this.store.select('loader');
  }

  ngOnInit(): void {}
}
