import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Arbusto } from './models/arbusto';
import { ArbustosService } from './service/arbusto.service';

@Component({
  selector: 'app-gerenciamento-catalogo-arbustos',
  templateUrl: './gerenciamento-catalogo-arbustos.page.html',
  styleUrls: ['./gerenciamento-catalogo-arbustos.page.scss'],
})
export class GerenciamentoCatalogoArbustosPage implements OnInit {

  arbustos: Arbusto[] = [];
  panelOpenState = false;
  dialog: boolean = false;
  adicionarAtualizar: boolean = null;

  displayedColumns: string[] = ['id','imagem', 'nome','preco', "editar", "excluir"];
  dataSource = new MatTableDataSource<Arbusto>(this.arbustos);



  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder;
  constructor(private service: ArbustosService,  private router: Router) { }





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

  preecherFormulario(arbusto: Arbusto): void{
    this.form.get('id').setValue(arbusto.id);
    this.form.get('link').setValue(arbusto.link);
    this.form.get('nome').setValue(arbusto.nome);
    this.form.get('descricao').setValue(arbusto.descricao);
    this.form.get('preco').setValue(arbusto.preco);



  }



  dialogControl(transitor: boolean, arbusto?: Arbusto): void{
      this.dialog = transitor;


      if(arbusto != null){

        this.preecherFormulario(arbusto);
      }

  }
  adicionarAtualizarControl(controlador: boolean): void{
    this.adicionarAtualizar = controlador;
    if(controlador == true){
      this.criarFormulario();
    }

  }

buscarTodos(): void{
  this.service.buscarArbustos().subscribe(element => {
    this.arbustos = element
    this.dataSource = new MatTableDataSource<Arbusto>(this.arbustos);
    this.criarFormulario();
  })
}

editarArbusto(): void{
  this.service.editarArbusto(this.form.getRawValue()).subscribe(sucesso => {
    console.log(sucesso);
    this.buscarTodos();
    this.dialogControl(false);
  },error => {
    console.log(error);
  }

  );

}

adicionarArbusto(): void{
this.service.adicionarArbusto(this.form.getRawValue()).subscribe(()=> {
  this.buscarTodos();
  this.dialogControl(false);
})
}

excluirArbusto(id: number): void{
this.service.excluirArbusto(id).subscribe(()=>   this.buscarTodos())
}


}
