import { Component } from '@angular/core';
import { Usuario } from 'src/app/Entities/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario: Usuario = new Usuario();
  passwordAux: string = "";
  usuarios: Usuario[] = [];
  duplicado: boolean = false;


  registro() {
    //const Swal = require('sweetalert2');

    this.usuario.email = this.usuario.email.trim();
    this.usuario.password = this.usuario.password.trim();
    this.passwordAux = this.passwordAux.trim();
    if (this.usuario.email.length != 0 && this.usuario.password.length != 0 && this.passwordAux.length != 0) {

      if (this.usuario.password != this.passwordAux) {
        Swal.fire({
          title: 'Error',
          text: 'Las contraseñas no coinciden',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        return;
      }
      else {
        let userJson = localStorage.getItem('usuarios');
        if (userJson != null)
          this.usuarios = JSON.parse(userJson!);

        //console.log(this.usuarios) 
        this.usuarios.forEach(element => {
          if (element.email == this.usuario.email) {
            this.duplicado = true;
          }
        });

        if (!this.duplicado) {

          this.usuarios.push(this.usuario);
          console.log(this.usuarios);
          userJson = JSON.stringify(this.usuarios);
          localStorage.setItem('usuarios', userJson);
          //console.log("Ok");
          Swal.fire({
            title: 'Success',
            text: 'Registro exitoso',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
        else {
          Swal.fire({
            title: 'Warning',
            text: 'Email ya registrado',
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
        }

      }
    } else {
      Swal.fire({
        title: '',
        text: 'No puede haber campos vacios',
        icon: 'warning',
        confirmButtonText: 'ok'
      })
      return;
    }
  }
}
