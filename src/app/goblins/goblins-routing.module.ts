import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoblinsPage } from './goblins.page';

const routes: Routes = [
  {
    path: '',
    component: GoblinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoblinsPageRoutingModule {}
