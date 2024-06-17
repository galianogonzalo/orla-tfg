import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TestDBService } from '../../services/test-db.service';

@Component({
  selector: 'app-crear-curso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-curso.component.html',
  styles: ``
})
export class CrearCursoComponent {
  
  crearCursoForm: FormGroup;

  constructor(private testDb: TestDBService) {
    this.crearCursoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
    })
  }

  crearCurso() { 
    if (this.crearCursoForm.valid) {
      const curso = this.crearCursoForm.value.nombre
      this.testDb.crearCurso(curso)
    } else {
      alert('Formulario no válido. Por favor, revisa los campos.')
    }
  }

}
