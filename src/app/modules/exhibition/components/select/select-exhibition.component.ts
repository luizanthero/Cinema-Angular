import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';

import { OmdbService } from 'src/app/shared/services';

import { ExhibitionService } from '../../service';

@Component({
  selector: 'app-select-exhibition',
  templateUrl: './select-exhibition.component.html',
  styleUrls: ['./select-exhibition.component.css'],
})
export class SelectExhibitionComponent implements OnInit {
  exhibitions: any[];

  constructor(
    private service: ExhibitionService,
    private alert: AlertService,
    private omdbService: OmdbService
  ) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (response) => {
        this.alert.success(`Number of Exhibitions: ${response.length}`);

        let films = [];
        response.map((item, index) => {
          this.omdbService.getFilmByImdbId(item.apiCode).subscribe(
            (res) => {
              films.push({
                ...response[index],
                poster: res.Poster,
                year: res.Year,
              });
            },
            (err) => this.alert.danger(`Error: ${err}`)
          );

          this.exhibitions = films;
        });
      },
      (error) => this.alert.danger(`Error: ${error}`)
    );
  }

  details(id: number): void {
    this.alert.info(`Selected film: ${id}`);
  }
}
