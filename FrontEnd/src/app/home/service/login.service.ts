import { Injectable } from "@angular/core";
import { Usuario } from '../model/usuario';

@Injectable({providedIn:'root'})
export class LoginService{

private usuarioAutenticado: boolean = false;

fazerLogin(usuario: Usuario): boolean{
  if(usuario.nome == 'admin' && usuario.senha == 'admin'){
      return true;
    }else{
        return false;
    }
  }

}
