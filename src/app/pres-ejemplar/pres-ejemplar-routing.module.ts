import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresEjemplarPage } from './pres-ejemplar.page';

const routes: Routes = [
  {
    path: '',
    component: PresEjemplarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresEjemplarPageRoutingModule {}
