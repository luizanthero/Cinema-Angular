import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  NavbarComponent,
  FooterComponent,
  ModalDynamicComponent,
  LoadingComponent,
} from './components';
import { OmdbService } from './services';

const material = [
  MatFormFieldModule,
  MatButtonModule,
  MatProgressSpinnerModule,
];

const components = [
  NavbarComponent,
  FooterComponent,
  ModalDynamicComponent,
  LoadingComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, ...material],
  exports: [...components],
  providers: [OmdbService],
})
export class SharedModule {}
