import { Component, Input, OnInit, inject } from '@angular/core';
import { ListaCursosService } from '../../services/lista-cursos.service';
import { CursoAlumnoService } from '../../services/curso-alumno.service';
import { DbService } from '../../services/db.service';
import { TestDBService } from '../../services/test-db.service';

declare var bootstrap: any;

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

  /* private cursosBD = inject(ListaCursosService) */
  private cursoAlumnoSV = inject(CursoAlumnoService)

  private testDb = inject(TestDBService)

  private cursoAEliminar: number | null = null

  ngOnInit(): void {
    this.getCursos()
    console.log(this.getCursos())
  }

  /* getCursos(){
    return this.cursosBD.getCursos()
  } */

  /* selectCurso(cursoId:any){
    this.cursoAlumnoSV.selectCurso(cursoId)
  } */

  getCursos(){
    return this.testDb.getCursosByUsuarioId()
  }

  selectCurso(cursoId:any){
    this.cursoAlumnoSV.selectCurso(cursoId)
  }



  openConfirmModal(cursoId: number): void {
    this.cursoAEliminar = cursoId;
    const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    modal.show();
  }


  confirmarBorrado(): void {
    if (this.cursoAEliminar !== null) {
      this.borrarCurso(this.cursoAEliminar);
      this.cursoAEliminar = null;
    }
    const modalElement = document.getElementById('confirmDeleteModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }


  borrarCurso(id:number){

  }
}
