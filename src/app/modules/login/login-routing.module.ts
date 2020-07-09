import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
