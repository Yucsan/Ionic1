import { Component } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  ciudades: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCiudades().subscribe((data) => {
      this.ciudades = data; // Almacena las ciudades cargadas del JSON
    });
  }


}
