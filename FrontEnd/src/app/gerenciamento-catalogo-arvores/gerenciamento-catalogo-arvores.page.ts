import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Arvore } from './models/arvore';
import { ArvoreService } from './service/arvore.service';

@Component({
  selector: 'app-gerenciamento-catalogo-arvores',
  templateUrl: './gerenciamento-catalogo-arvores.page.html',
  styleUrls: ['./gerenciamento-catalogo-arvores.page.scss'],
})
export class GerenciamentoCatalogoArvoresPage implements OnInit {

  arvores: Arvore[] = [];
  panelOpenState = false;
  dialog: boolean = false;
  adicionarAtualizar: boolean = null;

  displayedColumns: string[] = ['id','imagem', 'nome','preco', "editar", "excluir"];
  dataSource = new MatTableDataSource<Arvore>(this.arvores);



  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder;
  constructor(private service: ArvoreService,  private router: Router) { }





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

  preecherFormulario(arvore: Arvore): void{
    this.form.get('id').setValue(arvore.id);
    this.form.get('link').setValue(arvore.link);
    this.form.get('nome').setValue(arvore.nome);
    this.form.get('descricao').setValue(arvore.descricao);
    this.form.get('preco').setValue(arvore.preco);



  }



  dialogControl(transitor: boolean, flor?: Arvore): void{
      this.dialog = transitor;


      if(flor != null){

        this.preecherFormulario(flor);
      }

  }
  adicionarAtualizarControl(controlador: boolean): void{
    this.adicionarAtualizar = controlador;
    if(controlador == true){
      this.criarFormulario();
    }

  }

buscarTodos(): void{
  this.service.buscarArvores().subscribe(element => {
    this.arvores = element
    this.dataSource = new MatTableDataSource<Arvore>(this.arvores);
    this.criarFormulario();
  })
}

editarArvore(): void{
  this.service.editarArvore(this.form.getRawValue()).subscribe(sucesso => {
    console.log(sucesso);
    this.buscarTodos();
    this.dialogControl(false);
  },error => {
    console.log(error);
  }

  );

}

adicionarArvore(): void{
this.service.adicionarArvore(this.form.getRawValue()).subscribe(()=> {
  this.buscarTodos();
  this.dialogControl(false);
})
}

excluirArvore(id: number): void{

this.service.excluirArvore(id).subscribe(()=>   this.buscarTodos())

}


}
