import { Component, OnInit, inject, signal } from '@angular/core';
import { Storage, ref, uploadBytesResumable, list, getDownloadURL } from '@angular/fire/storage';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TestDBService } from '../../services/test-db.service';

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
  private testDb = inject(TestDBService)
  
  /* Storage de Firebase */
  private readonly _storage = inject(Storage)
  
  /* Declaración del formulario de creación de persona */
  crearPersonaForm!: FormGroup

  /* Declaración de la variable que va a alojar la imagen que se sube en el formulario */
  file!: File

  constructor(){}

  /* Creación del formulario de creación de persona */
  ngOnInit(){
    this.crearPersonaForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellidos: new FormControl('',[Validators.required]),
      rol: new FormControl('',[Validators.required]),
      curso: new FormControl({ value: '', disabled: true }),
      foto: new FormControl('',[Validators.required]),
    })

    this.crearPersonaForm.get('rol')!.valueChanges.subscribe(value => {
      /* this.onRolChange(value) */
      this.handleRolChange(value)
    })

    this.crearPersonaForm.get('curso')!.valueChanges.subscribe(value => {
      if (typeof value === 'string') {
        this.crearPersonaForm.get('curso')!.setValue(parseInt(value, 10), { emitEvent: false })
      }
    })
  }


  /* Metodo que controla que no se pueda seleccionar curso en el formulario si no se ha elegido antes "alumno" */
  onRolChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement
    const selectedValue = selectElement.value
    this.handleRolChange(selectedValue)
  }

  handleRolChange(selectedValue: string) {
    console.log('Selected value:', selectedValue)
  
    const cursoControl = this.crearPersonaForm.get('curso')
    if (selectedValue === 'alumno') {
      cursoControl!.enable()
    } else {
      cursoControl!.disable()
      cursoControl!.reset()
    }
  }

  /* Traer los cursos desde la base de datos (Servicio) */
  getCursos(){
    return this.testDb.getCursosByUsuarioId()
  }

  /* Botón "Crear" del formulario */ 
  submit(): void {
    if (this.crearPersonaForm.valid && this.file) {
      const personaData = this.crearPersonaForm.value
      
      const storageRef = ref(this._storage, `uploads/${this.file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, this.file)
  
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          console.error("Error al subir archivo:", error)
          alert('Error al subir archivo: ' + error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL)
            personaData.imagen = downloadURL
            console.log("personaData.imagen: ",personaData.imagen)
            if (personaData.rol === 'alumno') {
             /*  Number(personaData.curso) */
              console.log("Se crea persona")
              this.testDb.crearAlumno(personaData)
            } else if (personaData.rol === 'profesor') {
              this.testDb.crearProfesor(personaData)
            }
            this.crearPersonaForm.reset()
          })
        }
      )
    } else {
      this.logFormValidationErrors()
      alert('Formulario no válido. Por favor, revisa los campos.')
    }
  }

  private logFormValidationErrors() {
    Object.keys(this.crearPersonaForm.controls).forEach(key => {
      const controlErrors = this.crearPersonaForm.get(key)?.errors
      if (controlErrors) {
        Object.keys(controlErrors).forEach(errorKey => {
          console.log(`Error in ${key}: ${errorKey} - ${controlErrors[errorKey]}`)
        })
      }
    })
  
    if (!this.file) {
      console.log('Error: No file selected')
    }
  }

  
  /* Método que captura la imagen que se ha subido al formulario */
  capturarImagen(event: Event){
    console.log(this._storage)
    const input = event.target as HTMLInputElement
    if(input.files){
      this.file = input.files[0]
      this.crearPersonaForm.patchValue({ foto: this.file.name })
      this.crearPersonaForm.get('foto')?.updateValueAndValidity()
    }
  }

}
