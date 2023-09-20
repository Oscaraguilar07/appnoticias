import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallenotiPage } from './detallenoti.page';

const routes: Routes = [
  {
    path: '',
    component: DetallenotiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallenotiPageRoutingModule {}
