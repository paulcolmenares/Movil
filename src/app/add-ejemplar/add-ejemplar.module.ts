import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEjemplarPageRoutingModule } from './add-ejemplar-routing.module';

import { AddEjemplarPage } from './add-ejemplar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEjemplarPageRoutingModule
  ],
  declarations: [AddEjemplarPage]
})
export class AddEjemplarPageModule {}
