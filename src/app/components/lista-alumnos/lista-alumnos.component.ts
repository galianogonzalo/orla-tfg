import { Component, inject } from '@angular/core';
import { ListaAlumnosService } from '../../services/lista-alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './lista-alumnos.component.html',
  styles: ``
})
export class ListaAlumnosComponent {

  private alumnosDB = inject(ListaAlumnosService)

  getAlumnos(){
    return this.alumnosDB.getAlumnos()
  }

  getAlumnosByCurso(cursoId:any){
    return this.alumnosDB.getAlumnosByCurso(cursoId)
  }

  
}
