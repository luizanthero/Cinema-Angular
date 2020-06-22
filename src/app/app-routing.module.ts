import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/exhibition/exhibition.module').then(
        (item) => item.ExhibitionModule
      ),
  },
  {
    path: 'exhibitions',
    loadChildren: () =>
      import('./modules/exhibition/exhibition.module').then(
        (item) => item.ExhibitionModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
