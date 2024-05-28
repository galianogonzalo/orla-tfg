import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaOrlasService {

  /* temporal, las orlas deben traerse desde BBDD */
  private orlas = [
    {id: 1, name:"mi primera orla", date: "20-05-2024", curso: "2º DAW"},
    {id: 2, name:"orla del año pasado", date: "10-06-2023", curso: "2º DAW"},
    {id: 3, name:"orla de prueba", date: "15-04-2024", curso: "4º ESO"},
    {id: 4, name:"orla versión final", date: "03-02-2024", curso: "2º BACH"},
  ]

  constructor() { }

  getOrlas(){
    return this.orlas
  }
}
