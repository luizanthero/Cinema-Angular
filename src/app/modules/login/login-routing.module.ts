import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthenticationComponent, RegisterComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
