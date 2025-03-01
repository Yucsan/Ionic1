import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  texto1: string = ""; 
  texto2: string = ""; 
  texto3: string = ""; 
  cont: number = 1;
  mostrar: boolean = true;
  mostrar2: boolean = false;
  mostrar3: boolean = false;
  habilitar1: boolean = false;
  habilitar2: boolean = false;
  habilitar3: boolean = false;
  constructor() {}

  accion1(){
    if(this.texto1 == ""){
      alert("pon algo");
    }else{
      this.habilitar1 = true;
      this.mostrar2=true;
    }
  }
  accion2(){
    if(this.texto2 == ""){
      alert("pon algo");
    }else{
      this.habilitar2=true;
      this.mostrar3=true;
    }

  }
  accion3(){
    if(this.texto3 == ""){
      alert("pon algo");
    }else{
      this.habilitar3=true;
    }
  }
/*
  accion(){
    
    var input = document.createElement("ion-input");
    var btn = document.createElement("ion-button");

    input.innerHTML=this.texto1;

    btn.innerHTML="Accion"+this.cont;
    
    var idn = "t"+this.cont;
    this.cont++;
    
    input.setAttribute("id", idn);//asigno id
    input.setAttribute("type", "text");//asigno id
    input.setAttribute("[(ngModel)]", "accion");//asigno id

    btn.setAttribute("id",idn+"btn");
    btn.setAttribute("expand", "block");
    btn.setAttribute("(click)", "accion");
    btn.innerHTML = "crea Accion "+this.cont;

    document.querySelector("#texto1s")!.appendChild(input);
    //document.querySelector("#"+this.texto1)!.appendChild(btn);
}
   */

  

}


