import { Component, inject, NgModule } from '@angular/core';
import { OrlaActionsComponent } from '../orla-actions/orla-actions.component';
import { ListaOrlasService } from '../../services/lista-orlas.service';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-lista-orlas',
  standalone: true,
  imports: [OrlaActionsComponent],
  templateUrl: './lista-orlas.component.html',
  styles: ``
})
export class ListaOrlasComponent {
  /* private db = inject(DbService) */

  private orlaBD = inject(ListaOrlasService)

  getOrlas(){
    return this.orlaBD.getOrlas()
  }

  /* DESCOMENTAR CUANDO SE CONECTE CON EL BACK */
  /* getOrlas(){
    return this.db.getOrlas()
  } */

}
