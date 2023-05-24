import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuRolPage } from './menu-rol.page';

const routes: Routes = [
  {
    path: '',
    component: MenuRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRolPageRoutingModule {}
