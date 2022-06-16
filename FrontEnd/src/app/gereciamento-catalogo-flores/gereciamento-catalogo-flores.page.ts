import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Flores } from './models/flores';
import { FloresService } from './service/flores.service';


@Component({
  selector: 'app-gereciamento-catalogo',
  templateUrl: './gereciamento-catalogo-flores.page.html',
  styleUrls: ['./gereciamento-catalogo-flores.page.scss'],
})
export class GereciamentoCatalogoFloresPage implements OnInit {

  flores: Flores[] = [];
  flor: Flores;
  panelOpenState = false;
  dialog: boolean = false;
  adicionarAtualizar: boolean = null;

  displayedColumns: string[] = ['id','imagem', 'nome','preco', "editar", "excluir"];
  dataSource = new MatTableDataSource<Flores>(this.flores);



  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder;
  constructor(private service: FloresService,  private router: Router) { }





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

  preecherFormulario(flor: Flores): void{
    this.form.get('id').setValue(flor.id);
    this.form.get('link').setValue(flor.link);
    this.form.get('nome').setValue(flor.nome);
    this.form.get('descricao').setValue(flor.descricao);
    this.form.get('preco').setValue(flor.preco);



  }



  dialogControl(transitor: boolean, flor?: Flores): void{
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
  this.service.buscarFlores().subscribe(element => {
    this.flores = element
    this.dataSource = new MatTableDataSource<Flores>(this.flores);
    this.criarFormulario();
  })
}

editarFlor(): void{
  this.service.editarFlor(this.form.getRawValue()).subscribe(sucesso => {
    console.log(sucesso);
    this.buscarTodos();
    this.dialogControl(false);
  },error => {
    console.log(error);
  }

  );

}

adicionarFlor(): void{
this.service.adicionarFlor(this.form.getRawValue()).subscribe(()=> {
  this.buscarTodos();
  this.dialogControl(false);
})
}

excluirFlor(id: number): void{

this.service.excluirFlor(id).subscribe(()=>   this.buscarTodos())

}




}
