import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SelectFilmsComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: SelectFilmsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmRoutingModule {}
