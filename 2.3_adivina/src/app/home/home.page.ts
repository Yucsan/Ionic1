import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num:number=0;
  mayorMenor = '...';
  numSecret: number = this.numAleatorio(0,100);

  numAleatorio(a:number,b:number){
    return Math.round(Math.random()*(b-a)+a); 
  }

  ngOnInit() {
    console.log("Número secreto en ngOnInit:", this.numSecret); 
  }

  constructor() {}

  compruebaNumero(){
    if(this.num)
    {
      if(this.numSecret < this.num)
      {
        this.mayorMenor = 'menor que';
      }
      else if(this.numSecret > this.num)
      {
        this.mayorMenor = 'mayor que';
      }
      else{
        this.mayorMenor = '';
      }
    }
  }

  reinicia(){
    // reiniciamos las variables
    this.num = 0;
    this.mayorMenor = '...';
    this.numSecret = this.numAleatorio(0,100);
  }


}
