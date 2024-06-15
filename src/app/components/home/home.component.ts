import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  /* private db = inject(DbService) */

  formRegistro: FormGroup;
  isFormFilled: boolean = false;

  constructor() {
    this.formRegistro = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      politica: new FormControl('', [Validators.requiredTrue])
    });

    this.formRegistro.valueChanges.subscribe(() => {
      this.isFormFilled = this.formRegistro.valid;
    });
  }

  crearUsuario(): void {
    /* const usuario = this.formRegistro.value
    if(usuario){
      this.db.crearUsuario(usuario)
    } */
  }

}
