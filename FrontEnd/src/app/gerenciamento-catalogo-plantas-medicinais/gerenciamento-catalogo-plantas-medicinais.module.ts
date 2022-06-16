import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { GerenciamentoCatalogoPlantasMedicinaisPageRoutingModule } from './gerenciamento-catalogo-plantas-medicinais-routing.module';

import { GerenciamentoCatalogoPlantasMedicinaisPage } from './gerenciamento-catalogo-plantas-medicinais.page';
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
    GerenciamentoCatalogoPlantasMedicinaisPageRoutingModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [GerenciamentoCatalogoPlantasMedicinaisPage]
})
export class GerenciamentoCatalogoPlantasMedicinaisPageModule {}
