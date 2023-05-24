import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscribenPage } from './escriben.page';

const routes: Routes = [
  {
    path: '',
    component: EscribenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscribenPageRoutingModule {}
