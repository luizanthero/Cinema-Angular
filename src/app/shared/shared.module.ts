import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  NavbarComponent,
  FooterComponent,
  ModalDynamicComponent,
  LoadingComponent,
} from './components';
import { OmdbService, MenusService } from './services';
import { LoaderInterceptorService } from './interceptors';

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

const services = [
  OmdbService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true,
  },
  MenusService,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, ...material],
  exports: [...components],
  providers: [...services],
})
export class SharedModule {}
