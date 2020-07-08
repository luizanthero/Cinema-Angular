import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import {
  NavbarComponent,
  FooterComponent,
  ModalDynamicComponent,
} from './components';
import { OmdbService } from './services';

const material = [MatFormFieldModule, MatButtonModule];

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ModalDynamicComponent],
  imports: [CommonModule, RouterModule, ...material],
  exports: [NavbarComponent, FooterComponent, ModalDynamicComponent],
  providers: [OmdbService],
})
export class SharedModule {}
