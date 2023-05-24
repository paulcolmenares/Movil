import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DdevolPage } from './ddevol.page';

const routes: Routes = [
  {
    path: '',
    component: DdevolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DdevolPageRoutingModule {}
