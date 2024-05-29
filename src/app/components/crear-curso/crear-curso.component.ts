import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-curso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-curso.component.html',
  styles: ``
})
export class CrearCursoComponent {
  crearCursoForm: FormGroup

  constructor() {
    this.crearCursoForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
    });
  }

  submit(): void {
    console.log(this.crearCursoForm.value);
  }
}
