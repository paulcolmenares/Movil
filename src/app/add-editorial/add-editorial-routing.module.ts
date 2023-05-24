import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditorialPage } from './add-editorial.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditorialPageRoutingModule {}
