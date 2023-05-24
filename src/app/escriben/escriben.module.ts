import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscribenPageRoutingModule } from './escriben-routing.module';

import { EscribenPage } from './escriben.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EscribenPageRoutingModule
  ],
  declarations: [EscribenPage]
})
export class EscribenPageModule {}
