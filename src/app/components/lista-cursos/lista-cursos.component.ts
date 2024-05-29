import { Component, inject } from '@angular/core';
import { ListaCursosService } from '../../services/lista-cursos.service';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [],
  templateUrl: './lista-cursos.component.html',
  styles: ``
})
export class ListaCursosComponent {

  private cursosBD = inject(ListaCursosService)

  getCursos(){
    return this.cursosBD.getCursos()
  }

  getAlumnosByCurso(cursoId:any){

  }
}
