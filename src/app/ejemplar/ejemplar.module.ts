import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemplarPageRoutingModule } from './ejemplar-routing.module';

import { EjemplarPage } from './ejemplar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemplarPageRoutingModule
  ],
  declarations: [EjemplarPage]
})
export class EjemplarPageModule {}
