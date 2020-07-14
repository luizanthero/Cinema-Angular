import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';

import { Film } from 'src/app/shared';

import { FilmService } from '../../service';
import { TableColumns } from './select-films.config';

@Component({
  selector: 'app-select-films',
  templateUrl: './select-films.component.html',
  styleUrls: ['./select-films.component.css'],
})
export class SelectFilmsComponent implements OnInit {
  private roles: number[] = [];

  films: Film[];
  columns: any[] = TableColumns;

  constructor(private service: FilmService, private alert: AlertService) {
    sessionStorage
      .getItem('roles')
      .split(',')
      .map((item) => {
        this.roles.push(+item);
      });
  }

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
        console.log('Edit Action', event.row);
        break;
      case 'select':
        console.log('Details Action');
        break;
      case 'delete':
        console.log('Delete Action');
        break;
    }
  }

  getCreatePermission(): boolean {
    return this.roles.some((el, index, array) => el === 2);
  }
}
