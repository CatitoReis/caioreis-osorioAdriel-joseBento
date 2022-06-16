import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciamentoCatalogoArvoresPage } from './gerenciamento-catalogo-arvores.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciamentoCatalogoArvoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciamentoCatalogoArvoresPageRoutingModule {}
