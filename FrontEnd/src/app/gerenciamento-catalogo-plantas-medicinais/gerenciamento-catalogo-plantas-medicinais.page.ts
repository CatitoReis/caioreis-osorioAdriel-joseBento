import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PlantasMedicinais } from './models/plantas-medicinais';
import { PlantasMedicinaisService } from './service/plantas-medicinais.service';

@Component({
  selector: 'app-gerenciamento-catalogo-plantas-medicinais',
  templateUrl: './gerenciamento-catalogo-plantas-medicinais.page.html',
  styleUrls: ['./gerenciamento-catalogo-plantas-medicinais.page.scss'],
})
export class GerenciamentoCatalogoPlantasMedicinaisPage implements OnInit {


  plantas: PlantasMedicinais[] = [];
  panelOpenState = false;
  dialog: boolean = false;
  adicionarAtualizar: boolean = null;

  displayedColumns: string[] = ['id','imagem', 'nome','preco', "editar", "excluir"];
  dataSource = new MatTableDataSource<PlantasMedicinais>(this.plantas);



  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder;
  constructor(private service: PlantasMedicinaisService,  private router: Router) { }





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

  preecherFormulario(plantas: PlantasMedicinais): void{
    this.form.get('id').setValue(plantas.id);
    this.form.get('link').setValue(plantas.link);
    this.form.get('nome').setValue(plantas.nome);
    this.form.get('descricao').setValue(plantas.descricao);
    this.form.get('preco').setValue(plantas.preco);



  }



  dialogControl(transitor: boolean, plantas?: PlantasMedicinais): void{
      this.dialog = transitor;


      if(plantas != null){

        this.preecherFormulario(plantas);
      }

  }
  adicionarAtualizarControl(controlador: boolean): void{
    this.adicionarAtualizar = controlador;
    if(controlador == true){
      this.criarFormulario();
    }

  }

buscarTodos(): void{
  this.service.buscarPlantasMedicinais().subscribe(element => {
    this.plantas = element
    this.dataSource = new MatTableDataSource<PlantasMedicinais>(this.plantas);
    this.criarFormulario();
  })
}

editarPlanta(): void{
  this.service.editarPlantasMedicinal(this.form.getRawValue()).subscribe(sucesso => {
    console.log(sucesso);
    this.buscarTodos();
    this.dialogControl(false);
  },error => {
    console.log(error);
  }

  );

}

adicionarPlanta(): void{
this.service.adicionarPlantasMedicinal(this.form.getRawValue()).subscribe(()=> {
  this.buscarTodos();
  this.dialogControl(false);
})
}

excluirPlanta(id: number): void{

this.service.excluirPlantasMedicinal(id).subscribe(()=>   this.buscarTodos())

}


}
