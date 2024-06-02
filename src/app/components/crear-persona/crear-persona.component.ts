import { Component, OnInit, inject, signal } from '@angular/core';
import { Storage, ref, uploadBytesResumable, list, getDownloadURL } from '@angular/fire/storage';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaCursosService } from '../../services/lista-cursos.service';

@Component({
  selector: 'app-crear-persona',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: `./crear-persona.component.html`,
  styles: `
    
  `
})
export class CrearPersonaComponent implements OnInit{

  /* Traer los cursos de la base de datos (Servicio) */
  private cursosBD = inject(ListaCursosService)

  /* Storage de Firebase */
  private readonly _storage = inject(Storage)
  
  /* Declaración del formulario de creación de persona */
  crearPersonaForm!: FormGroup

  /* Declaración de la variable que va a alojar la imagen que se sube en el formulario */
  file!: File

  /* constructor(){
    this.crearPersonaForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellidos: new FormControl('',[Validators.required]),
      rol: new FormControl('',[Validators.required]),
      curso: new FormControl('',[Validators.required]),
      foto: new FormControl('',[Validators.required]),
    })
  } */

  constructor(){}

  /* Creación del formulario de creación de persona */
  ngOnInit(){
    this.crearPersonaForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellidos: new FormControl('',[Validators.required]),
      rol: new FormControl('',[Validators.required]),
      curso: new FormControl({ value: '', disabled: true },[Validators.required]),
      foto: new FormControl('',[Validators.required]),
    })

    this.crearPersonaForm.get('rol')!.valueChanges.subscribe(value => {
      this.onRolChange(value)
    })
  }


  /* Metodo que controla que no se pueda seleccionar curso en el formulario sin so se ha elegido antes "alumno" */
  onRolChange(event:Event){
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected value:', selectedValue);

    const cursoControl = this.crearPersonaForm.get('curso')
    if (selectedValue === 'alumno'){
      cursoControl!.enable()
    } else {
      cursoControl!.disable();
      cursoControl!.reset();
    }
  }

  /* Traer los cursos desde la base de datos (Servicio) */
  getCursos(){
    return this.cursosBD.getCursos()
  }


  /* Botón "Crear" del formulario */ 
  submit(): void {
    this.uploadFile()
  }
  
  /* Método que captura la imagen que se ha subido al formulario */
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
