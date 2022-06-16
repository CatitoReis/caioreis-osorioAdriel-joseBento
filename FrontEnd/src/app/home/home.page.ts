import { Component } from '@angular/core';
import { Usuario } from './model/usuario';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
alteradorlogin: boolean = false;
login: boolean = false;
usuario: Usuario = new Usuario();
  constructor(private service: LoginService) {}



  alteradorLogin(logar: boolean): void{
      this.alteradorlogin = logar;
  }

  fazerLogin(): void{
    console.log(this.usuario)
    this.login =this.service.fazerLogin(this.usuario)
    this.usuario = new Usuario;


  }

  deslogar(): void{
    this.login = false;
  }
}
