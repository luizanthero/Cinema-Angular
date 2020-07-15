import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

import { OmdbService } from 'src/app/shared';

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
  columns: any[] = TableColumns;

  dataLength: number;
  pageSize: number;
  pageSizeOptions: any;
  pageIndex: number;

  constructor(
    private router: Router,
    private filmOmdb: OmdbService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    let page: number = 1;
    this.loadFilms(page);
  }

  loadFilms(page: number) {
    this.filmOmdb.getFilm('guardians', page).subscribe(
      (response) => {
        this.films = response.Search;
        this.dataLength = +response.totalResults;
        this.pageSize = +response.Search.length;
        this.pageSizeOptions = [this.pageSize];
        this.pageIndex = page;
        console.log(response);
      },
      (error) => this.alert.danger(`Error: ${error.error}`)
    );
  }

  callback(event): void {}

  paginatorAction(event): void {
    console.log(event);
    this.loadFilms(event);
  }
}
