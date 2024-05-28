import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  template: `
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light align-content-end">
          <div class="container">
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link" href="#">PRECIO</a><!-- Te mueve hasta la lista de precios/servicios -->
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">CONTACTO</a><!-- Te mueve hasta el formulario de contacto -->
                      </li>
                      <li class="nav-item">
                          <a routerLink="mis_orlas" class="nav-link" href="mis_orlas">MIS ORLAS</a><!-- PRIVADO -->
                      </li>
                      <li class="nav-item">
                          <a routerLink="crear_orla" class="nav-link" href="crear_orla">CREAR ORLA</a><!-- PRIVADO -->
                      </li>
                      <li class="nav-item">
                          <a routerLink="crear_persona" class="nav-link" href="crear_persona">CREAR PERSONAS</a><!-- PRIVADO -->
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">ACCESO</a> <!-- Te mueve hasta el formulario de log in | desaparece del nav.bar al logearse -->
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </div>
  `,
  styles: ``
})
export class NavMenuComponent {

}
