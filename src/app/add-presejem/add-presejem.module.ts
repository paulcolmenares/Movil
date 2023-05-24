import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPresejemPageRoutingModule } from './add-presejem-routing.module';

import { AddPresejemPage } from './add-presejem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPresejemPageRoutingModule
  ],
  declarations: [AddPresejemPage]
})
export class AddPresejemPageModule {}
