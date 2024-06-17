import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TestDBService } from '../../services/test-db.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  private testDb = inject(TestDBService)

  /* comprobar si hay un usuario logeado */
  /* si no hay, se muestra el botón de acceso*/
  isLogedIn():boolean{   
    return this.testDb.getIsLogedIn()
  }
}
