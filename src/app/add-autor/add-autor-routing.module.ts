import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAutorPage } from './add-autor.page';

const routes: Routes = [
  {
    path: '',
    component: AddAutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAutorPageRoutingModule {}
