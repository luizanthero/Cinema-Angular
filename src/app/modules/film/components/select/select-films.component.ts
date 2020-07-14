import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';

import { Film } from 'src/app/shared';

import { FilmService } from '../../service';

@Component({
  selector: 'app-select-films',
  templateUrl: './select-films.component.html',
  styleUrls: ['./select-films.component.css'],
})
export class SelectFilmsComponent implements OnInit {
  films: Film[];
  roles: number[] = [];
  tableName: string = 'Films';

  constructor(private service: FilmService, private alert: AlertService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (response) => {
        this.alert.success(`Number of Films: ${response.length}`);

        this.films = response;
      },
      (error) => this.alert.danger(`Error: ${error}`)
    );

    sessionStorage
      .getItem('roles')
      .split(',')
      .map((item) => {
        this.roles.push(+item);
      });
  }

  getSelectPermission(): boolean {
    return this.roles.some((el, index, array) => el === 1);
  }

  getCreatePermission(): boolean {
    return this.roles.some((el, index, array) => el === 2);
  }

  getUpdatePermission(): boolean {
    return this.roles.some((el, index, array) => el === 3);
  }

  getDeletePermission(): boolean {
    return this.roles.some((el, index, array) => el === 4);
  }
}
