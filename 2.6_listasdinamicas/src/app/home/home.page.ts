////Practica 3 HLC Fernando Chang
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 tarea: string = "Sin Nombre"; 
  constructor() {}

  cont=0;
  creaTarea(){
    
    var pro = document.createElement("li");
    var btn = document.createElement("button");
    pro.innerHTML=this.tarea;//texto producto
    btn.innerHTML="borra";
    
    var idn = "lista"+this.cont; //nombre id de tareas en lista
    this.cont++; 

    pro.setAttribute("id", idn);//asigno id
    btn.setAttribute("id", idn+"btn");//asigno id
    //css boton
    btn.style.background="red";
    btn.style.padding="5px";
    btn.style.marginLeft="5px";

    document.querySelector("#tareas")!.appendChild(pro);
    document.querySelector("#"+idn)!.appendChild(btn);

    btn.addEventListener("click", function() {
      borra(pro.id); 
    });

  }

}

function borra(id: string) {
  document.querySelector("#"+id)!.remove();
}

