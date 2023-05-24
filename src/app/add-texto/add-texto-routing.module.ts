import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTextoPage } from './add-texto.page';

const routes: Routes = [
  {
    path: '',
    component: AddTextoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTextoPageRoutingModule {}
