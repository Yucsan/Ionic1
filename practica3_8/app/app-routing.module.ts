import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hotels/:cityIndex',
    loadChildren: () => import('./hotels/hotels.module').then( m => m.HotelsPageModule)
  },
  {
    path: 'resena/:cityIndex/:hotelIndex',
    loadChildren: () => import('./resena/resena.module').then( m => m.ResenaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
