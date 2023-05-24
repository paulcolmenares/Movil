import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemplarPage } from './ejemplar.page';

const routes: Routes = [
  {
    path: '',
    component: EjemplarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemplarPageRoutingModule {}
