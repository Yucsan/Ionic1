import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  { path: 'hoteles/:cityIndex', 
    loadChildren: () => import('./hoteles/hoteles.module').then( m => m.HotelesPageModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
