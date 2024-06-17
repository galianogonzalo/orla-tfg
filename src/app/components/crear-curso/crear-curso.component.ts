import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { TestDBService } from '../../services/test-db.service';

@Component({
  selector: 'app-crear-curso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-curso.component.html',
  styles: ``
})
export class CrearCursoComponent {
  
  /* private db = inject(DbService) */
  private testDb = inject(TestDBService)

  crearCursoForm: FormGroup

  constructor() {
    this.crearCursoForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
    });
  }

  crearCurso() { 
    if(this.crearCursoForm.valid){
      const curso = this.crearCursoForm.value
      this.testDb.crearCurso(curso)
    } else {
      alert('Formulario no válido. Por favor, revisa los campos.');
    }
  }



  
}
