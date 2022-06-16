import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { GerenciamentoCatalogoArvoresPageRoutingModule } from './gerenciamento-catalogo-arvores-routing.module';

import { GerenciamentoCatalogoArvoresPage } from './gerenciamento-catalogo-arvores.page';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciamentoCatalogoArvoresPageRoutingModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [GerenciamentoCatalogoArvoresPage]
})
export class GerenciamentoCatalogoArvoresPageModule {}
