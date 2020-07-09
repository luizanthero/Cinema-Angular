import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthenticationComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
  },
  {
    path: '/authenticate',
    component: AuthenticationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
