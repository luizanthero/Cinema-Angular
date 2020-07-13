import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  NavbarComponent,
  FooterComponent,
  ModalDynamicComponent,
  LoadingComponent,
} from './components';
import { OmdbService, LoaderService, NavbarService } from './services';
import { LoaderInterceptorService } from './interceptors';
import { NavbarReducer } from './reducers';

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
  LoaderService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true,
  },
  NavbarService,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot({ navbar: NavbarReducer }),
    ...material,
  ],
  exports: [...components],
  providers: [...services],
})
export class SharedModule {}
