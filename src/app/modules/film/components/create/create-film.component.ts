import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { OmdbService, ModalDynamic, FilmOmdb, Film } from 'src/app/shared';
import { ModalDynamicComponent } from 'src/app/shared/components';

import { TableColumns } from './create-film.config';
import { FilmService } from '../../service';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css'],
})
export class CreateFilmComponent implements OnInit {
  private roles: number[] = [];
  private actions: any[] = [];
  private showMessage: boolean = true;
  private searchValue: string;

  films: any;
  film: FilmOmdb;
  columns: any[] = TableColumns;

  dataLength: number;
  pageSize: number;
  pageSizeOptions: any;
  pageIndex: number;

  hasAction: boolean;

  constructor(
    private router: Router,
    private service: FilmService,
    private filmOmdb: OmdbService,
    private alert: AlertService,
    private dialog: MatDialog
  ) {
    sessionStorage
      .getItem('roles')
      .split(',')
      .map((item) => {
        this.roles.push(+item);
      });

    this.roles.forEach((item) => {
      switch (item) {
        case 1:
          this.actions.push({
            column: 'details',
            title: 'Details',
          });
          break;
      }

      if (this.actions.length > 0) {
        this.hasAction = true;
      }
    });
  }

  ngOnInit(): void {}

  applySearch(value: string): void {
    if (value.length >= 3) {
      this.showMessage = true;
      this.searchValue = value.trim().toLowerCase();
      this.loadFilms(this.searchValue, 1);
    } else {
      this.films = [];
    }
  }

  loadFilms(value: string, page: number): void {
    this.filmOmdb.getFilm(value, page).subscribe(
      (response) => {
        if (this.showMessage) {
          let numFilms: number = 0;
          if (response.totalResults) {
            numFilms = response.totalResults;
            this.showMessage = false;
          }

          this.alert.success(`Number of Films: ${numFilms}`);
        }

        if (response.Search) {
          this.films = response.Search;
          this.dataLength = +response.totalResults;
          this.pageSize = +response.Search.length;
          this.pageSizeOptions = [this.pageSize];
          this.pageIndex = page;
        }
      },
      (error) => this.alert.danger(`Error: ${error.message}`),
      () => {
        this.service.isExist(this.films).subscribe(
          (response) => {
            let aux: any[] = [];
            response.forEach((item) => {
              if (item.Exist === false) {
                aux.push({
                  ...item,
                  buttons: [...this.actions, { column: 'add', title: 'Add' }],
                });
              } else {
                aux.push({ ...item, buttons: [...this.actions] });
              }
            });
            this.films = aux;
          },
          (error) => this.alert.danger(`Error: ${error.message}`)
        );
      }
    );
  }

  callback(event): void {
    switch (event.action.column) {
      case 'details':
        this.details(event.row.ApiCode);
        break;
      case 'add':
        this.add(event.row.ApiCode);
        break;
    }
  }

  private details(id: string): void {
    const dialogConfig = new MatDialogConfig();
    this.filmOmdb.getFilmByImdbId(id).subscribe(
      (response) => {
        this.film = response;

        //#region [Modal Content]
        const content = `<div class="card-deck">
          <div class="card">
            <img class="card-img-top" src=${this.film.Poster} alt=${this.film.Title} title=${this.film.Title} />
          </div>
          <div class="card">
            <div class="card-body">
              <p>
                <strong>Genre:</strong> ${this.film.Genre} - <strong>Awards:</strong> ${this.film.Awards}
              </p>
              <p>
                <strong>Year:</strong> ${this.film.Year} - <strong>Runtime:</strong> ${this.film.Runtime} - <strong>Type:</strong> ${this.film.Type}
              </p>
              <p>
                <strong>Production:</strong> ${this.film.Production} - <strong>Director:</strong> ${this.film.Director}
              </p>
              <p>
                <strong>Countries:</strong> ${this.film.Country} - <strong>Languages:</strong> ${this.film.Language}
              </p>
              <p>
                <strong>Website:</strong> ${this.film.Website}
              </p>
              <p>
                <strong>Plot:</strong> ${this.film.Plot}
              </p>
            </div>
          </div>
        </div>`;
        //#endregion

        dialogConfig.data = new ModalDynamic(1, this.film.Title, content, true);

        this.dialog.open(ModalDynamicComponent, dialogConfig);
      },
      (error) => this.alert.danger(`Error: ${error}`)
    );
  }

  private add(id: string): void {
    this.filmOmdb.getFilmByImdbId(id).subscribe((response) => {
      this.film = response;

      let newFilm: Film = new Film(
        0,
        this.film.Title.slice(0, 255),
        this.film.imdbID.slice(0, 255),
        this.film.Year.slice(0, 255),
        this.film.Released.slice(0, 255),
        this.film.Runtime.slice(0, 255),
        this.film.Genre.slice(0, 255),
        this.film.Director.slice(0, 255),
        this.film.Writer.slice(0, 255),
        this.film.Actors.slice(0, 255),
        this.film.Plot.slice(0, 255),
        this.film.Language.slice(0, 255),
        this.film.Country.slice(0, 255),
        this.film.Awards.slice(0, 255),
        this.film.Poster.slice(0, 255),
        this.film.Type.slice(0, 255),
        this.film.Production.slice(0, 255),
        this.film.Website.slice(0, 255)
      );

      this.service.create(newFilm).subscribe(
        (response) => {
          this.alert.success(
            `Register Created: ${response.id} - ${response.name}`
          );

          this.loadFilms(this.searchValue, 1);
        },
        (error) => {
          this.alert.danger(`Error: ${error.message}`);
        }
      );
    });
  }

  paginatorAction(event): void {
    this.loadFilms(this.searchValue, event);
  }
}
