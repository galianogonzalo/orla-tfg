import { Component, inject } from '@angular/core';
import { ListaAlumnosService } from '../../services/lista-alumnos.service';

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

  getProfesores(){
    return this.alumnosDB.getProfesores()
  }
}
