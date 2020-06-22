import { Component, OnInit } from '@angular/core';

import { ExhibitionService } from '../../service';
import { Exhibition } from 'src/app/shared';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-select-exhibition',
  templateUrl: './select-exhibition.component.html',
  styleUrls: ['./select-exhibition.component.css'],
})
export class SelectExhibitionComponent implements OnInit {
  exhibitions: Exhibition[];

  constructor(
    private service: ExhibitionService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (response) => (this.exhibitions = response),
      (error) => this.alert.danger(`Error: ${error}`)
    );
  }
}
