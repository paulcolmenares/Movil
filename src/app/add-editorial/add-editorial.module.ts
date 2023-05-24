import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditorialPageRoutingModule } from './add-editorial-routing.module';

import { AddEditorialPage } from './add-editorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditorialPageRoutingModule
  ],
  declarations: [AddEditorialPage]
})
export class AddEditorialPageModule {}
