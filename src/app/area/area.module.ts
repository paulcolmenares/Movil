import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaPageRoutingModule } from './area-routing.module';

import { AreaPage } from './area.page';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaPageRoutingModule
  ],
  declarations: [AreaPage, FilterPipe]
})
export class AreaPageModule {}
