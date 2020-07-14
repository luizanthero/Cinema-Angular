import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';

import { Film } from 'src/app/shared';

import { FilmService } from '../../service';

const TableColumns = [
  {
    column: 'id',
    title: '#',
  },
  {
    column: 'name',
    title: 'Name',
  },
  {
    column: 'apiCode',
    title: 'ApiCode',
  },
  {
    column: 'year',
    title: 'Year',
  },
];

@Component({
  selector: 'app-select-films',
  templateUrl: './select-films.component.html',
  styleUrls: ['./select-films.component.css'],
})
export class SelectFilmsComponent implements OnInit {
  films: Film[];

  columns: any[] = TableColumns;

  constructor(private service: FilmService, private alert: AlertService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (response) => {
        this.alert.success(`Number of Films: ${response.length}`);

        this.films = response;
      },
      (error) => this.alert.danger(`Error: ${error}`)
    );
  }

  callback(event): void {
    switch (event.action) {
      case 'edit':
        console.log('Edit Action');
        break;
      case 'select':
        console.log('Details Action');
        break;
      case 'delete':
        console.log('Delete Action');
        break;
    }
  }
}
