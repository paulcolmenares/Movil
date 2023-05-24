import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DprestamoPageRoutingModule } from './dprestamo-routing.module';

import { DprestamoPage } from './dprestamo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    DprestamoPageRoutingModule
  ],
  declarations: [DprestamoPage]
})
export class DprestamoPageModule {}
