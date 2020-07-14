import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FilmRoutingModule } from './film-routing.module';

import { SharedModule } from 'src/app/shared';

import { SelectFilmsComponent, CreateFilmComponent } from './components';
import { FilmService } from './service';

@NgModule({
  declarations: [SelectFilmsComponent, CreateFilmComponent],
  imports: [CommonModule, HttpClientModule, SharedModule, FilmRoutingModule],
  providers: [FilmService],
})
export class FilmModule {}
