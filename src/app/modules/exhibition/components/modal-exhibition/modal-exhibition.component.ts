import { Component, Input, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Film } from 'src/app/shared';
import { FilmService } from 'src/app/modules/film/service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-modal-exhibition',
  templateUrl: './modal-exhibition.component.html',
  styleUrls: ['./modal-exhibition.component.css'],
})
export class ModalExhibitionComponent implements OnInit {
  film: Film;

  constructor(
    private filmService: FilmService,
    private alert: AlertService,
    private dialogRef: MatDialogRef<ModalExhibitionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.filmService.getById(this.data.id).subscribe(
      (response) => (this.film = response),
      (error) => this.alert.danger(`Error: ${error.message}`)
    );
  }
}
