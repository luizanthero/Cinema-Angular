import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

import {
  NavbarComponent,
  FooterComponent,
  ModalDynamicComponent,
  LoadingComponent,
  TableDynamicComponent,
} from './components';
import { OmdbService, MenusService } from './services';
import { LoaderInterceptorService } from './interceptors';
import { TablePaginatorComponent } from './components/table-dynamic/table-paginator/table-paginator.component';

const material = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
];

const components = [
  NavbarComponent,
  FooterComponent,
  ModalDynamicComponent,
  LoadingComponent,
  TableDynamicComponent,
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
  declarations: [...components, TablePaginatorComponent],
  imports: [CommonModule, RouterModule, ...material],
  exports: [...components],
  providers: [...services],
})
export class SharedModule {}
