import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { FilmRoutingModule } from './film-routing.module';

import { SharedModule, OmdbService } from 'src/app/shared';

import { SelectFilmsComponent, CreateFilmComponent } from './components';
import { FilmService } from './service';

const material = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatSelectModule,
];

@NgModule({
  declarations: [SelectFilmsComponent, CreateFilmComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FilmRoutingModule,
    ...material,
  ],
  providers: [FilmService, OmdbService],
})
export class FilmModule {}
