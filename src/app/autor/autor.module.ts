import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorPageRoutingModule } from './autor-routing.module';

import { AutorPage } from './autor.page';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorPageRoutingModule
  ],
  declarations: [AutorPage, FilterPipe]
})
export class AutorPageModule {}
