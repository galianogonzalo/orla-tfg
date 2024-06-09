import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private usuarios:Array<any> = []
  url:string = 'http://localhost:8080/api'

  constructor(private http:HttpClient) {
    this.http.get(this.url+'/usuarios/listar').subscribe((data:any)=>{this.usuarios = data as Array<any>})
   }

  /* --- USUARIOS --- */
  getUsuarios(){
    return this.usuarios
  }
  listar(): Observable<any> {
    return this.http.get<any[]>(this.url+'/usuarios/listar');
  }
  get(id:number){
    return this.http.get(this.url+'/usuarios/buscar/'+id)
  }
  crearUsuario(usuario:any){
    return this.http.post (this.url+'/usuarios/crear',usuario)
  }
  
  editarUsuario(id:number,usuario:any){
    return this.http.put(this.url+'/usuarios/actualizar/'+id,usuario)
  }

  borrarUsuario(id:number){
    return this.http.delete(this.url+'/usuarios/eliminar/'+id)
  }

  login(username: string, password: string) {
    const urlWithParams = `${this.url}/usuarios/login?username=${username}&password=${password}`;
    return this.http.post(urlWithParams, {});
  }
  /* --- USUARIOS FIN --- */


  /* --- CURSOS ---  */
  getCursos(){
    return this.http.get(this.url+'/cursos/listar')
  }

  crearCurso(curso:any){
    return this.http.post(this.url+'/cursos/crear',curso)
  }

  borrarCurso(){}

  editarCurso(){}

  /* --- CURSOS FIN --- */


  /* --- ALUMNOS Y PROFESORES --- */
  getAlumnosByCurso(){}

  getProfesores(){
    return this.http.get(this.url+'/persona/listarProfesores')
  }

  borrarPersona(id:number){
    return this.http.delete(this.url+'/persona/eliminar/'+id)
  }

  crearPersona(persona:any){
    return this.http.post(this.url+'/persona/crear',persona)
  }
  /* --- ALUMNOS Y PROFESORES FIN --- */


  /* --- ORLA --- */
  getOrlas(){
    return this.http.get(this.url+'/orla/listar')
  }

  editarOrla(){}

  borrarOrla(id:number){
    return this.http.delete(this.url+'/orla/eliminar/'+id)
  }

  descargarOrla(){}
  /* --- ORLA FIN --- */


}
