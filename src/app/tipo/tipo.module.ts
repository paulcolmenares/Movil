import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoPageRoutingModule } from './tipo-routing.module';

import { TipoPage } from './tipo.page';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoPageRoutingModule
  ],
  declarations: [TipoPage, FilterPipe]
})
export class TipoPageModule {}
