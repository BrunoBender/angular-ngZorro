import { EventEmitter, Injectable } from "@angular/core";
import { UsuarioModel } from "../models/usuario.model";
import { Router } from "@angular/router";

@Injectable()
export class LoginService{

  autenticacaoUsuario: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router){}

  fazerLogin(usuario: UsuarioModel){
      if(usuario.login === 'admin@gmail.com' && usuario.senha === 'admin'){
        this.autenticacaoUsuario = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/home']);
      }else{
        this.mostrarMenuEmitter.emit(false);
      }
  }
  teste(){
    this.autenticacaoUsuario = true;
    this.router.navigate(['/home']);
    this.mostrarMenuEmitter.emit(true);
  }

  goToRegister(){
    this.router.navigate([`/register`,85]);
  };

  hideMenu(){
    this.mostrarMenuEmitter.emit(false);
  }
}
