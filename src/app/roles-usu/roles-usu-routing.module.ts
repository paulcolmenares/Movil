import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesUsuPage } from './roles-usu.page';

const routes: Routes = [
  {
    path: '',
    component: RolesUsuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesUsuPageRoutingModule {}
