import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Semente } from './models/semente.model';
import { SementesService } from './service/sementes.service';

@Component({
  selector: 'app-gerenciamento-catalogo-sementes',
  templateUrl: './gerenciamento-catalogo-sementes.page.html',
  styleUrls: ['./gerenciamento-catalogo-sementes.page.scss'],
})
export class GerenciamentoCatalogoSementesPage implements OnInit {


  sementes: Semente[] = [];
  panelOpenState = false;
  dialog: boolean = false;
  adicionarAtualizar: boolean = null;

  displayedColumns: string[] = ['id','imagem', 'nome','preco', "editar", "excluir"];
  dataSource = new MatTableDataSource<Semente>(this.sementes);



  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder;
  constructor(private service: SementesService,  private router: Router) { }





  ngOnInit() {
    this.dialogControl(false);
  this.buscarTodos();

  }


  criarFormulario(): void{
    this.form = this.formBuilder.group({
      id:[],
      link:[''],
      nome:[''],
      descricao:[''],
      preco:['']

    })
  }

  preecherFormulario(semente: Semente): void{
    this.form.get('id').setValue(semente.id);
    this.form.get('link').setValue(semente.link);
    this.form.get('nome').setValue(semente.nome);
    this.form.get('descricao').setValue(semente.descricao);
    this.form.get('preco').setValue(semente.preco);



  }



  dialogControl(transitor: boolean, semente?: Semente): void{
      this.dialog = transitor;


      if(semente != null){

        this.preecherFormulario(semente);
      }

  }
  adicionarAtualizarControl(controlador: boolean): void{
    this.adicionarAtualizar = controlador;
    if(controlador == true){
      this.criarFormulario();
    }

  }

buscarTodos(): void{
  this.service.buscarSementes().subscribe(element => {
    this.sementes = element
    console.log(element)
    this.dataSource = new MatTableDataSource<Semente>(this.sementes);
    this.criarFormulario();
  })
}

editarSemente(): void{
  this.service.editarSemente(this.form.getRawValue()).subscribe(sucesso => {
    console.log(sucesso);
    this.buscarTodos();
    this.dialogControl(false);
  },error => {
    console.log(error);
  }

  );

}

adicionarSemente(): void{
this.service.adicionarSemente(this.form.getRawValue()).subscribe(()=> {
  this.buscarTodos();
  this.dialogControl(false);
})
}

excluirSemente(id: number): void{

this.service.excluirSemente(id).subscribe(()=>   this.buscarTodos())

}

}
