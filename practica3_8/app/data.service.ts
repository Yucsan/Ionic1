import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl = 'assets/ciudades.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) { }


// METODO PARA LLAMAR AL JSON *************************
getCiudades(): Observable<any[]> {
  return this.http.get<any[]>(this.jsonUrl);
}

}