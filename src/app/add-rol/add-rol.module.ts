import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRolPageRoutingModule } from './add-rol-routing.module';

import { AddRolPage } from './add-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRolPageRoutingModule
  ],
  declarations: [AddRolPage]
})
export class AddRolPageModule {}
