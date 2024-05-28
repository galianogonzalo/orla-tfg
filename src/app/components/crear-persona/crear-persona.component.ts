import { Component, inject } from '@angular/core';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-persona',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: `./crear-persona.component.html`,
  styles: ``
})
export class CrearPersonaComponent {

  crearPersonaForm: FormGroup

  file!: File

  private readonly _storage = inject(Storage)


  constructor(){
    this.crearPersonaForm = new FormGroup([
      /* nombre: new FormControl(), */

    ])
  }
  
  submit(): void {
    this.uploadFile()
    console.log(this.crearPersonaForm.value)
  }
  
  
  

  changeInput(event: Event){
    console.log(this._storage)
    const input = event.target as HTMLInputElement
    if(input.files){
      this.file = input.files[0]     
    }
    
  }

  uploadFile():void {
    
    const storageRef = ref(this._storage, `uploads/${this.file.name}`)
    uploadBytesResumable(storageRef, this.file)
  }
}
