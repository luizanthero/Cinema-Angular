import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ExhibitionRoutingModule } from './exhibition-routing.module';

import { SharedModule } from 'src/app/shared';

import { SelectExhibitionComponent } from './components';
import { ExhibitionService } from './service';
import { FilmService } from '../film/service';

@NgModule({
  declarations: [SelectExhibitionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ExhibitionRoutingModule,
  ],
  providers: [ExhibitionService, FilmService],
})
export class ExhibitionModule {}
