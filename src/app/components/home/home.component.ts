import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styles: `#formRegistro{
    margin-bottom: 20px;
  }`
})
export class HomeComponent {
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

  submit(): void {
    console.log(this.formRegistro.value);
  }

}
