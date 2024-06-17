import { Component, OnInit, inject } from '@angular/core';
import { ListaCursosComponent } from '../lista-cursos/lista-cursos.component';
import { TestDBService } from '../../services/test-db.service';

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
  private testDb = inject(TestDBService)

  alumnos:any[] = []
  selectedCursoId: number | null = null

  ngOnInit(): void {
      this.testDb.selectedCursoId$.subscribe(id => {
        this.selectedCursoId = id
        
        if(id !== null){
          this.getAlumnosByCurso(id)
          console.log(this.getAlumnosByCurso(id))
        }
      })
  }

  getAlumnosByCurso(cursoId:any){
    return this.testDb.getAlumnosByCurso(cursoId)
  }

  
}
