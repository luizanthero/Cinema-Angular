import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ModalDynamicComponent } from 'src/app/shared/components';

import { ExhibitionService } from '../../service';
import { FilmService } from 'src/app/modules/film/service';
import { Film } from 'src/app/shared';

@Component({
  selector: 'app-select-exhibition',
  templateUrl: './select-exhibition.component.html',
  styleUrls: ['./select-exhibition.component.css'],
})
export class SelectExhibitionComponent implements OnInit {
  exhibitions: any[];
  film: Film;

  constructor(
    private service: ExhibitionService,
    private filmService: FilmService,
    private alert: AlertService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
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

    const dialogConfig = new MatDialogConfig();
    this.filmService.getById(id).subscribe(
      (response) => {
        this.film = response;

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
                <strong>Year:</strong> ${this.film.year} - <strong>Runtime:</strong> ${this.film.runtime}
              </p>
              <p>
                <strong>Production:</strong> ${this.film.production} - <strong>Director:</strong> ${this.film.director}
              </p>
              <p>
                <strong>Countries:</strong> ${this.film.country} - <strong>Languages:</strong> ${this.film.language}
              </p>
              <p>
                <strong>Plot:</strong> ${this.film.plot}
              </p>
            </div>
          </div>
        </div>`;

        dialogConfig.data = {
          id: this.film.id,
          title: this.film.name,
          content: content,
          isDetails: true,
        };

        this.dialog.open(ModalDynamicComponent, dialogConfig);
      },
      (error) => this.alert.danger(`Error: ${error}`)
    );
  }
}
