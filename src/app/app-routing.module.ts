import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((item) => item.LoginModule),
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
