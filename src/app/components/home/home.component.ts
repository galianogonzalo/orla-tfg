import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { TestDBService } from '../../services/test-db.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  private testDb = inject(TestDBService)

  formRegistro: FormGroup
  isFormFilled: boolean = false

  constructor(private router: Router) {
    this.formRegistro = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      politica: new FormControl('', [Validators.requiredTrue])
    });

    this.formRegistro.valueChanges.subscribe(() => {
      this.isFormFilled = this.formRegistro.valid
    })
  }

  crearUsuario(): void {
    if(this.formRegistro.valid){
      const {email, password} = this.formRegistro.value
      this.testDb.crearUsuario(email, password)
      if(this.comprobarCredenciales(email, password)){
        this.testDb.setIsLogedIn(true)
        this.router.navigate(['/mis_cursos'])
      }
    } else {
      alert('Formulario no válido. Por favor, revisa los campos.');
    }
  }

  comprobarCredenciales(email: string, password: string): boolean{
    return this.testDb.comprobarCredenciales(email, password)
  }

}
