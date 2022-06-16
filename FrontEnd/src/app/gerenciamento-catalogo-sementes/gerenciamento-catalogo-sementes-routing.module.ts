import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciamentoCatalogoSementesPage } from './gerenciamento-catalogo-sementes.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciamentoCatalogoSementesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciamentoCatalogoSementesPageRoutingModule {}
