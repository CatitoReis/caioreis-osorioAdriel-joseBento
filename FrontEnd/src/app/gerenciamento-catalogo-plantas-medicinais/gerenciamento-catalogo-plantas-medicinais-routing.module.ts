import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciamentoCatalogoPlantasMedicinaisPage } from './gerenciamento-catalogo-plantas-medicinais.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciamentoCatalogoPlantasMedicinaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciamentoCatalogoPlantasMedicinaisPageRoutingModule {}
