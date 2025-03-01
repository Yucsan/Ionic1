import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // esto es para recibir los datos

@Component({
selector: 'app-details',
templateUrl: './details.page.html',
styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  user:any;
  numero?:number;
  /*
  Esta página recibe parámetros de la anterior dentro de 'queryParams'
  Cargo sobre atributos de la clase los valores pasados como parámetros.
  El parámetro 'user' se pasó en formato JSON. Lo parseo para obtener un objeto.
  */
  constructor(private activatedRoute: ActivatedRoute) {
  this.activatedRoute.queryParams.subscribe(params => {
  this.user = JSON.parse(params["user"]);
  this.numero = params["numero"];
  console.log(this.user);
  });
  }
  
  ngOnInit() {
  console.log(this.user);
  }
  

}
