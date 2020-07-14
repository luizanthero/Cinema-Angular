import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Film, ModalDynamic } from 'src/app/shared';
import { ModalDynamicComponent } from 'src/app/shared/components';

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
  film: Film;
  columns: any[] = TableColumns;

  constructor(
    private service: FilmService,
    private alert: AlertService,
    private dialog: MatDialog
  ) {
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
        console.log('Edit Action');
        break;
      case 'select':
        this.details(event.row.id);
        break;
      case 'delete':
        console.log('Delete Action');
        break;
    }
  }

  details(id: number): void {
    const dialogConfig = new MatDialogConfig();
    this.service.getById(id).subscribe(
      (response) => {
        this.film = response;

        //#region [Modal Content]
        const content = `<div class="card-deck">
          <div class="card">
            <img class="card-img-top" src=${this.film.poster} alt=${this.film.name} title=${this.film.name} />
          </div>
          <div class="card">
            <div class="card-body">
              <p>
                <strong>Genre:</strong> ${this.film.genre} - <strong>Awards:</strong> ${this.film.awards}
              </p>
              <p>
                <strong>Year:</strong> ${this.film.year} - <strong>Runtime:</strong> ${this.film.runtime} - <strong>Type:</strong> ${this.film.type}
              </p>
              <p>
                <strong>Production:</strong> ${this.film.production} - <strong>Director:</strong> ${this.film.director}
              </p>
              <p>
                <strong>Countries:</strong> ${this.film.country} - <strong>Languages:</strong> ${this.film.language}
              </p>
              <p>
                <strong>Website:</strong> ${this.film.website}
              </p>
              <p>
                <strong>Plot:</strong> ${this.film.plot}
              </p>
            </div>
          </div>
        </div>`;
        //#endregion

        dialogConfig.data = new ModalDynamic(
          this.film.id,
          this.film.name,
          content,
          true
        );

        this.dialog.open(ModalDynamicComponent, dialogConfig);
      },
      (error) => this.alert.danger(`Error: ${error}`)
    );
  }

  getCreatePermission(): boolean {
    return this.roles.some((el, index, array) => el === 2);
  }
}
