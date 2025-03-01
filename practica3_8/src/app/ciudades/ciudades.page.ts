import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './ciudades.page.html',
  styleUrls: ['./ciudades.page.scss'],
})
export class CitiesPage implements OnInit {
  ciudades: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCiudades().subscribe((data) => {
      this.ciudades = data; // Almacena las ciudades cargadas del JSON
    });
  }
}

