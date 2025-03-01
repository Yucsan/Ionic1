import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonUrl = 'assets/ciudades.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  // Método para obtener el JSON completo
  getCiudades(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
