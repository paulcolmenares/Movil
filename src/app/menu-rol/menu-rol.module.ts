import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuRolPageRoutingModule } from './menu-rol-routing.module';

import { MenuRolPage } from './menu-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    
    IonicModule,
    MenuRolPageRoutingModule
  ],
  declarations: [MenuRolPage]
})
export class MenuRolPageModule {}
