import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ciudades', pathMatch: 'full' },
  { path: 'ciudades', loadChildren: () => import('./ciudades/ciudades.module').then(m => m.CiudadesPageModule) },
  { path: 'hotels/:cityIndex', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsPageModule) },
  { path: 'reviews/:cityIndex/:hotelIndex', loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsPageModule) },
];




@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }




