import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'gereciamento-catalogo-flores',
    loadChildren: () => import('./gereciamento-catalogo-flores/gereciamento-catalogo-flores.module').then( m => m.GereciamentoCatalogoPageModule)
  },
  {
    path: 'gerenciamento-catalogo-sementes',
    loadChildren: () => import('./gerenciamento-catalogo-sementes/gerenciamento-catalogo-sementes.module').then( m => m.GerenciamentoCatalogoSementesPageModule)
  },
  {
    path: 'gerenciamento-catalogo-arbustos',
    loadChildren: () => import('./gerenciamento-catalogo-arbustos/gerenciamento-catalogo-arbustos.module').then( m => m.GerenciamentoCatalogoArbustosPageModule)
  },
  {
    path: 'gerenciamento-catalogo-arvores',
    loadChildren: () => import('./gerenciamento-catalogo-arvores/gerenciamento-catalogo-arvores.module').then( m => m.GerenciamentoCatalogoArvoresPageModule)
  },
  {
    path: 'gerenciamento-catalogo-plantas-medicinais',
    loadChildren: () => import('./gerenciamento-catalogo-plantas-medicinais/gerenciamento-catalogo-plantas-medicinais.module').then( m => m.GerenciamentoCatalogoPlantasMedicinaisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
