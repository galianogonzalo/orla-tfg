import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { mergeMap } from 'rxjs';


@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.component.html',
  styles: `
    #login{
      height: 61vh;
      /* margin-bottom: 20px; */
    }
  `
})
export class LoginComponentComponent implements OnInit {
  /* private db = inject(DbService) */

  formLogin!: FormGroup;

  /* constructor() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  } */

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    
  }
  login(): void {
    /* console.log(this.formLogin.value);
    const { usuario, clave } = this.formLogin.value

    this.db.login( usuario, clave) */

  }

}
