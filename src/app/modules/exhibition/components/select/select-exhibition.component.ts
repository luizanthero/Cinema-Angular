import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { MatDialog } from '@angular/material';

import { ExhibitionService } from '../../service';
import { FilmService } from 'src/app/modules/film/service';
import { ModalExhibitionComponent } from '../modal-exhibition';

@Component({
  selector: 'app-select-exhibition',
  templateUrl: './select-exhibition.component.html',
  styleUrls: ['./select-exhibition.component.css'],
})
export class SelectExhibitionComponent implements OnInit {
  exhibitions: any[];

  constructor(
    private service: ExhibitionService,
    private filmService: FilmService,
    private alert: AlertService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
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

    const dialogRef = this.dialog.open(ModalExhibitionComponent, {
      width: '100%',
      data: { id },
    });
  }
}
