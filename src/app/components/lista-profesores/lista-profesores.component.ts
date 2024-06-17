import { Component, inject } from '@angular/core';
import { ListaAlumnosService } from '../../services/lista-alumnos.service';
import { TestDBService } from '../../services/test-db.service';

@Component({
  selector: 'app-lista-profesores',
  standalone: true,
  imports: [],
  templateUrl: './lista-profesores.component.html',
  styles: `
    #profesores{
      height: 250px;
      max-height: 250px;
      overflow-y: auto; 
   }
  `
})
export class ListaProfesoresComponent {
  private alumnosDB = inject(ListaAlumnosService)
  private testDb = inject(TestDBService)

  /* getProfesores(){
    return this.alumnosDB.getProfesores()
  } */

  getProfesores(){
    return this.testDb.getProfesoresByUsuarioId()
  }
}
