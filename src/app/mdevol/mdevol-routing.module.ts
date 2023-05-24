import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdevolPage } from './mdevol.page';

const routes: Routes = [
  {
    path: '',
    component: MdevolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdevolPageRoutingModule {}
