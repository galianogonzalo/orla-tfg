import { Component } from '@angular/core';
import { ListaCursosComponent } from '../lista-cursos/lista-cursos.component';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';

import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { ListaProfesoresComponent } from '../lista-profesores/lista-profesores.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [ListaCursosComponent, CrearCursoComponent, ListaAlumnosComponent, ListaProfesoresComponent],
  templateUrl: './cursos.component.html',
  styles: `
    #cursos{
      min-height: 70vh;
    }
  `
})
export class CursosComponent {

}
