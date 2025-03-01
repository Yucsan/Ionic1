import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiudadesPageRoutingModule } from './ciudades-routing.module';

import { CitiesPage } from './ciudades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiudadesPageRoutingModule
  ],
  declarations: [CitiesPage]
})
export class CiudadesPageModule {}
