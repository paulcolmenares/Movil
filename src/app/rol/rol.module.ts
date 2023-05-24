import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolPageRoutingModule } from './rol-routing.module';

import { RolPage } from './rol.page';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolPageRoutingModule
  ],
  declarations: [RolPage, FilterPipe]
})
export class RolPageModule {}
