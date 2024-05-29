import { Component } from '@angular/core';
import { ListaCursosComponent } from '../lista-cursos/lista-cursos.component';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';

import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [ListaCursosComponent, CrearCursoComponent, ListaAlumnosComponent],
  templateUrl: './cursos.component.html',
  styles: ``
})
export class CursosComponent {

}
