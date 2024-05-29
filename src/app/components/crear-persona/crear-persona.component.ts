import { Component, OnInit, inject, signal } from '@angular/core';
import { Storage, ref, uploadBytesResumable, list, getDownloadURL } from '@angular/fire/storage';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-persona',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: `./crear-persona.component.html`,
  styles: `
    
  `
})
export class CrearPersonaComponent{

  private readonly _storage = inject(Storage)
  
  crearPersonaForm!: FormGroup

  file!: File

  constructor(){
    this.crearPersonaForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellidos: new FormControl('',[Validators.required]),
      rol: new FormControl('',[Validators.required]),
      curso: new FormControl('',[Validators.required]),
      foto: new FormControl('',[Validators.required]),
    })
  }
  
  submit(): void {
    this.uploadFile()
    /* console.log(this.crearPersonaForm.value) */
  }
  
  /* Capturamos la imagen subida en el input del HTML */
  capturarImagen(event: Event){
    console.log(this._storage)
    const input = event.target as HTMLInputElement
    if(input.files){
      this.file = input.files[0]     
    }   
  }

  /* Metodo para subir la imagen a Firebase */
  uploadFile():void {   
    const storageRef = ref(this._storage, `uploads/${this.file.name}`)
    uploadBytesResumable(storageRef, this.file)
  }

  









  /* Capurar URL de la imagen que se acaba de subir a Firebase para poder guardar el dato en BBDD */
  /* getUrlImgFirebase(): void {
    const reference = ref(this._storage,'uploads')
    const images = list(reference)
  } */


  /* async uploadFile():Promise<void> {   
    const storageRef = ref(this._storage, `uploads/${this.file.name}`)
    uploadBytesResumable(storageRef, this.file)
    console.log(storageRef)
    const imageURL = await getDownloadURL(storageRef)
    console.log(imageURL)
  } */

}
