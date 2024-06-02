import { Component, OnInit, inject } from '@angular/core';
import { ListaAlumnosService } from '../../services/lista-alumnos.service';
import { ListaCursosComponent } from '../lista-cursos/lista-cursos.component';
import { CursoAlumnoService } from '../../services/curso-alumno.service';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [ListaCursosComponent],
  templateUrl: './lista-alumnos.component.html',
  styles: `
   #lista-alumnos{
    height: 250px;
    max-height: 250px;
    overflow-y: auto; 
   }
  `
})
export class ListaAlumnosComponent implements OnInit {

  private db = inject(DbService)
  
  private alumnosDB = inject(ListaAlumnosService)
  private cursoAlumnoSV = inject(CursoAlumnoService)


  alumnos:any[] = []
  selectedCursoId: number | null = null

  ngOnInit(): void {
      this.cursoAlumnoSV.selectedCursoId$.subscribe(id => {
        this.selectedCursoId = id
        if(id !== null){
          this.getAlumnosByCurso(id)
        }
      })
  }

  getAlumnos(){
    return this.alumnosDB.getAlumnos()
  }

  getAlumnosByCurso(cursoId:any){
    return this.alumnosDB.getAlumnosByCurso(cursoId)
  }

  
}
