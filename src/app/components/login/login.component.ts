import { Component } from '@angular/core';
import { Usuario } from 'src/app/Entities/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  login() {
    console.log("usuario: ", this.usuario.email);


    // localStorage.setItem(this.)
  }
}
