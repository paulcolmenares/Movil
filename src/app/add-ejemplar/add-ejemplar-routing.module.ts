import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEjemplarPage } from './add-ejemplar.page';

const routes: Routes = [
  {
    path: '',
    component: AddEjemplarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEjemplarPageRoutingModule {}
