import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

import { OmdbService } from 'src/app/shared';
import { Observable, of } from 'rxjs';

const TableColumns = [
  {
    column: 'Title',
    title: 'Title',
  },
  {
    column: 'Year',
    title: 'Year',
  },
  {
    column: 'Type',
    title: 'Type',
  },
  {
    column: 'imdbID',
    title: 'ApiCode',
  },
];

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css'],
})
export class CreateFilmComponent implements OnInit {
  films: any[];
  result: any[] = [];
  columns: any[] = TableColumns;

  constructor(
    private router: Router,
    private filmOmdb: OmdbService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    for (let i = 1; i <= 17; i++) {
      this.filmOmdb.getFilm('guardians', i).subscribe(
        (response) => {
          response.Search.map((item) => {
            this.result.push(item);
          });
        },
        (error) => this.alert.danger(`Error: ${error.error}`)
      );
    }

    this.getResult().subscribe((response) => {
      this.films = response;
      console.log(this.films);
    });
  }

  getResult(): Observable<any> {
    return of(this.result);
  }

  callback(event): void {}
}
