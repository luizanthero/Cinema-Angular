import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitionRoutingModule } from './exhibition-routing.module';

import { SharedModule } from 'src/app/shared';
import { SelectExhibitionComponent } from './components';

@NgModule({
  declarations: [SelectExhibitionComponent],
  imports: [CommonModule, SharedModule, ExhibitionRoutingModule],
})
export class ExhibitionModule {}
