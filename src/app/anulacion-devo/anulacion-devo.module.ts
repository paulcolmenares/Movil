import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnulacionDevoPageRoutingModule } from './anulacion-devo-routing.module';

import { AnulacionDevoPage } from './anulacion-devo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    AnulacionDevoPageRoutingModule
  ],
  declarations: [AnulacionDevoPage]
})
export class AnulacionDevoPageModule {}
