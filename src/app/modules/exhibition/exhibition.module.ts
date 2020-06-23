import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ExhibitionRoutingModule } from './exhibition-routing.module';

import { SharedModule } from 'src/app/shared';
import { OmdbService } from 'src/app/shared/services';

import {
  SelectExhibitionComponent,
  ModalExhibitionComponent,
} from './components';
import { ExhibitionService } from './service';

@NgModule({
  declarations: [SelectExhibitionComponent, ModalExhibitionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ExhibitionRoutingModule,
  ],
  providers: [ExhibitionService, OmdbService],
})
export class ExhibitionModule {}
