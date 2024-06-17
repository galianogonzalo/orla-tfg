import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestDBService {

  constructor() {
    this.usuarioLogueadoId = 1
   }

  /* ARRAYS */
  /* ARRAY USUARIOS */
  private usuarios = [
    { id: 1, email: "admin@gmail.com", password: "123456" }
  ];
  /* ARRAY CURSOS */
  private cursos = [
    { id: 1, uid: 1, nombre: "2º DAW 23/24" },
    { id: 2, uid: 1, nombre: "2º DAW 2022-2023" },
    { id: 3, uid: 2, nombre: "2º DAW 2022-2023" }
  ];
  
  /* ALUMNOS */
  private alumnos = []

  /* PROFESORES */
  private profesores = [
    {id: 1, nombre:"Profesor 1", apellidos:"Apellido 1", imagen:"../../assets/img/profesor.PNG", rol: "profesor", uid: 1},
    {id: 2, nombre:"Profesor 2", apellidos:"Apellido 2", imagen:"../../assets/img/profesor.PNG", rol: "profesor", uid: 1},
    {id: 3, nombre:"Profesor 3", apellidos:"Apellido 3", imagen:"../../assets/img/profesor.PNG", rol: "profesor", uid: 1},
    {id: 4, nombre:"Profesor 4", apellidos:"Apellido 4", imagen:"../../assets/img/profesor.PNG", rol: "profesor", uid: 1},
    {id: 5, nombre:"Profesor 5", apellidos:"Apellido 5", imagen:"../../assets/img/profesor.PNG", rol: "profesor", uid: 1},
    {id: 6, nombre:"Profesor 6", apellidos:"Apellido 6", imagen:"../../assets/img/profesor.PNG", rol: "profesor", uid: 2},
    {id: 7, nombre:"Profesor 7", apellidos:"Apellido 7", imagen:"../../assets/img/profesor.PNG", rol: "profesor", uid: 2}
  ]

  /* ORLAS */
  private orlas = []

  /* FIN ARRAYS */
  
  
  /* LÓGICA */
  /* USUARIOS */
  private usuarioLogueadoId: number | null = null

  private isLogedIn = true

  crearUsuario(email: string, password: string): void {
    let lastId = 0

    if (this.usuarios.length > 0) {
      lastId = this.usuarios[this.usuarios.length - 1].id
    }

    const nuevoUsuario = {
      id: lastId + 1,
      email: email,
      password: password
    };

    this.usuarios.push(nuevoUsuario);
  }

  comprobarCredenciales(email: string, password: string): boolean {
    for (let usuario of this.usuarios) {
      if (usuario.email === email && usuario.password === password) {
        this.usuarioLogueadoId = usuario.id;  // Guarda el id del usuario logueado
        return true
      }
    }
    return false;
  }

  setUsuarioLogeadoId(id: number): void{
    this.usuarioLogueadoId = id
  }

  getUsuarioLogueadoId(): number | null {
    return this.usuarioLogueadoId;
  }

  setIsLogedIn(valor: boolean){
    this.isLogedIn = valor
  }

  getIsLogedIn(): boolean{
    return this.isLogedIn
  }

  /* CURSOS */
  crearCurso(nombre: string): void {
    if (this.usuarioLogueadoId !== null) {
      let lastId = 0;
      if (this.cursos.length > 0) {
        lastId = this.cursos[this.cursos.length - 1].id
      }

      const nuevoCurso = {
        id: lastId + 1,
        uid: this.usuarioLogueadoId,
        nombre: nombre
      }

      this.cursos.push(nuevoCurso)
    } else {
      console.error('No hay usuario logueado. No se puede crear el curso.')
    }
  }

  borrarCurso(){
    
  }

  getCursosByUsuarioId(): any[]{
    let uid = this.usuarioLogueadoId
    return this.cursos.filter(curso => curso.uid === uid)
  } 

  

  /* ALUMNOS */
  crearAlumno(){

  }

  borrarAlumno(){

  }

  /* PROFESORES */
  crearProfesor(){

  }

  getProfesoresByUsuarioId(): any[]{
    let uid = this.usuarioLogueadoId
    return this.profesores.filter(profesor => profesor.uid === uid)
  }

  borrarProfesor(): void{

  }

}
