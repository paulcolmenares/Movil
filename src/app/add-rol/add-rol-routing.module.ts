import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRolPage } from './add-rol.page';

const routes: Routes = [
  {
    path: '',
    component: AddRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRolPageRoutingModule {}
