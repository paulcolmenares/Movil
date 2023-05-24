import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DdevolPageRoutingModule } from './ddevol-routing.module';

import { DdevolPage } from './ddevol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DdevolPageRoutingModule
  ],
  declarations: [DdevolPage]
})
export class DdevolPageModule {}
