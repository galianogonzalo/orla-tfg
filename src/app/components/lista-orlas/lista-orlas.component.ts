import { Component, inject, NgModule } from '@angular/core';
import { OrlaActionsComponent } from '../orla-actions/orla-actions.component';
import { ListaOrlasService } from '../../services/lista-orlas.service';

@Component({
  selector: 'app-lista-orlas',
  standalone: true,
  imports: [OrlaActionsComponent],
  templateUrl: './lista-orlas.component.html',
  styles: `
    #lista-orlas{
      height: 250px;
      max-height: 250px;
      overflow-y: auto; 
   }
  `
})
export class ListaOrlasComponent {
  /* private db = inject(DbService) */

  private orlaBD = inject(ListaOrlasService)

  getOrlas(){
    return this.orlaBD.getOrlas()
  }

}
