import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  /* comprobar si hay un usuario logeado */
  /* si no hay, se muestra el botón de acceso*/
  isLoged():boolean{   
    return false
  }
}
