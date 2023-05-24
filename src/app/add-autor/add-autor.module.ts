import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAutorPageRoutingModule } from './add-autor-routing.module';

import { AddAutorPage } from './add-autor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAutorPageRoutingModule
  ],
  declarations: [AddAutorPage]
})
export class AddAutorPageModule {}
