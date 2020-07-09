import { Component, OnInit } from '@angular/core';

import { LoaderService } from '../../services';

@Component({
  selector: 'cine-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  loading: boolean;

  constructor(private loader: LoaderService) {
    this.loader.isLoading.subscribe((response) => {
      this.loading = response;
    });
  }

  ngOnInit(): void {}
}
