import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestDBService {

  constructor() {
    /* this.usuarioLogueadoId = 1 */
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

  private cursosSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.cursos);
  
  /* ALUMNOS */
  private alumnos = [
    {id: 1, nombre:"Alumno 1", apellidos:"Apellido 1", imagen:"../../assets/img/foto-id.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 2, nombre:"Alumno 2", apellidos:"Apellido 2", imagen:"../../assets/img/foto-id.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 3, nombre:"Alumno 3", apellidos:"Apellido 3", imagen:"../../assets/img/Alumna2.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 1, nombre:"Alumno 4", apellidos:"Apellido 4", imagen:"../../assets/img/foto-id.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 2, nombre:"Alumno 5", apellidos:"Apellido 5", imagen:"../../assets/img/foto-id.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 3, nombre:"Alumno 6", apellidos:"Apellido 6", imagen:"../../assets/img/Alumna2.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 1, nombre:"Alumno 7", apellidos:"Apellido 7", imagen:"../../assets/img/foto-id.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 2, nombre:"Alumno 8", apellidos:"Apellido 8", imagen:"../../assets/img/foto-id.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 3, nombre:"Alumno 9", apellidos:"Apellido 9", imagen:"../../assets/img/Alumna2.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 1, nombre:"Alumno 10", apellidos:"Apellido 10", imagen:"../../assets/img/Alumna2.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 2, nombre:"Alumno 11", apellidos:"Apellido 11", imagen:"../../assets/img/foto-id.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 3, nombre:"Alumno 12", apellidos:"Apellido 12", imagen:"../../assets/img/Alumna2.jpg", curso:1, rol: "alumno", uid: 1},
    {id: 2, nombre:"Alumno 13", apellidos:"Apellido 13", imagen:"../../assets/img/foto-id.jpg", curso:2, rol: "alumno", uid: 1},
    {id: 3, nombre:"Alumno 14", apellidos:"Apellido 14", imagen:"../../assets/img/Alumna2.jpg", curso:2, rol: "alumno", uid: 1},
    {id: 1, nombre:"Alumno 15", apellidos:"Apellido 15", imagen:"../../assets/img/Alumna2.jpg", curso:2, rol: "alumno", uid: 1},
    {id: 2, nombre:"Alumno 16", apellidos:"Apellido 16", imagen:"../../assets/img/foto-id.jpg", curso:2, rol: "alumno", uid: 1},
    {id: 3, nombre:"Alumno 17", apellidos:"Apellido 17", imagen:"../../assets/img/Alumna2.jpg", curso:2, rol: "alumno", uid: 1},
    {id: 2, nombre:"Alumno 18", apellidos:"Apellido 18", imagen:"../../assets/img/foto-id.jpg", curso:3, rol: "alumno", uid: 1},
    {id: 3, nombre:"Alumno 19", apellidos:"Apellido 19", imagen:"../../assets/img/Alumna2.jpg", curso:3, rol: "alumno", uid: 1},
    {id: 1, nombre:"Alumno 20", apellidos:"Apellido 20", imagen:"../../assets/img/Alumna2.jpg", curso:3, rol: "alumno", uid: 1},
    {id: 2, nombre:"Alumno 21", apellidos:"Apellido 21", imagen:"../../assets/img/foto-id.jpg", curso:3, rol: "alumno", uid: 1},
    {id: 3, nombre:"Alumno 22", apellidos:"Apellido 22", imagen:"../../assets/img/Alumna2.jpg", curso:3, rol: "alumno", uid: 1},
  ]

  /* PROFESORES */
  private profesores = [
    {id: 1, nombre:"Profesor 1", apellidos:"Apellido 1", imagen:"../../assets/img/Profesor1.jpg", rol: "profesor", uid: 1},
    {id: 2, nombre:"Profesor 2", apellidos:"Apellido 2", imagen:"../../assets/img/Profesor1.jpg", rol: "profesor", uid: 1},
    {id: 3, nombre:"Profesor 3", apellidos:"Apellido 3", imagen:"../../assets/img/Profesor1.jpg", rol: "profesor", uid: 1},
    {id: 4, nombre:"Profesor 4", apellidos:"Apellido 4", imagen:"../../assets/img/Profesor1.jpg", rol: "profesor", uid: 1},
    {id: 5, nombre:"Profesor 5", apellidos:"Apellido 5", imagen:"../../assets/img/Profesor1.jpg", rol: "profesor", uid: 1},
    {id: 6, nombre:"Profesor 6", apellidos:"Apellido 6", imagen:"../../assets/img/Profesor1.jpg", rol: "profesor", uid: 2},
    {id: 7, nombre:"Profesor 7", apellidos:"Apellido 7", imagen:"../../assets/img/Profesor1.jpg", rol: "profesor", uid: 2}
  ]

  /* ORLAS */
  private orlas = [
    {id: 1, uid: 1, fecha: "17-06-2024", curso: 1, archivo: ""}
  ]

  /* FIN ARRAYS */
  
  
  /* LÓGICA */
  /* USUARIOS */
  private usuarioLogueadoId: number | null = null

  private isLogedIn = false

  crearUsuario(email: string, password: string): void {
    let lastId = 0

    if (this.usuarios.length > 0) {
      lastId = this.usuarios[this.usuarios.length - 1].id
    }

    const nuevoUsuario = {
      id: lastId++,
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
  private selectedCursoIdSource = new BehaviorSubject<number | null>(null)
  selectedCursoId$ = this.selectedCursoIdSource.asObservable()

  crearCurso(nombre: string): void {
    if (this.usuarioLogueadoId !== null) {
      let lastId = 0;
      if (this.cursos.length > 0) {
        lastId = this.cursos[this.cursos.length - 1].id;
      }

      const nuevoCurso = {
        id: lastId + 1,
        uid: this.usuarioLogueadoId,
        nombre: nombre
      };

      this.cursos.push(nuevoCurso);
      this.cursosSubject.next(this.cursos);
    } else {
      console.error('No hay usuario logueado. No se puede crear el curso.');
    }
  }

  getNombreCursoById(id: number): string {
    const cursoEncontrado = this.cursos.find(curso => curso.id === id)
    if (cursoEncontrado) {
      return cursoEncontrado.nombre
    } else {
      return ''
    }
  }


  borrarCurso(id: number): void {
    this.cursos = this.cursos.filter(curso => curso.id !== id);
    this.cursosSubject.next(this.cursos);
  }

  getCursosByUsuarioId(): any[]{
    let uid = this.usuarioLogueadoId
    return this.cursos.filter(curso => curso.uid === uid)
  } 

  seleccionarCurso(id: number){
    this.selectedCursoIdSource.next(id)
  }

  /* ALUMNOS */
  crearAlumno(alumnoData: any){
    if (this.usuarioLogueadoId !== null) {
      let lastId = 0;
      if (this.alumnos.length > 0) {
        lastId = this.alumnos[this.alumnos.length - 1].id
      }
      const nuevoAlumno = {
        id: lastId++,
        nombre: alumnoData.nombre,
        apellidos: alumnoData.apellidos,
        imagen: alumnoData.imagen,
        curso: alumnoData.curso,
        rol: "alumno",
        uid: this.usuarioLogueadoId
      }
      this.alumnos.push(nuevoAlumno)
      console.log(nuevoAlumno)
    } else {
      console.error('No hay usuario logueado. No se puede crear el alumno.')
    }
  }

  getAlumnosByCurso(id: number){
    let uid = this.usuarioLogueadoId
    const cursoId = id
    const alumnosFiltrados = this.alumnos.filter(alumno => {
      return alumno.curso === cursoId && alumno.uid === uid
    })

    return alumnosFiltrados
  }

  borrarAlumno(){

  }

  /* PROFESORES */
  crearProfesor(profesorData: any){
    if (this.usuarioLogueadoId !== null) {
      let lastId = 0;
      if (this.profesores.length > 0) {
        lastId = this.profesores[this.profesores.length - 1].id
      }
      const nuevoProfesor = {
        id: lastId++,
        nombre: profesorData.nombre,
        apellidos: profesorData.apellidos,
        imagen: profesorData.imagen,
        rol: "profesor",
        uid: this.usuarioLogueadoId
      }
      this.profesores.push(nuevoProfesor)
    } else {
      console.error('No hay usuario logueado. No se puede crear el profesor.')
    }
  }

  getProfesoresByUsuarioId(): any[]{
    let uid = this.usuarioLogueadoId
    return this.profesores.filter(profesor => profesor.uid === uid)
  }

  borrarProfesor(): void{

  }

  crearOrla(orlaData: any){
    if (this.usuarioLogueadoId !== null) {
      let lastId = 0;
      if (this.orlas.length > 0) {
        lastId = this.orlas[this.orlas.length - 1].id
      }
      const nuevaOrla = {
        id: lastId + 1,
        uid: this.usuarioLogueadoId,
        fecha: orlaData.fecha,
        curso: orlaData.curso,
        archivo: orlaData.archivo       
      }
      this.orlas.push(nuevaOrla)
    } else {
      console.error('No hay usuario logueado. No se puede crear la orla.')
    }
  }

  getOrlasByUsuarioId(){
    let uid = this.usuarioLogueadoId
    return this.orlas.filter(orla => orla.uid === uid)
  }

}
