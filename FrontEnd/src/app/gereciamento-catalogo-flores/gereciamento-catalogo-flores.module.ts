import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GereciamentoCatalogoPageRoutingModule } from './gereciamento-catalogo-flores-routing.module';

import { GereciamentoCatalogoFloresPage } from './gereciamento-catalogo-flores.page';
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
    GereciamentoCatalogoPageRoutingModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [GereciamentoCatalogoFloresPage]
})
export class GereciamentoCatalogoPageModule {}
