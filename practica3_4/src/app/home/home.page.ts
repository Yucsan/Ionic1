import { Component } from '@angular/core';

import { AlumnoAsignatura } from '../modelo/AlumnoAsignatura';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alumnosAsignaturas?: AlumnoAsignatura[];
  asignaturaSeleccionada: String='';


  asignaturas:string[]=['HLC','MÓVILES','ACCESO A DATOS'];

  alumnos:string[]=['Perez López, Marta', 'García Aranda, José', 'Nieto Blanco, Ana'];

  alumnosSeleccionados?:string[];

  constructor() {}

  cambiaAsignatura(event:any){

    console.log(event.target.value);

    console.log(this.asignaturaSeleccionada);

  }

  seleccionadosAlumnos(event: Event){

    console.log(this.alumnosSeleccionados);

    this.alumnosAsignaturas=[];

    this.alumnosSeleccionados?.forEach((alumno:String)=>{

      this.alumnosAsignaturas?.push(new AlumnoAsignatura(alumno,this.asignaturaSeleccionada));

    })

  }



}


