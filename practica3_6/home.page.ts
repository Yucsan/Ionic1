import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  opcionSeleccionada1: string="";
  opcionSeleccionada2: string="";
  

  cicloSeleccionado: string="";
  
  ciclos:boolean = false;
  muestraEso:boolean =false;
  muestraCiclos:boolean = false;

  esoSeleccionado: string="";
  opciones:string[] = ['Eso','Ciclo'];
  
  opciones2:string[] = ['1ºESO','2ºESO','3ºESO','4ºESO'];
  opciones3:string[] = ['DAM','DAW','ASIR'];
  
  
  
  //alerta
  
  
  constructor(public alertController: AlertController) {
  }
  
  
  cambiaModulo(event:any){
    console.log(event.target.value);
    const valor = event.target.value;
    if(valor == "Eso") {

      this.alertESO(); 

    }else{ 

      this.ciclos = !this.ciclos;}
      this.opcionSeleccionada1 = event.target.value;

  }

  cambiaCiclo(event:any){
    console.log(event.target.value);
    const valor = event.target.value;
    this.opcionSeleccionada2 = `${this.opcionSeleccionada1} ${valor}`;
    //this.opcionSeleccionada2 = this.opcionSeleccionada1+" "+valor;
    this.muestraCiclos = !this.muestraCiclos;
  }


  
  

  async alertESO() {
    const alert = await this.alertController.create({
      header: 'Escoge una Opción',
  //pordria usar un
  
      inputs: [

        {
          type: 'radio', 
          name: 'valorEso', 
          label: '1ºESO',
          value: '1ºEso', 
        },
        {
          type: 'radio', 
          name: 'valorEso', 
          label: '2ºESO',
          value: '2ºEso', 
        },
        {
          type: 'radio', 
          name: 'valorEso', 
          label: '3ºESO',
          value: '3ºEso', 
        },
        {
          type: 'radio', 
          name: 'valorEso', 
          label: '4ºESO',
          value: '4ºEso', 
        }

      ],
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //borro la selección del ion-select
            this.esoSeleccionado = "";
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            this.esoSeleccionado = data;
            this.alertAlumno();
          },
        }
      ]
    });
  
    await alert.present();
  }
  async alertAlumno() {
    const alert = await this.alertController.create({
      header: 'Escoge una Opción',
      inputs: [
        {
          type: 'radio', // Tipo de input radio button
          name: 'option', // Nombre del grupo de radio buttons
          label: 'NO-Repetidor', // Etiqueta que verá el usuario
          value: 'NORepetidor', // Valor asociado a esta opción
          checked: true, // Opción seleccionada por defecto
        },
        {
          type: 'radio', // Otro radio button
          name: 'option',
          label: 'Repetidor',
          value: 'Repetidor',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // Borrar la selección (si es necesario)
            this.esoSeleccionado = "";
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            
          
            this.esoSeleccionado = this.esoSeleccionado+" "+data;
            this.muestraEso=!this.muestraEso;
            console.log(this.esoSeleccionado);
          },
        },
      ],
    });
  
    await alert.present();
  }
  





}
