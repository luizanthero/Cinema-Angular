import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SelectExhibitionComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: SelectExhibitionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExhibitionRoutingModule {}
