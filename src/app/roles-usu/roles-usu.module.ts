import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolesUsuPageRoutingModule } from './roles-usu-routing.module';

import { RolesUsuPage } from './roles-usu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    RolesUsuPageRoutingModule
  ],
  declarations: [RolesUsuPage]
})
export class RolesUsuPageModule {}
