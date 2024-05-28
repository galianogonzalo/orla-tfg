import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="row bg-info text-light mt-auto py-3">
        <div class="col">
          <img src="assets/img/fotoorla_logo.png" alt="fotoorla logo" width="80%">
        </div>
        <div class="col">
          <h2>SERVICIOS</h2>
          <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
          </ul>
        </div>
        <div class="col">
          <h2>INFO</h2>
          <ul>
            <li>Info 1</li>
            <li>Info 2</li>
            <li>Info 3</li>
          </ul>
        </div>
        <div class="col">
          <h2>SÍGUENOS EN</h2>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X</li>
          </ul>
        </div>
      </div>
  `,
  styles: ``
})
export class FooterComponent {

}
