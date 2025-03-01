//CALCULADORA FERNANDO
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  accion: String = "";
  error: boolean = false;
  constructor() { }

  opera() {
    /*
      if(this.accion == "+"){
        this.resultado = this.num1+this.num2;
      }else if (this.accion == "-"){
        this.resultado = this.num1-this.num2;
      }else if (this.accion == "*"){
     
        this.resultado = this.num1*this.num2;
      }else if (this.accion == "/"){
        if(this.num2==0){
          this.error = "No se puede divir entre 0";
        }
        this.resultado = this.num1/this.num2;
      }*/

    switch (this.accion) {
      case '+':
        this.error = false;
        this.resultado = this.num1 + this.num2;
        break;
      case '-':
        this.error = false;
        this.resultado = this.num1 - this.num2;
        break;
      case '*':
        this.error = false;
        this.resultado = this.num1 * this.num2;
        break;
      case '/':
        this.error = true;
        this.resultado = this.num1 / this.num2;
        break;
      default:
        console.log('Estado desconocido');
    }
  }


}




