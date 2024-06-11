import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styles: `
    .row{
      background-color: #5c1547;
    }
  `
})
export class HeaderComponent {

}
