import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({

 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],

})


export class HomePage {

  alumno = {
    id: 1,
    nombre: 'Juan Pérez',
    edad: 20,
    curso: '2º Bachillerato'
  };

 constructor(private navCtrl: NavController){
 }

 goToPagina2(){

   // Convertimos el objeto "alumno" a JSON y lo enviamos a la otra página
   const navigationExtras: NavigationExtras = {

    queryParams: {
      alumno: JSON.stringify(this.alumno)
    }

  };

  this.navCtrl.navigateForward('/pagina2/14', navigationExtras); // Navegamos a la página 2

}


}