import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesPage } from './ciudades.page';

const routes: Routes = [
  {
    path: '',
    component: CitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiudadesPageRoutingModule {}
