import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatTableDataSource} from '@angular/material/table';
import { Flores } from '../gereciamento-catalogo-flores/models/flores';
import { FloresService } from '../gereciamento-catalogo-flores/service/flores.service';
import { SementesService } from '../gerenciamento-catalogo-sementes/service/sementes.service';
import { Semente } from '../gerenciamento-catalogo-sementes/models/semente.model';
import { Arbusto } from '../gerenciamento-catalogo-arbustos/models/arbusto';
import { Arvore } from '../gerenciamento-catalogo-arvores/models/arvore';
import { PlantasMedicinais } from '../gerenciamento-catalogo-plantas-medicinais/models/plantas-medicinais';
import { ArbustosService } from '../gerenciamento-catalogo-arbustos/service/arbusto.service';
import { ArvoreService } from '../gerenciamento-catalogo-arvores/service/arvore.service';
import { PlantasMedicinaisService } from '../gerenciamento-catalogo-plantas-medicinais/service/plantas-medicinais.service';
import { element } from 'protractor';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  flores: Flores[] = [];
  sementes: Semente[] = [];
  arbustos: Arbusto[] = [];
  arvores: Arvore[] = [];
  plantas: PlantasMedicinais[] = [];

  panelOpenState = false;

  displayedColumns: string[] = ['id','imagem', 'nome','preco', "adicionar"];
  dataSourceFlores = new MatTableDataSource<Flores>(this.flores);
  dataSourceSementes = new MatTableDataSource<Semente>(this.sementes);
  dataSourceArbustos = new MatTableDataSource<Arbusto>(this.arbustos);
  dataSourceArvores = new MatTableDataSource<Arvore>(this.arvores);
  dataSourcePlantas = new MatTableDataSource<PlantasMedicinais>(this.plantas);


  constructor(private serviceFlores: FloresService,private serviceSementes: SementesService,private serviceArbustos: ArbustosService, private serviceArvores: ArvoreService,  private servicePlantas: PlantasMedicinaisService,  private router: Router) { }





  ngOnInit() {

  this.findAllFlores();
  this.findAllSementes();
  this.findAllArbustos();
  this.findAllArvores();
  this.findAllPlantas();

  }




findAllFlores(): void{
  this.serviceFlores.buscarFlores().subscribe(element => {
    this.flores = element
    console.log(this.flores)
    this.dataSourceFlores = new MatTableDataSource<Flores>(this.flores);
  })
}
findAllSementes(): void{
  this.serviceSementes.buscarSementes().subscribe(element => {
    this.sementes = element;
    this.dataSourceSementes = new MatTableDataSource<Semente>(this.sementes);
  })
}

findAllArbustos(): void{
  this.serviceArbustos.buscarArbustos().subscribe(element => {
      this.arbustos = element;
      this.dataSourceArbustos = new MatTableDataSource<Arbusto>(this.arbustos);
  })
}

findAllArvores(): void {
  this.serviceArvores.buscarArvores().subscribe(element => {
    this.arvores = element;
    this.dataSourceArvores = new MatTableDataSource<Arvore>(this.arvores);
  })
}

findAllPlantas(): void {
  this.servicePlantas.buscarPlantasMedicinais().subscribe(element => {
    this.plantas = element;
    this.dataSourcePlantas = new MatTableDataSource<PlantasMedicinais>(this.plantas);
  })
}



}
