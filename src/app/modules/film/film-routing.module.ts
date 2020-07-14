import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SelectFilmsComponent, CreateFilmComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: SelectFilmsComponent,
  },
  {
    path: 'create',
    component: CreateFilmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmRoutingModule {}
