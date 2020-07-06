import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkiraPage } from './akira.page';

const routes: Routes = [
  {
    path: '',
    component: AkiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkiraPageRoutingModule {}
