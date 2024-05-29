import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  /*  temporal, los alumnos deben traerse desde BBDD  */
  private alumnos = [
    {id: 1, nombre:"Iñaki", apellidos:"Williams", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 2, nombre:"Unai", apellidos:"Simón", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 3, nombre:"Oihan", apellidos:"Sancet", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 4, nombre:"Vinicius", apellidos:"Junior", imagen:"../../assets/img/foto-id.jpg", curso:"2"},
    {id: 5, nombre:"Toni", apellidos:"Kroos", imagen:"../../assets/img/foto-id.jpg", curso:"2"},
    {id: 6, nombre:"Raúl", apellidos:"González", imagen:"../../assets/img/foto-id.jpg", curso:"2"},
    {id: 7, nombre:"Lionel", apellidos:"Messi", imagen:"../../assets/img/foto-id.jpg", curso:"3"},
    {id: 8, nombre:"Xavi", apellidos:"Hernández", imagen:"../../assets/img/foto-id.jpg", curso:"3"},
    {id: 9, nombre:"Álvaro", apellidos:"Morata", imagen:"../../assets/img/foto-id.jpg", curso:"4"},
    {id: 10, nombre:"Cristiano", apellidos:"Ronaldo", imagen:"../../assets/img/foto-id.jpg", curso:"5"},
    {id: 11, nombre:"Karim", apellidos:"Benzema", imagen:"../../assets/img/foto-id.jpg", curso:"5"},

  ]

  constructor() { }

  getAlumnos(){
    return this.alumnos
  }

  getAlumnosByCurso(cursoId:any){
    let alumnosDelCurso:Array<any> = []
    this.alumnos.forEach(a => {
      if (a.curso == cursoId) {
        alumnosDelCurso.push(a)
      }
    })
    return alumnosDelCurso
  }
}
