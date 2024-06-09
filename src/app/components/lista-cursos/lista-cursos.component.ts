import { Component, OnInit, inject } from '@angular/core';
import { ListaCursosService } from '../../services/lista-cursos.service';
import { CursoAlumnoService } from '../../services/curso-alumno.service';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [],
  templateUrl: './lista-cursos.component.html',
  styles: `
    #cursos-list{
      height: 250px;
      max-height: 250px;
      overflow-y: auto; 
    }

    #botonBorrar{
      position: absolute;
      right: 0;
    }
  `
})
export class ListaCursosComponent implements OnInit{

  /* private db = inject(DbService) */

  private cursosBD = inject(ListaCursosService)
  private cursoAlumnoSV = inject(CursoAlumnoService)


  ngOnInit(): void {
    this.getCursos()
  }

  getCursos(){
    return this.cursosBD.getCursos()
  }

  selectCurso(cursoId:any){
    this.cursoAlumnoSV.selectCurso(cursoId)
  }

  borrarCurso(id:number){

  }
}
