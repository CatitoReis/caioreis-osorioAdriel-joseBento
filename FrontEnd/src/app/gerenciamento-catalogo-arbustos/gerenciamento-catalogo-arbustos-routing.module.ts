import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciamentoCatalogoArbustosPage } from './gerenciamento-catalogo-arbustos.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciamentoCatalogoArbustosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciamentoCatalogoArbustosPageRoutingModule {}
