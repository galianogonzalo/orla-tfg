import { Component, inject } from '@angular/core';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-persona',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Formulario creación de persona para orla</h2>
    <div>
      <input type="file" accept="images/*" (change)="changeInput($event)"/>
    </div>
  `,
  styles: ``
})
export class CrearPersonaComponent {
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
