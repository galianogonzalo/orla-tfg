import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaCursosService {
  
  /* temporal, los cursos deben traerse desde BBDD */
  private cursos = [
    {id: 1, name: "2º DAW 23/24"},
    {id: 2, name: "2º DAW 2022-2023"},
    {id: 3, name: "2º BACH 23-24"},
    {id: 4, name: "4º ESO 23/24"},
    {id: 5, name: "2º bachillerato 20/21"},
    {id: 6, name: "4º ESO 2022-2023"}
  ]

  constructor() { }

  getCursos(){
    return this.cursos
  }
}
