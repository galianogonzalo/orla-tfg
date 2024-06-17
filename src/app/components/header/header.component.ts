import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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

  constructor(private router: Router){}

  /* comprobar si hay un usuario logeado */
  /* si no hay, se muestra el botón de acceso*/
  isLogedIn():boolean{   
    return this.testDb.getIsLogedIn()
  }

  cerrarSesion(){
    this.testDb.setIsLogedIn(false)
    this.testDb.setUsuarioLogeadoId(0)
    this.router.navigate(['/inicio'])
  }
}
