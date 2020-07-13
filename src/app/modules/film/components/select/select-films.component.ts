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
}
