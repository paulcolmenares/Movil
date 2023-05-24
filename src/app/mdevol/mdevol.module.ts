import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdevolPageRoutingModule } from './mdevol-routing.module';

import { MdevolPage } from './mdevol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdevolPageRoutingModule
  ],
  declarations: [MdevolPage]
})
export class MdevolPageModule {}
