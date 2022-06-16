import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GereciamentoCatalogoFloresPage } from './gereciamento-catalogo-flores.page';

const routes: Routes = [
  {
    path: '',
    component: GereciamentoCatalogoFloresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GereciamentoCatalogoPageRoutingModule {}
