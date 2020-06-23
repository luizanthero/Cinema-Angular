import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';

import { Exhibition } from 'src/app/shared';

import { ExhibitionService } from '../../service';

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
      (response) => {
        this.alert.success(`Number of Exhibitions: ${response.length}`);

        this.exhibitions = response;
      },
      (error) => this.alert.danger(`Error: ${error}`)
    );
  }

  details(id: number): void {
    this.alert.info(`Selected film: ${id}`);
  }
}
