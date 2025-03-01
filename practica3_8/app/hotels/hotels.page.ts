import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; //
import { DataService } from '../data.service';   // esto lo ponemos



@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {

  city: any;
  hoteles: any[] = [];
  cityIndex!: number

  constructor( private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.cityIndex = +this.route.snapshot.paramMap.get('cityIndex')!;
    this.dataService.getCiudades().subscribe((data) => {
    this.city = data[this.cityIndex];
    this.hoteles = this.city.hoteles;
    });
  }

}
