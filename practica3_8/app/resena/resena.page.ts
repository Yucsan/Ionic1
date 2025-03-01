import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resena',
  templateUrl: './resena.page.html',
  styleUrls: ['./resena.page.scss'],
})
export class ResenaPage implements OnInit {

  hotel: any;
  valoraciones: any[] = [];
  cityIndex!: number;
  hotelIndex!: number;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.cityIndex = +this.route.snapshot.paramMap.get('cityIndex')!;
    this.hotelIndex = +this.route.snapshot.paramMap.get('hotelIndex')!;
    this.dataService.getCiudades().subscribe((data) => {
      this.hotel = data[this.cityIndex].hoteles[this.hotelIndex];
      this.valoraciones = this.hotel.valoraciones;
    });
  }

}
