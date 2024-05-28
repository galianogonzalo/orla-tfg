import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="row bg-info">
      <div class="d-flex flex-nowrap bd-highlight align-content-end ">
        <div class="p-2 bd-highlight"><a routerLink="inicio" href="#"><img src="assets/img/fotoorla_logo.png" width="120px"></a>
          </div>
      </div>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

}
