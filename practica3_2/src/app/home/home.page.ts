import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  apellidos!: string;
  nombre!: string;
  provincia!: string;
  estadoCivil: string = 'Soltero';
  familia: boolean = false; // familia numerosa
  // La propiedad `familia` actúa como familia numerosa, si es true
  constructor() {}
}
