import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  /*  temporal, los alumnos deben traerse desde BBDD  */
  private alumnos = [
    {id: 1, nombre:"Alumno 1", apellidos:"Apellido 1", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 2, nombre:"Alumno 2", apellidos:"Apellido 2", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 3, nombre:"Alumno 3", apellidos:"Apellido 3", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 4, nombre:"Alumno 4", apellidos:"Apellido 4", imagen:"../../assets/img/foto-id.jpg", curso:"2"},
    {id: 5, nombre:"Alumno 5", apellidos:"Apellido 5", imagen:"../../assets/img/foto-id.jpg", curso:"2"},
    {id: 6, nombre:"Alumno 6", apellidos:"Apellido 6", imagen:"../../assets/img/foto-id.jpg", curso:"2"},
    {id: 7, nombre:"Alumno 7", apellidos:"Apellido 7", imagen:"../../assets/img/foto-id.jpg", curso:"3"},
    {id: 8, nombre:"Alumno 8", apellidos:"Apellido 8", imagen:"../../assets/img/foto-id.jpg", curso:"3"},
    {id: 9, nombre:"Alumno 9", apellidos:"Apellido 9", imagen:"../../assets/img/foto-id.jpg", curso:"4"},
    {id: 10, nombre:"Alumno 10", apellidos:"Apellido 10", imagen:"../../assets/img/foto-id.jpg", curso:"5"},
    {id: 11, nombre:"Alumno 11", apellidos:"Apellido 11", imagen:"../../assets/img/foto-id.jpg", curso:"5"},
    {id: 12, nombre:"Alumno 12", apellidos:"Apellido 12", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 13, nombre:"Alumno 13", apellidos:"Apellido 13", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 14, nombre:"Alumno 14", apellidos:"Apellido 14", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 15, nombre:"Alumno 15", apellidos:"Apellido 15", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 16, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 16, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 16, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 16, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 16, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 16, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 16, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 16, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 16, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
    {id: 16, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:"1"},
  ]

  private profesores = [
    {id: 1, nombre:"Profesor 1", apellidos:"Apellido 1", imagen:"../../assets/img/foto-id.jpg"},
    {id: 2, nombre:"Profesor 2", apellidos:"Apellido 2", imagen:"../../assets/img/foto-id.jpg"},
    {id: 3, nombre:"Profesor 3", apellidos:"Apellido 3", imagen:"../../assets/img/foto-id.jpg"},
    {id: 4, nombre:"Profesor 4", apellidos:"Apellido 4", imagen:"../../assets/img/foto-id.jpg"},
    {id: 5, nombre:"Profesor 5", apellidos:"Apellido 5", imagen:"../../assets/img/foto-id.jpg"}
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

  getProfesores(){
    return this.profesores
  }

  getCursos() {
    return [...new Set(this.alumnos.map(a => a.curso))];
  }
}
