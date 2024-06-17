import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestDBService } from '../../services/test-db.service';
import { Router, RouterLink, provideRouter } from '@angular/router';



@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-component.component.html',
  styles: ``
  
})
export class LoginComponentComponent implements OnInit {
  /* private db = inject(DbService) */

  private testDb = inject(TestDBService)

  formLogin!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    
  }
  
  /* login(): void {
    const { usuario, clave } = this.formLogin.value
    this.db.login( usuario, clave) 
  } */

  login(){
    if(this.formLogin.valid){
      const {email, password} = this.formLogin.value
      /* this.testDb.crearUsuario(email, password) */
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
