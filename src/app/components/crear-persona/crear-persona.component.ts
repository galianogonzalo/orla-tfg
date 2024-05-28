import { Component, inject } from '@angular/core';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-persona',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Formulario creación de persona para orla</h2>
    <div>
      <input type="file" accept="images/*" (change)="changeInput($event)"/>
    </div>

    <h2>Añade personas a tus orlas</h2>
    <div class="row row justify-content-center">      
      <div class="form-container col-12 col-md-8 col-lg-4">
        <form action="">
          
        </form>
      </div>
    </div>
  `,
  styles: ``
})
export class CrearPersonaComponent {
  
  /* Declarar formulario */
  myForm = new FormGroup({

  })
  
  
  
  file!: File

  private readonly _storage = inject(Storage)

  changeInput(event: Event){
    console.log(this._storage)
    const input = event.target as HTMLInputElement
    if(input.files){
      this.file = input.files[0]
      this.uploadFile()
    }
    
  }

  uploadFile():void {
    
    const storageRef = ref(this._storage, `uploads/${this.file.name}`)
    uploadBytesResumable(storageRef, this.file)
  }
}
