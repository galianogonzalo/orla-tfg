import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-crear-curso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-curso.component.html',
  styles: ``
})
export class CrearCursoComponent {
  
  private db = inject(DbService)

  crearCursoForm: FormGroup

  constructor() {
    this.crearCursoForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
    });
  }

  crearCurso() {
    const curso = this.crearCursoForm.value
    if(curso){
      this.db.crearCurso(curso)
    }
  }
}
