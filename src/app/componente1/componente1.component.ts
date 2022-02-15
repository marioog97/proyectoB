import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  curso1 = {
    'nombre': 'Beca Angular',
    'total_dias': 9,
    'descripcion': 'Curso sobre Angular y Typescript'
  };

  curso2 = {
    'nombre': 'Beca Java',
    'total_dias': 10,
    'descripcion': 'Curso sobre Java'
  };

  intercambioCN1: any;
  intercambioCD1: any;
  intercambioCN2: any;
  intercambioCD2: any;


  contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  btnIntercambiar(): void {
    this.contador = this.contador + 1;

    this.intercambioCN1 = this.curso1.nombre;
    this.intercambioCD1 = this.curso1.descripcion;
    this.intercambioCN2 = this.curso2.nombre;
    this.intercambioCD2 = this.curso2.descripcion;


    console.log("Pulsado");

    this.curso2.nombre = this.intercambioCN1;
    this.curso2.descripcion = this.intercambioCD1;
    this.curso1.nombre = this.intercambioCN2;
    this.curso1.descripcion = this.intercambioCD2;



  }

}
