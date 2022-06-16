import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { GerenciamentoCatalogoSementesPageRoutingModule } from './gerenciamento-catalogo-sementes-routing.module';

import { GerenciamentoCatalogoSementesPage } from './gerenciamento-catalogo-sementes.page';
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
    GerenciamentoCatalogoSementesPageRoutingModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [GerenciamentoCatalogoSementesPage]
})
export class GerenciamentoCatalogoSementesPageModule {}
