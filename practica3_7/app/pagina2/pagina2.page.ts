import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  alumno: any; // Objeto para almacenar los datos del alumno recibido

  constructor(private activatedRoute: ActivatedRoute) {
    // Recuperamos el parámetro desde queryParams
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['alumno']) {
        this.alumno = JSON.parse(params['alumno']); // Convertimos de JSON a objeto
      }
    });
  }
 //en esta funcion que es al iniciar recogemos el id y mostramos en alerta
  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

   alert(id);
  }
}