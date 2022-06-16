import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { GerenciamentoCatalogoArbustosPageRoutingModule } from './gerenciamento-catalogo-arbustos-routing.module';

import { GerenciamentoCatalogoArbustosPage } from './gerenciamento-catalogo-arbustos.page';

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
    GerenciamentoCatalogoArbustosPageRoutingModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [GerenciamentoCatalogoArbustosPage]
})
export class GerenciamentoCatalogoArbustosPageModule {}
