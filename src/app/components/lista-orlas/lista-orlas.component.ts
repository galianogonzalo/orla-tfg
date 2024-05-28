import { Component, inject } from '@angular/core';
import { OrlaActionsComponent } from '../orla-actions/orla-actions.component';
import { ListaOrlasService } from '../../services/lista-orlas.service';

@Component({
  selector: 'app-lista-orlas',
  standalone: true,
  imports: [OrlaActionsComponent],
  template: `
    <div class="row">
      <h2>Mis orlas</h2>
    </div>
    <div class="row col-lg-10">
      <table class="table table-sm table-striped align-middle">
        <thead>
          <tr>
            <th scope="col" width="15%" class="text-end">Nombre</th>
            <th scope="col" width="15%" class="text-end">Fecha</th>
            <th scope="col" width="25%" class="text-end">Curso</th>
            <th scope="col" width="10%" class="text-end">Acciones</th>
          </tr>
        </thead>
        <tbody>
        @for (o of getOrlas(); track o.id) {
          <tr>
            <!-- NOMBRE DE LA ORLA -->
            <td scope="col" class="text-start">
              {{o.name}}
            </td>
            <!-- FECHA DE LA ORLA -->
            <td scope="col" class="text-end">
              {{o.date}}
            </td>
            <!-- CURSO DE LA ORLA -->
            <td scope="col" class="text-end">
              {{o.curso}}
            </td>
            <!-- COMPONENTE CON 3 BOTONES -->
            <td scope="col" class="text-end">
              <app-orla-actions></app-orla-actions>
            </td>
          </tr>
        }
        </tbody>
      </table>
    </div>
  `,
  styles: ``
})
export class ListaOrlasComponent {

  private orlaBD = inject(ListaOrlasService)

  getOrlas(){
    return this.orlaBD.getOrlas()
  }


}
