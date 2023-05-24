import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeProPageRoutingModule } from './me-pro-routing.module';

import { MeProPage } from './me-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    
    IonicModule,
    MeProPageRoutingModule
  ],
  declarations: [MeProPage]
})
export class MeProPageModule {}
