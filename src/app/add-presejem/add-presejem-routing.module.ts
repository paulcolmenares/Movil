import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPresejemPage } from './add-presejem.page';

const routes: Routes = [
  {
    path: '',
    component: AddPresejemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPresejemPageRoutingModule {}
