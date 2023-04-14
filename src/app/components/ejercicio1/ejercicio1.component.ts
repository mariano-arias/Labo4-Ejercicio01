import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {

  title = 'Ejercicio 01';
  edadUno: number = 0;
  edadDos: number = 0;
  suma: number = 0;
  promedio: number = 0;

  Calcular() {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }


  Clean() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }


}
