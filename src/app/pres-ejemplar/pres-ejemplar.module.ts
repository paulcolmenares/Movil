import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresEjemplarPageRoutingModule } from './pres-ejemplar-routing.module';

import { PresEjemplarPage } from './pres-ejemplar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresEjemplarPageRoutingModule
  ],
  declarations: [PresEjemplarPage]
})
export class PresEjemplarPageModule {}
