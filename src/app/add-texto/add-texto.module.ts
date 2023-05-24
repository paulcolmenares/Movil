import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTextoPageRoutingModule } from './add-texto-routing.module';

import { AddTextoPage } from './add-texto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTextoPageRoutingModule
  ],
  declarations: [AddTextoPage]
})
export class AddTextoPageModule {}
